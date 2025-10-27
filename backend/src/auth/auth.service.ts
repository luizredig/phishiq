import {
  Inject,
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'
import { Entity, PhishingChannel } from '../../prisma/generated/schema'
import { MasterPrismaService } from '../master-prisma/master-prisma.service'
import * as bcrypt from 'bcrypt'
import { computeEmailSearch, decryptText, encryptText } from '../utils/crypto'
import { Action } from '../../prisma/generated/schema'

interface JwtPayload {
  sub: string
  name: string
  email: string
  tenant_id: string
  roles: string[]
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
    @Inject('TENANT_PRISMA') private readonly prisma: PrismaClient,
    private readonly masterPrisma: MasterPrismaService,
  ) {}

  private async hash(value: string): Promise<string> {
    const saltRounds = 10
    return bcrypt.hash(value, saltRounds)
  }

  private async compare(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash)
  }

  async signup(params: {
    name: string
    email: string
    password: string
    created_by?: string
  }) {
    const { name, email, password, created_by = 'system' } = params

    const tenant_slug = process.env.TENANT_SPEED

    const tenant = await this.masterPrisma.tenant.findUnique({
      where: { slug: tenant_slug },
      select: { id: true },
    })

    if (!tenant) {
      throw new BadRequestException('Tenant não encontrado')
    }

    const exists = await this.prisma.user.findUnique({
      where: { email_search: computeEmailSearch(email) },
    })
    if (exists) {
      throw new ConflictException('E-mail já cadastrado')
    }

    const password_hash = await this.hash(password)

    const user = await this.prisma.user.create({
      data: {
        name: encryptText(name),
        email: encryptText(email),
        email_search: computeEmailSearch(email),
        roles: ['user'],
        tenant_id: encryptText(tenant.id),
        password_hash,
        created_by,
        updated_by: created_by,
      },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        tenant_id: true,
        is_active: true,
      },
    })

    await this.prisma.log.create({
      data: {
        entity: Entity.USER,
        entity_id: user.id,
        action: Action.SIGNUP,
        created_by: created_by,
      },
    })

    const createdPseudonym = await this.prisma.pseudonym.create({
      data: {
        pseudonym: `p-${user.id}`,
        user: { connect: { id: user.id } },
        created_by,
        updated_by: created_by,
      },
      select: { id: true },
    })

    // Log: pseudonym criado
    try {
      await this.prisma.log.create({
        data: {
          entity: Entity.PSEUDONYM,
          entity_id: createdPseudonym.id,
          action: Action.CREATE,
          created_by,
        },
      })
    } catch {}

    // Consents padrão para todos os canais de phishing
    const allChannels = Object.values(PhishingChannel)
    if (allChannels.length > 0 && createdPseudonym?.id) {
      await this.prisma.pseudonymChannelConsent.createMany({
        data: allChannels.map((channel) => ({
          pseudonym_id: createdPseudonym.id,
          channel,
          consented: true,
          created_by,
          updated_by: created_by,
        })),
        skipDuplicates: true,
      })

      // Logs: consents criados por canal
      for (const channel of allChannels) {
        try {
          await this.prisma.log.create({
            data: {
              entity: Entity.PSEUDONYM_CHANNEL_CONSENT,
              entity_id: `${createdPseudonym.id}:${channel}`,
              action: Action.CREATE,
              created_by,
            },
          })
        } catch {}
      }
    }

    return this.issueTokens({
      ...user,
      name: decryptText(user.name as unknown as string),
      email: decryptText(user.email as unknown as string),
      tenant_id: decryptText(user.tenant_id as unknown as string),
    })
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email_search: computeEmailSearch(email) },
    })

    if (!user || !user.is_active || !user.password_hash) {
      throw new UnauthorizedException('Credenciais inválidas')
    }

    const ok = await this.compare(password, user.password_hash)

    if (!ok) {
      throw new UnauthorizedException('Credenciais inválidas')
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { last_login_at: new Date() },
    })

    try {
      await this.prisma.log.create({
        data: {
          entity: Entity.USER,
          entity_id: user.id,
          action: Action.LOGIN,
          created_by: user.email,
        },
      })
    } catch {}

    const existingPseudonym = await this.prisma.pseudonym.findUnique({
      where: { user_id: user.id },
    })

    if (!existingPseudonym) {
      const created = await this.prisma.pseudonym.create({
        data: {
          pseudonym: `p-${user.id}`,
          user: { connect: { id: user.id } },
          created_by: 'system',
          updated_by: 'system',
        },
        select: { id: true },
      })
      // Log: pseudonym criado
      try {
        await this.prisma.log.create({
          data: {
            entity: Entity.PSEUDONYM,
            entity_id: created.id,
            action: Action.CREATE,
            created_by: 'system',
          },
        })
      } catch {}
      const allChannels = Object.values(PhishingChannel)
      if (allChannels.length > 0) {
        await this.prisma.pseudonymChannelConsent.createMany({
          data: allChannels.map((channel) => ({
            pseudonym_id: created.id,
            channel,
            consented: true,
            created_by: 'system',
            updated_by: 'system',
          })),
          skipDuplicates: true,
        })
        // Logs: consents criados por canal
        for (const channel of allChannels) {
          try {
            await this.prisma.log.create({
              data: {
                entity: Entity.PSEUDONYM_CHANNEL_CONSENT,
                entity_id: `${created.id}:${channel}`,
                action: Action.CREATE,
                created_by: 'system',
              },
            })
          } catch {}
        }
      }
    }

    return {
      ...user,
      name: decryptText(user.name as unknown as string),
      email: decryptText(user.email as unknown as string),
      tenant_id: decryptText(user.tenant_id as unknown as string),
    }
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password)
    return this.issueTokens(user)
  }

  private async issueTokens(user: {
    id: string
    name: string
    email: string
    roles: string[]
    tenant_id: string
  }) {
    const payload: JwtPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      tenant_id: user.tenant_id,
      roles: user.roles || [],
    }
    const accessToken = await this.jwtService.signAsync(payload)
    const refreshTtl = this.config.get<string>('jwt.refreshTtl')
    if (!refreshTtl)
      throw new BadRequestException('JWT refresh TTL not configured')
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: refreshTtl,
    })
    const refresh_token_hash = await this.hash(refreshToken)
    await this.prisma.user.update({
      where: { id: user.id },
      data: { refresh_token_hash },
    })
    return { accessToken, refreshToken }
  }

  async refreshToken(providedRefreshToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync<{ sub: string }>(
        providedRefreshToken,
        { secret: this.config.get<string>('jwt.secret') },
      )
      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      })
      if (!user || !user.refresh_token_hash) {
        throw new UnauthorizedException('Refresh inválido')
      }
      const valid = await this.compare(
        providedRefreshToken,
        user.refresh_token_hash,
      )
      if (!valid) {
        throw new UnauthorizedException('Refresh inválido')
      }
      return this.issueTokens(user)
    } catch {
      throw new UnauthorizedException('Refresh inválido')
    }
  }

  async me(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    })
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado')
    }
    return {
      name: decryptText(user.name as unknown as string),
      email: decryptText(user.email as unknown as string),
    }
  }
}

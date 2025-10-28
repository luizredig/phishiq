import {
  Inject,
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common'
import { PrismaClient } from '../../prisma/generated/schema'
import * as bcrypt from 'bcrypt'
import { Action, Entity, PhishingChannel } from '../../prisma/generated/schema'
import { decryptText, encryptText, computeEmailSearch } from '../utils/crypto'

@Injectable()
export class UsersService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async findAll(
    includeInactive = false,
    channel?: 'EMAIL',
    page?: number,
    pageSize?: number,
  ): Promise<{ items: any[]; total: number }> {
    const where = includeInactive ? { is_active: false } : { is_active: true }
    const hasPagination = Boolean(page && pageSize && page > 0 && pageSize > 0)
    const skip = hasPagination ? (page! - 1) * pageSize! : undefined
    const take = hasPagination ? pageSize : undefined

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        select: {
          id: true,
          name: true,
          email: true,
          roles: true,
          is_active: true,
          created_at: true,
          inactivated_at: true,
          updated_at: true,
          tenant_id: true,
          created_by: true,
          updated_by: true,
          inactivated_by: true,
          pseudonym: {
            select: {
              pseudonym_departments: {
                include: {
                  department: true,
                },
              },
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              },
              id: true,
            },
          },
        },
        skip,
        take,
      }),
      this.prisma.user.count({ where }),
    ])

    const result = await (async () => {
      let consentedSet: Set<string> | null = null
      if (channel === 'EMAIL') {
        const pseudonymIds = users
          .map((u) => u.pseudonym?.id)
          .filter((id): id is string => Boolean(id))
        if (pseudonymIds.length > 0) {
          const consented = await this.prisma.pseudonymChannelConsent.findMany({
            where: {
              pseudonym_id: { in: pseudonymIds },
              channel: 'EMAIL',
              consented: true,
            },
            select: { pseudonym_id: true },
          })
          consentedSet = new Set(consented.map((c) => c.pseudonym_id))
        } else {
          consentedSet = new Set()
        }
      }

      const mapped = users.map((u) => {
        const decryptedPseudonymUser = u.pseudonym?.user
          ? {
              ...u.pseudonym.user,
              name: decryptText(u.pseudonym.user.name as unknown as string),
              email: decryptText(u.pseudonym.user.email as unknown as string),
            }
          : null

        const decryptedDepartments = (
          u.pseudonym?.pseudonym_departments || []
        ).map((pd) => {
          const dept = pd.department
          const decryptedDept = dept
            ? {
                ...dept,
                name: decryptText(dept.name as unknown as string),
                created_by: dept.created_by
                  ? (decryptText(dept.created_by as unknown as string) as any)
                  : null,
                updated_by: dept.updated_by
                  ? (decryptText(dept.updated_by as unknown as string) as any)
                  : null,
                inactivated_by: dept.inactivated_by
                  ? (decryptText(
                      dept.inactivated_by as unknown as string,
                    ) as any)
                  : null,
              }
            : null
          return { ...pd, department: decryptedDept }
        })

        const pseudonym = u.pseudonym
          ? {
              ...u.pseudonym,
              user: decryptedPseudonymUser,
              pseudonym_departments: decryptedDepartments,
            }
          : null

        return {
          ...u,
          pseudonym,
          name: decryptText(u.name as unknown as string),
          email: decryptText(u.email as unknown as string),
          tenant_id: decryptText(u.tenant_id as unknown as string),
          created_by: u.created_by
            ? decryptText(u.created_by as unknown as string)
            : null,
          updated_by: u.updated_by
            ? decryptText(u.updated_by as unknown as string)
            : null,
          inactivated_by: u.inactivated_by
            ? decryptText(u.inactivated_by as unknown as string)
            : null,
        }
      })

      const filtered =
        channel === 'EMAIL'
          ? mapped.filter(
              (u) => u.pseudonym?.id && consentedSet!.has(u.pseudonym.id),
            )
          : mapped

      filtered.sort((a, b) =>
        a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }),
      )
      return filtered
    })()

    return { items: result, total }
  }

  async create(
    data: { name: string; email: string; roles?: string[] },
    meta: { createdBy: string; tenantId: string },
  ) {
    if (!meta.tenantId) {
      throw new BadRequestException('Tenant não informado')
    }
    const exists = await this.prisma.user.findUnique({
      where: { email_search: computeEmailSearch(data.email) },
    })
    if (exists) {
      throw new ConflictException('E-mail já cadastrado')
    }

    const nameUpper = data.name.trim().toUpperCase()
    const prefix = nameUpper.slice(0, 3).padEnd(3, 'X')
    const year = new Date().getFullYear()
    const tempPassword = `${prefix}@${year}`
    const password_hash = await bcrypt.hash(tempPassword, 10)

    const user = await this.prisma.user.create({
      data: {
        name: encryptText(data.name),
        email: encryptText(data.email),
        email_search: computeEmailSearch(data.email),
        roles: data.roles && data.roles.length > 0 ? data.roles : ['user'],
        tenant_id: encryptText(meta.tenantId),
        password_hash,
        created_by: encryptText(meta.createdBy),
        updated_by: encryptText(meta.createdBy),
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

    const createdPseudonym = await this.prisma.pseudonym.create({
      data: {
        pseudonym: `p-${user.id}`,
        user: { connect: { id: user.id } },
        created_by: meta.createdBy,
        updated_by: meta.createdBy,
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
          created_by: meta.createdBy,
        },
      })
    } catch {}

    // Criar consentimentos padrão para todos os canais de phishing
    const allChannels = Object.values(PhishingChannel)

    if (allChannels.length > 0 && createdPseudonym?.id) {
      await this.prisma.pseudonymChannelConsent.createMany({
        data: allChannels.map((channel) => ({
          pseudonym_id: createdPseudonym.id,
          channel,
          consented: true,
          created_by: meta.createdBy,
          updated_by: meta.createdBy,
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
              created_by: meta.createdBy,
            },
          })
        } catch {}
      }
    }

    await this.prisma.log.create({
      data: {
        entity: Entity.USER,
        entity_id: user.id,
        action: Action.CREATE,
        created_by: meta.createdBy,
      },
    })

    return {
      ...user,
      name: decryptText(user.name as unknown as string),
      email: decryptText(user.email as unknown as string),
      tenant_id: user.tenant_id
        ? decryptText(user.tenant_id as unknown as string)
        : null,
    }
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        created_at: true,
        inactivated_at: true,
        updated_at: true,
        tenant_id: true,
        created_by: true,
        updated_by: true,
        inactivated_by: true,
      },
    })
    if (!user) throw new NotFoundException('Usuário não encontrado')
    return {
      ...user,
      name: decryptText(user.name as unknown as string),
      email: decryptText(user.email as unknown as string),
      tenant_id: decryptText(user.tenant_id as unknown as string),
      created_by: user.created_by
        ? decryptText(user.created_by as unknown as string)
        : null,
      updated_by: user.updated_by
        ? decryptText(user.updated_by as unknown as string)
        : null,
      inactivated_by: user.inactivated_by
        ? decryptText(user.inactivated_by as unknown as string)
        : null,
    }
  }

  async update(
    id: string,
    data: { name?: string; roles?: string[]; is_active?: boolean },
    meta: { updatedBy: string },
  ) {
    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        name: data.name != null ? encryptText(data.name) : undefined,
        roles: data.roles,
        is_active: data.is_active,
        updated_by: encryptText(meta.updatedBy),
      },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        tenant_id: true,
        created_at: true,
        updated_at: true,
        inactivated_at: true,
        created_by: true,
        updated_by: true,
        inactivated_by: true,
      },
    })
    await this.prisma.log.create({
      data: {
        entity: Entity.USER,
        entity_id: id,
        action: Action.UPDATE,
        created_by: encryptText(meta.updatedBy),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      email: decryptText(updated.email as unknown as string),
      tenant_id: decryptText(updated.tenant_id as unknown as string),
      created_by: updated.created_by
        ? decryptText(updated.created_by as unknown as string)
        : null,
      updated_by: updated.updated_by
        ? decryptText(updated.updated_by as unknown as string)
        : null,
      inactivated_by: updated.inactivated_by
        ? decryptText(updated.inactivated_by as unknown as string)
        : null,
    }
  }

  async updateStatus(id: string, is_active: boolean) {
    const exists = await this.prisma.user.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException()
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        is_active,
        inactivated_by: is_active ? null : encryptText('system'),
        inactivated_at: is_active ? null : new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        tenant_id: true,
        created_at: true,
        updated_at: true,
        inactivated_at: true,
        created_by: true,
        updated_by: true,
        inactivated_by: true,
      },
    })
    await this.prisma.log.create({
      data: {
        entity: Entity.USER,
        entity_id: id,
        action: Action.UPDATE,
        created_by: encryptText('system'),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      email: decryptText(updated.email as unknown as string),
      tenant_id: decryptText(updated.tenant_id as unknown as string),
      created_by: updated.created_by
        ? decryptText(updated.created_by as unknown as string)
        : null,
      updated_by: updated.updated_by
        ? decryptText(updated.updated_by as unknown as string)
        : null,
      inactivated_by: updated.inactivated_by
        ? decryptText(updated.inactivated_by as unknown as string)
        : null,
    }
  }
}

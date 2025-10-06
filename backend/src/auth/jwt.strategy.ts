import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { ModuleRef, ContextIdFactory } from '@nestjs/core'
import { Request } from 'express'

type JwtPayload = { sub: string; tenant_id?: string }

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private readonly moduleRef: ModuleRef,
  ) {
    const secret = config.get<string>('jwt.secret')

    if (!secret) {
      throw new Error('JWT secret (JWT_SECRET) não configurado')
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret,
      ignoreExpiration: false,
      passReqToCallback: true,
    })
  }

  async validate(req: Request, payload: JwtPayload) {
    const contextId = ContextIdFactory.getByRequest(req)
    const prisma = await this.moduleRef.resolve<any>(
      'TENANT_PRISMA',
      contextId,
      { strict: false },
    )

    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        email: true,
        roles: true,
        is_active: true,
        tenant_id: true,
      },
    })
    if (!user || !user.is_active) {
      throw new UnauthorizedException('Usuário inválido ou inativo')
    }
    return user
  }
}

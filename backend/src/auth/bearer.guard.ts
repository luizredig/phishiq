import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { KeycloakStrategy } from './strategies/keycloak.strategy';

@Injectable()
export class BearerAuthGuard implements CanActivate {
  constructor(private readonly keycloakStrategy: KeycloakStrategy) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Missing Authorization header');
    }

    const [scheme, token] = String(authHeader).split(' ');
    if (!scheme || scheme.toLowerCase() !== 'bearer') {
      throw new UnauthorizedException('Invalid auth scheme, expected Bearer');
    }
    if (!token) {
      throw new UnauthorizedException('Missing token');
    }

    const result = await this.keycloakStrategy.validate(token).catch((err) => {
      throw new UnauthorizedException(err?.message || 'Invalid token');
    });

    if (!result) {
      throw new UnauthorizedException('Invalid token');
    }

    (req as any).user = result;
    return true;
  }
}

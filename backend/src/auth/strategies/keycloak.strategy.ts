import { Injectable } from '@nestjs/common';
import { createRemoteJWKSet, jwtVerify, JWTPayload } from 'jose';
import config from '../../config/config';
import { UsersService } from '../../users/users.service';

interface ValidatedUser {
  id: string;
  email: string;
  name?: string;
  roles: string[];
  tenant_id?: string;
}

@Injectable()
export class KeycloakStrategy {
  private jwks: ReturnType<typeof createRemoteJWKSet>;
  private issuer: string;
  private audience?: string;

  constructor(private readonly usersService: UsersService) {
    const cfg = config();
    this.issuer = cfg.keycloak.issuer!;
    const jwksUri = `${this.issuer}/protocol/openid-connect/certs`;
    this.jwks = createRemoteJWKSet(new URL(jwksUri));
    this.audience = 'account';
  }

  async validate(token: string): Promise<ValidatedUser> {
    const { payload } = await jwtVerify(token, this.jwks, {
      audience: this.audience,
    });

    const email = this.extractEmail(payload);
    if (!email) {
      throw new Error('Email not present in token');
    }

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const kcRoles = this.extractRoles(payload);
    const roles = Array.from(
      new Set([...(Array.isArray(user.roles) ? user.roles : []), ...kcRoles]),
    );

    return {
      id: user.id,
      email: user.email,
      name: (payload['name'] as string) || user.name,
      roles,
      tenant_id: (user as any).tenant_id,
    };
  }

  private extractEmail(payload: JWTPayload): string | undefined {
    return (
      (payload['email'] as string) ||
      (payload['preferred_username'] as string) ||
      undefined
    );
  }

  private extractRoles(payload: JWTPayload): string[] {
    const realmRoles = (payload['realm_access'] as any)?.roles ?? [];
    const resourceRoles = Object.values(
      ((payload['resource_access'] as any) ?? {}) as Record<string, any>,
    ).flatMap((r: any) => r?.roles ?? []);
    return [
      ...new Set([...(realmRoles as string[]), ...(resourceRoles as string[])]),
    ];
  }
}

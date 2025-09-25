import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { KeycloakStrategy } from './strategies/keycloak.strategy';
import { BearerAuthGuard } from './bearer.guard';

@Module({
  imports: [UsersModule],
  providers: [KeycloakStrategy, BearerAuthGuard],
  exports: [BearerAuthGuard, KeycloakStrategy],
})
export class AuthModule {}

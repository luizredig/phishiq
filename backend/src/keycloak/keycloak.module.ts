import { Module } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';
import { KeycloakController } from './keycloak.controller';

@Module({
  providers: [KeycloakService],
  controllers: [KeycloakController],
  exports: [KeycloakService],
})
export class KeycloakModule {} 
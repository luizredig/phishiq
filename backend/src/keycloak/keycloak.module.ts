import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { KeycloakService } from './keycloak.service'
import { KeycloakController } from './keycloak.controller'

@Module({
  imports: [ConfigModule],
  providers: [KeycloakService],
  controllers: [KeycloakController],
  exports: [KeycloakService],
})
export class KeycloakModule {}

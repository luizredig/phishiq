import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { KeycloakController } from './keycloak.controller'
import { KeycloakGateway } from './keycloak.gateway'
import { KeycloakService } from './keycloak.service'

@Module({
  imports: [PrismaModule],
  controllers: [KeycloakController],
  providers: [KeycloakService, KeycloakGateway],
  exports: [KeycloakService],
})
export class KeycloakModule {}

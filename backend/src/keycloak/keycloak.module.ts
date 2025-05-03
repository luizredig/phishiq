import { Module } from '@nestjs/common'
import { KeycloakService } from './keycloak.service'
import { KeycloakController } from './keycloak.controller'
import { PrismaMasterModule } from 'src/prisma-master/prisma-master.module'

@Module({
  imports: [PrismaMasterModule],
  controllers: [KeycloakController],
  providers: [KeycloakService],
  exports: [KeycloakService],
})
export class KeycloakModule {}

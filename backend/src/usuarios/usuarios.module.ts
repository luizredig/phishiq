import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { UsuariosController } from './usuarios.controller'
import { UsuariosGateway } from './usuarios.gateway'
import { UsuariosService } from './usuarios.service'
import { KeycloakModule } from '../keycloak/keycloak.module'

@Module({
  imports: [PrismaModule, KeycloakModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosGateway],
  exports: [UsuariosService],
})
export class UsuariosModule {}

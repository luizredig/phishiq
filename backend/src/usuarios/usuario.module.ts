import { Module } from '@nestjs/common'
import { UsuarioService } from './usuario.service'
import { UsuarioGateway } from './usuario.gateway'
import { KeycloakModule } from 'src/keycloak/keycloak.module'

@Module({
  imports: [KeycloakModule],
  providers: [UsuarioGateway, UsuarioService],
})
export class UsuarioModule {}

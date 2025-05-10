import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { KeycloakModule } from 'src/keycloak/keycloak.module';
import { UsuariosGateway } from './usuarios.gateway';

@Module({
  imports: [KeycloakModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosGateway],
  exports: [UsuariosService],
})
export class UsuariosModule {}

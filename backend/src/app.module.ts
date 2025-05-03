import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule } from '@nestjs/config'
import { KeycloakModule } from './keycloak/keycloak.module'
import { PrismaMasterModule } from './prisma-master/prisma-master.module'
import { PrismaTenantModule } from './prisma-tenant/prisma-tenant.module'
import { UsuarioModule } from './usuario/usuario.module'
import { DepartamentoModule } from './departamento/departamento.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KeycloakModule,
    PrismaTenantModule,
    PrismaMasterModule,
    UsuarioModule,
    DepartamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

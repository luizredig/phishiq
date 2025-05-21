/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule } from '@nestjs/config'
import { DepartamentosModule } from './departamentos/departamentos.module'
import { KeycloakModule } from './keycloak/keycloak.module'
import { PrismaModule } from './prisma/prisma.module'
import { UsuariosModule } from './usuarios/usuarios.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DepartamentosModule,
    KeycloakModule,
    PrismaModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

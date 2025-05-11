import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { TenantModule } from './tenants/tenant.module'
import { KeycloakModule } from './keycloak/keycloak.module'
import { UsuariosModule } from './usuarios/usuarios.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtStrategy } from './auth/jwt.strategy'
import { RolesGuard } from './auth/roles.guard'
import { JwtAuthGuard } from './auth/jwt-auth.guard'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KeycloakModule,
    PrismaModule,
    TenantModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}

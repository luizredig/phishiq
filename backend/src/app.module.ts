import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { AuthModule } from './auth/auth.module'
import { BearerAuthGuard } from './auth/bearer.guard'
import { KeycloakStrategy } from './auth/strategies/keycloak.strategy'
import { CampanhasModule } from './campanhas/campanhas.module'
import { CaslModule } from './casl/casl.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { DepartamentosModule } from './departamentos/departamentos.module'
import { LicensingModule } from './licensing/licensing.module'
import { MasterPrismaModule } from './master-prisma/master-prisma.module'
import { TenantMiddleware } from './middlewares/tenant.middleware'
import { NodemailerModule } from './nodemailer/nodemailer.module'
import { PrismaModule } from './prisma/prisma.module'
import { TenantPrismaModule } from './tenant-prisma/tenant-prisma.module'
import { TestesModule } from './testes/testes.module'
import { UsuariosModule } from './usuarios/usuarios.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DepartamentosModule,
    NodemailerModule,
    PrismaModule,
    TestesModule,
    UsuariosModule,
    CampanhasModule,
    DashboardModule,
    TenantPrismaModule,
    MasterPrismaModule,
    CaslModule,
    LicensingModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useFactory: (keycloak: KeycloakStrategy) => new BearerAuthGuard(keycloak),
      inject: [KeycloakStrategy],
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantMiddleware).forRoutes('*')
  }
}

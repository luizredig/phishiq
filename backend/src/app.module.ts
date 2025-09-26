import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { BearerAuthGuard } from './auth/bearer.guard'
import { KeycloakStrategy } from './auth/strategies/keycloak.strategy'
import { CaslModule } from './casl/casl.module'
import config from './config/config'
import { DashboardModule } from './dashboard/dashboard.module'
import { DepartmentsModule } from './departaments/departaments.module'
import { LicensingModule } from './licensing/licensing.module'
import { MasterPrismaModule } from './master-prisma/master-prisma.module'
import { TenantMiddleware } from './middlewares/tenant.middleware'
import { NodemailerModule } from './nodemailer/nodemailer.module'
import { PhishingsModule } from './phishings/phishings.module'
import { TenantPrismaModule } from './tenant-prisma/tenant-prisma.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    DepartmentsModule,
    NodemailerModule,
    TenantPrismaModule,
    PhishingsModule,
    UsersModule,

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

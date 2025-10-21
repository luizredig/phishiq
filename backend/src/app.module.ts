import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CaslModule } from './casl/casl.module'
import config from './config/config'
import { DashboardModule } from './dashboard/dashboard.module'
import { DepartmentsModule } from './departaments/departaments.module'
import { LicensingModule } from './licensing/licensing.module'
import { MasterPrismaModule } from './master-prisma/master-prisma.module'
import { NodemailerModule } from './nodemailer/nodemailer.module'
import { PhishingsModule } from './phishings/phishings.module'
import { TenantPrismaModule } from './tenant-prisma/tenant-prisma.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { CookiesModule } from './cookies/cookies.module'
import { JwtAuthGuard } from './auth/jwt-auth.guard'

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
    DashboardModule,
    MasterPrismaModule,
    CaslModule,
    LicensingModule,
    AuthModule,
    UsersModule,
    CookiesModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}

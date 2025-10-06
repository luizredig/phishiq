import { Module } from '@nestjs/common'
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
    TenantPrismaModule,
    MasterPrismaModule,
    CaslModule,
    LicensingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

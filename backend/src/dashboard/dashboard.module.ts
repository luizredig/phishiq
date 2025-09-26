import { Module } from '@nestjs/common'
import { DashboardController } from './dashboard.controller'
import { DashboardService } from './dashboard.service'
import { TenantPrismaModule } from '../tenant-prisma/tenant-prisma.module'

@Module({
  imports: [TenantPrismaModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}

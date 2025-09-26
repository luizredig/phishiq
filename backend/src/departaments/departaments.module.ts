import { Module } from '@nestjs/common'
import { DepartamentsController } from './departaments.controller'
import { DepartamentsService } from './departaments.service'
import { DepartamentsGateway } from './departaments.gateway'
import { TenantPrismaModule } from '../tenant-prisma/tenant-prisma.module'

@Module({
  imports: [TenantPrismaModule],
  controllers: [DepartamentsController],
  providers: [DepartamentsService, DepartamentsGateway],
  exports: [DepartamentsService],
})
export class DepartmentsModule {}

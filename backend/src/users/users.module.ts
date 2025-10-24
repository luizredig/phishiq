import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { TenantPrismaModule } from '../tenant-prisma/tenant-prisma.module'
import { UsersController } from './users.controller'

@Module({
  imports: [TenantPrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

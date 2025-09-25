import { Global, Module } from '@nestjs/common';
import { TenantPrismaProvider } from './tenant-prisma.provider';
import { TenantPrismaService } from './tenant-prisma.service';

@Global()
@Module({
  providers: [TenantPrismaService, TenantPrismaProvider],
  exports: ['TENANT_PRISMA'],
})
export class TenantPrismaModule {}

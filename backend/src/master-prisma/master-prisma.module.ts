import { Global, Module } from '@nestjs/common';
import { MasterPrismaService } from './master-prisma.service';

@Global()
@Module({
  providers: [MasterPrismaService],
  exports: [MasterPrismaService],
})
export class MasterPrismaModule {}

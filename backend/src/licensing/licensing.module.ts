import { Global, Module } from '@nestjs/common';
import { LicensingService } from './licensing.service';
import { LicensingGuard } from './licensing.guard';
import { MasterPrismaModule } from '../master-prisma/master-prisma.module';

@Global()
@Module({
  imports: [MasterPrismaModule],
  providers: [LicensingService, LicensingGuard],
  exports: [LicensingService, LicensingGuard],
})
export class LicensingModule {}



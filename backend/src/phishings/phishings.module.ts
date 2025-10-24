import { Module } from '@nestjs/common'
import { PhishingsService } from './phishings.service'
import { PhishingsController } from './phishings.controller'
import { TenantPrismaModule } from '../tenant-prisma/tenant-prisma.module'
import { NodemailerModule } from '../nodemailer/nodemailer.module'
import { EmailModule } from '../email/email.module'
import { PhishingsGateway } from './phishings.gateway'

@Module({
  imports: [TenantPrismaModule, NodemailerModule, EmailModule],
  controllers: [PhishingsController],
  providers: [PhishingsService, PhishingsGateway],
  exports: [PhishingsService],
})
export class PhishingsModule {}

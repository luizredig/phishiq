import { Module } from '@nestjs/common'
import { PhishingTemplatesService } from './phishing-templates.service'
import { PhishingTemplatesController } from './phishing-templates.controller'

@Module({
  providers: [PhishingTemplatesService],
  controllers: [PhishingTemplatesController],
  exports: [PhishingTemplatesService],
})
export class PhishingTemplatesModule {}

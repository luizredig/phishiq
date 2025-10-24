import { Module } from '@nestjs/common'
import { BullModule } from '@nestjs/bull'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { EmailProducerService } from './email-producer.service'
import { EmailProcessor } from './email-processor.service'
import { NodemailerModule } from '../nodemailer/nodemailer.module'

@Module({
  imports: [
    ConfigModule,
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        redis: {
          host: config.get<string>('REDIS_HOST'),
          port: Number(config.get<string>('REDIS_PORT') ?? '6379'),
        },
      }),
    }),
    BullModule.registerQueue({
      name: 'phishing-email',
      limiter: {
        max: 5,
        duration: 30 * 60 * 1000,
      },
    }),
    NodemailerModule,
  ],
  providers: [EmailProducerService, EmailProcessor],
  exports: [EmailProducerService, EmailProcessor, NodemailerModule],
})
export class EmailModule {}

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { NodemailerService } from './nodemailer.service'
import { NodemailerController } from './nodemailer.controller'

@Module({
  imports: [ConfigModule],
  controllers: [NodemailerController],
  providers: [NodemailerService],
  exports: [NodemailerService],
})
export class NodemailerModule {}

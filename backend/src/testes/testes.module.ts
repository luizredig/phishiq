import { Module } from '@nestjs/common'
import { TestesService } from './testes.service'
import { TestesController } from './testes.controller'
import { PrismaModule } from '../prisma/prisma.module'
import { NodemailerModule } from '../nodemailer/nodemailer.module'
import { TestesGateway } from './testes.gateway'

@Module({
  imports: [PrismaModule, NodemailerModule],
  controllers: [TestesController],
  providers: [TestesService, TestesGateway],
  exports: [TestesService],
})
export class TestesModule {}

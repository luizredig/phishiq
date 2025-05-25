import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { CampanhasController } from './campanhas.controller'
import { CampanhasGateway } from './campanhas.gateway'
import { CampanhasService } from './campanhas.service'

@Module({
  imports: [PrismaModule],
  controllers: [CampanhasController],
  providers: [CampanhasService, CampanhasGateway],
  exports: [CampanhasService],
})
export class CampanhasModule {}

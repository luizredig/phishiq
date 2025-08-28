import { Module } from '@nestjs/common'
import { DepartamentosController } from './departamentos.controller'
import { DepartamentosService } from './departamentos.service'
import { DepartamentosGateway } from './departamentos.gateway'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [DepartamentosController],
  providers: [DepartamentosService, DepartamentosGateway],
  exports: [DepartamentosService],
})
export class DepartamentosModule {}

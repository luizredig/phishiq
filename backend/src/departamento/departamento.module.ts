import { Module } from '@nestjs/common'
import { DepartamentoService } from './departamento.service'
import { DepartamentoGateway } from './departamento.gateway'

@Module({
  providers: [DepartamentoGateway, DepartamentoService],
})
export class DepartamentoModule {}

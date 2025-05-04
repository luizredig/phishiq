import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'
import { DepartamentoService } from './departamento.service'
import { CriarDepartamentoDto } from './dto/criar-departamento.dto'
import { AtualizarDepartamentoDto } from './dto/atualizar-departamento.dto'

@WebSocketGateway()
export class DepartamentoGateway {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @SubscribeMessage('getDepartamentos')
  async getDepartamentos(@MessageBody() realmName: string) {
    return await this.departamentoService.getDepartamentos(realmName)
  }

  @SubscribeMessage('criarDepartamento')
  criarDepartamento(@MessageBody() criarDepartamentoDto: CriarDepartamentoDto) {
    return this.departamentoService.criarDepartamento(criarDepartamentoDto)
  }

  @SubscribeMessage('atualizarDepartamento')
  atualizarDepartamento(
    @MessageBody() atualizarDepartamentoDto: AtualizarDepartamentoDto,
  ) {
    return this.departamentoService.atualizarDepartamento(
      atualizarDepartamentoDto,
    )
  }

  @SubscribeMessage('getDepartamentoById')
  getDepartamentoById(@MessageBody() id: string) {
    return this.departamentoService.getDepartamentoById(id)
  }

  @SubscribeMessage('toggleDepartamentoStatus')
  toggleDepartamentoStatus(
    @MessageBody() { id, ativo }: { id: string; ativo: boolean },
  ) {
    return this.departamentoService.toggleDepartamentoStatus(id, ativo)
  }
}

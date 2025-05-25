/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { DepartamentosService } from './departamentos.service'

@WebSocketGateway({
  cors: {
    origin: [process.env.FRONTEND_URL],
  },
})
export class DepartamentosGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server

  constructor(private readonly departamentosService: DepartamentosService) {}

  handleConnection(client: Socket) {}

  handleDisconnect(client: Socket) {}

  @SubscribeMessage('findAllDepartamentos')
  async handleFindAll(client: Socket, includeInactive = false) {
    const departamentos =
      await this.departamentosService.findAll(includeInactive)
    return departamentos
  }

  @SubscribeMessage('findOneDepartamento')
  async handleFindOneDepartamento(client: Socket, id: string) {
    const departamento = await this.departamentosService.findOne(id)
    return departamento
  }

  @SubscribeMessage('createDepartamento')
  async handleCreateDepartamento(client: Socket, data: { nome: string }) {
    const departamento = await this.departamentosService.create(data)
    this.server.emit('departamentoCreated', departamento)
    return departamento
  }

  @SubscribeMessage('updateDepartamento')
  async handleUpdateDepartamento(
    client: Socket,
    payload: { id: string; data: { nome?: string } },
  ) {
    try {
      const departamento = await this.departamentosService.update(
        payload.id,
        payload.data,
      )
      this.server.emit('departamentoUpdated', departamento)
      return departamento
    } catch (error) {
      console.error('Error updating department:', error)
      throw error
    }
  }

  @SubscribeMessage('updateDepartamentoStatus')
  async handleUpdateStatus(
    client: Socket,
    payload: { id: string; ativo: boolean },
  ) {
    const departamento = await this.departamentosService.updateStatus(
      payload.id,
      payload.ativo,
    )
    this.server.emit('departamentoUpdated', departamento)
    return departamento
  }

  @SubscribeMessage('removeDepartamento')
  async handleRemoveDepartamento(client: Socket, id: string) {
    const departamento = await this.departamentosService.remove(id)
    this.server.emit('departamentoRemoved', departamento)
    return departamento
  }

  @SubscribeMessage('getDepartamentoUsuarios')
  async handleGetDepartamentoUsuarios(client: Socket, id: string) {
    const usuarios = await this.departamentosService.getUsuarios(id)
    return usuarios
  }

  @SubscribeMessage('addDepartamentoUsuario')
  async handleAddDepartamentoUsuario(
    client: Socket,
    payload: { departamentoId: string; usuarioId: string },
  ) {
    const departamento = await this.departamentosService.addUsuario(
      payload.departamentoId,
      payload.usuarioId,
    )
    this.server.emit('departamentoUsuarioAdded', departamento)
    return departamento
  }

  @SubscribeMessage('inativarDepartamentoUsuario')
  async handleInativarDepartamentoUsuario(
    client: Socket,
    payload: { departamentoId: string; usuarioId: string },
  ) {
    const departamento = await this.departamentosService.removeUsuario(
      payload.departamentoId,
      payload.usuarioId,
    )
    this.server.emit('departamentoUsuarioRemoved', departamento)
    return departamento
  }

  @SubscribeMessage('removeDepartamentoUsuario')
  async handleRemoveDepartamentoUsuario(
    client: Socket,
    payload: { departamentoId: string; usuarioId: string },
  ) {
    const departamento = await this.departamentosService.removeUsuario(
      payload.departamentoId,
      payload.usuarioId,
    )
    this.server.emit('departamentoUsuarioRemoved', departamento)
    return departamento
  }
}

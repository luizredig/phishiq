import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { DepartamentsService as DepartmentsService } from './departaments.service'

@WebSocketGateway({
  cors: {
    origin: [process.env.FRONTEND_URL],
  },
})
export class DepartamentsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server

  constructor(private readonly service: DepartmentsService) {}

  handleConnection(client: Socket) {}

  handleDisconnect(client: Socket) {}

  @SubscribeMessage('find_all_departments')
  async handleFindAll(client: Socket, includeInactive = false) {
    const departments = await this.service.findAll(includeInactive)
    return departments
  }

  @SubscribeMessage('find_one_department')
  async handleFindOneDepartamento(client: Socket, id: string) {
    const departamento = await this.service.findOne(id)
    return departamento
  }

  @SubscribeMessage('create_department')
  async handleCreateDepartamento(client: Socket, data: { nome: string }) {
    const departamento = await this.service.create(data)
    this.server.emit('departamentoCreated', departamento)
    return departamento
  }

  @SubscribeMessage('update_department')
  async handleUpdateDepartamento(
    client: Socket,
    payload: { id: string; data: { nome?: string } },
  ) {
    try {
      const departamento = await this.service.update(payload.id, payload.data)
      this.server.emit('departamentoUpdated', departamento)
      return departamento
    } catch (error) {
      console.error('Error updating department:', error)
      throw error
    }
  }

  @SubscribeMessage('update_department_status')
  async handleUpdateStatus(
    client: Socket,
    payload: { id: string; ativo: boolean },
  ) {
    const departamento = await this.service.updateStatus(
      payload.id,
      payload.ativo,
    )
    this.server.emit('departamentoUpdated', departamento)
    return departamento
  }

  @SubscribeMessage('remove_department')
  async handleRemoveDepartamento(client: Socket, id: string) {
    const departamento = await this.service.remove(id)
    this.server.emit('departamentoRemoved', departamento)
    return departamento
  }

  @SubscribeMessage('get_department_users')
  async handleGetDepartamentoUsuarios(client: Socket, id: string) {
    const usuarios = await this.service.getUsuarios(id)
    return usuarios
  }

  @SubscribeMessage('add_department_user')
  async handleAddDepartamentoUsuario(
    client: Socket,
    payload: { departamentoId: string; usuarioId: string },
  ) {
    const departamento = await this.service.addUsuario(
      payload.departamentoId,
      payload.usuarioId,
    )
    this.server.emit('departamentoUsuarioAdded', departamento)
    return departamento
  }

  @SubscribeMessage('inativar_department_user')
  async handleInativarDepartamentoUsuario(
    client: Socket,
    payload: { departamentoId: string; usuarioId: string },
  ) {
    const departamento = await this.service.removeUsuario(
      payload.departamentoId,
      payload.usuarioId,
    )
    this.server.emit('departamentoUsuarioRemoved', departamento)
    return departamento
  }

  @SubscribeMessage('remove_department_user')
  async handleRemoveDepartamentoUsuario(
    client: Socket,
    payload: { departamentoId: string; usuarioId: string },
  ) {
    const departamento = await this.service.removeUsuario(
      payload.departamentoId,
      payload.usuarioId,
    )
    this.server.emit('departamentoUsuarioRemoved', departamento)
    return departamento
  }
}

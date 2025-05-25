/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { UsuariosService } from './usuarios.service'
import { CargoUsuario } from '@prisma/client'

@WebSocketGateway({
  cors: {
    origin: [process.env.FRONTEND_URL],
  },
})
export class UsuariosGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server

  constructor(private readonly usuariosService: UsuariosService) {}

  handleConnection(client: Socket) {}

  handleDisconnect(client: Socket) {}

  @SubscribeMessage('findAllUsuarios')
  async handleFindAllUsuarios(client: Socket, includeInactive: boolean) {
    const usuarios = await this.usuariosService.findAll(includeInactive)
    return usuarios
  }

  @SubscribeMessage('findOneUsuario')
  async handleFindOneUsuario(client: Socket, id: string) {
    const usuario = await this.usuariosService.findOne(id)
    return usuario
  }

  @SubscribeMessage('findUsuarioByEmail')
  async handleFindUsuarioByEmail(client: Socket, email: string) {
    const usuario = await this.usuariosService.findByEmail(email)
    return usuario
  }

  @SubscribeMessage('findUsuarioByKeycloakId')
  async handleFindUsuarioByKeycloakId(client: Socket, keycloakId: string) {
    const usuario = await this.usuariosService.findByKeycloakId(keycloakId)
    return usuario
  }

  @SubscribeMessage('createUsuario')
  async handleCreateUsuario(
    client: Socket,
    data: {
      nome: string
      sobrenome: string
      email: string
      cargo?: CargoUsuario
      keycloakId?: string
    },
  ) {
    const usuario = await this.usuariosService.create(data)
    this.server.emit('usuarioCreated', usuario)
    return usuario
  }

  @SubscribeMessage('updateUsuario')
  async handleUpdateUsuario(
    client: Socket,
    payload: {
      id: string
      data: {
        nome?: string
        sobrenome?: string
        email?: string
        cargo?: CargoUsuario
      }
    },
  ) {
    const usuario = await this.usuariosService.update(payload.id, payload.data)
    this.server.emit('usuarioUpdated', usuario)
    return usuario
  }

  @SubscribeMessage('updateUsuarioKeycloakId')
  async handleUpdateUsuarioKeycloakId(
    client: Socket,
    payload: { id: string; keycloakId: string },
  ) {
    const usuario = await this.usuariosService.updateKeycloakId(
      payload.id,
      payload.keycloakId,
    )
    this.server.emit('usuarioKeycloakIdUpdated', usuario)
    return usuario
  }

  @SubscribeMessage('removeUsuario')
  async handleRemoveUsuario(client: Socket, id: string) {
    const usuario = await this.usuariosService.remove(id)
    this.server.emit('usuarioRemoved', usuario)
    return usuario
  }

  @SubscribeMessage('getUsuarioDepartamentos')
  async handleGetUsuarioDepartamentos(client: Socket, id: string) {
    const departamentos = await this.usuariosService.getDepartamentos(id)
    return departamentos
  }

  @SubscribeMessage('addUsuarioDepartamento')
  async handleAddUsuarioDepartamento(
    client: Socket,
    payload: { usuarioId: string; departamentoId: string },
  ) {
    const usuario = await this.usuariosService.addDepartamento(
      payload.usuarioId,
      payload.departamentoId,
    )
    this.server.emit('usuarioDepartamentoAdded', usuario)
    return usuario
  }

  @SubscribeMessage('removeUsuarioDepartamento')
  async handleRemoveUsuarioDepartamento(
    client: Socket,
    payload: { usuarioId: string; departamentoId: string },
  ) {
    const usuario = await this.usuariosService.removeDepartamento(
      payload.usuarioId,
      payload.departamentoId,
    )
    this.server.emit('usuarioDepartamentoRemoved', usuario)
    return usuario
  }

  @SubscribeMessage('updateUsuarioStatus')
  async handleUpdateUsuarioStatus(
    client: Socket,
    payload: { id: string; ativo: boolean },
  ) {
    const usuario = await this.usuariosService.updateStatus(
      payload.id,
      payload.ativo,
    )
    this.server.emit('usuarioStatusUpdated', usuario)
    return usuario
  }
}

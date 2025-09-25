/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { CampanhasService } from './campanhas.service'
import { StatusCampanha } from '../../prisma/generated/schema'

@WebSocketGateway({
  cors: {
    origin: [process.env.FRONTEND_URL],
  },
})
export class CampanhasGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server

  constructor(private readonly campanhasService: CampanhasService) {}

  handleConnection(client: Socket) {}

  handleDisconnect(client: Socket) {}

  @SubscribeMessage('findAllCampanhas')
  async handleFindAllCampanhas(client: Socket, includeInactive: boolean) {
    const campanhas = await this.campanhasService.findAll(includeInactive)
    return campanhas
  }

  @SubscribeMessage('findOneCampanha')
  async handleFindOneCampanha(client: Socket, id: string) {
    const campanha = await this.campanhasService.findOne(id)
    return campanha
  }

  @SubscribeMessage('createCampanha')
  async handleCreateCampanha(
    client: Socket,
    data: {
      titulo: string
      descricao?: string
      status: StatusCampanha
      tiposDeTeste: string[]
    },
  ) {
    const campanha = await this.campanhasService.create(data)
    this.server.emit('campanhaCreated', campanha)
    return campanha
  }

  @SubscribeMessage('updateCampanha')
  async handleUpdateCampanha(
    client: Socket,
    payload: {
      id: string
      data: {
        titulo?: string
        descricao?: string
        status?: StatusCampanha
        tiposDeTeste?: string[]
      }
    },
  ) {
    const campanha = await this.campanhasService.update(
      payload.id,
      payload.data,
    )
    this.server.emit('campanhaUpdated', campanha)
    return campanha
  }

  @SubscribeMessage('removeCampanha')
  async handleRemoveCampanha(client: Socket, id: string) {
    const campanha = await this.campanhasService.remove(id)
    this.server.emit('campanhaRemoved', campanha)
    return campanha
  }

  @SubscribeMessage('updateCampanhaStatus')
  async handleUpdateCampanhaStatus(
    client: Socket,
    payload: { id: string; ativo: boolean },
  ) {
    const campanha = await this.campanhasService.updateStatus(
      payload.id,
      payload.ativo,
    )
    this.server.emit('campanhaStatusUpdated', campanha)
    return campanha
  }
}

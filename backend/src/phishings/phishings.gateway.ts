/* phishings.gateway.ts */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { PhishingsService } from './phishings.service'
import { forwardRef, Inject } from '@nestjs/common'

@WebSocketGateway({
  cors: {
    origin: [process.env.FRONTEND_URL],
  },
})
export class PhishingsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server

  constructor(private readonly service: PhishingsService) {}

  handleConnection(client: Socket) {}
  handleDisconnect(client: Socket) {}

  @SubscribeMessage('phishing_clicked')
  async handlePhishingClicked(
    client: Socket,
    payload: string | { id: string },
  ) {
    const id = typeof payload === 'string' ? payload : payload?.id
    if (!id) return

    const phishing = await this.service.updateResultado(id, { clicked: true })
    this.server.emit('phishing_updated', phishing)
    return phishing
  }
}

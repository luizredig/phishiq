/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { PhishingsService } from './phishings.service'

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
  async handlePhishingClicked(client: Socket, id: string) {
    const phishing = await this.service.updateResultado(id, {
      clicked: true,
      reported: false,
    })
    this.server.emit('phishing_updated', phishing)
    return phishing
  }
}

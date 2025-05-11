import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'

@WebSocketGateway({
  cors: {
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  },
})
export class KeycloakGateway {
  @WebSocketServer()
  server: Server

  broadcast(event: string, payload: any) {
    this.server.emit(event, payload)
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import * as jwt from 'jsonwebtoken'

@WebSocketGateway({
  cors: {
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  },
})
export class UsuariosGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server

  handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token
      if (!token) {
        client.disconnect()
        return
      }

      const decoded = jwt.decode(token) as any
      if (!decoded?.realm_access?.roles?.includes('ADMINISTRADOR')) {
        client.disconnect()
        return
      }

      client.data.user = decoded
    } catch (err) {
      console.error(err)
      client.disconnect()
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`Desconectado: ${client.id}`)
  }

  broadcast(event: string, payload: any) {
    this.server.emit(event, payload)
  }
}

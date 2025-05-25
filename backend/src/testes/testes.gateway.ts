/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { TestesService } from './testes.service'

@WebSocketGateway({
  cors: {
    origin: [process.env.FRONTEND_URL],
  },
})
export class TestesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server

  constructor(private readonly testesService: TestesService) {}

  handleConnection(client: Socket) {}

  handleDisconnect(client: Socket) {}

  @SubscribeMessage('testeCaiu')
  async handleTesteCaiu(client: Socket, id: string) {
    const teste = await this.testesService.updateResultado(id, {
      caiuNoTeste: true,
      reportouPhishing: false,
    })
    this.server.emit('testeAtualizado', teste)
    return teste
  }
}

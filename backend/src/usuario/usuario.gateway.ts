import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets'
import { UsuarioService } from './usuario.service'
import { CreateUserWithRealmDto } from './dto/create-user.dto'
import { UpdateUserWithRealmDto } from './dto/update-user.dto'

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
})
export class UsuarioGateway {
  constructor(private readonly userService: UsuarioService) {}

  @SubscribeMessage('criarUsuario')
  create(@MessageBody() createUserDto: CreateUserWithRealmDto) {
    return this.userService.create(createUserDto)
  }

  @SubscribeMessage('getUsuarios')
  async findAll(@MessageBody() realmName: string) {
    return await this.userService.findAll(realmName)
  }

  @SubscribeMessage('getUsuarioById')
  findOne(@MessageBody() id: string) {
    return this.userService.findOne(id)
  }

  @SubscribeMessage('atualizarUsuario')
  update(@MessageBody() updateUserDto: UpdateUserWithRealmDto) {
    return this.userService.update(updateUserDto.id, updateUserDto)
  }

  @SubscribeMessage('toggleUsuarioStatus')
  async toggleStatus(
    @MessageBody() data: { id: string; ativo: boolean; realm: string },
  ) {
    return this.userService.toggleStatus(data.id, data.ativo, data.realm)
  }
}

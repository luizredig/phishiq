/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UsuariosService } from './usuarios.service'
import { Roles } from '../auth/auth.constants'

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  @Roles('ADMINISTRADOR')
  findAll() {
    return this.usuariosService.getAllUsers()
  }

  @Get('keycloak/:keycloakId')
  @Roles('ADMINISTRADOR')
  getUserByKeycloakId(@Param('keycloakId') keycloakId: string) {
    return this.usuariosService.getUserByKeycloakId(keycloakId)
  }

  @Get(':id')
  @Roles('ADMINISTRADOR')
  getById(@Param('id') id: string) {
    return this.usuariosService.getUserById(id)
  }

  @Post()
  @Roles('ADMINISTRADOR')
  create(@Body() dto: any) {
    return this.usuariosService.createUser({ dto: dto })
  }

  @Put(':id')
  @Roles('ADMINISTRADOR')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.usuariosService.updateUser({ id, dto: dto })
  }

  @Delete(':id')
  @Roles('ADMINISTRADOR')
  delete(@Param('id') id: string) {
    return this.usuariosService.deleteUser({ id })
  }
}

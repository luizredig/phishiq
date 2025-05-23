import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common'
import { UsuariosService } from './usuarios.service'
import { CargoUsuario } from '@prisma/client'

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.usuariosService.findAll(includeInactive === 'true')
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id)
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.usuariosService.findByEmail(email)
  }

  @Get('keycloak/:keycloakId')
  findByKeycloakId(@Param('keycloakId') keycloakId: string) {
    return this.usuariosService.findByKeycloakId(keycloakId)
  }

  @Post()
  create(
    @Body()
    createUsuarioDto: {
      nome: string
      sobrenome?: string
      email: string
      cargo?: CargoUsuario
      keycloakId?: string
    },
  ) {
    return this.usuariosService.create(createUsuarioDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateUsuarioDto: {
      nome?: string
      sobrenome?: string
      email?: string
      cargo?: CargoUsuario
    },
  ) {
    return this.usuariosService.update(id, updateUsuarioDto)
  }

  @Patch(':id/keycloak')
  updateKeycloakId(
    @Param('id') id: string,
    @Body('keycloakId') keycloakId: string,
  ) {
    return this.usuariosService.updateKeycloakId(id, keycloakId)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(id)
  }

  @Get(':id/departamentos')
  getDepartamentos(@Param('id') id: string) {
    return this.usuariosService.getDepartamentos(id)
  }

  @Post(':id/departamentos/:departamentoId')
  addDepartamento(
    @Param('id') id: string,
    @Param('departamentoId') departamentoId: string,
  ) {
    return this.usuariosService.addDepartamento(id, departamentoId)
  }

  @Delete(':id/departamentos/:departamentoId')
  removeDepartamento(
    @Param('id') id: string,
    @Param('departamentoId') departamentoId: string,
  ) {
    return this.usuariosService.removeDepartamento(id, departamentoId)
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('ativo') ativo: boolean) {
    return this.usuariosService.updateStatus(id, ativo)
  }
}

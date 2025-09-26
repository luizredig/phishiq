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
import { DepartamentsService as DepartamentsService } from './departaments.service'

@Controller('departments')
export class DepartamentsController {
  constructor(private readonly service: DepartamentsService) {}

  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.service.findAll(includeInactive === 'true')
  }

  @Get('ativos-com-usuarios')
  findActiveWithUsers() {
    return this.service.findActiveWithUsers()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id)
  }

  @Post()
  create(@Body() createDepartamentoDto: { nome: string }) {
    return this.service.create(createDepartamentoDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: { nome?: string },
  ) {
    return this.service.update(id, updateDepartamentoDto)
  }

  @Put(':id')
  updatePut(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: { nome?: string },
  ) {
    return this.service.update(id, updateDepartamentoDto)
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('ativo') ativo: boolean) {
    return this.service.updateStatus(id, ativo)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id)
  }

  @Get(':id/usuarios')
  getUsuarios(@Param('id') id: string) {
    return this.service.getUsuarios(id)
  }

  @Post(':id/usuarios/:usuarioId')
  addUsuario(@Param('id') id: string, @Param('usuarioId') usuarioId: string) {
    return this.service.addUsuario(id, usuarioId)
  }

  @Delete(':id/usuarios/:usuarioId')
  removeUsuario(
    @Param('id') id: string,
    @Param('usuarioId') usuarioId: string,
  ) {
    return this.service.removeUsuario(id, usuarioId)
  }
}

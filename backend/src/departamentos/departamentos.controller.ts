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
import { DepartamentosService } from './departamentos.service'

@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosService: DepartamentosService) {}

  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.departamentosService.findAll(includeInactive === 'true')
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentosService.findOne(id)
  }

  @Post()
  create(@Body() createDepartamentoDto: { nome: string }) {
    return this.departamentosService.create(createDepartamentoDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: { nome?: string },
  ) {
    return this.departamentosService.update(id, updateDepartamentoDto)
  }

  @Put(':id')
  updatePut(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: { nome?: string },
  ) {
    return this.departamentosService.update(id, updateDepartamentoDto)
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('ativo') ativo: boolean) {
    return this.departamentosService.updateStatus(id, ativo)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentosService.remove(id)
  }

  @Get(':id/usuarios')
  getUsuarios(@Param('id') id: string) {
    return this.departamentosService.getUsuarios(id)
  }

  @Post(':id/usuarios/:usuarioId')
  addUsuario(@Param('id') id: string, @Param('usuarioId') usuarioId: string) {
    return this.departamentosService.addUsuario(id, usuarioId)
  }

  @Put(':id/usuarios/:usuarioId/inativar')
  inativarUsuario(
    @Param('id') id: string,
    @Param('usuarioId') usuarioId: string,
  ) {
    return this.departamentosService.removeUsuario(id, usuarioId)
  }

  @Delete(':id/usuarios/:usuarioId')
  removeUsuario(
    @Param('id') id: string,
    @Param('usuarioId') usuarioId: string,
  ) {
    return this.departamentosService.removeUsuario(id, usuarioId)
  }
}

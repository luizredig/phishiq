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
  findAll(
    @Query('includeInactive') includeInactive?: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : undefined
    const sizeNum = pageSize ? parseInt(pageSize, 10) : undefined
    return this.service.findAll(includeInactive === 'true', pageNum, sizeNum)
  }

  @Get('ativos-com-usuarios')
  findActiveWithUsers(@Query('channel') channel?: string) {
    return this.service.findActiveWithUsers(channel as any)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id)
  }

  @Post()
  create(@Body() createDepartamentoDto: { name: string }) {
    return this.service.create(createDepartamentoDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: { name?: string },
  ) {
    return this.service.update(id, updateDepartamentoDto)
  }

  @Put(':id')
  updatePut(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: { name?: string },
  ) {
    return this.service.update(id, updateDepartamentoDto)
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('is_active') is_active: boolean) {
    return this.service.updateStatus(id, is_active)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id)
  }

  @Get(':id/users')
  getUsuarios(@Param('id') id: string) {
    return this.service.getUsuarios(id)
  }

  @Post(':id/users/:usuarioId')
  addUsuario(@Param('id') id: string, @Param('usuarioId') usuarioId: string) {
    return this.service.addUsuario(id, usuarioId)
  }

  @Delete(':id/users/:usuarioId')
  removeUsuario(
    @Param('id') id: string,
    @Param('usuarioId') usuarioId: string,
  ) {
    return this.service.removeUsuario(id, usuarioId)
  }
}

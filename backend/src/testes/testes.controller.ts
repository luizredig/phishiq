import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Patch,
} from '@nestjs/common'
import { StatusTeste } from '@prisma/client'
import { TestesService } from './testes.service'

interface CreateTesteDto {
  canal: 'EMAIL'
  departamentos?: string[]
  usuarioId?: string
  nomeEmpresa: string
}

interface UpdateTesteDto {
  canal?: 'EMAIL'
  departamentos?: string[]
  usuarioId?: string
  nomeEmpresa?: string
}

@Controller('testes')
export class TestesController {
  constructor(private readonly testesService: TestesService) {}

  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.testesService.findAll(includeInactive === 'true')
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testesService.findOne(id)
  }

  @Post()
  create(@Body() createTesteDto: CreateTesteDto) {
    return this.testesService.create(createTesteDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesteDto: UpdateTesteDto) {
    return this.testesService.update(id, updateTesteDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testesService.remove(id)
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('ativo') ativo: boolean) {
    return this.testesService.updateStatus(id, ativo)
  }

  @Put(':id/resultado')
  updateResultado(
    @Param('id') id: string,
    @Body()
    resultado: {
      caiuNoTeste: boolean
      reportouPhishing: boolean
    },
  ) {
    return this.testesService.updateResultado(id, resultado)
  }

  @Put(':id/status-teste')
  updateStatusTeste(
    @Param('id') id: string,
    @Body('status') status: StatusTeste,
  ) {
    return this.testesService.updateStatusTeste(id, status)
  }
}

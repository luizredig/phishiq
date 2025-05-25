import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { CanalTeste, StatusTeste } from '@prisma/client'
import { TestesService } from './testes.service'

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
  create(
    @Body()
    createTesteDto: {
      canal: CanalTeste
      departamentos?: string[]
      usuarioId?: string
      campanhaId?: string
    },
  ) {
    return this.testesService.create(createTesteDto)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateTesteDto: {
      canal?: CanalTeste
      departamentos?: string[]
      usuarioId?: string
      campanhaId?: string
    },
  ) {
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

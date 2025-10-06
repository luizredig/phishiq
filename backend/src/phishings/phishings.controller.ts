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
import { PhishingStatus } from '../../prisma/generated/schema'
import { PhishingsService } from './phishings.service'

interface CreateTesteDto {
  canal: 'EMAIL'
  departments?: string[]
  usuarioId?: string
  nomeEmpresa: string
}

interface UpdateTesteDto {
  canal?: 'EMAIL'
  departments?: string[]
  usuarioId?: string
  nomeEmpresa?: string
}

@Controller('phishings')
export class PhishingsController {
  constructor(private readonly service: PhishingsService) {}

  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.service.findAll(includeInactive === 'true')
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id)
  }

  @Post()
  create(@Body() createTesteDto: CreateTesteDto) {
    return this.service.create(createTesteDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesteDto: UpdateTesteDto) {
    return this.service.update(id, updateTesteDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id)
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('is_active') is_active: boolean) {
    return this.service.updateStatus(id, is_active)
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
    return this.service.updateResultado(id, resultado)
  }

  @Put(':id/status-teste')
  updateStatusTeste(
    @Param('id') id: string,
    @Body('status') status: PhishingStatus,
  ) {
    return this.service.updateStatusTeste(id, status)
  }
}

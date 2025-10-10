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
  channel: 'EMAIL'
  departments?: string[]
  userId?: string
  companyName: string
}

interface UpdateTesteDto {
  channel?: 'EMAIL'
  departments?: string[]
  userId?: string
  companyName?: string
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id)
  }

  @Put(':id/resultado')
  updateResultado(
    @Param('id') id: string,
    @Body()
    resultado: {
      clicked: boolean
      reported: boolean
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

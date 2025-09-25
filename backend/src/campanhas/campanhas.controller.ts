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
import { CampanhasService } from './campanhas.service'
import { StatusCampanha } from '../../prisma/generated/schema'

@Controller('campanhas')
export class CampanhasController {
  constructor(private readonly campanhasService: CampanhasService) {}

  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.campanhasService.findAll(includeInactive === 'true')
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campanhasService.findOne(id)
  }

  @Post()
  create(
    @Body()
    createCampanhaDto: {
      titulo: string
      descricao?: string
      status: StatusCampanha
    },
  ) {
    return this.campanhasService.create(createCampanhaDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateCampanhaDto: {
      titulo?: string
      descricao?: string
      status?: StatusCampanha
    },
  ) {
    return this.campanhasService.update(id, updateCampanhaDto)
  }

  @Put(':id')
  updatePut(
    @Param('id') id: string,
    @Body()
    updateCampanhaDto: {
      titulo?: string
      descricao?: string
      status?: StatusCampanha
    },
  ) {
    return this.campanhasService.update(id, updateCampanhaDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campanhasService.remove(id)
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('ativo') ativo: boolean) {
    return this.campanhasService.updateStatus(id, ativo)
  }
}

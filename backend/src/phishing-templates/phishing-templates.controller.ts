import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { PhishingTemplatesService } from './phishing-templates.service'

@Controller('phishing-templates')
export class PhishingTemplatesController {
  constructor(private readonly service: PhishingTemplatesService) {}

  @Get()
  list(@Query('includeInactive') includeInactive?: string) {
    return this.service.findAll(includeInactive === 'true')
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.findOne(id)
  }

  @Post()
  create(
    @Body()
    body: {
      name: string
      text: string
      createdBy?: string
    },
  ) {
    return this.service.create(body)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: { name?: string; text?: string },
  ) {
    return this.service.update(id, body)
  }

  @Put(':id')
  updatePut(
    @Param('id') id: string,
    @Body()
    body: { name?: string; text?: string },
  ) {
    return this.service.update(id, body)
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('is_active') is_active: boolean) {
    return this.service.updateStatus(id, is_active)
  }

  // Soft-delete via status
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.updateStatus(id, false)
  }
}

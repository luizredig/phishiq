import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { ChannelsService } from './channels.service'

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channels: ChannelsService) {}

  @Get('consents')
  async getConsents(@Req() req: any) {
    const userId = req.user?.id as string
    return this.channels.getChannelConsents(userId)
  }

  @Post('consents')
  async saveConsents(
    @Req() req: any,
    @Body() body: Partial<Record<'EMAIL', boolean>>,
  ) {
    const userId = req.user?.id as string
    return this.channels.saveChannelConsents(userId, body)
  }
}

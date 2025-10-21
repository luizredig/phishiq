import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { CookiesService } from './cookies.service'

@Controller('cookies')
export class CookiesController {
  constructor(private readonly cookiesService: CookiesService) {}

  @Get('consents')
  async getConsents(@Req() req: any) {
    const userId = req.user?.id as string
    return this.cookiesService.getCurrentUserConsents(userId)
  }

  @Post('consents')
  async saveConsents(
    @Req() req: any,
    @Body()
    body: {
      functional?: boolean
      analytics?: boolean
      advertising?: boolean
    },
  ) {
    const userId = req.user?.id as string
    return this.cookiesService.saveCurrentUserConsents(userId, body)
  }
}

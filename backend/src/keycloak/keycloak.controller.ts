/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { KeycloakService } from './keycloak.service'
import { Public } from '../auth/auth.constants'

@Controller('keycloak')
export class KeycloakController {
  constructor(private readonly keycloakService: KeycloakService) {}

  @Get('exists')
  @Public()
  async checkIfUserExists(@Query('email') email: string) {
    if (!email || !email.includes('@')) {
      throw new BadRequestException()
    }

    const response = await this.keycloakService.userExistsByEmail(email)

    return response
  }
}

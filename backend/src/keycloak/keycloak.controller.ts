/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Post, Body, Get, Req } from '@nestjs/common'
import { KeycloakService, TokenResponse } from './keycloak.service'
import { Request } from 'express'

@Controller('keycloak')
export class KeycloakController {
  constructor(private readonly keycloakService: KeycloakService) {}

  @Post('email-exists')
  async checkEmailExists(@Body() body: { email: string }) {
    const exists = await this.keycloakService.checkEmailExists(body.email)
    return { exists }
  }

  @Post('register')
  async register(
    @Body() body: { name: string; email: string; password: string },
  ) {
    await this.keycloakService.registerUser(
      body.name,
      body.email,
      body.password,
    )
    return { message: 'User registered successfully' }
  }

  @Get('verify-token')
  async verifyToken(@Req() req: Request) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return { authenticated: false }
    }

    const isValid = await this.keycloakService.verifyToken(token)
    return { authenticated: isValid }
  }

  @Get('user-info')
  async getUserInfo(@Req() req: Request) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      throw new Error('No token provided')
    }

    return await this.keycloakService.getUserInfo(token)
  }

  @Post('token')
  async exchangeCodeForToken(
    @Body() body: { code: string },
  ): Promise<TokenResponse> {
    return await this.keycloakService.exchangeCodeForToken(body.code)
  }
}

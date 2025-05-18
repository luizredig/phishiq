import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';
import { Request } from 'express';

@Controller('keycloak')
export class KeycloakController {
  constructor(private readonly keycloakService: KeycloakService) {}

  @Post('email-exists')
  async checkEmailExists(@Body() body: { email: string }) {
    const exists = await this.keycloakService.checkEmailExists(body.email);
    return { exists };
  }

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string }) {
    await this.keycloakService.registerUser(body.name, body.email, body.password);
    return { message: 'User registered successfully' };
  }

  @Get('verify-token')
  async verifyToken(@Req() req: Request) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return { authenticated: false };
    }
    
    const isValid = await this.keycloakService.verifyToken(token);
    return { authenticated: isValid };
  }
} 
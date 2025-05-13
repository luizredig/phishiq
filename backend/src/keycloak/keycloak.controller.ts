/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  ConflictException,
} from '@nestjs/common'
import { KeycloakService } from './keycloak.service'
import { Public } from '../auth/auth.constants'

class RegisterCompanyDto {
  email: string
  companyName: string
  password: string
}

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

  @Post('register')
  @Public()
  async registerCompany(@Body() registerDto: RegisterCompanyDto) {
    if (!registerDto.email || !registerDto.email.includes('@')) {
      throw new BadRequestException('Email inválido')
    }

    if (!registerDto.companyName || registerDto.companyName.trim().length < 2) {
      throw new BadRequestException('Nome da empresa inválido')
    }

    if (!registerDto.password || registerDto.password.length < 8) {
      throw new BadRequestException('Senha deve ter pelo menos 8 caracteres')
    }

    try {
      const result = await this.keycloakService.registerCompany(registerDto)

      return {
        success: true,
        message: 'Empresa registrada com sucesso',
        data: {
          clientId: result.clientId,
          token: result.token || null,
          userId: result.userId,
        },
      }
    } catch (error) {
      console.error('Erro ao registrar empresa:', error)
      if (error instanceof ConflictException) {
        throw error
      }
      throw new BadRequestException(
        'Erro ao registrar empresa. Por favor, tente novamente.',
      )
    }
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
import { KeycloakService } from './keycloak.service'

@Controller('keycloak')
export class KeycloakController {
  constructor(private keycloakService: KeycloakService) {}

  @Post('usuarios')
  @HttpCode(201)
  createUsuario(
    @Body() body: { realm: string; nome: string; email: string; senha: string },
  ) {
    const { realm, nome, email, senha } = body
    return this.keycloakService.cadastrarUsuarioEmRealm({
      realm,
      nome,
      email,
      senha,
    })
  }

  @Post('signup')
  @HttpCode(201)
  async cadastrarEmpresaEUsuario(
    @Body() body: { name: string; email: string; senha: string },
  ) {
    try {
      const result = await this.keycloakService.criarRealm(body)

      if (!result.success) {
        if (result.emailExistente) {
          return {
            message: 'E-mail já cadastrado',
            statusCode: 409,
          }
        }
        throw new BadRequestException('Erro ao criar o realm')
      }

      const { slug } = result

      if (!slug) {
        throw new BadRequestException('Erro ao criar o realm')
      }

      await this.keycloakService.cadastrarUsuarioEmRealm({
        realm: slug,
        nome: process.env.KEYCLOAK_ADMIN_USERNAME!,
        email: process.env.KEYCLOAK_ADMIN_EMAIL!,
        senha: process.env.KEYCLOAK_ADMIN_PASSWORD!,
      })

      await this.keycloakService.cadastrarUsuarioEmRealm({
        realm: slug,
        nome: body.name,
        email: body.email,
        senha: body.senha,
      })

      await this.keycloakService.cadastrarUsuarioNoBanco({
        realm: slug,
        nome: body.name,
        email: body.email,
      })

      await this.keycloakService.criarClientNoRealm({
        realm: slug,
        clientId: `${slug}-client`,
        redirectUris: ['*'],
      })
    } catch (err) {
      console.error(err)
      const message =
        err instanceof Error
          ? err.message
          : 'Erro desconhecido ao cadastrar empresa e usuário'
      throw new BadRequestException(message)
    }
  }

  @Post('login')
  @HttpCode(200)
  async logarUsuario(@Body() body: { email: string }) {
    try {
      return await this.keycloakService.encontrarRealmPorEmail(body)
    } catch (err) {
      console.error(err)
      const message =
        err instanceof Error
          ? err.message
          : 'Erro desconhecido ao logar usuário'
      throw new BadRequestException(message)
    }
  }

  @Post('logout')
  @HttpCode(200)
  async logoutUsuario(@Body() body: { realm: string; email: string }) {
    try {
      const user = await this.keycloakService.buscarUsuarioNoKeycloakPorEmail({
        realm: body.realm,
        email: body.email,
      })

      if (!user) {
        throw new BadRequestException('Usuário não encontrado no Keycloak')
      }

      await this.keycloakService.logoutUser({
        realm: body.realm,
        userId: user.id!,
      })

      return { success: true }
    } catch (err) {
      console.error(err)
      const message =
        err instanceof Error
          ? err.message
          : 'Erro desconhecido ao deslogar usuário'
      throw new BadRequestException(message)
    }
  }

  @Post('verify-email')
  @HttpCode(200)
  async verificarEmpresaPorEmail(@Body() body: { email: string }) {
    try {
      const result = await this.keycloakService.verificarEmpresaPorEmail(body)
      return result
    } catch (err) {
      console.error(err)
      throw new BadRequestException('Erro ao verificar empresa pelo email')
    }
  }

  @Post('verify-email-realm')
  @HttpCode(200)
  async verificarEmailEmRealm(@Body() body: { realm: string; email: string }) {
    try {
      const result = await this.keycloakService.verificarEmailEmRealm(body)
      return result
    } catch (err) {
      console.error(err)
      throw new BadRequestException('Erro ao verificar empresa pelo email')
    }
  }
}

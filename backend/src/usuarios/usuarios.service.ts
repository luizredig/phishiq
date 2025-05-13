/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common'
import { UsuariosGateway } from './usuarios.gateway'
import { KeycloakService } from 'src/keycloak/keycloak.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { Request } from 'express'
import { REQUEST } from '@nestjs/core'
import { Inject } from '@nestjs/common'

@Injectable()
export class UsuariosService {
  constructor(
    private readonly usuariosGateway: UsuariosGateway,
    private readonly keycloakService: KeycloakService,
    private readonly prisma: PrismaService,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  private getClientId() {
    return this.request['tenantId']
  }

  async getUserById(id: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    })

    return usuario
  }

  async getUserByKeycloakId(keycloakId: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { keycloakId },
    })

    return usuario
  }

  async updateUser({ id, dto }: { id: string; dto: any }) {
    const usuarioAtualizado = await this.prisma.usuario.update({
      where: { id },
      data: {
        nome: dto.nome,
        sobrenome: dto.sobrenome,
        email: dto.email,
        cargo: dto.cargo,
        ativo: dto.ativo !== undefined ? dto.ativo : undefined,
        atualizadoEm: new Date(),
        atualizadoPor: dto.userId || null,
        inativadoEm: dto.ativo === false ? new Date() : null,
        inativadoPor: dto.ativo === false ? dto.userId || null : null,
      },
    })

    await this.keycloakService.updateUser({
      id: usuarioAtualizado.keycloakId,
      dto: {
        nome: dto.nome,
        sobrenome: dto.sobrenome,
        email: dto.email,
        ativo: dto.ativo,
      },
    })

    this.usuariosGateway.broadcast('user_updated', usuarioAtualizado)

    return usuarioAtualizado
  }

  async deleteUser({ id }: { id: string }) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: { keycloakId: true },
    })

    if (!usuario) {
      throw new Error('Usuário não encontrado')
    }

    await this.keycloakService.deleteUser({
      id: usuario.keycloakId,
    })

    await this.prisma.usuario.delete({
      where: { id },
    })

    this.usuariosGateway.broadcast('user_deleted', { id })

    return { success: true }
  }

  async getAllUsers() {
    const usuarios = await this.prisma.usuario.findMany({
      where: {
        email: {
          not: process.env.KEYCLOAK_ADMIN_EMAIL,
        },
      },
      orderBy: { nome: 'asc' },
    })

    return usuarios
  }

  async createUser({ dto }: { dto: any }) {
    const clientId = this.getClientId()

    let keycloakUser = await this.keycloakService.getUserById({
      id: dto.keycloakId,
    })

    if (!keycloakUser) {
      keycloakUser = await this.keycloakService.createUser({
        userData: {
          username: dto.email,
          firstName: dto.nome,
          lastName: dto.sobrenome,
          email: dto.email,
          enabled: true,
          attributes: {
            cargo: [dto.cargo],
          },
          credentials: [
            {
              type: 'password',
              value: '12345678',
              temporary: true,
            },
          ],
        },
        clientId,
      })
    }

    const novoUsuario = await this.prisma.usuario.create({
      data: {
        nome: dto.nome,
        sobrenome: dto.sobrenome,
        email: dto.email,
        cargo: dto.cargo,
        keycloakId: keycloakUser.id as string,
        ativo: true,
        criadoEm: new Date(),
        criadoPor: dto.userId || null,
        atualizadoEm: new Date(),
      },
    })

    this.usuariosGateway.broadcast('user_created', novoUsuario)

    return novoUsuario
  }
}

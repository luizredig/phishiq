/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common'
import { UsuariosGateway } from './usuarios.gateway'
import { KeycloakService } from 'src/keycloak/keycloak.service'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsuariosService {
  constructor(
    private readonly usuariosGateway: UsuariosGateway,
    private readonly keycloakService: KeycloakService,
    private readonly prisma: PrismaService,
  ) {}

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

  async updateUser({
    realm,
    id,
    dto,
  }: {
    realm: string
    id: string
    dto: any
  }) {
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
      realm,
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

  async deleteUser({ realm, id }: { realm: string; id: string }) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: { keycloakId: true },
    })

    if (!usuario) {
      throw new Error('Usuário não encontrado')
    }

    await this.keycloakService.deleteUser({
      realm,
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

  async createUser({ realm, dto }: { realm: string; dto: any }) {
    let keycloakUser = await this.keycloakService.getUserById({
      realm,
      id: dto.keycloakId,
    })

    if (!keycloakUser) {
      keycloakUser = await this.keycloakService.createUser({
        realm,
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

  async syncUser({ realm, keycloakId }: { realm: string; keycloakId: string }) {
    try {
      const keycloakUser = await this.keycloakService.getUserById({
        realm,
        id: keycloakId,
      })

      if (!keycloakUser) {
        throw new Error('User not found in Keycloak')
      }

      const existingUser = await this.prisma.usuario.findUnique({
        where: { keycloakId },
      })

      if (existingUser) {
        return existingUser
      }

      const cargoAttr = keycloakUser.attributes?.cargo ?? ['VISITANTE']

      const novoUsuario = await this.createUser({
        realm,
        dto: {
          nome: keycloakUser.firstName || '',
          sobrenome: keycloakUser.lastName || '',
          email: keycloakUser.email || '',
          cargo: cargoAttr[0],
          keycloakId: keycloakUser.id,
          userId: null,
          statusCadastro: 'PENDENTE',
        },
      })

      this.usuariosGateway.broadcast('user_created', novoUsuario)

      return novoUsuario
    } catch (error) {
      console.error('Error syncing user to Prisma:', error)
      throw error
    }
  }
}

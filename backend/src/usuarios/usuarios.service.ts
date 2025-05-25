/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Usuario, CargoUsuario, Departamento } from '@prisma/client'
import { KeycloakService } from '../keycloak/keycloak.service'

@Injectable()
export class UsuariosService {
  constructor(
    private prisma: PrismaService,
    private keycloakService: KeycloakService,
  ) {}

  async findAll(includeInactive = false): Promise<Usuario[]> {
    return this.prisma.usuario.findMany({
      where: {
        NOT: { cargo: 'ADMIN' },
        ativo: includeInactive ? false : true,
      },
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async findOne(id: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { id },
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { email },
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async findByKeycloakId(keycloakId: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { keycloakId },
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async create(data: {
    nome: string
    sobrenome: string
    email: string
    cargo?: CargoUsuario
    keycloakId?: string
  }): Promise<Usuario> {
    const keycloakUser = await this.keycloakService.registerUser(
      data.nome,
      data.sobrenome,
      data.email,
    )

    const keycloakId = keycloakUser.id

    return this.prisma.usuario.create({
      data: {
        ...data,
        keycloakId,
        ativo: true,
      },
    })
  }

  async update(
    id: string,
    data: {
      nome?: string
      sobrenome?: string
      email?: string
      cargo?: CargoUsuario
    },
  ): Promise<Usuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    })

    if (!usuario) {
      throw new Error('Usuário não encontrado')
    }

    await this.keycloakService.updateUser(usuario.keycloakId, {
      firstName: data.nome,
      lastName: data.sobrenome,
      email: data.email,
    })

    return this.prisma.usuario.update({
      where: { id },
      data,
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async remove(id: string): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { id },
      data: {
        ativo: false,
        inativadoEm: new Date(),
      },
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async updateKeycloakId(id: string, keycloakId: string): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { id },
      data: { keycloakId },
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async addDepartamento(
    usuarioId: string,
    departamentoId: string,
  ): Promise<Usuario> {
    await this.prisma.usuarioDepartamento.create({
      data: {
        usuarioId,
        departamentoId,
      },
    })

    const usuario = await this.findOne(usuarioId)
    if (!usuario) throw new Error('Usuario não encontrado')
    return usuario
  }

  async removeDepartamento(
    usuarioId: string,
    departamentoId: string,
  ): Promise<Usuario> {
    await this.prisma.usuarioDepartamento.deleteMany({
      where: {
        usuarioId,
        departamentoId,
      },
    })

    const usuario = await this.findOne(usuarioId)
    if (!usuario) throw new Error('Usuario não encontrado')
    return usuario
  }

  async getDepartamentos(usuarioId: string): Promise<Departamento[]> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })

    return usuario?.departamentos.map((ud) => ud.departamento) || []
  }

  async updateStatus(id: string, ativo: boolean): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { id },
      data: {
        ativo,
        inativadoEm: ativo ? null : new Date(),
        inativadoPor: ativo ? null : 'system',
      },
      include: {
        departamentos: {
          where: { ativo: true },
          include: {
            departamento: true,
          },
        },
      },
    })
  }
}

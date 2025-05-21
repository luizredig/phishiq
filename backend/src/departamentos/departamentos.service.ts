/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Departamento, Usuario } from '@prisma/client'

@Injectable()
export class DepartamentosService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Departamento[]> {
    return this.prisma.departamento.findMany({
      where: { ativo: true },
      include: {
        usuarios: {
          include: {
            usuario: true,
          },
        },
      },
    })
  }

  async findOne(id: string): Promise<Departamento | null> {
    return this.prisma.departamento.findUnique({
      where: { id },
      include: {
        usuarios: {
          include: {
            usuario: true,
          },
        },
      },
    })
  }

  async create(data: { nome: string }): Promise<Departamento> {
    return this.prisma.departamento.create({
      data,
      include: {
        usuarios: {
          include: {
            usuario: true,
          },
        },
      },
    })
  }

  async update(id: string, data: { nome?: string }): Promise<Departamento> {
    return this.prisma.departamento.update({
      where: { id },
      data,
      include: {
        usuarios: {
          include: {
            usuario: true,
          },
        },
      },
    })
  }

  async remove(id: string): Promise<Departamento> {
    return this.prisma.departamento.update({
      where: { id },
      data: {
        ativo: false,
        inativadoEm: new Date(),
      },
      include: {
        usuarios: {
          include: {
            usuario: true,
          },
        },
      },
    })
  }

  async getUsuarios(departamentoId: string): Promise<Usuario[]> {
    const departamento = await this.prisma.departamento.findUnique({
      where: { id: departamentoId },
      include: {
        usuarios: {
          where: { ativo: true },
          include: {
            usuario: true,
          },
        },
      },
    })

    return departamento?.usuarios.map((ud) => ud.usuario) || []
  }

  async addUsuario(
    departamentoId: string,
    usuarioId: string,
  ): Promise<Departamento> {
    await this.prisma.usuarioDepartamento.create({
      data: {
        departamentoId,
        usuarioId,
      },
    })

    const departamento = await this.findOne(departamentoId)
    if (!departamento) throw new Error('Departamento não encontrado')
    return departamento
  }

  async removeUsuario(
    departamentoId: string,
    usuarioId: string,
  ): Promise<Departamento> {
    await this.prisma.usuarioDepartamento.updateMany({
      where: {
        departamentoId,
        usuarioId,
      },
      data: {
        ativo: false,
        inativadoEm: new Date(),
      },
    })

    const departamento = await this.findOne(departamentoId)
    if (!departamento) throw new Error('Departamento não encontrado')
    return departamento
  }
}

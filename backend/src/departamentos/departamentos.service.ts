/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Departamento, Usuario } from '@prisma/client'

@Injectable()
export class DepartamentosService {
  constructor(private prisma: PrismaService) {}

  async findAll(includeInactive = false): Promise<Departamento[]> {
    return this.prisma.departamento.findMany({
      where: includeInactive ? { ativo: false } : { ativo: true },
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
    const departamento = await this.prisma.departamento.findUnique({
      where: { id },
      include: {
        usuarios: {
          include: {
            usuario: true,
          },
        },
      },
    })

    if (!departamento) {
      throw new NotFoundException(`Departamento com ID ${id} não encontrado`)
    }

    return departamento
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
    try {
      // Primeiro verifica se o departamento existe
      const exists = await this.prisma.departamento.findUnique({
        where: { id },
      })

      if (!exists) {
        throw new NotFoundException(`Departamento com ID ${id} não encontrado`)
      }

      // Se existe, atualiza
      return await this.prisma.departamento.update({
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
    } catch (error) {
      console.error(`Erro ao atualizar departamento ${id}:`, error)
      throw error
    }
  }

  async updateStatus(id: string, ativo: boolean): Promise<Departamento> {
    const exists = await this.prisma.departamento.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException(`Departamento com ID ${id} não encontrado`)
    }

    return this.prisma.departamento.update({
      where: { id },
      data: {
        ativo,
        inativadoEm: ativo ? null : new Date(),
        inativadoPor: ativo ? null : 'system',
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

  async remove(id: string): Promise<Departamento> {
    const exists = await this.prisma.departamento.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException(`Departamento com ID ${id} não encontrado`)
    }

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

    if (!departamento) {
      throw new NotFoundException(
        `Departamento com ID ${departamentoId} não encontrado`,
      )
    }

    return departamento.usuarios.map((ud) => ud.usuario)
  }

  async addUsuario(
    departamentoId: string,
    usuarioId: string,
  ): Promise<Departamento> {
    try {
      await this.prisma.usuarioDepartamento.create({
        data: {
          departamentoId,
          usuarioId,
        },
      })

      const departamento = await this.findOne(departamentoId)
      if (!departamento)
        throw new NotFoundException('Departamento não encontrado')
      return departamento
    } catch (error) {
      console.error(
        `Erro ao adicionar usuário ${usuarioId} ao departamento ${departamentoId}:`,
        error,
      )
      throw error
    }
  }

  async removeUsuario(
    departamentoId: string,
    usuarioId: string,
  ): Promise<Departamento> {
    try {
      await this.prisma.usuarioDepartamento.deleteMany({
        where: {
          departamentoId,
          usuarioId,
        },
      })

      const departamento = await this.findOne(departamentoId)
      if (!departamento)
        throw new NotFoundException('Departamento não encontrado')
      return departamento
    } catch (error) {
      console.error(
        `Erro ao remover usuário ${usuarioId} do departamento ${departamentoId}:`,
        error,
      )
      throw error
    }
  }
}

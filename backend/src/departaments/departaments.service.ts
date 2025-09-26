import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Department, User } from '../../prisma/generated/schema'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DepartamentsService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async findAll(includeInactive = false): Promise<Department[]> {
    return this.prisma.department.findMany({
      where: {
        ativo: includeInactive ? false : true,
      },
      include: {
        usuarios: {
          include: {
            usuario: true,
          },
        },
      },
      orderBy: {
        nome: 'asc',
      },
    })
  }

  async findActiveWithUsers(): Promise<Department[]> {
    return this.prisma.department.findMany({
      where: {
        ativo: true,
        usuarios: {
          some: {
            ativo: true,
            usuario: {
              ativo: true,
            },
          },
        },
      },
      include: {
        usuarios: {
          where: {
            ativo: true,
            usuario: {
              ativo: true,
            },
          },
          include: {
            usuario: true,
          },
        },
      },
      orderBy: {
        nome: 'asc',
      },
    })
  }

  async findOne(id: string): Promise<Department | null> {
    const departamento = await this.prisma.department.findUnique({
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
      throw new NotFoundException()
    }

    return departamento
  }

  async create(data: { nome: string }): Promise<Department> {
    return this.prisma.department.create({
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

  async update(id: string, data: { nome?: string }): Promise<Department> {
    try {
      const exists = await this.prisma.department.findUnique({
        where: { id },
      })

      if (!exists) {
        throw new NotFoundException()
      }

      return await this.prisma.department.update({
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
      throw error
    }
  }

  async updateStatus(id: string, ativo: boolean): Promise<Department> {
    const exists = await this.prisma.department.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException()
    }

    return this.prisma.department.update({
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

  async remove(id: string): Promise<Department> {
    const exists = await this.prisma.department.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException()
    }

    return this.prisma.department.update({
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

  async getUsuarios(departamentoId: string): Promise<User[]> {
    const departamento = await this.prisma.department.findUnique({
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
      throw new NotFoundException()
    }

    return departamento.usuarios?.map((ud) => ud.usuario)
  }

  async addUsuario(
    departamentoId: string,
    usuarioId: string,
  ): Promise<Department> {
    try {
      await this.prisma.usuarioDepartamento.create({
        data: {
          departamentoId,
          usuarioId,
        },
      })

      const departamento = await this.findOne(departamentoId)
      if (!departamento) throw new NotFoundException()
      return departamento
    } catch (error) {
      throw error
    }
  }

  async removeUsuario(
    departamentoId: string,
    usuarioId: string,
  ): Promise<Department> {
    try {
      await this.prisma.usuarioDepartamento.deleteMany({
        where: {
          departamentoId,
          usuarioId,
        },
      })

      const departamento = await this.findOne(departamentoId)
      if (!departamento) throw new NotFoundException()
      return departamento
    } catch (error) {
      throw error
    }
  }
}

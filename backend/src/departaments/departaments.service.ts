import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Department, User } from '../../prisma/generated/schema'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DepartamentsService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async findAll(includeInactive = false): Promise<Department[]> {
    return this.prisma.department.findMany({
      where: {
        is_active: includeInactive ? false : true,
      },
    })
  }

  async findActiveWithUsers(): Promise<Department[]> {
    return this.prisma.department.findMany({
      where: {
        is_active: true,
      },
    })
  }

  async findOne(id: string): Promise<Department | null> {
    const departamento = await this.prisma.department.findUnique({
      where: { id },
    })

    if (!departamento) {
      throw new NotFoundException()
    }

    return departamento
  }

  async create(data: { nome: string }): Promise<Department> {
    return this.prisma.department.create({
      data,
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
      })
    } catch (error) {
      throw error
    }
  }

  async updateStatus(id: string, is_active: boolean): Promise<Department> {
    const exists = await this.prisma.department.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException()
    }

    return this.prisma.department.update({
      where: { id },
      data: {
        is_active,
        inactivated_by: is_active ? null : 'system',
        inactivated_at: is_active ? null : new Date(),
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
        is_active: false,
        inactivated_by: 'system',
        inactivated_at: new Date(),
      },
    })
  }

  async getUsuarios(departamentoId: string): Promise<User[]> {
    const departamento = await this.prisma.department.findUnique({
      where: { id: departamentoId },
    })

    if (!departamento) {
      throw new NotFoundException()
    }

    return departamento.users
  }

  async addUsuario(departmentId: string, userId: string): Promise<Department> {
    try {
      await this.prisma.userDepartment.create({
        data: {
          departamento_id: departmentId,
          user_id: userId,
        },
      })

      const departamento = await this.findOne(departmentId)
      if (!departamento) throw new NotFoundException()
      return departamento
    } catch (error) {
      throw error
    }
  }

  async removeUsuario(
    departmentId: string,
    userId: string,
  ): Promise<Department> {
    try {
      await this.prisma.userDepartment.deleteMany({
        where: {
          department_id: departmentId,
          user_id: userId,
        },
      })

      const departamento = await this.findOne(departmentId)
      if (!departamento) throw new NotFoundException()
      return departamento
    } catch (error) {
      throw error
    }
  }
}

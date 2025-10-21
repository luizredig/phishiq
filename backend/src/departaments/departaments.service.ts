import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Department, User } from '../../prisma/generated/schema'
import { PrismaClient } from '@prisma/client'
import { decryptText, encryptText } from '../utils/crypto'

@Injectable()
export class DepartamentsService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async findAll(includeInactive = false): Promise<Department[]> {
    return this.prisma.department
      .findMany({
        where: {
          is_active: includeInactive ? false : true,
        },
        include: {
          pseudonyms: true,
        },
      })
      .then((rows) =>
        rows.map((d) => ({
          ...d,
          name: decryptText(d.name as unknown as string),
          created_by: d.created_by
            ? decryptText(d.created_by as unknown as string)
            : null,
          updated_by: d.updated_by
            ? decryptText(d.updated_by as unknown as string)
            : null,
          inactivated_by: d.inactivated_by
            ? decryptText(d.inactivated_by as unknown as string)
            : null,
        })),
      )
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

    return {
      ...departamento,
      name: decryptText(departamento.name as unknown as string),
      created_by: departamento.created_by
        ? decryptText(departamento.created_by as unknown as string)
        : null,
      updated_by: departamento.updated_by
        ? decryptText(departamento.updated_by as unknown as string)
        : null,
      inactivated_by: departamento.inactivated_by
        ? decryptText(departamento.inactivated_by as unknown as string)
        : null,
    }
  }

  async create(data: { name: string }): Promise<Department> {
    const created = await this.prisma.department.create({
      data: {
        name: encryptText(data.name),
        created_by: encryptText('system'),
        updated_by: encryptText('system'),
      },
    })
    return {
      ...created,
      name: decryptText(created.name as unknown as string),
      created_by: decryptText(created.created_by as unknown as string),
      updated_by: decryptText(created.updated_by as unknown as string),
    }
  }

  async update(id: string, data: { name?: string }): Promise<Department> {
    try {
      const exists = await this.prisma.department.findUnique({
        where: { id },
      })

      if (!exists) {
        throw new NotFoundException()
      }

      const updated = await this.prisma.department.update({
        where: { id },
        data: {
          name: data.name != null ? encryptText(data.name) : undefined,
          updated_by: encryptText('system'),
        },
      })
      return {
        ...updated,
        name: decryptText(updated.name as unknown as string),
        created_by: updated.created_by
          ? decryptText(updated.created_by as unknown as string)
          : null,
        updated_by: updated.updated_by
          ? decryptText(updated.updated_by as unknown as string)
          : null,
        inactivated_by: updated.inactivated_by
          ? decryptText(updated.inactivated_by as unknown as string)
          : null,
      }
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

    const updated = await this.prisma.department.update({
      where: { id },
      data: {
        is_active,
        inactivated_by: is_active ? null : encryptText('system'),
        inactivated_at: is_active ? null : new Date(),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      created_by: updated.created_by
        ? decryptText(updated.created_by as unknown as string)
        : null,
      updated_by: updated.updated_by
        ? decryptText(updated.updated_by as unknown as string)
        : null,
      inactivated_by: updated.inactivated_by
        ? decryptText(updated.inactivated_by as unknown as string)
        : null,
    }
  }

  async remove(id: string): Promise<Department> {
    const exists = await this.prisma.department.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException()
    }

    const updated = await this.prisma.department.update({
      where: { id },
      data: {
        is_active: false,
        inactivated_by: encryptText('system'),
        inactivated_at: new Date(),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      created_by: updated.created_by
        ? decryptText(updated.created_by as unknown as string)
        : null,
      updated_by: updated.updated_by
        ? decryptText(updated.updated_by as unknown as string)
        : null,
      inactivated_by: updated.inactivated_by
        ? decryptText(updated.inactivated_by as unknown as string)
        : null,
    }
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

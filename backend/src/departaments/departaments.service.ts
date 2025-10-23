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
          pseudonyms: {
            include: {
              pseudonym: {
                include: { user: true },
              },
            },
          },
        },
      })
      .then((rows) =>
        rows.map((d) => {
          const users = (d.pseudonyms || [])
            .map((pd) => pd.pseudonym?.user)
            .filter((u): u is User => !!u)
            .map((u) => ({
              user: {
                ...u,
                name: decryptText(u.name as unknown as string),
                email: decryptText(u.email as unknown as string),
              },
            }))

          return {
            ...d,
            // shape esperado no frontend
            users,
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
          }
        }),
      )
  }

  async findActiveWithUsers(): Promise<Department[]> {
    return this.prisma.department
      .findMany({
        where: {
          is_active: true,
        },
        include: {
          pseudonyms: {
            include: {
              pseudonym: {
                include: { user: true },
              },
            },
          },
        },
      })
      .then((rows) =>
        rows.map((d) => {
          const users = (d.pseudonyms || [])
            .map((pd) => pd.pseudonym?.user)
            .filter((u): u is User => !!u)
            .map((u) => ({
              user: {
                ...u,
                name: decryptText(u.name as unknown as string),
                email: decryptText(u.email as unknown as string),
              },
            }))

          return {
            ...d,
            users,
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
          }
        }),
      )
  }

  async findOne(id: string): Promise<Department | null> {
    const departamento = await this.prisma.department.findUnique({
      where: { id },
      include: {
        pseudonyms: {
          include: {
            pseudonym: {
              include: { user: true },
            },
          },
        },
      },
    })

    if (!departamento) {
      throw new NotFoundException()
    }

    const users = (departamento.pseudonyms || [])
      .map((pd) => pd.pseudonym?.user)
      .filter((u): u is User => !!u)
      .map((u) => ({
        user: {
          ...u,
          name: decryptText(u.name as unknown as string),
          email: decryptText(u.email as unknown as string),
        },
      }))

    return {
      ...departamento,
      users,
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
    const exists = await this.prisma.department.findUnique({
      where: { id: departamentoId },
      select: { id: true },
    })

    if (!exists) {
      throw new NotFoundException()
    }

    const links = await this.prisma.pseudonymDepartment.findMany({
      where: { department_id: departamentoId },
      include: { pseudonym: { include: { user: true } } },
    })

    return links
      .map((l) => l.pseudonym?.user)
      .filter((u): u is User => !!u)
      .map((u) => ({
        ...u,
        name: decryptText(u.name as unknown as string),
        email: decryptText(u.email as unknown as string),
      }))
  }

  async addUsuario(departmentId: string, userId: string): Promise<Department> {
    try {
      // garante pseudonym
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: { pseudonym: true },
      })
      if (!user) throw new NotFoundException('Usuário não encontrado')

      const pseudonym = user.pseudonym
        ? user.pseudonym
        : await this.prisma.pseudonym.create({
            data: {
              pseudonym: `p-${userId}`,
              user: { connect: { id: userId } },
              created_by: encryptText('system'),
              updated_by: encryptText('system'),
            },
          })

      await this.prisma.pseudonymDepartment.createMany({
        data: [
          {
            department_id: departmentId,
            pseudonym_id: pseudonym.id,
            created_by: encryptText('system'),
            updated_by: encryptText('system'),
          },
        ],
        skipDuplicates: true,
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
      const pseudo = await this.prisma.pseudonym.findFirst({
        where: { user_id: userId },
        select: { id: true },
      })

      if (pseudo) {
        await this.prisma.pseudonymDepartment.deleteMany({
          where: {
            department_id: departmentId,
            pseudonym_id: pseudo.id,
          },
        })
      }

      const departamento = await this.findOne(departmentId)
      if (!departamento) throw new NotFoundException()
      return departamento
    } catch (error) {
      throw error
    }
  }
}

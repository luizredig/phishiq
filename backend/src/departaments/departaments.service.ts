import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Department, User, Action, Entity } from '../../prisma/generated/schema'
import { PrismaClient } from '@prisma/client'
import { decryptText, encryptText } from '../utils/crypto'

type DepartmentWithUsers = Department & { users: { user: User }[] }

@Injectable()
export class DepartamentsService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async findAll(
    includeInactive = false,
    page?: number,
    pageSize?: number,
  ): Promise<{ items: DepartmentWithUsers[]; total: number }> {
    const where = {
      is_active: includeInactive ? false : true,
    }
    const hasPagination = Boolean(page && pageSize && page > 0 && pageSize > 0)
    const skip = hasPagination ? (page! - 1) * pageSize! : undefined
    const take = hasPagination ? pageSize : undefined

    const [rows, total] = await Promise.all([
      this.prisma.department.findMany({
        where,
        include: {
          pseudonyms: {
            include: {
              pseudonym: {
                include: { user: true },
              },
            },
          },
        },
        skip,
        take,
      }),
      this.prisma.department.count({ where }),
    ])

    const mapped = rows.map((d) => {
      const pseudonyms = (d.pseudonyms || []).map((pd) => {
        const user = pd.pseudonym?.user
        const decryptedUser = user
          ? {
              ...user,
              name: decryptText(user.name as unknown as string),
              email: decryptText(user.email as unknown as string),
              tenant_id: user.tenant_id
                ? (decryptText(user.tenant_id as unknown as string) as any)
                : null,
              created_by: user.created_by
                ? (decryptText(user.created_by as unknown as string) as any)
                : null,
              updated_by: user.updated_by
                ? (decryptText(user.updated_by as unknown as string) as any)
                : null,
              inactivated_by: user.inactivated_by
                ? (decryptText(user.inactivated_by as unknown as string) as any)
                : null,
            }
          : null

        return {
          ...pd,
          pseudonym: pd.pseudonym
            ? { ...pd.pseudonym, user: decryptedUser }
            : null,
        }
      })

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
        pseudonyms,
        users,
        name: decryptText(d.name as unknown as string),
        created_by: decryptText(d.created_by as unknown as string),
        updated_by: decryptText(d.updated_by as unknown as string),
        inactivated_by: d.inactivated_by
          ? decryptText(d.inactivated_by as unknown as string)
          : null,
      }
    })

    mapped.sort((a, b) =>
      a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }),
    )

    return { items: mapped, total }
  }

  async findActiveWithUsers(channel?: 'EMAIL'): Promise<DepartmentWithUsers[]> {
    const rows = await this.prisma.department.findMany({
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

    let consentedSet: Set<string> | null = null
    if (channel === 'EMAIL') {
      const allPseudonymIds = Array.from(
        new Set(
          rows
            .flatMap((d) => d.pseudonyms || [])
            .map((pd) => pd.pseudonym?.id)
            .filter((id): id is string => Boolean(id)),
        ),
      )

      if (allPseudonymIds.length > 0) {
        const consented = await this.prisma.pseudonymChannelConsent.findMany({
          where: {
            pseudonym_id: { in: allPseudonymIds },
            channel: 'EMAIL',
            consented: true,
          },
          select: { pseudonym_id: true },
        })
        consentedSet = new Set(consented.map((c) => c.pseudonym_id))
      } else {
        consentedSet = new Set()
      }
    }

    const mapped = rows.map((d) => {
      const base = d.pseudonyms || []
      const filtered =
        channel === 'EMAIL' && consentedSet
          ? base.filter(
              (pd) => pd.pseudonym?.id && consentedSet!.has(pd.pseudonym.id),
            )
          : base

      const users = filtered
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
        created_by: decryptText(d.created_by as unknown as string),
        updated_by: decryptText(d.updated_by as unknown as string),
        inactivated_by: d.inactivated_by
          ? decryptText(d.inactivated_by as unknown as string)
          : null,
      }
    })

    return channel === 'EMAIL'
      ? mapped.filter((d) => d.users.length > 0)
      : mapped
  }

  async findOne(id: string): Promise<DepartmentWithUsers> {
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
      created_by: decryptText(departamento.created_by as unknown as string),
      updated_by: decryptText(departamento.updated_by as unknown as string),
      inactivated_by: decryptText(
        departamento.inactivated_by as unknown as string,
      ),
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
    await this.prisma.log.create({
      data: {
        entity: Entity.DEPARTMENT,
        entity_id: created.id,
        action: Action.CREATE,
        created_by: encryptText('system'),
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
      await this.prisma.log.create({
        data: {
          entity: Entity.DEPARTMENT,
          entity_id: id,
          action: Action.UPDATE,
          created_by: encryptText('system'),
        },
      })
      return {
        ...updated,
        name: decryptText(updated.name as unknown as string),
        created_by: decryptText(updated.created_by as unknown as string),
        updated_by: decryptText(updated.updated_by as unknown as string),
        inactivated_by: decryptText(
          updated.inactivated_by as unknown as string,
        ),
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
    await this.prisma.log.create({
      data: {
        entity: Entity.DEPARTMENT,
        entity_id: id,
        action: Action.UPDATE,
        created_by: encryptText('system'),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      created_by: decryptText(updated.created_by as unknown as string),
      updated_by: decryptText(updated.updated_by as unknown as string),
      inactivated_by: decryptText(updated.inactivated_by as unknown as string),
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
    await this.prisma.log.create({
      data: {
        entity: Entity.DEPARTMENT,
        entity_id: id,
        action: Action.DELETE,
        created_by: encryptText('system'),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      created_by: decryptText(updated.created_by as unknown as string),
      updated_by: decryptText(updated.updated_by as unknown as string),
      inactivated_by: decryptText(updated.inactivated_by as unknown as string),
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
      await this.prisma.log.create({
        data: {
          entity: Entity.DEPARTMENT,
          entity_id: departmentId,
          action: Action.UPDATE,
          created_by: encryptText('system'),
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
      await this.prisma.log.create({
        data: {
          entity: Entity.DEPARTMENT,
          entity_id: departmentId,
          action: Action.UPDATE,
          created_by: encryptText('system'),
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

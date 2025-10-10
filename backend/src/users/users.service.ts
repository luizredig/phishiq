import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { User } from 'prisma/generated/schema'

@Injectable()
export class UsersService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  findAll(includeInactive = false) {
    return this.prisma.user.findMany({
      where: includeInactive ? { is_active: false } : { is_active: true },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        created_at: true,
        updated_at: true,
        tenant_id: true,
        user_departments: {
          include: {
            department: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
    })
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        created_at: true,
        updated_at: true,
        tenant_id: true,
      },
    })
    if (!user) throw new NotFoundException('Usuário não encontrado')
    return user
  }

  async create(
    data: { name: string; email: string; roles?: string[] },
    meta: { tenantId: string; createdBy: string },
  ) {
    const temporaryPassword = Math.random().toString(36).slice(-12)
    const password_hash = await bcrypt.hash(temporaryPassword, 10)
    const created = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        roles: data.roles || ['user'],
        password_hash,
        created_by: meta.createdBy,
        updated_by: meta.createdBy,
        tenant_id: meta.tenantId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        tenant_id: true,
      },
    })
    return created
  }

  async update(
    id: string,
    data: { name?: string; roles?: string[]; is_active?: boolean },
    meta: { updatedBy: string },
  ) {
    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        roles: data.roles,
        is_active: data.is_active,
        updated_by: meta.updatedBy,
      },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        tenant_id: true,
      },
    })
    return updated
  }

  async updateStatus(id: string, is_active: boolean): Promise<User> {
    const exists = await this.prisma.user.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException()
    }

    return this.prisma.user.update({
      where: { id },
      data: {
        is_active,
        inactivated_by: is_active ? null : 'system',
        inactivated_at: is_active ? null : new Date(),
      },
    })
  }
}

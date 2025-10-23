import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaClient } from '../../prisma/generated/schema'
import * as bcrypt from 'bcrypt'
import { PhishingChannel, Action, Entity } from '../../prisma/generated/schema'
import { decryptText, encryptText, computeEmailSearch } from '../utils/crypto'

@Injectable()
export class UsersService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  findAll(includeInactive = false) {
    return this.prisma.user
      .findMany({
        where: includeInactive ? { is_active: false } : { is_active: true },
        select: {
          id: true,
          name: true,
          email: true,
          roles: true,
          is_active: true,
          created_at: true,
          inactivated_at: true,
          updated_at: true,
          tenant_id: true,
          created_by: true,
          updated_by: true,
          inactivated_by: true,
          pseudonym: {
            select: {
              pseudonym_departments: {
                include: {
                  department: true,
                },
              },
            },
          },
        },
        orderBy: { created_at: 'desc' },
      })
      .then((users) =>
        users.map((u) => ({
          ...u,
          name: decryptText(u.name as unknown as string),
          email: decryptText(u.email as unknown as string),
          tenant_id: decryptText(u.tenant_id as unknown as string),
          created_by: u.created_by
            ? decryptText(u.created_by as unknown as string)
            : null,
          updated_by: u.updated_by
            ? decryptText(u.updated_by as unknown as string)
            : null,
          inactivated_by: u.inactivated_by
            ? decryptText(u.inactivated_by as unknown as string)
            : null,
        })),
      )
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
        inactivated_at: true,
        updated_at: true,
        tenant_id: true,
        created_by: true,
        updated_by: true,
        inactivated_by: true,
      },
    })
    if (!user) throw new NotFoundException('Usuário não encontrado')
    return {
      ...user,
      name: decryptText(user.name as unknown as string),
      email: decryptText(user.email as unknown as string),
      tenant_id: decryptText(user.tenant_id as unknown as string),
      created_by: user.created_by
        ? decryptText(user.created_by as unknown as string)
        : null,
      updated_by: user.updated_by
        ? decryptText(user.updated_by as unknown as string)
        : null,
      inactivated_by: user.inactivated_by
        ? decryptText(user.inactivated_by as unknown as string)
        : null,
    }
  }

  

  async update(
    id: string,
    data: { name?: string; roles?: string[]; is_active?: boolean },
    meta: { updatedBy: string },
  ) {
    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        name: data.name != null ? encryptText(data.name) : undefined,
        roles: data.roles,
        is_active: data.is_active,
        updated_by: encryptText(meta.updatedBy),
      },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        tenant_id: true,
        created_at: true,
        updated_at: true,
        inactivated_at: true,
        created_by: true,
        updated_by: true,
        inactivated_by: true,
      },
    })
    await this.prisma.log.create({
      data: {
        entity: Entity.USER,
        entity_id: id,
        action: Action.UPDATE,
        created_by: encryptText(meta.updatedBy),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      email: decryptText(updated.email as unknown as string),
      tenant_id: decryptText(updated.tenant_id as unknown as string),
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

  async updateStatus(id: string, is_active: boolean) {
    const exists = await this.prisma.user.findUnique({
      where: { id },
    })

    if (!exists) {
      throw new NotFoundException()
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        is_active,
        inactivated_by: is_active ? null : encryptText('system'),
        inactivated_at: is_active ? null : new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        is_active: true,
        tenant_id: true,
        created_at: true,
        updated_at: true,
        inactivated_at: true,
        created_by: true,
        updated_by: true,
        inactivated_by: true,
      },
    })
    await this.prisma.log.create({
      data: {
        entity: Entity.USER,
        entity_id: id,
        action: Action.UPDATE,
        created_by: encryptText('system'),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      email: decryptText(updated.email as unknown as string),
      tenant_id: decryptText(updated.tenant_id as unknown as string),
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
}

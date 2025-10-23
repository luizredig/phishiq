import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import {
  PrismaClient,
  PhishingTemplate,
  Action,
  Entity,
} from '../../prisma/generated/schema'
import { encryptText, decryptText } from '../utils/crypto'

@Injectable()
export class PhishingTemplatesService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async findAll(includeInactive = false): Promise<PhishingTemplate[]> {
    return this.prisma.phishingTemplate
      .findMany({
        where: includeInactive ? { is_active: false } : { is_active: true },
        orderBy: { created_at: 'desc' },
      })
      .then((rows) =>
        rows.map((t) => ({
          ...t,
          name: decryptText(t.name as unknown as string),
          text: decryptText(t.text as unknown as string),
          created_by: decryptText(t.created_by as unknown as string),
          updated_by: decryptText(t.updated_by as unknown as string),
          inactivated_by: t.inactivated_by
            ? decryptText(t.inactivated_by as unknown as string)
            : null,
        })),
      )
  }

  async findOne(id: string): Promise<PhishingTemplate> {
    const t = await this.prisma.phishingTemplate.findUnique({ where: { id } })
    if (!t) throw new NotFoundException()
    return {
      ...t,
      name: decryptText(t.name as unknown as string),
      text: decryptText(t.text as unknown as string),
      created_by: decryptText(t.created_by as unknown as string),
      updated_by: decryptText(t.updated_by as unknown as string),
      inactivated_by: t.inactivated_by
        ? decryptText(t.inactivated_by as unknown as string)
        : null,
    }
  }

  async create(data: {
    name: string
    text: string

    createdBy?: string
  }): Promise<PhishingTemplate> {
    const created = await this.prisma.phishingTemplate.create({
      data: {
        name: encryptText(data.name),
        text: encryptText(data.text),
        created_by: encryptText(data.createdBy || 'system'),
        updated_by: encryptText(data.createdBy || 'system'),
      },
    })
    await this.prisma.log.create({
      data: {
        entity: Entity.PHISHING_TEMPLATE,
        entity_id: created.id,
        action: Action.CREATE,
        created_by: encryptText(data.createdBy || 'system'),
      },
    })
    return {
      ...created,
      name: decryptText(created.name as unknown as string),
      text: decryptText(created.text as unknown as string),
      created_by: decryptText(created.created_by as unknown as string),
      updated_by: decryptText(created.updated_by as unknown as string),
    }
  }

  async update(
    id: string,
    data: { name?: string; text?: string; thumbnail_url?: string | null },
    meta?: { updatedBy?: string },
  ): Promise<PhishingTemplate> {
    const exists = await this.prisma.phishingTemplate.findUnique({
      where: { id },
    })
    if (!exists) throw new NotFoundException()
    const updated = await this.prisma.phishingTemplate.update({
      where: { id },
      data: {
        name: data.name != null ? encryptText(data.name) : undefined,
        text: data.text != null ? encryptText(data.text) : undefined,
        updated_by: encryptText(meta?.updatedBy || 'system'),
      },
    })
    await this.prisma.log.create({
      data: {
        entity: Entity.PHISHING_TEMPLATE,
        entity_id: id,
        action: Action.UPDATE,
        created_by: encryptText(meta?.updatedBy || 'system'),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      text: decryptText(updated.text as unknown as string),
      created_by: decryptText(updated.created_by as unknown as string),
      updated_by: decryptText(updated.updated_by as unknown as string),
      inactivated_by: updated.inactivated_by
        ? decryptText(updated.inactivated_by as unknown as string)
        : null,
    }
  }

  async updateStatus(
    id: string,
    is_active: boolean,
  ): Promise<PhishingTemplate> {
    const exists = await this.prisma.phishingTemplate.findUnique({
      where: { id },
    })
    if (!exists) throw new NotFoundException()
    const updated = await this.prisma.phishingTemplate.update({
      where: { id },
      data: {
        is_active,
        inactivated_by: is_active ? null : encryptText('system'),
        inactivated_at: is_active ? null : new Date(),
      },
    })
    await this.prisma.log.create({
      data: {
        entity: Entity.PHISHING_TEMPLATE,
        entity_id: id,
        action: Action.UPDATE,
        created_by: encryptText('system'),
      },
    })
    return {
      ...updated,
      name: decryptText(updated.name as unknown as string),
      text: decryptText(updated.text as unknown as string),
      created_by: decryptText(updated.created_by as unknown as string),
      updated_by: decryptText(updated.updated_by as unknown as string),
      inactivated_by: updated.inactivated_by
        ? decryptText(updated.inactivated_by as unknown as string)
        : null,
    }
  }
}

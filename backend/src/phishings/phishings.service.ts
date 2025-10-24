import { Inject, Injectable } from '@nestjs/common'

import {
  Phishing,
  PhishingChannel,
  Action,
  Entity,
} from '../../prisma/generated/schema'
import { NodemailerService } from '../nodemailer/nodemailer.service'
import { PrismaClient } from '../../prisma/generated/schema'
import { decryptText, encryptText } from '../utils/crypto'
import { EmailProducerService } from '../email/email-producer.service'

@Injectable()
export class PhishingsService {
  constructor(
    @Inject('TENANT_PRISMA') private readonly prisma: PrismaClient,
    private nodemailerService: NodemailerService,
    private emailProducer: EmailProducerService,
  ) {}

  async findAll(includeInactive = false): Promise<Phishing[]> {
    return this.prisma.phishing
      .findMany({
        where: includeInactive ? { is_active: false } : { is_active: true },
        include: {
          departments: {
            include: {
              department: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
          pseudonym: {
            include: {
              user: {
                select: {
                  name: true,
                  email: true,
                },
              },
            },
          },
          template: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      })
      .then((rows) =>
        rows.map((p) => ({
          ...p,
          pseudonym: {
            user: {
              name: decryptText(p.pseudonym?.user?.name as unknown as string),
              email: decryptText(p.pseudonym?.user?.email as unknown as string),
            },
          },
          departments: p.departments.map((d) => ({
            departament: {
              id: d.department.id,
              name: decryptText(d.department.name as unknown as string),
            },
          })),
          template: {
            name: decryptText(p.template?.name as unknown as string),
          },
          created_by: decryptText(p.created_by as unknown as string),
          updated_by: decryptText(p.updated_by as unknown as string),
          inactivated_by: p.inactivated_by
            ? decryptText(p.inactivated_by as unknown as string)
            : null,
        })),
      )
  }

  async findOne(id: string): Promise<Phishing | null> {
    const row = await this.prisma.phishing.findUnique({
      where: { id },
      include: {
        departments: {
          include: {
            department: true,
          },
        },
      },
    })
    if (!row) return row
    return {
      ...row,
      created_by: decryptText(row.created_by as unknown as string),
      updated_by: decryptText(row.updated_by as unknown as string),
      inactivated_by: row.inactivated_by
        ? decryptText(row.inactivated_by as unknown as string)
        : null,
    }
  }

  async create(createTesteDto: {
    channel: PhishingChannel
    departments?: string[]
    userId?: string
    templateId?: string
    template_id?: string
  }) {
    const { channel, departments, userId } = createTesteDto
    const templateId = createTesteDto.template_id ?? createTesteDto.templateId

    const template = await this.prisma.phishingTemplate.findUnique({
      where: { id: templateId },
    })

    if (!template) {
      throw new Error('Template não encontrado')
    }

    if (departments && departments.length > 0) {
      const phishing = await this.prisma.phishing.create({
        data: {
          channel,
          status: 'SENT',
          departments: {
            create: departments?.map((departmentId) => ({
              department: {
                connect: {
                  id: departmentId,
                },
              },
              created_by: encryptText('system'),
              updated_by: encryptText('system'),
            })),
          },
          template: templateId
            ? {
                connect: { id: templateId },
              }
            : undefined,
          created_by: encryptText('system'),
          updated_by: encryptText('system'),
        },
        include: {
          departments: {
            include: {
              department: {
                include: {
                  pseudonyms: {
                    where: {
                      is_active: true,
                      pseudonym: {
                        is_active: true,
                      },
                    },
                    include: {
                      pseudonym: {
                        include: {
                          user: {
                            select: { name: true, email: true },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          template: true,
        },
      })

      await this.prisma.log.create({
        data: {
          entity: Entity.PHISHING,
          entity_id: phishing.id,
          action: Action.CREATE,
          created_by: encryptText('system'),
        },
      })

      // Envio por departamento (coleta e-mails dos usuários dos departamentos)
      try {
        const subject = phishing.template
          ? decryptText(phishing.template.name as unknown as string)
          : 'Simulação de Phishing'
        const body = phishing.template
          ? decryptText(phishing.template.text as unknown as string)
          : 'Você recebeu uma simulação de phishing.'

        const recipients = Array.from(
          new Set(
            phishing.departments.flatMap((d) =>
              (d.department.pseudonyms || [])
                .map((pd) => pd.pseudonym?.user?.email)
                .filter((enc): enc is string => Boolean(enc))
                .map((enc) => decryptText(enc as unknown as string)),
            ),
          ),
        )

        await this.emailProducer.enqueueBatches(recipients, {
          batchSize: 5,
          intervalMs: 30 * 60 * 1000,
          phishingId: phishing.id,
          subject,
          body,
        })
      } catch {}

      return {
        ...phishing,
        created_by: decryptText(phishing.created_by as unknown as string),
        updated_by: decryptText(phishing.updated_by as unknown as string),
        inactivated_by: phishing.inactivated_by
          ? decryptText(phishing.inactivated_by as unknown as string)
          : null,
      }
    }

    if (userId) {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: {
          pseudonym: {
            include: {
              pseudonym_departments: {
                include: {
                  department: true,
                },
              },
            },
          },
        },
      })

      if (!user) {
        throw new Error('Usuário não encontrado')
      }

      const phishing = await this.prisma.phishing.create({
        data: {
          channel,
          status: 'SENT',
          pseudonym: user?.pseudonym
            ? {
                connect: { id: user.pseudonym.id },
              }
            : undefined,
          template: templateId
            ? {
                connect: { id: templateId },
              }
            : undefined,
          created_by: encryptText('system'),
          updated_by: encryptText('system'),
        },
        include: {
          pseudonym: true,
          template: true,
        },
      })

      await this.prisma.log.create({
        data: {
          entity: Entity.PHISHING,
          entity_id: phishing.id,
          action: Action.CREATE,
          created_by: encryptText('system'),
        },
      })

      // Envio individual (descriptografar campos)
      try {
        const to = decryptText(user.email as unknown as string)
        const userName = decryptText(user.name as unknown as string)
        const subject = phishing.template
          ? decryptText(phishing.template.name as unknown as string)
          : 'Simulação de Phishing'
        const body = phishing.template
          ? decryptText(phishing.template.text as unknown as string)
          : 'Você recebeu uma simulação de phishing.'

        if (to) {
          await this.emailProducer.enqueueBatches([to], {
            batchSize: 1,
            intervalMs: 0,
            phishingId: phishing.id,
            subject,
            body,
          })
        }
      } catch {}

      return {
        ...phishing,
        created_by: decryptText(phishing.created_by as unknown as string),
        updated_by: decryptText(phishing.updated_by as unknown as string),
        inactivated_by: phishing.inactivated_by
          ? decryptText(phishing.inactivated_by as unknown as string)
          : null,
      }
    }

    throw new Error('É necessário informar departmentos ou usuário')
  }

  async remove(id: string): Promise<Phishing> {
    const updated = await this.prisma.phishing.update({
      where: { id },
      data: {
        is_active: false,
        inactivated_at: new Date(),
        inactivated_by: encryptText('system'),
      },
      include: {
        departments: {
          include: {
            department: true,
          },
        },
      },
    })
    await this.prisma.log.create({
      data: {
        entity: Entity.PHISHING,
        entity_id: id,
        action: Action.DELETE,
        created_by: encryptText('system'),
      },
    })
    return {
      ...updated,
      created_by: decryptText(updated.created_by as unknown as string),
      updated_by: decryptText(updated.updated_by as unknown as string),
      inactivated_by: updated.inactivated_by
        ? decryptText(updated.inactivated_by as unknown as string)
        : null,
    }
  }

  async updateResultado(
    id: string,
    data: {
      clicked: boolean
    },
  ): Promise<Phishing> {
    const before = await this.prisma.phishing.findUnique({
      where: { id },
      select: { clicked: true },
    })

    const row = await this.prisma.phishing.update({
      where: { id },
      data: {
        clicked: data.clicked,
      },
    })

    if (before && before.clicked === false && data.clicked === true) {
      await this.prisma.log.create({
        data: {
          entity: Entity.PHISHING,
          entity_id: id,
          action: Action.CLICKED,
          created_by: encryptText('system'),
        },
      })
    }
    return row
  }
}

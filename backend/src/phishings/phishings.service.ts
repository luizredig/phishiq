/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Inject, Injectable } from '@nestjs/common'

import {
  Phishing,
  PhishingChannel,
  PhishingStatus,
  Action,
  Entity,
} from '../../prisma/generated/schema'
import { NodemailerService } from '../nodemailer/nodemailer.service'
import { PrismaClient } from '../../prisma/generated/schema'
import { decryptText, encryptText } from '../utils/crypto'

@Injectable()
export class PhishingsService {
  constructor(
    @Inject('TENANT_PRISMA') private readonly prisma: PrismaClient,
    private nodemailerService: NodemailerService,
  ) {}

  async findAll(includeInactive = false): Promise<Phishing[]> {
    return this.prisma.phishing
      .findMany({
        where: includeInactive ? { is_active: false } : { is_active: true },
        include: {
          departments: {
            include: {
              department: true,
            },
          },

          pseudonym: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      })
      .then((rows) =>
        rows.map((p) => ({
          ...p,
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
    companyName: string
  }) {
    const { channel, departments, userId, companyName } = createTesteDto

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
                      pseudonym: true,
                    },
                  },
                },
              },
            },
          },
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

      // Envio por departamento
      // for (const departamento of teste.departments) {
      //   for (const usuarioDepartamento of departamento.department.usuarios) {
      //     if (usuarioDepartamento.usuario) {
      //       await this.nodemailerService.sendPhishingEmail(
      //         usuarioDepartamento.user.email,
      //         {
      //           nomeEmpresa: nomeEmpresa,
      //           urlLogoEmpresa: `${process.env.FRONTEND_URL}/logo-exemplo.png`,
      //           nomeUsuario: `${usuarioDepartamento.user.nome} ${usuarioDepartamento.user.sobrenome || ''}`,
      //           linkBotao: `${process.env.FRONTEND_URL}/phishing/${teste.id}`,
      //         },
      //       )
      //     }
      //   }
      // }

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
          created_by: encryptText('system'),
          updated_by: encryptText('system'),
        },
        include: {
          pseudonym: true,
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

      // Envio individual
      // await this.nodemailerService.sendPhishingEmail(user.email, {
      //   nomeEmpresa: companyName,
      //   urlLogoEmpresa: `${process.env.FRONTEND_URL}/logo-exemplo.png`,
      //   nomeUsuario: `${user.name} ${user.sobrenome || ''}`,
      //   linkBotao: `${process.env.FRONTEND_URL}/phishing/${phishing.id}`,
      // })

      return {
        ...phishing,
        created_by: decryptText(phishing.created_by as unknown as string),
        updated_by: decryptText(phishing.updated_by as unknown as string),
        inactivated_by: phishing.inactivated_by
          ? decryptText(phishing.inactivated_by as unknown as string)
          : null,
      }
    }

    throw new Error('É necessário informar departments ou usuário')
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
      reported: boolean
    },
  ): Promise<Phishing> {
    const row = await this.prisma.phishing.update({
      where: { id },
      data: {
        clicked: data.clicked,
        reported: data.reported,
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
        action: Action.UPDATE,
        created_by: encryptText('system'),
      },
    })
    return row
  }

  async updateStatusTeste(
    id: string,
    status: PhishingStatus,
  ): Promise<Phishing> {
    const row = await this.prisma.phishing.update({
      where: { id },
      data: {
        status,
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
        action: Action.UPDATE,
        created_by: encryptText('system'),
      },
    })
    return row
  }
}

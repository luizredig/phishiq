/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Inject, Injectable } from '@nestjs/common'

import {
  Phishing,
  PhishingChannel,
  PhishingStatus,
} from '../../prisma/generated/schema'
import { NodemailerService } from '../nodemailer/nodemailer.service'
import { PrismaClient } from '../../prisma/generated/schema'

@Injectable()
export class PhishingsService {
  constructor(
    @Inject('TENANT_PRISMA') private readonly prisma: PrismaClient,
    private nodemailerService: NodemailerService,
  ) {}

  async findAll(includeInactive = false): Promise<Phishing[]> {
    return this.prisma.phishing.findMany({
      where: includeInactive ? { is_active: false } : { is_active: true },
      include: {
        departments: {
          include: {
            department: true,
          },
        },
        user: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })
  }

  async findOne(id: string): Promise<Phishing | null> {
    return this.prisma.phishing.findUnique({
      where: { id },
      include: {
        departments: {
          include: {
            department: true,
          },
        },
      },
    })
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
              created_by: 'system',
              updated_by: 'system',
            })),
          },
          created_by: 'system',
          updated_by: 'system',
        },
        include: {
          departments: {
            include: {
              department: {
                include: {
                  users: {
                    where: {
                      is_active: true,
                      user: {
                        is_active: true,
                      },
                    },
                    include: {
                      user: true,
                    },
                  },
                },
              },
            },
          },
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

      return phishing
    }

    if (userId) {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: {
          user_departments: {
            include: {
              department: true,
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
          user: {
            connect: {
              id: userId,
            },
          },
          created_by: 'system',
          updated_by: 'system',
        },
        include: {
          user: true,
        },
      })

      // Envio individual
      // await this.nodemailerService.sendPhishingEmail(user.email, {
      //   nomeEmpresa: companyName,
      //   urlLogoEmpresa: `${process.env.FRONTEND_URL}/logo-exemplo.png`,
      //   nomeUsuario: `${user.name} ${user.sobrenome || ''}`,
      //   linkBotao: `${process.env.FRONTEND_URL}/phishing/${phishing.id}`,
      // })

      return phishing
    }

    throw new Error('É necessário informar departments ou usuário')
  }

  async remove(id: string): Promise<Phishing> {
    return this.prisma.phishing.update({
      where: { id },
      data: {
        is_active: false,
        inactivated_at: new Date(),
        inactivated_by: 'system',
      },
      include: {
        departments: {
          include: {
            department: true,
          },
        },
      },
    })
  }

  async updateResultado(
    id: string,
    data: {
      clicked: boolean
      reported: boolean
    },
  ): Promise<Phishing> {
    return this.prisma.phishing.update({
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
  }

  async updateStatusTeste(
    id: string,
    status: PhishingStatus,
  ): Promise<Phishing> {
    return this.prisma.phishing.update({
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
  }
}

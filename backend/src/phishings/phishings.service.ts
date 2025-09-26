/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Inject, Injectable } from '@nestjs/common'

import {
  Phishing,
  PhishingChannel,
  PhishingStatus,
} from '../../prisma/generated/schema'
import { NodemailerService } from '../nodemailer/nodemailer.service'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PhishingsService {
  constructor(
    @Inject('TENANT_PRISMA') private readonly prisma: PrismaClient,
    private nodemailerService: NodemailerService,
  ) {}

  async findAll(includeInactive = false): Promise<Phishing[]> {
    return this.prisma.teste.findMany({
      where: includeInactive ? { ativo: false } : { ativo: true },
      include: {
        departments: {
          include: {
            departamento: true,
          },
        },
        usuario: true,
      },
      orderBy: {
        criadoEm: 'desc',
      },
    })
  }

  async findOne(id: string): Promise<Phishing | null> {
    return this.prisma.teste.findUnique({
      where: { id },
      include: {
        departments: {
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async create(createTesteDto: {
    canal: PhishingChannel
    departments?: string[]
    usuarioId?: string
    nomeEmpresa: string
  }) {
    const { canal, departments, usuarioId, nomeEmpresa } = createTesteDto

    // Se tiver departments, cria o teste com os departments
    if (departments && departments.length > 0) {
      const teste = await this.prisma.phishing.create({
        data: {
          canal,
          status: 'ENVIADO',
          departments: {
            create: departments?.map((departamentoId) => ({
              departamento: {
                connect: {
                  id: departamentoId,
                },
              },
            })),
          },
        },
        include: {
          departments: {
            include: {
              departamento: {
                include: {
                  usuarios: {
                    where: {
                      ativo: true,
                      usuario: {
                        ativo: true,
                      },
                    },
                    include: {
                      usuario: true,
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
      //           linkBotao: `${process.env.FRONTEND_URL}/teste/${teste.id}`,
      //         },
      //       )
      //     }
      //   }
      // }

      return teste
    }

    // Se tiver usuário, cria o teste com o usuário
    if (usuarioId) {
      const usuario = await this.prisma.user.findUnique({
        where: { id: usuarioId },
        include: {
          departments: {
            include: {
              departamento: true,
            },
          },
        },
      })

      if (!usuario) {
        throw new Error('Usuário não encontrado')
      }

      const teste = await this.prisma.teste.create({
        data: {
          canal,
          status: 'ENVIADO',
          usuario: {
            connect: {
              id: usuarioId,
            },
          },
        },
        include: {
          usuario: true,
        },
      })

      // Envio individual
      // await this.nodemailerService.sendPhishingEmail(usuario.email, {
      //   nomeEmpresa: nomeEmpresa,
      //   urlLogoEmpresa: `${process.env.FRONTEND_URL}/logo-exemplo.png`,
      //   nomeUsuario: `${usuario.nome} ${usuario.sobrenome || ''}`,
      //   linkBotao: `${process.env.FRONTEND_URL}/teste/${teste.id}`,
      // })

      return teste
    }

    throw new Error('É necessário informar departments ou usuário')
  }

  async update(
    id: string,
    updateTesteDto: {
      canal?: PhishingChannel
      departments?: string[]
      usuarioId?: string
    },
  ) {
    const { canal, departments, usuarioId } = updateTesteDto

    // Primeiro, remove todas as relações existentes
    await this.prisma.phishing.update({
      where: { id },
      data: {
        departments: {
          deleteMany: {},
        },
        usuario: {
          disconnect: true,
        },
      },
    })

    // Depois, atualiza com as novas relações
    return this.prisma.phishing.update({
      where: { id },
      data: {
        ...(canal && { canal }),
        ...(departments && {
          departments: {
            create: departments?.map((departamentoId) => ({
              departamento: {
                connect: {
                  id: departamentoId,
                },
              },
            })),
          },
        }),
        ...(usuarioId && {
          usuario: {
            connect: {
              id: usuarioId,
            },
          },
        }),
      },
      include: {
        departments: {
          include: {
            departamento: true,
          },
        },
        usuario: true,
      },
    })
  }

  async remove(id: string): Promise<Phishing> {
    return this.prisma.phishing.update({
      where: { id },
      data: {
        ativo: false,
        inativadoEm: new Date(),
      },
      include: {
        departments: {
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async updateStatus(id: string, ativo: boolean): Promise<Phishing> {
    return this.prisma.phishing.update({
      where: { id },
      data: {
        ativo,
        inativadoEm: ativo ? null : new Date(),
        inativadoPor: ativo ? null : 'system',
      },
      include: {
        departments: {
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async updateResultado(
    id: string,
    data: {
      caiuNoTeste: boolean
      reportouPhishing: boolean
    },
  ): Promise<Phishing> {
    return this.prisma.phishing.update({
      where: { id },
      data: {
        caiuNoTeste: data.caiuNoTeste,
        reportouPhishing: data.reportouPhishing,
      },
      include: {
        departments: {
          include: {
            departamento: true,
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
            departamento: true,
          },
        },
      },
    })
  }
}

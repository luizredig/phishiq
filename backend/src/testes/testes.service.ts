/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Teste, CanalTeste, StatusTeste } from '@prisma/client'
import { NodemailerService } from '../nodemailer/nodemailer.service'

@Injectable()
export class TestesService {
  constructor(
    private prisma: PrismaService,
    private nodemailerService: NodemailerService,
  ) {}

  async findAll(includeInactive = false): Promise<Teste[]> {
    return this.prisma.teste.findMany({
      where: includeInactive ? { ativo: false } : { ativo: true },
      include: {
        departamentos: {
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

  async findOne(id: string): Promise<Teste | null> {
    return this.prisma.teste.findUnique({
      where: { id },
      include: {
        departamentos: {
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async create(createTesteDto: {
    canal: CanalTeste
    departamentos?: string[]
    usuarioId?: string
    nomeEmpresa: string
  }) {
    const { canal, departamentos, usuarioId, nomeEmpresa } = createTesteDto

    // Se tiver departamentos, cria o teste com os departamentos
    if (departamentos && departamentos.length > 0) {
      const teste = await this.prisma.teste.create({
        data: {
          canal,
          status: 'ENVIADO',
          departamentos: {
            create: departamentos.map((departamentoId) => ({
              departamento: {
                connect: {
                  id: departamentoId,
                },
              },
            })),
          },
        },
        include: {
          departamentos: {
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
      // for (const departamento of teste.departamentos) {
      //   for (const usuarioDepartamento of departamento.departamento.usuarios) {
      //     if (usuarioDepartamento.usuario) {
      //       await this.nodemailerService.sendPhishingEmail(
      //         usuarioDepartamento.usuario.email,
      //         {
      //           nomeEmpresa: nomeEmpresa,
      //           urlLogoEmpresa: `${process.env.FRONTEND_URL}/logo-exemplo.png`,
      //           nomeUsuario: `${usuarioDepartamento.usuario.nome} ${usuarioDepartamento.usuario.sobrenome || ''}`,
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
      const usuario = await this.prisma.usuario.findUnique({
        where: { id: usuarioId },
        include: {
          departamentos: {
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

    throw new Error('É necessário informar departamentos ou usuário')
  }

  async update(
    id: string,
    updateTesteDto: {
      canal?: CanalTeste
      departamentos?: string[]
      usuarioId?: string
    },
  ) {
    const { canal, departamentos, usuarioId } = updateTesteDto

    // Primeiro, remove todas as relações existentes
    await this.prisma.teste.update({
      where: { id },
      data: {
        departamentos: {
          deleteMany: {},
        },
        usuario: {
          disconnect: true,
        },
      },
    })

    // Depois, atualiza com as novas relações
    return this.prisma.teste.update({
      where: { id },
      data: {
        ...(canal && { canal }),
        ...(departamentos && {
          departamentos: {
            create: departamentos.map((departamentoId) => ({
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
        departamentos: {
          include: {
            departamento: true,
          },
        },
        usuario: true,
      },
    })
  }

  async remove(id: string): Promise<Teste> {
    return this.prisma.teste.update({
      where: { id },
      data: {
        ativo: false,
        inativadoEm: new Date(),
      },
      include: {
        departamentos: {
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async updateStatus(id: string, ativo: boolean): Promise<Teste> {
    return this.prisma.teste.update({
      where: { id },
      data: {
        ativo,
        inativadoEm: ativo ? null : new Date(),
        inativadoPor: ativo ? null : 'system',
      },
      include: {
        departamentos: {
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
  ): Promise<Teste> {
    return this.prisma.teste.update({
      where: { id },
      data: {
        caiuNoTeste: data.caiuNoTeste,
        reportouPhishing: data.reportouPhishing,
      },
      include: {
        departamentos: {
          include: {
            departamento: true,
          },
        },
      },
    })
  }

  async updateStatusTeste(id: string, status: StatusTeste): Promise<Teste> {
    return this.prisma.teste.update({
      where: { id },
      data: {
        status,
      },
      include: {
        departamentos: {
          include: {
            departamento: true,
          },
        },
      },
    })
  }
}

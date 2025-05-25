import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import {
  Teste,
  CanalTeste,
  StatusTeste,
  Usuario,
  Departamento,
} from '@prisma/client'
import { NodemailerService } from '../nodemailer/nodemailer.service'

interface UsuarioComDepartamentos extends Usuario {
  departamentos: {
    departamento: Departamento
  }[]
}

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

  async create(data: {
    canal: CanalTeste
    departamentos?: string[]
    usuarioId?: string
    campanhaId?: string
  }): Promise<Teste> {
    // Se tiver usuarioId, buscar informações do usuário
    let usuario: UsuarioComDepartamentos | null = null
    if (data.usuarioId) {
      usuario = await this.prisma.usuario.findUnique({
        where: { id: data.usuarioId },
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
    }

    // Se tiver campanhaId, verificar se a campanha existe
    if (data.campanhaId) {
      const campanha = await this.prisma.campanha.findUnique({
        where: { id: data.campanhaId },
      })

      if (!campanha) {
        throw new Error('Campanha não encontrada')
      }
    }

    // Criar o teste no banco
    const teste = await this.prisma.teste.create({
      data: {
        canal: data.canal,
        status: 'ENVIADO',
        departamentos: {
          create: data.departamentos
            ? data.departamentos.map((departamentoId) => ({
                departamento: {
                  connect: { id: departamentoId },
                },
              }))
            : usuario!.departamentos.map((ud) => ({
                departamento: {
                  connect: { id: ud.departamento.id },
                },
              })),
        },
        ...(data.campanhaId && {
          campanhas: {
            create: {
              campanha: {
                connect: { id: data.campanhaId },
              },
            },
          },
        }),
      },
      include: {
        departamentos: {
          include: {
            departamento: {
              include: {
                usuarios: {
                  include: {
                    usuario: true,
                  },
                },
              },
            },
          },
        },
        campanhas: {
          include: {
            campanha: true,
          },
        },
      },
    })

    // Enviar emails
    if (data.usuarioId && usuario) {
      // Envio individual
      await this.nodemailerService.sendPhishingEmail(usuario.email, {
        nomeEmpresa: usuario.departamentos[0]?.departamento.nome || 'Empresa',
        urlLogoEmpresa: `${process.env.FRONTEND_URL}/logo-exemplo.png`,
        nomeUsuario: `${usuario.nome} ${usuario.sobrenome}`,
        linkBotao: `${process.env.FRONTEND_URL}/teste/${teste.id}`,
      })
    } else {
      // Envio por departamento
      for (const departamento of teste.departamentos) {
        for (const usuarioDepartamento of departamento.departamento.usuarios) {
          const usuario = usuarioDepartamento.usuario

          await this.nodemailerService.sendPhishingEmail(usuario.email, {
            nomeEmpresa: departamento.departamento.nome,
            urlLogoEmpresa: `${process.env.FRONTEND_URL}/logo-exemplo.png`,
            nomeUsuario: `${usuario.nome} ${usuario.sobrenome}`,
            linkBotao: `${process.env.FRONTEND_URL}/teste/${teste.id}`,
          })
        }
      }
    }

    return teste
  }

  async update(
    id: string,
    data: {
      canal?: CanalTeste
      departamentos?: string[]
      usuarioId?: string
      campanhaId?: string
    },
  ): Promise<Teste> {
    const teste = await this.prisma.teste.findUnique({
      where: { id },
      include: {
        departamentos: true,
        campanhas: true,
      },
    })

    if (!teste) {
      throw new Error('Teste não encontrado')
    }

    // Se houver novos departamentos, atualiza as relações
    if (data.departamentos) {
      // Remove as relações antigas
      await this.prisma.testeDepartamento.deleteMany({
        where: { testeId: id },
      })

      // Cria as novas relações
      await this.prisma.testeDepartamento.createMany({
        data: data.departamentos.map((departamentoId) => ({
          testeId: id,
          departamentoId,
        })),
      })
    }

    // Se houver nova campanha, atualiza a relação
    if (data.campanhaId !== undefined) {
      // Remove as relações antigas
      await this.prisma.campanhaTeste.deleteMany({
        where: { testeId: id },
      })

      // Se tiver uma nova campanha, cria a relação
      if (data.campanhaId) {
        await this.prisma.campanhaTeste.create({
          data: {
            testeId: id,
            campanhaId: data.campanhaId,
          },
        })
      }
    }

    // Atualiza os dados do teste
    return this.prisma.teste.update({
      where: { id },
      data: {
        canal: data.canal,
      },
      include: {
        departamentos: {
          include: {
            departamento: true,
          },
        },
        campanhas: {
          include: {
            campanha: true,
          },
        },
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

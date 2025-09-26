import { Inject, Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DashboardService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async getStats() {
    const [
      totalTestes,
      testesSucesso,
      testesFalha,
      campanhasAtivas,
      testesPorDepartamento,
      usuariosMaisFalhas,
      departmentsMaisFalhas,
    ] = await Promise.all([
      this.prisma.phishing.count({
        where: { ativo: true },
      }),

      this.prisma.phishing.count({
        where: {
          ativo: true,
          caiuNoTeste: false,
        },
      }),

      this.prisma.phishing.count({
        where: {
          ativo: true,
          caiuNoTeste: true,
        },
      }),

      this.prisma.campanha.count({
        where: {
          ativo: true,
          status: 'EM_ANDAMENTO',
        },
      }),

      this.prisma.department.findMany({
        where: { ativo: true },
        select: {
          nome: true,
          testes: {
            where: {
              teste: {
                ativo: true,
                caiuNoTeste: true,
              },
            },
            select: {
              teste: {
                select: {
                  caiuNoTeste: true,
                },
              },
            },
          },
        },
      }),

      this.prisma.user.findMany({
        where: { ativo: true, cargo: 'FUNCIONARIO' },
        select: {
          id: true,
          nome: true,
          sobrenome: true,
          email: true,
          departments: {
            select: {
              departamento: {
                select: {
                  testes: {
                    where: { teste: { ativo: true, caiuNoTeste: true } },
                    select: {
                      teste: {
                        select: {
                          id: true,
                          caiuNoTeste: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        take: 5,
      }),

      this.prisma.department.findMany({
        where: {
          ativo: true,
          usuarios: {
            some: {
              usuario: {
                departments: {
                  some: {
                    departamento: {
                      testes: {
                        some: {
                          teste: {
                            ativo: true,
                            caiuNoTeste: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        select: {
          id: true,
          nome: true,
          testes: {
            where: { teste: { ativo: true, caiuNoTeste: true } },
            select: {
              teste: {
                select: {
                  id: true,
                  caiuNoTeste: true,
                },
              },
            },
          },
        },
        take: 5,
      }),
    ])

    const departmentsProcessados = testesPorDepartamento
      ?.map((dept) => {
        const falhas = dept.testes.length

        return {
          departamento: dept.nome,
          falhas,
        }
      })
      .sort((a, b) => b.falhas - a.falhas)

    const usuariosProcessados = usuariosMaisFalhas
      ?.map((usuario) => {
        const falhas = usuario.departments.reduce((acc, dept) => {
          return acc + dept.department.testes.length
        }, 0)

        return {
          id: usuario.id,
          nome: `${usuario.nome} ${usuario.sobrenome}`,
          email: usuario.email,
          falhas,
        }
      })
      ?.filter((usuario) => usuario.falhas > 0)
      .sort((a, b) => b.falhas - a.falhas)

    const departmentsFalhasProcessados = departmentsMaisFalhas
      ?.map((dept) => {
        const falhas = dept.testes.length

        return {
          id: dept.id,
          nome: dept.nome,
          falhas,
        }
      })
      .sort((a, b) => b.falhas - a.falhas)

    return {
      totalTestes,
      testesSucesso,
      testesFalha,
      campanhasAtivas,
      testesPorDepartamento: departmentsProcessados,
      usuariosMaisFalhas: usuariosProcessados,
      departmentsMaisFalhas: departmentsFalhasProcessados,
    }
  }
}

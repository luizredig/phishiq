import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const [
      totalTestes,
      testesSucesso,
      testesFalha,
      campanhasAtivas,
      testesPorDepartamento,
      usuariosMaisFalhas,
      departamentosMaisFalhas,
    ] = await Promise.all([
      // Total de testes
      this.prisma.teste.count({
        where: { ativo: true },
      }),

      // Testes bem sucedidos (não caíram no teste)
      this.prisma.teste.count({
        where: {
          ativo: true,
          caiuNoTeste: false,
        },
      }),

      // Testes mal sucedidos (caíram no teste)
      this.prisma.teste.count({
        where: {
          ativo: true,
          caiuNoTeste: true,
        },
      }),

      // Campanhas ativas
      this.prisma.campanha.count({
        where: {
          ativo: true,
          status: 'INICIADA',
        },
      }),

      // Testes por departamento
      this.prisma.departamento.findMany({
        where: { ativo: true },
        select: {
          nome: true,
          testes: {
            where: { teste: { ativo: true } },
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

      // Usuários com mais falhas
      this.prisma.usuario.findMany({
        where: { ativo: true, cargo: 'FUNCIONARIO' },
        select: {
          id: true,
          nome: true,
          sobrenome: true,
          email: true,
          departamentos: {
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

      // Departamentos com mais falhas
      this.prisma.departamento.findMany({
        where: {
          ativo: true,
          usuarios: {
            some: {
              usuario: {
                departamentos: {
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

    // Processa os dados dos departamentos
    const departamentosProcessados = testesPorDepartamento.map((dept) => {
      const total = dept.testes.length
      const sucesso = dept.testes.filter((t) => !t.teste.caiuNoTeste).length
      const falha = dept.testes.filter((t) => t.teste.caiuNoTeste).length

      return {
        departamento: dept.nome,
        total,
        sucesso,
        falha,
      }
    })

    // Processa os dados dos usuários com mais falhas
    const usuariosProcessados = usuariosMaisFalhas
      .map((usuario) => {
        const falhas = usuario.departamentos.reduce((acc, dept) => {
          return acc + dept.departamento.testes.length
        }, 0)

        return {
          id: usuario.id,
          nome: `${usuario.nome} ${usuario.sobrenome}`,
          email: usuario.email,
          falhas,
        }
      })
      .filter((usuario) => usuario.falhas > 0)
      .sort((a, b) => b.falhas - a.falhas)

    // Processa os dados dos departamentos com mais falhas
    const departamentosFalhasProcessados = departamentosMaisFalhas
      .map((dept) => {
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
      testesPorDepartamento: departamentosProcessados,
      usuariosMaisFalhas: usuariosProcessados,
      departamentosMaisFalhas: departamentosFalhasProcessados,
    }
  }
}

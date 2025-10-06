import { Inject, Injectable } from '@nestjs/common'
import { PrismaClient } from '../../prisma/generated/schema'

@Injectable()
export class DashboardService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async getStats() {
    const [
      totalTestes,
      testesSucesso,
      testesFalha,
      testesPorDepartamento,
      usuariosMaisFalhas,
      departmentsMaisFalhas,
    ] = await Promise.all([
      this.prisma.phishing.count({
        where: { is_active: true },
      }),

      this.prisma.phishing.count({
        where: {
          is_active: true,
          clicked: false,
        },
      }),

      this.prisma.phishing.count({
        where: {
          is_active: true,
          clicked: true,
        },
      }),

      this.prisma.department.findMany({
        where: { is_active: true },
        select: {
          name: true,
          phishings: {
            where: {
              phishing: {
                is_active: true,
                clicked: true,
              },
            },
            select: {
              phishing: {
                select: {
                  clicked: true,
                },
              },
            },
          },
        },
      }),

      this.prisma.user.findMany({
        where: { is_active: true },
        select: {
          id: true,
          name: true,
          email: true,
          user_departments: {
            select: {
              department: {
                select: {
                  phishings: {
                    where: { phishing: { is_active: true, clicked: true } },
                    select: {
                      phishing: {
                        select: {
                          id: true,
                          clicked: true,
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
          is_active: true,
        },
        select: {
          id: true,
          name: true,
          phishings: {
            where: { phishing: { is_active: true, clicked: true } },
            select: {
              phishing: {
                select: {
                  id: true,
                  clicked: true,
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
        const falhas = dept.phishings.length

        return {
          department: dept.name,
          falhas,
        }
      })
      .sort((a, b) => b.falhas - a.falhas)

    const usuariosProcessados = usuariosMaisFalhas
      ?.map((usuario) => {
        const falhas = usuario.user_departments.reduce((acc, dept) => {
          return acc + dept.department.phishings.length
        }, 0)

        return {
          id: usuario.id,
          name: `${usuario.name}`,
          email: usuario.email,
          falhas,
        }
      })
      ?.filter((usuario) => usuario.falhas > 0)
      .sort((a, b) => b.falhas - a.falhas)

    const departmentsFalhasProcessados = departmentsMaisFalhas
      ?.map((dept) => {
        const falhas = dept.phishings.length

        return {
          id: dept.id,
          name: dept.name,
          falhas,
        }
      })
      .sort((a, b) => b.falhas - a.falhas)

    return {
      totalTestes,
      testesSucesso,
      testesFalha,
      testesPorDepartamento: departmentsProcessados,
      usuariosMaisFalhas: usuariosProcessados,
      departmentsMaisFalhas: departmentsFalhasProcessados,
    }
  }
}

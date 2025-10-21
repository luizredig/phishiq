import { Inject, Injectable } from '@nestjs/common'
import { PrismaClient } from '../../prisma/generated/schema'
import { decryptText } from '../utils/crypto'

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

      this.prisma.pseudonym.findMany({
        where: { is_active: true },
        select: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              pseudonym: {
                select: {
                  pseudonym_departments: {
                    include: {
                      department: {
                        select: {
                          id: true,
                          name: true,
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

    const usuariosMaisFalhasDecrypted = usuariosMaisFalhas
      ?.map((row) =>
        row.user
          ? {
              ...row,
              user: {
                ...row.user,
                name: decryptText(row.user.name as unknown as string),
                email: decryptText(row.user.email as unknown as string),
              },
            }
          : row,
      )
      ?.filter((row) => Boolean(row.user))

    return {
      totalTestes,
      testesSucesso,
      testesFalha,
      testesPorDepartamento: departmentsProcessados,
      usuariosMaisFalhas: usuariosMaisFalhasDecrypted,
      departmentsMaisFalhas: departmentsFalhasProcessados,
    }
  }
}

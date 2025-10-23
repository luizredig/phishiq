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
      usuariosMaisFalhasRaw,
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
          pseudonym: {
            select: {
              phishings: {
                where: { is_active: true, clicked: true },
                select: { id: true },
              },
            },
          },
        },
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
          department: decryptText(dept.name as unknown as string),
          falhas,
        }
      })
      .filter((d) => d.falhas > 0)
      .sort((a, b) => b.falhas - a.falhas)

    const departmentsFalhasProcessados = departmentsMaisFalhas
      ?.map((dept) => {
        const falhas = dept.phishings.length

        return {
          id: dept.id,
          name: decryptText(dept.name as unknown as string),
          falhas,
        }
      })
      .filter((d) => d.falhas > 0)
      .sort((a, b) => b.falhas - a.falhas)

    const usuariosMaisFalhasDecrypted = usuariosMaisFalhasRaw
      ?.map((u) => ({
        user: {
          id: u.id,
          name: decryptText(u.name as unknown as string),
          email: decryptText(u.email as unknown as string),
        },
        falhas: u.pseudonym?.phishings?.length || 0,
      }))
      .filter((row) => row.falhas > 0)
      .sort((a, b) => b.falhas - a.falhas)
      .slice(0, 5)

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

import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Campanha, StatusCampanha } from '@prisma/client'

@Injectable()
export class CampanhasService {
  constructor(private prisma: PrismaService) {}

  async findAll(includeInactive = false): Promise<Campanha[]> {
    return this.prisma.campanha.findMany({
      where: {
        ativo: includeInactive ? false : true,
      },
      include: {
        testes: {
          include: {
            teste: true,
          },
        },
      },
    })
  }

  async findOne(id: string): Promise<Campanha | null> {
    return this.prisma.campanha.findUnique({
      where: { id },
      include: {
        testes: {
          include: {
            teste: true,
          },
        },
      },
    })
  }

  async create(data: {
    titulo: string
    descricao?: string
    status: StatusCampanha
  }): Promise<Campanha> {
    return this.prisma.campanha.create({
      data: {
        ...data,
        ativo: true,
      },
      include: {
        testes: {
          include: {
            teste: true,
          },
        },
      },
    })
  }

  async update(
    id: string,
    data: {
      titulo?: string
      descricao?: string
      status?: StatusCampanha
    },
  ): Promise<Campanha> {
    const campanha = await this.prisma.campanha.findUnique({
      where: { id },
    })

    if (!campanha) {
      throw new Error('Campanha não encontrada')
    }

    return this.prisma.campanha.update({
      where: { id },
      data,
      include: {
        testes: {
          include: {
            teste: true,
          },
        },
      },
    })
  }

  async remove(id: string): Promise<Campanha> {
    return this.prisma.campanha.update({
      where: { id },
      data: {
        ativo: false,
        inativadoEm: new Date(),
      },
      include: {
        testes: {
          include: {
            teste: true,
          },
        },
      },
    })
  }

  async updateStatus(id: string, ativo: boolean): Promise<Campanha> {
    return this.prisma.campanha.update({
      where: { id },
      data: {
        ativo,
        inativadoEm: ativo ? null : new Date(),
        inativadoPor: ativo ? null : 'system',
      },
      include: {
        testes: {
          include: {
            teste: true,
          },
        },
      },
    })
  }
}

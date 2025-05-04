import { Injectable } from '@nestjs/common'
import { PrismaMasterService } from 'src/prisma-master/prisma-master.service'
import { PrismaTenantService } from 'src/prisma-tenant/prisma-tenant.service'
import { CriarDepartamentoDto } from './dto/criar-departamento.dto'
import { AtualizarDepartamentoDto } from './dto/atualizar-departamento.dto'

@Injectable()
export class DepartamentoService {
  constructor(
    private readonly prismaMaster: PrismaMasterService,
    private readonly prismaTenant: PrismaTenantService,
  ) {}

  async getDepartamentos(realmName: string) {
    const empresa = await this.prismaMaster.empresa.findFirst({
      where: { realmName },
    })

    if (!empresa) {
      throw new Error('Empresa não encontrada para o realm informado')
    }

    return await this.prismaTenant.departamento.findMany({
      orderBy: {
        nome: 'asc',
      },
    })
  }

  async criarDepartamento(dto: CriarDepartamentoDto) {
    const { realm, ...dados } = dto

    const empresa = await this.prismaMaster.empresa.findFirst({
      where: { realmName: realm },
    })

    if (!empresa) {
      throw new Error('Empresa não encontrada para o realm informado')
    }

    const departamentoExistente =
      await this.prismaTenant.departamento.findFirst({
        where: {
          nome: dados.nome,
        },
      })

    if (departamentoExistente) {
      throw new Error('Departamento já existe')
    }
    const departamento = await this.prismaTenant.departamento.create({
      data: {
        ...dados,
      },
    })

    return departamento
  }

  async atualizarDepartamento(dto: AtualizarDepartamentoDto) {
    const { id, nome } = dto

    return await this.prismaTenant.departamento.update({
      where: { id },
      data: {
        nome,
      },
    })
  }

  async getDepartamentoById(id: string) {
    return await this.prismaTenant.departamento.findUnique({
      where: { id },
    })
  }

  async toggleDepartamentoStatus(id: string, ativo: boolean) {
    const departamentoAtualizado = await this.prismaTenant.departamento.update({
      where: { id },
      data: {
        ativo,
        deletadoEm: ativo ? null : new Date(),
      },
    })

    return departamentoAtualizado
  }
}

import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaMasterService } from 'src/prisma-master/prisma-master.service'
import { KeycloakService } from 'src/keycloak/keycloak.service'

@Injectable()
export class UsuarioService {
  constructor(
    private prismaMaster: PrismaMasterService,
    private keycloakService: KeycloakService,
  ) {}

  async create(dto: CreateUserDto & { realm: string }) {
    const { realm, ...dados } = dto

    const empresa = await this.prismaMaster.empresa.findFirst({
      where: { realmName: realm },
    })

    if (!empresa) {
      throw new Error('Empresa não encontrada para o realm informado')
    }

    const { id: userKeycloakId } =
      await this.keycloakService.cadastrarUsuarioEmRealmComSenhaTemp({
        realm,
        nome: dto.nome,
        email: dto.email,
      })

    const roleFuncionario = await this.keycloakService.buscarRoleNoRealm({
      realm,
      roleName: 'FUNCIONARIO',
    })

    if (!roleFuncionario) {
      throw new Error('Role FUNCIONARIO não encontrada no realm')
    }

    await this.keycloakService.adicionarRoleAoUsuario({
      realm,
      userId: userKeycloakId,
      role: { id: roleFuncionario.id!, name: roleFuncionario.name! },
    })

    return await this.prismaMaster.usuario.create({
      data: {
        nome: dados.nome,
        sobrenome: dados.sobrenome,
        email: dados.email,
        cargo: dados.cargo ?? 'FUNCIONARIO',
        empresa: {
          connect: {
            id: empresa.id,
          },
        },
      },
    })
  }

  async findAll(realmName: string) {
    return await this.prismaMaster.usuario.findMany({
      where: {
        empresa: {
          realmName,
        },
        email: {
          not: process.env.KEYCLOAK_ADMIN_EMAIL,
        },
        cargo: 'FUNCIONARIO',
      },
      orderBy: {
        nome: 'asc',
      },
    })
  }

  async findOne(id: string) {
    return await this.prismaMaster.usuario.findUnique({
      where: { id },
    })
  }

  async update(id: string, dto: UpdateUserDto & { realm: string }) {
    const { realm, ...dados } = dto

    const usuarioAtualizado = await this.prismaMaster.usuario.update({
      where: { id },
      data: {
        ...dados,
        editadoEm: new Date(),
      },
    })

    const userKC = await this.keycloakService.buscarUsuarioNoKeycloakPorEmail({
      realm,
      email: usuarioAtualizado.email,
    })

    if (userKC?.id) {
      await this.keycloakService.atualizarUsuarioEmRealm({
        realm,
        userId: userKC.id,
        nome: usuarioAtualizado.nome,
        email: usuarioAtualizado.email,
      })
    }

    return usuarioAtualizado
  }

  async remove(id: string) {
    return await this.prismaMaster.usuario.update({
      where: { id },
      data: {
        ativo: false,
        deletadoEm: new Date(),
      },
    })
  }

  async toggleStatus(id: string, ativo: boolean, realm: string) {
    const usuario = await this.prismaMaster.usuario.findUnique({
      where: { id },
    })

    if (!usuario) {
      throw new Error('Usuário não encontrado')
    }

    const empresa = await this.prismaMaster.empresa.findFirst({
      where: { realmName: realm },
    })

    if (!empresa || usuario.empresaId !== empresa.id) {
      throw new Error('Ação não autorizada para este realm')
    }

    const usuarioAtualizado = await this.prismaMaster.usuario.update({
      where: { id },
      data: {
        ativo,
        deletadoEm: ativo ? null : new Date(),
      },
    })

    const userKC = await this.keycloakService.buscarUsuarioNoKeycloakPorEmail({
      realm,
      email: usuario.email,
    })

    if (userKC) {
      await this.keycloakService.ativarOuInativarUsuario({
        realm,
        userId: userKC.id!,
        ativo,
      })
    } else {
      console.warn(
        `Usuário ${usuario.email} não encontrado no Keycloak no realm ${realm}`,
      )
    }

    return usuarioAtualizado
  }
}

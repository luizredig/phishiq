import { Injectable } from '@nestjs/common'
import KcAdminClient from 'keycloak-admin'
import { RequiredActionAlias } from 'keycloak-admin/lib/defs/requiredActionProviderRepresentation'
import { PrismaMasterService } from 'src/prisma-master/prisma-master.service'

@Injectable()
export class KeycloakService {
  private kcAdminClient: KcAdminClient

  constructor(private prismaMaster: PrismaMasterService) {}

  private async auth() {
    this.kcAdminClient = new KcAdminClient({
      baseUrl: process.env.KEYCLOAK_BASE_URL,
      realmName: process.env.KEYCLOAK_REALM,
    })

    await this.kcAdminClient.auth({
      username: process.env.KEYCLOAK_ADMIN_USERNAME,
      password: process.env.KEYCLOAK_ADMIN_PASSWORD,
      grantType: 'password',
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
    })
  }

  async criarRealm(body: { name: string; email: string; senha: string }) {
    await this.auth()

    let slug = this.sanitizarSlug(body.name)

    const slugExistente = await this.prismaMaster.empresa.findUnique({
      where: { slug },
    })

    if (slugExistente) {
      slug = await this.gerarSlugUnico(slug)
    }

    const emailExistente = await this.prismaMaster.empresa.findUnique({
      where: { email: body.email },
    })

    if (emailExistente) {
      return {
        success: false,
        emailExistente: true,
        statusCode: 409,
      }
    }

    const realmExiste = await this.kcAdminClient.realms.findOne({ realm: slug })

    if (!realmExiste) {
      await this.kcAdminClient.realms.create({
        realm: slug,
        enabled: true,
      })

      await this.kcAdminClient.realms.update(
        { realm: slug },
        {
          enabled: true,
          loginWithEmailAllowed: true,
          duplicateEmailsAllowed: false,
          editUsernameAllowed: false,
          registrationAllowed: false,
          resetPasswordAllowed: true,
          verifyEmail: false,
          defaultRoles: [],
        },
      )

      this.kcAdminClient.setConfig({ realmName: slug })

      await this.kcAdminClient.roles.create({
        name: 'ADMIN',
        description: 'Administrador do sistema',
      })

      await this.kcAdminClient.roles.create({
        name: 'FUNCIONARIO',
        description: 'Funcionário da empresa',
      })
    }

    await this.prismaMaster.empresa.create({
      data: {
        nome: body.name,
        slug,
        realmName: slug,
        email: body.email,
      },
    })

    return { success: true, slug }
  }

  async cadastrarUsuarioEmRealm({
    realm,
    nome,
    email,
    senha,
  }: {
    realm: string
    nome: string
    email: string
    senha: string
  }) {
    await this.auth()

    this.kcAdminClient.setConfig({ realmName: realm })

    const createdUser = await this.kcAdminClient.users.create({
      realm,
      username: email,
      email,
      emailVerified: true,
      enabled: true,
      firstName: nome,
      lastName: nome,
      credentials: [
        {
          type: 'password',
          value: senha,
          temporary: false,
        },
      ],
      requiredActions: [],
    })

    const roleAdmin = await this.buscarRoleNoRealm({
      realm,
      roleName: 'ADMIN',
    })

    if (!roleAdmin) {
      throw new Error('Role ADMIN não encontrada no realm')
    }

    await this.adicionarRoleAoUsuario({
      realm,
      userId: createdUser.id,
      role: {
        id: roleAdmin.id!,
        name: roleAdmin.name!,
      },
    })

    return createdUser
  }

  async cadastrarUsuarioNoBanco({
    realm,
    nome,
    email,
  }: {
    realm: string
    nome: string
    email: string
  }) {
    await this.auth()

    const empresa = await this.prismaMaster.empresa.findUnique({
      where: { slug: realm },
    })

    if (!empresa) {
      return {
        success: false,
        message: 'Realm não encontrado',
        statusCode: 404,
      }
    }

    await this.prismaMaster.usuario.create({
      data: {
        nome,
        email,
        empresa: {
          connect: { id: empresa.id },
        },
        cargo: 'ADMIN',
      },
    })
  }

  async criarGrupoSeNaoExiste(realm: string, nomeGrupo: string) {
    await this.auth()

    this.kcAdminClient.setConfig({ realmName: realm })

    const grupos = await this.kcAdminClient.groups.find()
    const grupoExiste = grupos.find((g) => g.name === nomeGrupo)

    if (grupoExiste) return grupoExiste

    const grupo = await this.kcAdminClient.groups.create({ name: nomeGrupo })
    return grupo
  }

  async adicionarUsuarioAoGrupo(
    realm: string,
    userId: string,
    groupId: string,
  ) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    await this.kcAdminClient.users.addToGroup({
      id: userId,
      groupId,
    })
  }

  async criarRole(realm: string, roleName: string, description = '') {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    const roles = await this.kcAdminClient.roles.find()
    const roleExiste = roles.find((r) => r.name === roleName)

    if (roleExiste) return roleExiste

    const role = await this.kcAdminClient.roles.create({
      name: roleName,
      description,
    })

    return role
  }

  private async gerarSlugUnico(baseSlug: string): Promise<string> {
    let slug = baseSlug
    let contador = 1

    while (true) {
      const existe = await this.prismaMaster.empresa.findUnique({
        where: { slug },
      })

      if (!existe) break

      slug = `${baseSlug}-${contador}`
      contador++
    }

    return slug
  }

  private sanitizarSlug(nome: string) {
    return nome
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }

  async encontrarRealmPorEmail(body: { email: string }) {
    await this.auth()

    const realms = await this.kcAdminClient.realms.find()

    for (const realm of realms) {
      try {
        this.kcAdminClient.setConfig({ realmName: realm.realm })

        const users = await this.kcAdminClient.users.find({
          email: body.email,
        })

        if (users && users.length > 0) {
          return {
            statusCode: 200,
            realm: realm.realm,
          }
        }
      } catch (err) {
        console.warn(`Erro ao verificar realm '${realm.realm}':`, err)
        continue
      }
    }

    return {
      statusCode: 404,
      message: 'Usuário não encontrado em nenhum realm.',
      error: 'Not Found',
    }
  }

  async criarClientNoRealm({
    realm,
    clientId,
    redirectUris = [],
    publicClient = true,
    serviceAccountsEnabled = false,
  }: {
    realm: string
    clientId: string
    redirectUris?: string[]
    publicClient?: boolean
    serviceAccountsEnabled?: boolean
  }) {
    await this.auth()

    this.kcAdminClient.setConfig({ realmName: realm })

    const clients = await this.kcAdminClient.clients.find({ clientId })
    if (clients.length > 0) {
      return clients[0]
    }

    const newClient = await this.kcAdminClient.clients.create({
      clientId,
      enabled: true,
      publicClient,
      redirectUris,
      webOrigins: ['*'],
      standardFlowEnabled: true,
      serviceAccountsEnabled,
      protocol: 'openid-connect',
      directAccessGrantsEnabled: true,
    })

    return newClient
  }

  async atualizarUsuarioEmRealm({
    realm,
    userId,
    nome,
    email,
  }: {
    realm: string
    userId: string
    nome: string
    email: string
  }) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    await this.kcAdminClient.users.update(
      { id: userId },
      {
        firstName: nome,
        email,
        username: email,
      },
    )
  }

  async ativarOuInativarUsuario({
    realm,
    userId,
    ativo,
  }: {
    realm: string
    userId: string
    ativo: boolean
  }) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    await this.kcAdminClient.users.update(
      { id: userId },
      {
        enabled: ativo,
      },
    )
  }

  async buscarUsuarioNoKeycloakPorEmail({
    realm,
    email,
  }: {
    realm: string
    email: string
  }) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    try {
      const users = await this.kcAdminClient.users.find({ email })

      if (users.length > 0) {
        return users[0]
      }

      return null
    } catch (err) {
      console.error(`Erro ao buscar usuário ${email} no realm ${realm}:`, err)
      return null
    }
  }

  async cadastrarUsuarioEmRealmComSenhaTemp({
    realm,
    nome,
    email,
  }: {
    realm: string
    nome: string
    email: string
  }) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    const anoAtual = new Date().getFullYear()

    const limparTexto = (texto: string) =>
      texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z]/g, '')

    const letras = limparTexto(nome).toUpperCase().slice(0, 2)
    const iniciais = letras.padEnd(2, 'X')

    const senhaTemp = `${iniciais}@${anoAtual}`

    const createdUser = await this.kcAdminClient.users.create({
      realm,
      username: email,
      email,
      emailVerified: true,
      enabled: true,
      firstName: nome,
      lastName: nome,
      credentials: [
        {
          type: 'password',
          value: senhaTemp,
          temporary: true,
        },
      ],
      requiredActions: [RequiredActionAlias.UPDATE_PASSWORD],
    })

    return {
      id: createdUser.id,
      senhaTemporaria: senhaTemp,
    }
  }

  async buscarRoleNoRealm({
    realm,
    roleName,
  }: {
    realm: string
    roleName: string
  }) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    try {
      return await this.kcAdminClient.roles.findOneByName({
        name: roleName,
      })
    } catch (error) {
      console.error(`Erro ao buscar role ${roleName} no realm ${realm}`, error)
      return null
    }
  }

  async adicionarRoleAoUsuario({
    realm,
    userId,
    role,
  }: {
    realm: string
    userId: string
    role: { id: string; name: string }
  }) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    await this.kcAdminClient.users.addRealmRoleMappings({
      id: userId,
      roles: [
        {
          id: role.id,
          name: role.name,
        },
      ],
    })
  }

  async removerRoleDoUsuario({
    realm,
    userId,
    role,
  }: {
    realm: string
    userId: string
    role: { id: string; name: string }
  }) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    await this.kcAdminClient.users.delRealmRoleMappings({
      id: userId,
      roles: [
        {
          id: role.id,
          name: role.name,
        },
      ],
    })
  }

  async logoutUser({ realm, userId }: { realm: string; userId: string }) {
    await this.auth()
    this.kcAdminClient.setConfig({ realmName: realm })

    try {
      await this.kcAdminClient.users.logout({ id: userId })
      return { success: true }
    } catch (error) {
      console.error(
        `Erro ao deslogar usuário ${userId} no realm ${realm}`,
        error,
      )
      throw new Error('Erro ao deslogar usuário.')
    }
  }

  async verificarEmpresaPorEmail(body: { email: string }) {
    await this.auth()

    const realms = await this.kcAdminClient.realms.find()

    for (const realm of realms) {
      try {
        this.kcAdminClient.setConfig({ realmName: realm.realm })

        const users = await this.kcAdminClient.users.find({
          email: body.email,
        })

        if (users && users.length > 0) {
          return {
            statusCode: 200,
            exists: true,
          }
        }
      } catch (err) {
        console.warn(`Erro ao verificar realm '${realm.realm}':`, err)
        continue
      }
    }

    return {
      statusCode: 200,
      exists: false,
    }
  }

  async verificarEmailEmRealm(body: { realm: string; email: string }) {
    await this.auth()

    this.kcAdminClient.setConfig({ realmName: body.realm })

    try {
      const users = await this.kcAdminClient.users.find({
        email: body.email,
      })

      if (users && users.length > 0) {
        return {
          statusCode: 200,
          exists: true,
        }
      }

      return {
        statusCode: 200,
        exists: false,
      }
    } catch (err) {
      console.error(`Erro ao verificar empresa no realm '${body.realm}':`, err)
      throw new Error(`Erro ao verificar empresa no realm '${body.realm}'`)
    }
  }
}

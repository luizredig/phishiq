/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, ConflictException } from '@nestjs/common'
import { KeycloakGateway } from './keycloak.gateway'
import KcAdminClient from 'keycloak-admin'
import { RoleMappingPayload } from 'keycloak-admin/lib/defs/roleRepresentation'
import ClientRepresentation from 'keycloak-admin/lib/defs/clientRepresentation'

@Injectable()
export class KeycloakService {
  constructor(private keycloakGateway: KeycloakGateway) {}

  private async getClient(): Promise<KcAdminClient> {
    const realm = process.env.KEYCLOAK_REALM || 'master'
    const kc = new KcAdminClient({
      baseUrl: process.env.KEYCLOAK_BASE_URL!,
      realmName: realm,
    })

    await kc.auth({
      username: process.env.KEYCLOAK_ADMIN_USERNAME!,
      password: process.env.KEYCLOAK_ADMIN_PASSWORD!,
      grantType: 'password',
      clientId: 'admin-cli',
    })

    return kc
  }

  async getUserById({ id }: { id: string }) {
    const kc = await this.getClient()
    return kc.users.findOne({ id })
  }

  async updateUser({ id, dto }: { id: string; dto: any }) {
    const kc = await this.getClient()

    await kc.users.update(
      { id },
      {
        firstName: dto.nome,
        email: dto.email,
        lastName: dto.sobrenome,
        enabled: dto.ativo,
        attributes: {},
      },
    )

    const user = await kc.users.findOne({ id })

    this.keycloakGateway.broadcast('kc_user_updated', user)

    return user
  }

  async deleteUser({ id }: { id: string }) {
    const kc = await this.getClient()

    await kc.users.del({ id })

    this.keycloakGateway.broadcast('kc_user_deleted', { id })

    return { success: true }
  }

  async userExistsByEmail(email: string): Promise<{
    statusCode: number
    exists: boolean
    clientId: string
  }> {
    const kc = await this.getClient()

    const users = await kc.users.find({ email })

    if (users.length > 0) {
      // Encontrar em qual client/grupo o usuário pertence
      const user = users[0]
      const groups = await kc.users.listGroups({ id: user.id! })

      if (groups.length > 0) {
        return {
          statusCode: 200,
          clientId: groups[0].name!,
          exists: true,
        }
      }
    }

    return {
      statusCode: 404,
      clientId: '',
      exists: false,
    }
  }

  async createUser({
    userData,
    clientId,
  }: {
    userData: any
    clientId: string
  }) {
    const kc = await this.getClient()

    if (!userData.firstName) {
      userData.firstName = userData.username || 'User'
    }

    if (!userData.lastName) {
      userData.lastName = userData.email?.split('@')[0] || 'LastName'
    }

    if (!userData.requiredActions) {
      userData.requiredActions = []
    }

    const userId = await kc.users.create(userData)
    const user = await kc.users.findOne({ id: userId.id })

    await this.addUserToClientGroup(userId.id, clientId)

    this.keycloakGateway.broadcast('kc_user_created', user)

    return user
  }

  async clientExists(clientId: string): Promise<boolean> {
    const kc = await this.getClient()
    const clients = await kc.clients.find({ clientId })
    return clients.length > 0
  }

  async getGroupByName(groupName: string) {
    const kc = await this.getClient()
    const groups = await kc.groups.find({ search: groupName })
    return groups.find((g) => g.name === groupName)
  }

  async createClientGroup(groupName: string) {
    const kc = await this.getClient()
    const existingGroup = await this.getGroupByName(groupName)

    if (!existingGroup) {
      const groupId = await kc.groups.create({ name: groupName })
      return groupId
    }

    return { id: existingGroup.id }
  }

  async addUserToClientGroup(userId: string, clientId: string) {
    const kc = await this.getClient()
    const group = await this.getGroupByName(clientId)

    if (group) {
      await kc.users.addToGroup({ id: userId, groupId: group.id! })
    } else {
      const newGroupId = await this.createClientGroup(clientId)
      await kc.users.addToGroup({
        id: userId,
        groupId: newGroupId.id as string,
      })
    }
  }

  async createClient(clientId: string, clientName: string): Promise<string> {
    const kc = await this.getClient()

    const clientConfig: ClientRepresentation = {
      clientId: clientId,
      name: clientName,
      enabled: true,
      publicClient: true,
      directAccessGrantsEnabled: true,
      standardFlowEnabled: true,
      redirectUris: [process.env.FRONTEND_URL + '/*'],
      webOrigins: [process.env.FRONTEND_URL!, '+'],
    }

    const client = await kc.clients.create(clientConfig)

    await this.createClientGroup(clientId)

    return client.id
  }

  async getOrCreateClient(companyName: string): Promise<string> {
    const clientId = companyName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

    const exists = await this.clientExists(clientId)

    if (!exists) {
      await this.createClient(clientId, companyName)
    }

    return clientId
  }

  async assignRoleToUser(userId: string, roleName: string): Promise<void> {
    const kc = await this.getClient()

    const roles = await kc.roles.find()
    const role = roles.find((r) => r.name === roleName)

    if (!role) {
      await kc.roles.create({
        name: roleName,
        description: `${roleName} role`,
      })
      const newRoles = await kc.roles.find()
      const newRole = newRoles.find((r) => r.name === roleName)

      if (newRole) {
        const roleMapping: RoleMappingPayload[] = [
          {
            id: newRole.id!,
            name: newRole.name!,
          },
        ]

        await kc.users.addRealmRoleMappings({
          id: userId,
          roles: roleMapping,
        })
      }
    } else {
      const roleMapping: RoleMappingPayload[] = [
        {
          id: role.id!,
          name: role.name!,
        },
      ]

      await kc.users.addRealmRoleMappings({
        id: userId,
        roles: roleMapping,
      })
    }
  }

  async getToken(username: string, password: string): Promise<string | null> {
    try {
      const realm = process.env.KEYCLOAK_REALM || 'master'

      const response = await fetch(
        `${process.env.KEYCLOAK_BASE_URL}/realms/${realm}/protocol/openid-connect/token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'password',
            client_id: process.env.KEYCLOAK_ADMIN_CLIENT_ID!,
            username,
            password,
          }).toString(),
        },
      )

      const data = await response.json()

      if (!response.ok) {
        console.error('Erro na resposta do Keycloak:', data)
        return null
      }

      return data.access_token
    } catch (error) {
      console.error('Erro ao obter token:', error)
      return null
    }
  }

  async registerCompany(formData: {
    email: string
    companyName: string
    password: string
  }): Promise<{ clientId: string; token?: string; userId: string }> {
    const { email, companyName, password } = formData

    try {
      const userExists = await this.userExistsByEmail(email)
      if (userExists.exists) {
        throw new ConflictException('Este email já está registrado')
      }

      const clientId = await this.getOrCreateClient(companyName)

      const emailParts = email.split('@')
      const namePart = emailParts[0] || ''

      let firstName = namePart
      let lastName = companyName || 'User'

      if (namePart.includes('.')) {
        const nameParts = namePart.split('.')
        firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1)
        lastName = nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1)
      }

      // Criar usuário admin
      const adminUser = await this.createUser({
        userData: {
          username: email,
          email,
          firstName,
          lastName,
          enabled: true,
          emailVerified: true,
          credentials: [
            {
              type: 'password',
              value: password,
              temporary: false,
            },
          ],
        },
        clientId,
      })

      try {
        await this.assignRoleToUser(adminUser.id as string, 'ADMINISTRADOR')
      } catch (err) {
        console.error('Erro ao atribuir role ADMINISTRADOR:', err)
      }

      // Criar usuário admindev
      try {
        const devAdminUser = await this.createUser({
          userData: {
            username: `${clientId}-${process.env.KEYCLOAK_ADMIN_USERNAME!}`,
            email:
              process.env.KEYCLOAK_ADMIN_EMAIL ||
              `${clientId}-${process.env.KEYCLOAK_ADMIN_USERNAME!}`,
            firstName: 'Admin',
            lastName: 'Keycloak',
            enabled: true,
            emailVerified: true,
            credentials: [
              {
                type: 'password',
                value: process.env.KEYCLOAK_ADMIN_PASSWORD!,
                temporary: false,
              },
            ],
          },
          clientId,
        })

        try {
          await this.assignRoleToUser(
            devAdminUser.id as string,
            'ADMINISTRADOR',
          )
        } catch (err) {
          console.error(
            'Erro ao atribuir role ADMINISTRADOR ao admin Keycloak:',
            err,
          )
        }
      } catch (error) {
        console.error('Erro ao criar usuário admin Keycloak:', error)
      }

      let token = null
      try {
        const tokenResponse = await fetch(
          `${process.env.KEYCLOAK_BASE_URL}/realms/${process.env.KEYCLOAK_REALM || 'master'}/protocol/openid-connect/token`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              grant_type: 'password',
              client_id: process.env.KEYCLOAK_ADMIN_CLIENT_ID!,
              username: email,
              password: password,
            }).toString(),
          },
        )

        if (tokenResponse.ok) {
          const tokenData = await tokenResponse.json()
          token = tokenData.access_token
        } else {
          console.error('Erro ao obter token:', await tokenResponse.text())
        }
      } catch (error) {
        console.error('Exceção ao tentar obter token:', error)
      }

      return {
        clientId,
        token: token as unknown as string,
        userId: adminUser.id as string,
      }
    } catch (error) {
      console.error('Erro ao registrar empresa:', error)
      throw error
    }
  }
}

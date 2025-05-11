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

@Injectable()
export class KeycloakService {
  constructor(private keycloakGateway: KeycloakGateway) {}

  private async getClient(realm: string): Promise<KcAdminClient> {
    try {
      const kc = new KcAdminClient({
        baseUrl: process.env.KEYCLOAK_BASE_URL!,
        realmName: realm,
      })

      if (realm === 'master') {
        await kc.auth({
          username: process.env.KEYCLOAK_ADMIN_USERNAME!,
          password: process.env.KEYCLOAK_ADMIN_PASSWORD!,
          grantType: 'password',
          clientId: 'admin-cli',
        })
      } else {
        const masterKc = new KcAdminClient({
          baseUrl: process.env.KEYCLOAK_BASE_URL!,
          realmName: 'master',
        })

        await masterKc.auth({
          username: process.env.KEYCLOAK_ADMIN_USERNAME!,
          password: process.env.KEYCLOAK_ADMIN_PASSWORD!,
          grantType: 'password',
          clientId: 'admin-cli',
        })

        kc.setAccessToken(masterKc.accessToken)
        kc.setConfig({ realmName: realm })
      }

      return kc
    } catch (error) {
      console.error(
        `Erro ao obter cliente Keycloak para realm ${realm}:`,
        error,
      )
      throw error
    }
  }

  private async getMasterClient(): Promise<KcAdminClient> {
    const kc = new KcAdminClient({
      baseUrl: process.env.KEYCLOAK_BASE_URL!,
      realmName: 'master',
    })

    await kc.auth({
      username: process.env.KEYCLOAK_ADMIN_USERNAME!,
      password: process.env.KEYCLOAK_ADMIN_PASSWORD!,
      grantType: 'password',
      clientId: 'admin-cli',
    })

    return kc
  }

  async getUserById({ realm, id }: { realm: string; id: string }) {
    const kc = await this.getClient(realm)
    return kc.users.findOne({ id })
  }

  async updateUser({
    realm,
    id,
    dto,
  }: {
    realm: string
    id: string
    dto: any
  }) {
    const kc = await this.getClient(realm)

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

  async deleteUser({ realm, id }: { realm: string; id: string }) {
    const kc = await this.getClient(realm)

    await kc.users.del({ id })

    this.keycloakGateway.broadcast('kc_user_deleted', { id })

    return { success: true }
  }

  async userExistsByEmail(
    email: string,
  ): Promise<{ statusCode: number; realm: string; exists: boolean }> {
    const kc = new KcAdminClient({ baseUrl: process.env.KEYCLOAK_BASE_URL! })

    await kc.auth({
      username: process.env.KEYCLOAK_ADMIN_USERNAME!,
      password: process.env.KEYCLOAK_ADMIN_PASSWORD!,
      grantType: 'password',
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
    })

    const realms = await kc.realms.find()

    for (const realm of realms) {
      try {
        kc.setConfig({ realmName: realm.realm })

        const users = await kc.users.find({ email })

        if (users.length > 0) {
          return {
            statusCode: 200,
            realm: realm.realm as string,
            exists: true,
          }
        }
      } catch (err) {
        console.warn(`Erro ao verificar realm '${realm.realm}':`, err)
        continue
      }
    }

    return {
      statusCode: 404,
      realm: '',
      exists: false,
    }
  }

  async createUser({ realm, userData }: { realm: string; userData: any }) {
    const kc = await this.getClient(realm)

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

    this.keycloakGateway.broadcast('kc_user_created', user)

    return user
  }

  async realmExists(realmName: string): Promise<boolean> {
    const kc = await this.getMasterClient()
    const realms = await kc.realms.find()
    return realms.some((realm) => realm.realm === realmName)
  }

  async createRealm(realmName: string, displayName: string): Promise<void> {
    const kc = await this.getMasterClient()

    await kc.realms.create({
      realm: realmName,
      enabled: true,
      displayName: displayName,
    })
  }

  async getOrCreateRealm(companyName: string): Promise<string> {
    const realmName = companyName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

    const exists = await this.realmExists(realmName)

    if (!exists) {
      await this.createRealm(realmName, companyName)
    }

    return realmName
  }

  async assignRoleToUser(
    realm: string,
    userId: string,
    roleName: string,
  ): Promise<void> {
    const kc = await this.getClient(realm)

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

  async getToken(
    realm: string,
    username: string,
    password: string,
  ): Promise<string | null> {
    try {
      const kc = await this.getClient(realm)

      const clients = await kc.clients.find({
        clientId: process.env.KEYCLOAK_CLIENT_ID!,
      })

      if (!clients || clients.length === 0) {
        console.log(
          `Criando client ${process.env.KEYCLOAK_CLIENT_ID} no realm ${realm}`,
        )

        await kc.clients.create({
          clientId: process.env.KEYCLOAK_CLIENT_ID!,
          enabled: true,
          publicClient: true,
          directAccessGrantsEnabled: true,
          standardFlowEnabled: true,
          redirectUris: [process.env.FRONTEND_URL + '/*'],
          webOrigins: [process.env.FRONTEND_URL!, '+'],
        })
      }

      const response = await fetch(
        `${process.env.KEYCLOAK_BASE_URL}/realms/${realm}/protocol/openid-connect/token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'password',
            client_id: process.env.KEYCLOAK_CLIENT_ID!,
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
  }): Promise<{ realm: string; token?: string; userId: string }> {
    const { email, companyName, password } = formData

    try {
      const userExists = await this.userExistsByEmail(email)
      if (userExists.exists) {
        throw new ConflictException('Este email já está registrado')
      }

      const realm = await this.getOrCreateRealm(companyName)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      const kc = await this.getClient(realm)

      try {
        const clients = await kc.clients.find({
          clientId: process.env.KEYCLOAK_CLIENT_ID,
        })

        if (!clients || clients.length === 0) {
          await kc.clients.create({
            clientId: process.env.KEYCLOAK_CLIENT_ID!,
            enabled: true,
            publicClient: true,
            directAccessGrantsEnabled: true,
            standardFlowEnabled: true,
            redirectUris: [process.env.FRONTEND_URL + '/*'],
            webOrigins: [process.env.FRONTEND_URL!, '+'],
          })
        }
      } catch (err) {
        console.error('Erro ao verificar/criar cliente:', err)
      }

      const emailParts = email.split('@')
      const namePart = emailParts[0] || ''

      let firstName = namePart
      let lastName = companyName || 'User'

      if (namePart.includes('.')) {
        const nameParts = namePart.split('.')
        firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1)
        lastName = nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1)
      }

      const adminUser = await this.createUser({
        realm,
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
      })

      try {
        await this.assignRoleToUser(
          realm,
          adminUser.id as string,
          'ADMINISTRADOR',
        )
      } catch (err) {
        console.error('Erro ao atribuir role ADMINISTRADOR:', err)
      }

      try {
        const devAdminUser = await this.createUser({
          realm,
          userData: {
            username: process.env.KEYCLOAK_ADMIN_USERNAME!,
            email:
              process.env.KEYCLOAK_ADMIN_EMAIL ||
              process.env.KEYCLOAK_ADMIN_USERNAME!,
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
        })

        try {
          await this.assignRoleToUser(
            realm,
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

      try {
        if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASS) {
          const devEmail = process.env.ADMIN_EMAIL

          const devUser = await this.createUser({
            realm,
            userData: {
              username: devEmail,
              email: devEmail,
              firstName: 'Developer',
              lastName: 'Admin',
              enabled: true,
              emailVerified: true,
              credentials: [
                {
                  type: 'password',
                  value: process.env.ADMIN_PASS,
                  temporary: false,
                },
              ],
            },
          })

          try {
            await this.assignRoleToUser(
              realm,
              devUser.id as string,
              'ADMINISTRADOR',
            )
          } catch (err) {
            console.error('Erro ao atribuir role ADMINISTRADOR ao dev:', err)
          }
        }
      } catch (error) {
        console.error('Erro ao criar usuário dev com ADMIN_EMAIL:', error)
      }

      let token = null
      try {
        const tokenResponse = await fetch(
          `${process.env.KEYCLOAK_BASE_URL}/realms/${realm}/protocol/openid-connect/token`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              grant_type: 'password',
              client_id: process.env.KEYCLOAK_CLIENT_ID!,
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
        realm,
        token: token as unknown as string,
        userId: adminUser.id as string,
      }
    } catch (error) {
      console.error('Erro ao registrar empresa:', error)
      throw error
    }
  }
}

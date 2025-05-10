/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common'
import { KeycloakGateway } from './keycloak.gateway'
import KcAdminClient from 'keycloak-admin'

@Injectable()
export class KeycloakService {
  private kcAdminClient: KcAdminClient

  constructor(private keycloakGateway: KeycloakGateway) {}

  private async auth() {
    this.kcAdminClient = new KcAdminClient({
      baseUrl: process.env.KEYCLOAK_URL,
      realmName: process.env.KEYCLOAK_REALM,
    })

    await this.kcAdminClient.auth({
      username: process.env.KEYCLOAK_REALM_USERNAME,
      password: process.env.KEYCLOAK_REALM_PASSWORD,
      grantType: 'password',
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
    })
  }

  async getUserById({ realm, id }: { realm: string; id: string }) {
    await this.auth()

    this.kcAdminClient.setConfig({ realmName: realm })

    const user = await this.kcAdminClient.users.findOne({ id })

    return user
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
    await this.auth()

    this.kcAdminClient.setConfig({ realmName: realm })

    const user = await this.kcAdminClient.users.update(
      { id },
      {
        firstName: dto.nome,
        email: dto.email,
        lastName: dto.sobrenome,
        enabled: dto.ativo,
        attributes: {},
      },
    )

    this.keycloakGateway.broadcast('kc_user_updated', user)

    return user
  }

  async deleteUser({ realm, id }: { realm: string; id: string }) {
    await this.auth()

    this.kcAdminClient.setConfig({ realmName: realm })

    await this.kcAdminClient.users.del({ id })

    this.keycloakGateway.broadcast('kc_user_deleted', { id })

    return { success: true }
  }

  async getAllUsers() {}

  async userExistsByEmail(
    email: string,
  ): Promise<{ statusCode: number; realm: string; exists: boolean }> {
    await this.auth()

    const realms = await this.kcAdminClient.realms.find()

    for (const realm of realms) {
      try {
        this.kcAdminClient.setConfig({ realmName: realm.realm })

        const users = await this.kcAdminClient.users.find({
          email,
        })

        if (users && users.length > 0) {
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
    await this.auth()

    this.kcAdminClient.setConfig({ realmName: realm })

    const userId = await this.kcAdminClient.users.create(userData)

    const user = await this.kcAdminClient.users.findOne({ id: userId.id })

    this.keycloakGateway.broadcast('kc_user_created', user)

    return user
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common'
import { KeycloakGateway } from './keycloak.gateway'
import KcAdminClient from 'keycloak-admin'

@Injectable()
export class KeycloakService {
  constructor(private keycloakGateway: KeycloakGateway) {}

  private async getClient(realm: string): Promise<KcAdminClient> {
    const kc = new KcAdminClient({
      baseUrl: process.env.KEYCLOAK_BASE_URL!,
      realmName: realm,
    })

    console.log(process.env.KEYCLOAK_ADMIN_USERNAME!)
    console.log(process.env.KEYCLOAK_ADMIN_PASSWORD!)

    await kc.auth({
      username: process.env.KEYCLOAK_ADMIN_USERNAME!,
      password: process.env.KEYCLOAK_ADMIN_PASSWORD!,
      grantType: 'password',
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
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

    const userId = await kc.users.create(userData)
    const user = await kc.users.findOne({ id: userId.id })

    this.keycloakGateway.broadcast('kc_user_created', user)

    return user
  }
}

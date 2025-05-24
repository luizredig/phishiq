/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import KeycloakAdminClient from '@keycloak/keycloak-admin-client'

export interface TokenResponse {
  access_token: string
  refresh_token: string
  expires_in: number
  refresh_expires_in: number
  token_type: string
}

@Injectable()
export class KeycloakService {
  private keycloakAdmin: KeycloakAdminClient

  constructor(private configService: ConfigService) {
    this.keycloakAdmin = new KeycloakAdminClient({
      baseUrl: process.env.KEYCLOAK_URL,
      realmName: 'master',
    })
  }

  async init() {
    await this.keycloakAdmin.auth({
      username: process.env.KEYCLOAK_ADMIN_USERNAME,
      password: process.env.KEYCLOAK_ADMIN_PASSWORD,
      grantType: 'password',
      clientId: 'admin-cli',
    })
  }

  async checkEmailExists(email: string): Promise<boolean> {
    try {
      await this.init()

      const users = await this.keycloakAdmin.users.find({
        realm: 'phishiq',
        email,
        exact: true,
      })

      return users.length > 0
    } catch (error) {
      console.error('Error checking email in Keycloak:', error)
      throw error
    }
  }

  async registerAdminUser(
    name: string,
    email: string,
    password: string,
  ): Promise<{ id: string }> {
    try {
      await this.init()

      const user = await this.keycloakAdmin.users.create({
        realm: 'phishiq',
        username: email,
        email,
        firstName: name,
        enabled: true,
        emailVerified: true,
        requiredActions: [],
        credentials: [
          {
            type: 'password',
            value: password,
            temporary: false,
          },
        ],
      })

      const adminRole = await this.keycloakAdmin.roles.findOneByName({
        realm: 'phishiq',
        name: 'ADMIN',
      })

      if (!adminRole || !adminRole.id || !adminRole.name) {
        throw new Error('ADMIN role not found in realm or is invalid')
      }

      await this.keycloakAdmin.users.addRealmRoleMappings({
        id: user.id,
        realm: 'phishiq',
        roles: [
          {
            id: adminRole.id,
            name: adminRole.name,
          },
        ],
      })

      return { id: user.id }
    } catch (error) {
      console.error('Error registering admin user in Keycloak:', error)
      throw error
    }
  }

  async registerUser(
    name: string,
    sobrenome: string,
    email: string,
  ): Promise<{ id: string }> {
    try {
      await this.init()

      const user = await this.keycloakAdmin.users.create({
        realm: 'phishiq',
        username: email,
        email,
        firstName: name,
        lastName: sobrenome,
        enabled: true,
        emailVerified: true,
        requiredActions: [],
        credentials: [
          {
            type: 'password',
            value: '123456',
            temporary: false,
          },
        ],
      })

      return { id: user.id }
    } catch (error) {
      console.error('Error registering user in Keycloak:', error)
      throw error
    }
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      await this.init()

      const response = await fetch(
        `${process.env.KEYCLOAK_URL}/realms/phishiq/protocol/openid-connect/token/introspect`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            token,
            client_id: 'phishiq-cli',
            client_secret: process.env.KEYCLOAK_CLIENT_SECRET || '',
          }),
        },
      )

      const data = await response.json()
      return data.active === true
    } catch (error) {
      console.error('Error verifying token:', error)
      return false
    }
  }

  async getUserInfo(token: string) {
    try {
      const userinfoUrl = `${process.env.KEYCLOAK_URL}/realms/phishiq/protocol/openid-connect/userinfo`

      const cleanToken = token.replace(/^Bearer\s+/i, '')
      const authHeader = `Bearer ${cleanToken}`

      const response = await fetch(userinfoUrl, {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to get user info')
      }

      const data = await response.json()

      return data
    } catch (error) {
      console.error('Error getting user info:', error)
      throw error
    }
  }

  async exchangeCodeForToken(code: string): Promise<TokenResponse> {
    try {
      const tokenUrl = `${process.env.KEYCLOAK_URL}/realms/phishiq/protocol/openid-connect/token`

      const params = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: 'phishiq-cli',
        client_secret: process.env.KEYCLOAK_CLIENT_SECRET || '',
        code,
        redirect_uri: 'http://localhost:1413/callback',
        scope: 'openid profile email',
      })

      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Token exchange failed:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
        })
        throw new Error('Failed to exchange code for token')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error exchanging code for token:', error)
      throw error
    }
  }

  async refreshToken(refreshToken: string): Promise<TokenResponse> {
    try {
      const tokenUrl = `${process.env.KEYCLOAK_URL}/realms/phishiq/protocol/openid-connect/token`

      const params = new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: 'phishiq-cli',
        client_secret: process.env.KEYCLOAK_CLIENT_SECRET || '',
        refresh_token: refreshToken,
      })

      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Token refresh failed:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
        })
        throw new Error('Failed to refresh token')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error refreshing token:', error)
      throw error
    }
  }

  async updateUser(
    keycloakId: string,
    data: {
      firstName?: string
      lastName?: string
      email?: string
    },
  ): Promise<void> {
    try {
      await this.init()

      await this.keycloakAdmin.users.update(
        {
          id: keycloakId,
          realm: 'phishiq',
        },
        {
          ...(data.firstName && { firstName: data.firstName }),
          ...(data.lastName && { lastName: data.lastName }),
          ...(data.email && { email: data.email, username: data.email }),
        },
      )
    } catch (error) {
      console.error('Error updating user in Keycloak:', error)
      throw error
    }
  }
}

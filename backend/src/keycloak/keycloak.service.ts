/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import KeycloakAdminClient from '@keycloak/keycloak-admin-client';

@Injectable()
export class KeycloakService {
  private keycloakAdmin: KeycloakAdminClient;

  constructor(private configService: ConfigService) {
    this.keycloakAdmin = new KeycloakAdminClient({
      baseUrl: process.env.KEYCLOAK_URL,
      realmName: 'master',
    });
  }

  async init() {
    await this.keycloakAdmin.auth({
      username: process.env.KEYCLOAK_ADMIN_USERNAME,
      password: process.env.KEYCLOAK_ADMIN_PASSWORD,
      grantType: 'password',
      clientId: 'admin-cli',
    });
  }

  async checkEmailExists(email: string): Promise<boolean> {
    try {
      await this.init();

      const users = await this.keycloakAdmin.users.find({
        realm: 'phishiq',
        email,
        exact: true,
      });

      return users.length > 0;
    } catch (error) {
      console.error('Error checking email in Keycloak:', error);
      throw error;
    }
  }

  async registerUser(
    name: string,
    email: string,
    password: string,
  ): Promise<void> {
    try {
      await this.init();

      await this.keycloakAdmin.users.create({
        realm: 'phishiq',
        username: email,
        email,
        firstName: name,
        enabled: true,
        credentials: [
          {
            type: 'password',
            value: password,
            temporary: false,
          },
        ],
        clientRoles: {
          'phishiq-cli': ['user'],
        },
      });
    } catch (error) {
      console.error('Error registering user in Keycloak:', error);
      throw error;
    }
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      await this.init();

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
      );

      const data = await response.json();
      return data.active === true;
    } catch (error) {
      console.error('Error verifying token:', error);
      return false;
    }
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common'
import {
  KeycloakConnectModule,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect'

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: process.env.KEYCLOAK_URL!,
      realm: process.env.KEYCLOAK_TENANT_REALM!,
      clientId: process.env.KEYCLOAK_BACKEND_CLIENT_ID!,
      secret: process.env.KEYCLOAK_BACKEND_CLIENT_SECRET!,
      useNestLogger: false,
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
    }),
  ],
  exports: [KeycloakConnectModule],
})
export class KeycloakAuthModule {}

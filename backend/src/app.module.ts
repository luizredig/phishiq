/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { KeycloakModule } from './keycloak/keycloak.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    KeycloakModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

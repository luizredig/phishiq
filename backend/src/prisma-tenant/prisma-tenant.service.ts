import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient as TenantPrismaClient } from '@prisma/client-tenant'

@Injectable()
export class PrismaTenantService
  extends TenantPrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({ datasources: { db: { url: process.env.TENANT_DATABASE_URL } } })
  }

  async onModuleInit() {
    await this.$connect()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}

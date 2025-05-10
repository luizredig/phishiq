/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class TenantService implements OnModuleDestroy {
  private clients: Map<string, PrismaService> = new Map()

  getClient(tenantId: string, dbUrl: string): PrismaService {
    if (this.clients.has(tenantId)) {
      return this.clients.get(tenantId)!
    }

    const client = new PrismaService({
      datasources: { db: { url: dbUrl } },
    })

    this.clients.set(tenantId, client)
    return client
  }

  async onModuleDestroy() {
    for (const client of this.clients.values()) {
      await client.$disconnect()
    }
  }
}

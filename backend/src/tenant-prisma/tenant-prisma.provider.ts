import { FactoryProvider, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { Request } from 'express'
import { PrismaClient } from '../../prisma/generated/schema'
import { TenantPrismaService } from './tenant-prisma.service'
import { MasterPrismaService } from '../master-prisma/master-prisma.service'

export const TenantPrismaProvider: FactoryProvider<PrismaClient> = {
  provide: 'TENANT_PRISMA',
  scope: Scope.REQUEST,
  inject: [REQUEST, TenantPrismaService, MasterPrismaService],
  useFactory: async (
    req: Request,
    tenantPrisma: TenantPrismaService,
    masterPrisma: MasterPrismaService,
  ) => {
    const slug = process.env.TENANT_SPEED

    const tenant = await masterPrisma.tenant.findUnique({
      where: { slug: slug },
      select: { id: true, slug: true },
    })

    if (!tenant) {
      throw new Error('Invalid tenant')
    }

    const normalized = tenant.slug.replaceAll('-', '_')
    return tenantPrisma.getClient(normalized)
  },
}

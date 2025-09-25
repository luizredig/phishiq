import { FactoryProvider, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { PrismaClient } from '../../prisma/generated/schema';
import { TenantPrismaService } from './tenant-prisma.service';
import { MasterPrismaService } from '../master-prisma/master-prisma.service';

export const TenantPrismaProvider: FactoryProvider<PrismaClient> = {
  provide: 'TENANT_PRISMA',
  scope: Scope.REQUEST,
  inject: [REQUEST, TenantPrismaService, MasterPrismaService],
  useFactory: async (
    req: Request,
    tenantPrisma: TenantPrismaService,
    masterPrisma: MasterPrismaService,
  ) => {
    const tenantIdOrSlug =
      (req as any)?.user?.tenant_id || req.headers['x-tenant-id'];
    if (!tenantIdOrSlug || typeof tenantIdOrSlug !== 'string') {
      throw new Error('Tenant ID is requiredddd');
    }

    let tenant = await masterPrisma.tenant.findUnique({
      where: { id: tenantIdOrSlug },
      select: { id: true, slug: true },
    });

    if (!tenant) {
      tenant = await masterPrisma.tenant.findUnique({
        where: { slug: tenantIdOrSlug },
        select: { id: true, slug: true },
      });
    }

    if (!tenant) {
      throw new Error('Invalid tenant');
    }

    const normalized = tenant.slug.replaceAll('-', '_');
    return tenantPrisma.getClient(normalized);
  },
};

import { Injectable } from '@nestjs/common';
import { MasterPrismaService } from '../master-prisma/master-prisma.service';

@Injectable()
export class LicensingService {
  constructor(private readonly masterPrisma: MasterPrismaService) {}

  async isModuleEnabledForTenant(
    tenantId: string,
    moduleSlug: string,
  ): Promise<boolean> {
    const module = await this.masterPrisma.module.findUnique({
      where: { slug: moduleSlug },
      select: { id: true, is_active: true },
    });

    if (!module || !module.is_active) {
      return false;
    }

    let tenant = await this.masterPrisma.tenant.findUnique({
      where: { id: tenantId },
      select: { id: true },
    });

    if (!tenant) {
      return false;
    }

    const link = await this.masterPrisma.tenantModule.findFirst({
      where: { tenant_id: tenant.id, module_id: module.id, is_active: true },
      select: { id: true },
    });

    return !!link;
  }
}

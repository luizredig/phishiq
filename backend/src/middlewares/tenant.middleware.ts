import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { MasterPrismaService } from '../master-prisma/master-prisma.service';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly masterPrisma: MasterPrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tenantIdOrSlug =
      (req as any)?.user?.tenant_id || req.headers['x-tenant-id'];

    if (!tenantIdOrSlug || typeof tenantIdOrSlug !== 'string') {
      throw new BadRequestException('Tenant ID is required');
    }

    let tenant = await this.masterPrisma.tenant.findUnique({
      where: { id: tenantIdOrSlug },
      select: { id: true, slug: true },
    });

    if (!tenant) {
      tenant = await this.masterPrisma.tenant.findUnique({
        where: { slug: tenantIdOrSlug },
        select: { id: true, slug: true },
      });
    }

    if (!tenant) {
      throw new BadRequestException('Invalid tenant');
    }

    req['tenantId'] = tenant.id;
    next();
  }
}

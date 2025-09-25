import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { LicensingService } from './licensing.service';
import { MODULE_ACCESS_KEY } from './module.decorator';

@Injectable()
export class LicensingGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly licensingService: LicensingService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const moduleSlug = this.reflector.getAllAndOverride<string>(
      MODULE_ACCESS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!moduleSlug) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    if (!request.user) {
      throw new UnauthorizedException('Missing authentication');
    }
    const tenantIdOrSlug =
      (request.user && request.user.tenant_id) ||
      request.headers['x-tenant-id'];

    if (!tenantIdOrSlug || typeof tenantIdOrSlug !== 'string') {
      throw new ForbiddenException('Invalid tenant');
    }

    const enabled = await this.licensingService.isModuleEnabledForTenant(
      tenantIdOrSlug,
      moduleSlug,
    );

    if (!enabled) {
      throw new ForbiddenException(
        'This module is not enabled for this tenant',
      );
    }

    return true;
  }
}

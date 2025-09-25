import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from './casl-ability.factory';
import { CHECK_POLICIES_KEY, PolicyHandler } from './policy.decorator';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const handlers = this.reflector.getAllAndOverride<PolicyHandler[]>(
      CHECK_POLICIES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!handlers || handlers.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    if (!request.user) {
      throw new UnauthorizedException('Missing authentication');
    }
    const user = request.user;

    const ability = this.caslAbilityFactory.createForUser(user);

    const allowed = handlers.every((handler) => handler(ability));

    if (!allowed) {
      throw new ForbiddenException();
    }

    return true;
  }
}

import { Injectable } from '@nestjs/common';
import { AbilityBuilder } from '@casl/ability';
import { PrismaAbility, createPrismaAbility } from '@casl/prisma';
import { Action } from './action.enum';
import { AppSubject } from './subject.enum';

export type AppSubjects = AppSubject.All | AppSubject.Fluxo;

export type AppAbility = PrismaAbility<[Action, AppSubjects]>;

export interface UserLike {
  id: string;
  roles?: string[];
}

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: UserLike): AppAbility {
    const { can, build } = new AbilityBuilder<AppAbility>(createPrismaAbility);

    const roles = (user.roles || []).map((r) => String(r).toLowerCase().trim());
    const isAdmin = roles.includes('admin');
    const isUser = roles.includes('user');

    if (isAdmin) {
      can(Action.Manage, AppSubject.All);
    } else if (isUser) {
      can(Action.Read, AppSubject.Fluxo);
      can(Action.Create, AppSubject.Fluxo);
      can(Action.Update, AppSubject.Fluxo, undefined, {
        owner_id: user.id,
      } as any);
      can(Action.Delete, AppSubject.Fluxo, undefined, {
        owner_id: user.id,
      } as any);
    }

    return build();
  }
}

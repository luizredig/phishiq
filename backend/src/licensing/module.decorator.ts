import { SetMetadata } from '@nestjs/common';

export const MODULE_ACCESS_KEY = 'module_access';

export const ModuleAccess = (slug: string) =>
  SetMetadata(MODULE_ACCESS_KEY, slug);

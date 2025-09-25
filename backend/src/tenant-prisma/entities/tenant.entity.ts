import { Tenant as PrismaTenant } from '../../../prisma/generated/master';

export class Tenant implements PrismaTenant {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
  created_by: string;
  created_at: Date;
  updated_by: string;
  updated_at: Date;
  inactivated_at: Date | null;
  inactivated_by: string | null;
}

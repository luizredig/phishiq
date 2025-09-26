import { User as PrismaUser } from '../../../prisma/generated/schema';

export class User implements PrismaUser {
  id: string;
  email: string;
  name: string;
  password: string;
  roles: string[];
  tenant_id: string;
  is_active: boolean;
  owner_id: string;
  created_at: Date;
  updated_by: string;
  updated_at: Date;
  inactivated_at: Date | null;
  inactivated_by: string | null;
}

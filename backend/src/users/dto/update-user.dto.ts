export class UpdateUserDto {
  name?: string;
  password?: string;
  roles?: string[];
  is_active?: boolean;
  inactivated_at?: Date | null;
  inactivated_by?: string | null;
}

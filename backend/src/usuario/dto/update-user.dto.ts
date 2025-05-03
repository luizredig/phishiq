import { z } from 'zod'
import { CreateUserSchema } from './create-user.dto'

export const UpdateUserSchema = CreateUserSchema.partial().extend({
  id: z.string().uuid('id deve ser um UUID'),
})

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>

export type UpdateUserWithRealmDto = UpdateUserDto & { realm: string }

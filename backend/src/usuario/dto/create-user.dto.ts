import { z } from 'zod'

export const CargoUsuarioEnum = z.enum(['ADMIN', 'FUNCIONARIO'])

export const CreateUserSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  sobrenome: z.string().optional(),
  email: z.string().email('Email inválido'),
  cargo: CargoUsuarioEnum.optional().default('FUNCIONARIO'),
  empresaId: z.string().uuid('empresaId deve ser um UUID'),
  criadoPor: z.string().optional(),
})

export type CreateUserDto = z.infer<typeof CreateUserSchema>

export type CreateUserWithRealmDto = CreateUserDto & { realm: string }

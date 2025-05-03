import { z } from 'zod'
import { CriarDepartamentoSchema } from './criar-departamento.dto'

export const AtualizarDepartamentoSchema =
  CriarDepartamentoSchema.partial().extend({
    id: z.string().uuid('id deve ser um UUID'),
    realm: z.string(),
  })

export type AtualizarDepartamentoDto = z.infer<
  typeof AtualizarDepartamentoSchema
>

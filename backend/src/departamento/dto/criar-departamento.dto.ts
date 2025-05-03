import { z } from 'zod'

export const CriarDepartamentoSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  realm: z.string().min(1, 'Realm é obrigatório'),
})

export type CriarDepartamentoDto = z.infer<typeof CriarDepartamentoSchema>

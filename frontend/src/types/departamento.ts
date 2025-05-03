import { Log } from './log'
import { TesteDepartamento } from './teste-departamento'

export interface Departamento {
  id: string
  nome: string
  empresaId?: string
  usuarios?: string[]
  testes?: TesteDepartamento[]
  logs?: Log[]
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type DepartamentoFormData = Omit<
  Departamento,
  | 'id'
  | 'empresaId'
  | 'ativo'
  | 'criadoEm'
  | 'editadoEm'
  | 'deletadoEm'
  | 'deletadoPor'
>

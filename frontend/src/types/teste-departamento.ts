import { Departamento } from "./departamento"
import { Teste } from "./teste"

export interface TesteDepartamento {
  id: string
  testeId: string
  departamentoId: string
  teste?: Teste
  departamento?: Departamento
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type TesteDepartamentoFormData = Omit<
  TesteDepartamento,
  'id' | 'ativo' | 'criadoEm' | 'editadoEm' | 'deletadoEm' | 'deletadoPor'
>

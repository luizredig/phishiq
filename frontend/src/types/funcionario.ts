import { DepartamentoFuncionario } from "./departamento-funcionario"
import { Log } from "./log"
import { Teste } from "./teste"

export interface Funcionario {
  id: string
  nome: string
  email?: string
  telefone?: string
  empresaId: string
  testes?: Teste[]
  departamentos?: DepartamentoFuncionario[]
  logs?: Log[]
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type FuncionarioFormData = Omit<
  Funcionario,
  'id' | 'ativo' | 'criadoEm' | 'editadoEm' | 'deletadoEm' | 'deletadoPor'
>

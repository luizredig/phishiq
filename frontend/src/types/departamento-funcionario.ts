import { Departamento } from "./departamento"
import { Funcionario } from "./funcionario"

export interface DepartamentoFuncionario {
  id: string
  departamentoId: string
  funcionarioId: string
  departamento?: Departamento
  funcionario?: Funcionario
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type DepartamentoFuncionarioFormData = Omit<
  DepartamentoFuncionario,
  'id' | 'ativo' | 'criadoEm' | 'editadoEm' | 'deletadoEm' | 'deletadoPor'
>

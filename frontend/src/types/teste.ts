import { CampanhaTeste } from "./campanha-teste"
import { CanalTeste } from "./canal-teste"
import { Funcionario } from "./funcionario"
import { Log } from "./log"
import { StatusTeste } from "./status-teste"
import { TesteDepartamento } from "./teste-departamento"

export interface Teste {
  id: string
  funcionarioId?: string
  funcionario?: Funcionario
  departamentos?: TesteDepartamento[]
  canal: CanalTeste
  status: StatusTeste
  caiuNoTeste?: boolean
  reportouPhishing?: boolean
  logs?: Log[]
  campanhas?: CampanhaTeste[]
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type TesteFormData = Omit<
  Teste,
  'id' | 'ativo' | 'criadoEm' | 'editadoEm' | 'deletadoEm' | 'deletadoPor'
>

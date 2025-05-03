import { Campanha } from "./campanha"
import { Departamento } from "./departamento"
import { Funcionario } from "./funcionario"
import { Teste } from "./teste"
import { TipoLog } from "./tipo-log"
import { TipoDeTeste } from "./tipo-teste"

export interface Log {
  id: string
  tipo: TipoLog
  descricao?: string
  empresaId: string
  criadoEm?: string
  editadoEm?: string
  deletadoEm?: string
  campanhaId?: string
  campanha?: Campanha
  departamentoId?: string
  departamento?: Departamento
  funcionarioId?: string
  funcionario?: Funcionario
  testeId?: string
  teste?: Teste
  tipoDeTesteId?: string
  tipoDeTeste?: TipoDeTeste
}

export type LogFormData = Omit<
  Log,
  'id' | 'criadoEm' | 'editadoEm' | 'deletadoEm'
>

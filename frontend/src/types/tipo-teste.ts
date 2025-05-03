import { Campanha } from "./campanha"
import { Log } from "./log"

export interface TipoDeTeste {
  id: string
  nome: string
  campanhas?: Campanha[]
  logs?: Log[]
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type TipoDeTesteFormData = Omit<
  TipoDeTeste,
  'id' | 'ativo' | 'criadoEm' | 'editadoEm' | 'deletadoEm' | 'deletadoPor'
>

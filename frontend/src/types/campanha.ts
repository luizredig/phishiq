import { CampanhaTeste } from "./campanha-teste"
import { Log } from "./log"
import { StatusCampanha } from "./status-campanha"
import { TipoDeTeste } from "./tipo-teste"

export interface Campanha {
  id: string
  titulo: string
  descricao?: string
  empresaId: string
  status: StatusCampanha
  logs?: Log[]
  tiposDeTeste?: TipoDeTeste[]
  testes?: CampanhaTeste[]
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type CampanhaFormData = Omit<
  Campanha,
  'id' | 'ativo' | 'criadoEm' | 'editadoEm' | 'deletadoEm' | 'deletadoPor'
>

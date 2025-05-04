import { Campanha } from "./campanha"
import { Teste } from "./teste"

export interface CampanhaTeste {
  id: string
  campanhaId: string
  testeId: string
  campanha?: Campanha
  teste?: Teste
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type CampanhaTesteFormData = Omit<
  CampanhaTeste,
  'id' | 'ativo' | 'criadoEm' | 'editadoEm' | 'deletadoEm' | 'deletadoPor'
>

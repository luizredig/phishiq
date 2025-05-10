import { Usuario } from './usuario';

export enum StatusAgendamento {
  PENDENTE = 'PENDENTE',
  APROVADO = 'APROVADO',
  RECUSADO = 'RECUSADO'
}

export interface Agendamento {
  id: string;
  titulo: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  status: StatusAgendamento;
  usuarioId: string;
  usuario?: Usuario;
  criadoEm: string;
  criadoPor?: string;
  atualizadoEm: string;
  atualizadoPor?: string;
} 
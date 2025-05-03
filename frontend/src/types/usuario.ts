export interface Usuario {
  id: string
  nome: string
  sobrenome?: string
  email: string
  cargo?: CargoUsuario
  empresaId?: string
  departamentos?: string[]
  ativo?: boolean
  criadoEm?: string
  criadoPor?: string
  editadoEm?: string
  editadoPor?: string
  deletadoEm?: string
  deletadoPor?: string
}

export type UsuarioFormData = Omit<
  Usuario,
  'id' | 'ativo' | 'criadoEm' | 'editadoEm' | 'deletadoEm' | 'deletadoPor'
>

export enum CargoUsuario {
  ADMIN = 'ADMIN',
  FUNCIONARIO = 'FUNCIONARIO',
}
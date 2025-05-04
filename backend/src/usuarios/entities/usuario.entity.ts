export class Usuario {
  id: string
  nome: string
  sobrenome?: string
  email: string
  cargo: CargoUsuario
  empresaId: string

  ativo: boolean
  criadoEm: Date
  criadoPor?: string
  editadoEm: Date
  editadoPor?: string
  deletadoEm?: Date
  deletadoPor?: string
}

export enum CargoUsuario {
  ADMIN = 'ADMIN',
  FUNCIONARIO = 'FUNCIONARIO',
}

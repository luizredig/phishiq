export interface Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  cargo: string;
  keycloakId: string;
  ativo: boolean;
  statusCadastro: "PENDENTE" | "APROVADO" | "RECUSADO";
  criadoEm: string;
}

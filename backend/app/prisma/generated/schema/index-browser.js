
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CampanhaTesteScalarFieldEnum = {
  id: 'id',
  campanhaId: 'campanhaId',
  testeId: 'testeId',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  criadoPor: 'criadoPor',
  atualizadoEm: 'atualizadoEm',
  atualizadoPor: 'atualizadoPor',
  inativadoEm: 'inativadoEm',
  inativadoPor: 'inativadoPor'
};

exports.Prisma.CampanhaScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  descricao: 'descricao',
  status: 'status',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  criadoPor: 'criadoPor',
  atualizadoEm: 'atualizadoEm',
  atualizadoPor: 'atualizadoPor',
  inativadoEm: 'inativadoEm',
  inativadoPor: 'inativadoPor'
};

exports.Prisma.DepartamentoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  criadoPor: 'criadoPor',
  atualizadoEm: 'atualizadoEm',
  atualizadoPor: 'atualizadoPor',
  inativadoEm: 'inativadoEm',
  inativadoPor: 'inativadoPor'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  descricao: 'descricao',
  campanhaId: 'campanhaId',
  departamentoId: 'departamentoId',
  testeId: 'testeId',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  criadoPor: 'criadoPor',
  atualizadoEm: 'atualizadoEm',
  atualizadoPor: 'atualizadoPor',
  inativadoEm: 'inativadoEm',
  inativadoPor: 'inativadoPor'
};

exports.Prisma.TesteDepartamentoScalarFieldEnum = {
  id: 'id',
  testeId: 'testeId',
  departamentoId: 'departamentoId',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  criadoPor: 'criadoPor',
  atualizadoEm: 'atualizadoEm',
  atualizadoPor: 'atualizadoPor',
  inativadoEm: 'inativadoEm',
  inativadoPor: 'inativadoPor'
};

exports.Prisma.TesteScalarFieldEnum = {
  id: 'id',
  canal: 'canal',
  status: 'status',
  caiuNoTeste: 'caiuNoTeste',
  reportouPhishing: 'reportouPhishing',
  usuarioId: 'usuarioId',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  criadoPor: 'criadoPor',
  atualizadoEm: 'atualizadoEm',
  atualizadoPor: 'atualizadoPor',
  inativadoEm: 'inativadoEm',
  inativadoPor: 'inativadoPor'
};

exports.Prisma.UsuarioDepartamentoScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  departamentoId: 'departamentoId',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  criadoPor: 'criadoPor',
  atualizadoEm: 'atualizadoEm',
  atualizadoPor: 'atualizadoPor',
  inativadoEm: 'inativadoEm',
  inativadoPor: 'inativadoPor'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  sobrenome: 'sobrenome',
  email: 'email',
  cargo: 'cargo',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  criadoPor: 'criadoPor',
  atualizadoEm: 'atualizadoEm',
  atualizadoPor: 'atualizadoPor',
  inativadoEm: 'inativadoEm',
  inativadoPor: 'inativadoPor'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.StatusCampanha = exports.$Enums.StatusCampanha = {
  INICIADA: 'INICIADA',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  FINALIZADA: 'FINALIZADA'
};

exports.TipoLog = exports.$Enums.TipoLog = {
  LOGIN: 'LOGIN',
  CRIACAO: 'CRIACAO',
  ATUALIZACAO: 'ATUALIZACAO',
  DELECAO: 'DELECAO',
  TESTE_ENVIADO: 'TESTE_ENVIADO',
  TESTE_CLICADO: 'TESTE_CLICADO',
  OUTRO: 'OUTRO'
};

exports.CanalTeste = exports.$Enums.CanalTeste = {
  EMAIL: 'EMAIL'
};

exports.StatusTeste = exports.$Enums.StatusTeste = {
  ENVIADO: 'ENVIADO',
  FALHA: 'FALHA'
};

exports.CargoUsuario = exports.$Enums.CargoUsuario = {
  ADMIN: 'ADMIN',
  FUNCIONARIO: 'FUNCIONARIO'
};

exports.Prisma.ModelName = {
  CampanhaTeste: 'CampanhaTeste',
  Campanha: 'Campanha',
  Departamento: 'Departamento',
  Log: 'Log',
  TesteDepartamento: 'TesteDepartamento',
  Teste: 'Teste',
  UsuarioDepartamento: 'UsuarioDepartamento',
  Usuario: 'Usuario'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

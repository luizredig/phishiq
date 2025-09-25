
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CampanhaTeste
 * 
 */
export type CampanhaTeste = $Result.DefaultSelection<Prisma.$CampanhaTestePayload>
/**
 * Model Campanha
 * 
 */
export type Campanha = $Result.DefaultSelection<Prisma.$CampanhaPayload>
/**
 * Model Departamento
 * 
 */
export type Departamento = $Result.DefaultSelection<Prisma.$DepartamentoPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model TesteDepartamento
 * 
 */
export type TesteDepartamento = $Result.DefaultSelection<Prisma.$TesteDepartamentoPayload>
/**
 * Model Teste
 * 
 */
export type Teste = $Result.DefaultSelection<Prisma.$TestePayload>
/**
 * Model UsuarioDepartamento
 * 
 */
export type UsuarioDepartamento = $Result.DefaultSelection<Prisma.$UsuarioDepartamentoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CanalTeste: {
  EMAIL: 'EMAIL'
};

export type CanalTeste = (typeof CanalTeste)[keyof typeof CanalTeste]


export const StatusCampanha: {
  INICIADA: 'INICIADA',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  FINALIZADA: 'FINALIZADA'
};

export type StatusCampanha = (typeof StatusCampanha)[keyof typeof StatusCampanha]


export const StatusTeste: {
  ENVIADO: 'ENVIADO',
  FALHA: 'FALHA'
};

export type StatusTeste = (typeof StatusTeste)[keyof typeof StatusTeste]


export const TipoLog: {
  LOGIN: 'LOGIN',
  CRIACAO: 'CRIACAO',
  ATUALIZACAO: 'ATUALIZACAO',
  DELECAO: 'DELECAO',
  TESTE_ENVIADO: 'TESTE_ENVIADO',
  TESTE_CLICADO: 'TESTE_CLICADO',
  OUTRO: 'OUTRO'
};

export type TipoLog = (typeof TipoLog)[keyof typeof TipoLog]


export const CargoUsuario: {
  ADMIN: 'ADMIN',
  FUNCIONARIO: 'FUNCIONARIO'
};

export type CargoUsuario = (typeof CargoUsuario)[keyof typeof CargoUsuario]

}

export type CanalTeste = $Enums.CanalTeste

export const CanalTeste: typeof $Enums.CanalTeste

export type StatusCampanha = $Enums.StatusCampanha

export const StatusCampanha: typeof $Enums.StatusCampanha

export type StatusTeste = $Enums.StatusTeste

export const StatusTeste: typeof $Enums.StatusTeste

export type TipoLog = $Enums.TipoLog

export const TipoLog: typeof $Enums.TipoLog

export type CargoUsuario = $Enums.CargoUsuario

export const CargoUsuario: typeof $Enums.CargoUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CampanhaTestes
 * const campanhaTestes = await prisma.campanhaTeste.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CampanhaTestes
   * const campanhaTestes = await prisma.campanhaTeste.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.campanhaTeste`: Exposes CRUD operations for the **CampanhaTeste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampanhaTestes
    * const campanhaTestes = await prisma.campanhaTeste.findMany()
    * ```
    */
  get campanhaTeste(): Prisma.CampanhaTesteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campanha`: Exposes CRUD operations for the **Campanha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campanhas
    * const campanhas = await prisma.campanha.findMany()
    * ```
    */
  get campanha(): Prisma.CampanhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departamento`: Exposes CRUD operations for the **Departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departamentos
    * const departamentos = await prisma.departamento.findMany()
    * ```
    */
  get departamento(): Prisma.DepartamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testeDepartamento`: Exposes CRUD operations for the **TesteDepartamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TesteDepartamentos
    * const testeDepartamentos = await prisma.testeDepartamento.findMany()
    * ```
    */
  get testeDepartamento(): Prisma.TesteDepartamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teste`: Exposes CRUD operations for the **Teste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testes
    * const testes = await prisma.teste.findMany()
    * ```
    */
  get teste(): Prisma.TesteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioDepartamento`: Exposes CRUD operations for the **UsuarioDepartamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioDepartamentos
    * const usuarioDepartamentos = await prisma.usuarioDepartamento.findMany()
    * ```
    */
  get usuarioDepartamento(): Prisma.UsuarioDepartamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CampanhaTeste: 'CampanhaTeste',
    Campanha: 'Campanha',
    Departamento: 'Departamento',
    Log: 'Log',
    TesteDepartamento: 'TesteDepartamento',
    Teste: 'Teste',
    UsuarioDepartamento: 'UsuarioDepartamento',
    Usuario: 'Usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campanhaTeste" | "campanha" | "departamento" | "log" | "testeDepartamento" | "teste" | "usuarioDepartamento" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CampanhaTeste: {
        payload: Prisma.$CampanhaTestePayload<ExtArgs>
        fields: Prisma.CampanhaTesteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampanhaTesteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampanhaTesteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>
          }
          findFirst: {
            args: Prisma.CampanhaTesteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampanhaTesteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>
          }
          findMany: {
            args: Prisma.CampanhaTesteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>[]
          }
          create: {
            args: Prisma.CampanhaTesteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>
          }
          createMany: {
            args: Prisma.CampanhaTesteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampanhaTesteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>[]
          }
          delete: {
            args: Prisma.CampanhaTesteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>
          }
          update: {
            args: Prisma.CampanhaTesteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>
          }
          deleteMany: {
            args: Prisma.CampanhaTesteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampanhaTesteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampanhaTesteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>[]
          }
          upsert: {
            args: Prisma.CampanhaTesteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaTestePayload>
          }
          aggregate: {
            args: Prisma.CampanhaTesteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampanhaTeste>
          }
          groupBy: {
            args: Prisma.CampanhaTesteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampanhaTesteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampanhaTesteCountArgs<ExtArgs>
            result: $Utils.Optional<CampanhaTesteCountAggregateOutputType> | number
          }
        }
      }
      Campanha: {
        payload: Prisma.$CampanhaPayload<ExtArgs>
        fields: Prisma.CampanhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampanhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampanhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          findFirst: {
            args: Prisma.CampanhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampanhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          findMany: {
            args: Prisma.CampanhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          create: {
            args: Prisma.CampanhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          createMany: {
            args: Prisma.CampanhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampanhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          delete: {
            args: Prisma.CampanhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          update: {
            args: Prisma.CampanhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          deleteMany: {
            args: Prisma.CampanhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampanhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampanhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          upsert: {
            args: Prisma.CampanhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          aggregate: {
            args: Prisma.CampanhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampanha>
          }
          groupBy: {
            args: Prisma.CampanhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampanhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampanhaCountArgs<ExtArgs>
            result: $Utils.Optional<CampanhaCountAggregateOutputType> | number
          }
        }
      }
      Departamento: {
        payload: Prisma.$DepartamentoPayload<ExtArgs>
        fields: Prisma.DepartamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findFirst: {
            args: Prisma.DepartamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findMany: {
            args: Prisma.DepartamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          create: {
            args: Prisma.DepartamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          createMany: {
            args: Prisma.DepartamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          delete: {
            args: Prisma.DepartamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          update: {
            args: Prisma.DepartamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          deleteMany: {
            args: Prisma.DepartamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          upsert: {
            args: Prisma.DepartamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          aggregate: {
            args: Prisma.DepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartamento>
          }
          groupBy: {
            args: Prisma.DepartamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartamentoCountArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      TesteDepartamento: {
        payload: Prisma.$TesteDepartamentoPayload<ExtArgs>
        fields: Prisma.TesteDepartamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TesteDepartamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TesteDepartamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>
          }
          findFirst: {
            args: Prisma.TesteDepartamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TesteDepartamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>
          }
          findMany: {
            args: Prisma.TesteDepartamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>[]
          }
          create: {
            args: Prisma.TesteDepartamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>
          }
          createMany: {
            args: Prisma.TesteDepartamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TesteDepartamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>[]
          }
          delete: {
            args: Prisma.TesteDepartamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>
          }
          update: {
            args: Prisma.TesteDepartamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>
          }
          deleteMany: {
            args: Prisma.TesteDepartamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TesteDepartamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TesteDepartamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>[]
          }
          upsert: {
            args: Prisma.TesteDepartamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TesteDepartamentoPayload>
          }
          aggregate: {
            args: Prisma.TesteDepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTesteDepartamento>
          }
          groupBy: {
            args: Prisma.TesteDepartamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TesteDepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TesteDepartamentoCountArgs<ExtArgs>
            result: $Utils.Optional<TesteDepartamentoCountAggregateOutputType> | number
          }
        }
      }
      Teste: {
        payload: Prisma.$TestePayload<ExtArgs>
        fields: Prisma.TesteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TesteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TesteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          findFirst: {
            args: Prisma.TesteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TesteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          findMany: {
            args: Prisma.TesteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          create: {
            args: Prisma.TesteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          createMany: {
            args: Prisma.TesteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TesteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          delete: {
            args: Prisma.TesteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          update: {
            args: Prisma.TesteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          deleteMany: {
            args: Prisma.TesteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TesteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TesteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          upsert: {
            args: Prisma.TesteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          aggregate: {
            args: Prisma.TesteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeste>
          }
          groupBy: {
            args: Prisma.TesteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TesteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TesteCountArgs<ExtArgs>
            result: $Utils.Optional<TesteCountAggregateOutputType> | number
          }
        }
      }
      UsuarioDepartamento: {
        payload: Prisma.$UsuarioDepartamentoPayload<ExtArgs>
        fields: Prisma.UsuarioDepartamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioDepartamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioDepartamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>
          }
          findFirst: {
            args: Prisma.UsuarioDepartamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioDepartamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>
          }
          findMany: {
            args: Prisma.UsuarioDepartamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>[]
          }
          create: {
            args: Prisma.UsuarioDepartamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>
          }
          createMany: {
            args: Prisma.UsuarioDepartamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioDepartamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDepartamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>
          }
          update: {
            args: Prisma.UsuarioDepartamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDepartamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioDepartamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioDepartamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioDepartamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDepartamentoPayload>
          }
          aggregate: {
            args: Prisma.UsuarioDepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioDepartamento>
          }
          groupBy: {
            args: Prisma.UsuarioDepartamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioDepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioDepartamentoCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioDepartamentoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    campanhaTeste?: CampanhaTesteOmit
    campanha?: CampanhaOmit
    departamento?: DepartamentoOmit
    log?: LogOmit
    testeDepartamento?: TesteDepartamentoOmit
    teste?: TesteOmit
    usuarioDepartamento?: UsuarioDepartamentoOmit
    usuario?: UsuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampanhaCountOutputType
   */

  export type CampanhaCountOutputType = {
    logs: number
    testes: number
  }

  export type CampanhaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | CampanhaCountOutputTypeCountLogsArgs
    testes?: boolean | CampanhaCountOutputTypeCountTestesArgs
  }

  // Custom InputTypes
  /**
   * CampanhaCountOutputType without action
   */
  export type CampanhaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaCountOutputType
     */
    select?: CampanhaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampanhaCountOutputType without action
   */
  export type CampanhaCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * CampanhaCountOutputType without action
   */
  export type CampanhaCountOutputTypeCountTestesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanhaTesteWhereInput
  }


  /**
   * Count Type DepartamentoCountOutputType
   */

  export type DepartamentoCountOutputType = {
    testes: number
    logs: number
    usuarios: number
  }

  export type DepartamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testes?: boolean | DepartamentoCountOutputTypeCountTestesArgs
    logs?: boolean | DepartamentoCountOutputTypeCountLogsArgs
    usuarios?: boolean | DepartamentoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartamentoCountOutputType
     */
    select?: DepartamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountTestesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteDepartamentoWhereInput
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDepartamentoWhereInput
  }


  /**
   * Count Type TesteCountOutputType
   */

  export type TesteCountOutputType = {
    departamentos: number
    logs: number
    campanhas: number
  }

  export type TesteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamentos?: boolean | TesteCountOutputTypeCountDepartamentosArgs
    logs?: boolean | TesteCountOutputTypeCountLogsArgs
    campanhas?: boolean | TesteCountOutputTypeCountCampanhasArgs
  }

  // Custom InputTypes
  /**
   * TesteCountOutputType without action
   */
  export type TesteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteCountOutputType
     */
    select?: TesteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TesteCountOutputType without action
   */
  export type TesteCountOutputTypeCountDepartamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteDepartamentoWhereInput
  }

  /**
   * TesteCountOutputType without action
   */
  export type TesteCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * TesteCountOutputType without action
   */
  export type TesteCountOutputTypeCountCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanhaTesteWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    departamentos: number
    testes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamentos?: boolean | UsuarioCountOutputTypeCountDepartamentosArgs
    testes?: boolean | UsuarioCountOutputTypeCountTestesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDepartamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDepartamentoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTestesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CampanhaTeste
   */

  export type AggregateCampanhaTeste = {
    _count: CampanhaTesteCountAggregateOutputType | null
    _min: CampanhaTesteMinAggregateOutputType | null
    _max: CampanhaTesteMaxAggregateOutputType | null
  }

  export type CampanhaTesteMinAggregateOutputType = {
    id: string | null
    campanhaId: string | null
    testeId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type CampanhaTesteMaxAggregateOutputType = {
    id: string | null
    campanhaId: string | null
    testeId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type CampanhaTesteCountAggregateOutputType = {
    id: number
    campanhaId: number
    testeId: number
    ativo: number
    criadoEm: number
    criadoPor: number
    atualizadoEm: number
    atualizadoPor: number
    inativadoEm: number
    inativadoPor: number
    _all: number
  }


  export type CampanhaTesteMinAggregateInputType = {
    id?: true
    campanhaId?: true
    testeId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type CampanhaTesteMaxAggregateInputType = {
    id?: true
    campanhaId?: true
    testeId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type CampanhaTesteCountAggregateInputType = {
    id?: true
    campanhaId?: true
    testeId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
    _all?: true
  }

  export type CampanhaTesteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampanhaTeste to aggregate.
     */
    where?: CampanhaTesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampanhaTestes to fetch.
     */
    orderBy?: CampanhaTesteOrderByWithRelationInput | CampanhaTesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampanhaTesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampanhaTestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampanhaTestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampanhaTestes
    **/
    _count?: true | CampanhaTesteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampanhaTesteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampanhaTesteMaxAggregateInputType
  }

  export type GetCampanhaTesteAggregateType<T extends CampanhaTesteAggregateArgs> = {
        [P in keyof T & keyof AggregateCampanhaTeste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampanhaTeste[P]>
      : GetScalarType<T[P], AggregateCampanhaTeste[P]>
  }




  export type CampanhaTesteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanhaTesteWhereInput
    orderBy?: CampanhaTesteOrderByWithAggregationInput | CampanhaTesteOrderByWithAggregationInput[]
    by: CampanhaTesteScalarFieldEnum[] | CampanhaTesteScalarFieldEnum
    having?: CampanhaTesteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampanhaTesteCountAggregateInputType | true
    _min?: CampanhaTesteMinAggregateInputType
    _max?: CampanhaTesteMaxAggregateInputType
  }

  export type CampanhaTesteGroupByOutputType = {
    id: string
    campanhaId: string
    testeId: string
    ativo: boolean
    criadoEm: Date
    criadoPor: string | null
    atualizadoEm: Date
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
    _count: CampanhaTesteCountAggregateOutputType | null
    _min: CampanhaTesteMinAggregateOutputType | null
    _max: CampanhaTesteMaxAggregateOutputType | null
  }

  type GetCampanhaTesteGroupByPayload<T extends CampanhaTesteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampanhaTesteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampanhaTesteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampanhaTesteGroupByOutputType[P]>
            : GetScalarType<T[P], CampanhaTesteGroupByOutputType[P]>
        }
      >
    >


  export type CampanhaTesteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campanhaId?: boolean
    testeId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    teste?: boolean | TesteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanhaTeste"]>

  export type CampanhaTesteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campanhaId?: boolean
    testeId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    teste?: boolean | TesteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanhaTeste"]>

  export type CampanhaTesteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campanhaId?: boolean
    testeId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    teste?: boolean | TesteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanhaTeste"]>

  export type CampanhaTesteSelectScalar = {
    id?: boolean
    campanhaId?: boolean
    testeId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }

  export type CampanhaTesteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campanhaId" | "testeId" | "ativo" | "criadoEm" | "criadoPor" | "atualizadoEm" | "atualizadoPor" | "inativadoEm" | "inativadoPor", ExtArgs["result"]["campanhaTeste"]>
  export type CampanhaTesteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    teste?: boolean | TesteDefaultArgs<ExtArgs>
  }
  export type CampanhaTesteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    teste?: boolean | TesteDefaultArgs<ExtArgs>
  }
  export type CampanhaTesteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    teste?: boolean | TesteDefaultArgs<ExtArgs>
  }

  export type $CampanhaTestePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampanhaTeste"
    objects: {
      campanha: Prisma.$CampanhaPayload<ExtArgs>
      teste: Prisma.$TestePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campanhaId: string
      testeId: string
      ativo: boolean
      criadoEm: Date
      criadoPor: string | null
      atualizadoEm: Date
      atualizadoPor: string | null
      inativadoEm: Date | null
      inativadoPor: string | null
    }, ExtArgs["result"]["campanhaTeste"]>
    composites: {}
  }

  type CampanhaTesteGetPayload<S extends boolean | null | undefined | CampanhaTesteDefaultArgs> = $Result.GetResult<Prisma.$CampanhaTestePayload, S>

  type CampanhaTesteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampanhaTesteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampanhaTesteCountAggregateInputType | true
    }

  export interface CampanhaTesteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampanhaTeste'], meta: { name: 'CampanhaTeste' } }
    /**
     * Find zero or one CampanhaTeste that matches the filter.
     * @param {CampanhaTesteFindUniqueArgs} args - Arguments to find a CampanhaTeste
     * @example
     * // Get one CampanhaTeste
     * const campanhaTeste = await prisma.campanhaTeste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampanhaTesteFindUniqueArgs>(args: SelectSubset<T, CampanhaTesteFindUniqueArgs<ExtArgs>>): Prisma__CampanhaTesteClient<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampanhaTeste that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampanhaTesteFindUniqueOrThrowArgs} args - Arguments to find a CampanhaTeste
     * @example
     * // Get one CampanhaTeste
     * const campanhaTeste = await prisma.campanhaTeste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampanhaTesteFindUniqueOrThrowArgs>(args: SelectSubset<T, CampanhaTesteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampanhaTesteClient<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampanhaTeste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaTesteFindFirstArgs} args - Arguments to find a CampanhaTeste
     * @example
     * // Get one CampanhaTeste
     * const campanhaTeste = await prisma.campanhaTeste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampanhaTesteFindFirstArgs>(args?: SelectSubset<T, CampanhaTesteFindFirstArgs<ExtArgs>>): Prisma__CampanhaTesteClient<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampanhaTeste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaTesteFindFirstOrThrowArgs} args - Arguments to find a CampanhaTeste
     * @example
     * // Get one CampanhaTeste
     * const campanhaTeste = await prisma.campanhaTeste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampanhaTesteFindFirstOrThrowArgs>(args?: SelectSubset<T, CampanhaTesteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampanhaTesteClient<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampanhaTestes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaTesteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampanhaTestes
     * const campanhaTestes = await prisma.campanhaTeste.findMany()
     * 
     * // Get first 10 CampanhaTestes
     * const campanhaTestes = await prisma.campanhaTeste.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campanhaTesteWithIdOnly = await prisma.campanhaTeste.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampanhaTesteFindManyArgs>(args?: SelectSubset<T, CampanhaTesteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampanhaTeste.
     * @param {CampanhaTesteCreateArgs} args - Arguments to create a CampanhaTeste.
     * @example
     * // Create one CampanhaTeste
     * const CampanhaTeste = await prisma.campanhaTeste.create({
     *   data: {
     *     // ... data to create a CampanhaTeste
     *   }
     * })
     * 
     */
    create<T extends CampanhaTesteCreateArgs>(args: SelectSubset<T, CampanhaTesteCreateArgs<ExtArgs>>): Prisma__CampanhaTesteClient<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampanhaTestes.
     * @param {CampanhaTesteCreateManyArgs} args - Arguments to create many CampanhaTestes.
     * @example
     * // Create many CampanhaTestes
     * const campanhaTeste = await prisma.campanhaTeste.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampanhaTesteCreateManyArgs>(args?: SelectSubset<T, CampanhaTesteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampanhaTestes and returns the data saved in the database.
     * @param {CampanhaTesteCreateManyAndReturnArgs} args - Arguments to create many CampanhaTestes.
     * @example
     * // Create many CampanhaTestes
     * const campanhaTeste = await prisma.campanhaTeste.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampanhaTestes and only return the `id`
     * const campanhaTesteWithIdOnly = await prisma.campanhaTeste.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampanhaTesteCreateManyAndReturnArgs>(args?: SelectSubset<T, CampanhaTesteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampanhaTeste.
     * @param {CampanhaTesteDeleteArgs} args - Arguments to delete one CampanhaTeste.
     * @example
     * // Delete one CampanhaTeste
     * const CampanhaTeste = await prisma.campanhaTeste.delete({
     *   where: {
     *     // ... filter to delete one CampanhaTeste
     *   }
     * })
     * 
     */
    delete<T extends CampanhaTesteDeleteArgs>(args: SelectSubset<T, CampanhaTesteDeleteArgs<ExtArgs>>): Prisma__CampanhaTesteClient<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampanhaTeste.
     * @param {CampanhaTesteUpdateArgs} args - Arguments to update one CampanhaTeste.
     * @example
     * // Update one CampanhaTeste
     * const campanhaTeste = await prisma.campanhaTeste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampanhaTesteUpdateArgs>(args: SelectSubset<T, CampanhaTesteUpdateArgs<ExtArgs>>): Prisma__CampanhaTesteClient<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampanhaTestes.
     * @param {CampanhaTesteDeleteManyArgs} args - Arguments to filter CampanhaTestes to delete.
     * @example
     * // Delete a few CampanhaTestes
     * const { count } = await prisma.campanhaTeste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampanhaTesteDeleteManyArgs>(args?: SelectSubset<T, CampanhaTesteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampanhaTestes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaTesteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampanhaTestes
     * const campanhaTeste = await prisma.campanhaTeste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampanhaTesteUpdateManyArgs>(args: SelectSubset<T, CampanhaTesteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampanhaTestes and returns the data updated in the database.
     * @param {CampanhaTesteUpdateManyAndReturnArgs} args - Arguments to update many CampanhaTestes.
     * @example
     * // Update many CampanhaTestes
     * const campanhaTeste = await prisma.campanhaTeste.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampanhaTestes and only return the `id`
     * const campanhaTesteWithIdOnly = await prisma.campanhaTeste.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampanhaTesteUpdateManyAndReturnArgs>(args: SelectSubset<T, CampanhaTesteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampanhaTeste.
     * @param {CampanhaTesteUpsertArgs} args - Arguments to update or create a CampanhaTeste.
     * @example
     * // Update or create a CampanhaTeste
     * const campanhaTeste = await prisma.campanhaTeste.upsert({
     *   create: {
     *     // ... data to create a CampanhaTeste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampanhaTeste we want to update
     *   }
     * })
     */
    upsert<T extends CampanhaTesteUpsertArgs>(args: SelectSubset<T, CampanhaTesteUpsertArgs<ExtArgs>>): Prisma__CampanhaTesteClient<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampanhaTestes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaTesteCountArgs} args - Arguments to filter CampanhaTestes to count.
     * @example
     * // Count the number of CampanhaTestes
     * const count = await prisma.campanhaTeste.count({
     *   where: {
     *     // ... the filter for the CampanhaTestes we want to count
     *   }
     * })
    **/
    count<T extends CampanhaTesteCountArgs>(
      args?: Subset<T, CampanhaTesteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampanhaTesteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampanhaTeste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaTesteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampanhaTesteAggregateArgs>(args: Subset<T, CampanhaTesteAggregateArgs>): Prisma.PrismaPromise<GetCampanhaTesteAggregateType<T>>

    /**
     * Group by CampanhaTeste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaTesteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampanhaTesteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampanhaTesteGroupByArgs['orderBy'] }
        : { orderBy?: CampanhaTesteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampanhaTesteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampanhaTesteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampanhaTeste model
   */
  readonly fields: CampanhaTesteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampanhaTeste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampanhaTesteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campanha<T extends CampanhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampanhaDefaultArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teste<T extends TesteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TesteDefaultArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampanhaTeste model
   */ 
  interface CampanhaTesteFieldRefs {
    readonly id: FieldRef<"CampanhaTeste", 'String'>
    readonly campanhaId: FieldRef<"CampanhaTeste", 'String'>
    readonly testeId: FieldRef<"CampanhaTeste", 'String'>
    readonly ativo: FieldRef<"CampanhaTeste", 'Boolean'>
    readonly criadoEm: FieldRef<"CampanhaTeste", 'DateTime'>
    readonly criadoPor: FieldRef<"CampanhaTeste", 'String'>
    readonly atualizadoEm: FieldRef<"CampanhaTeste", 'DateTime'>
    readonly atualizadoPor: FieldRef<"CampanhaTeste", 'String'>
    readonly inativadoEm: FieldRef<"CampanhaTeste", 'DateTime'>
    readonly inativadoPor: FieldRef<"CampanhaTeste", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CampanhaTeste findUnique
   */
  export type CampanhaTesteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * Filter, which CampanhaTeste to fetch.
     */
    where: CampanhaTesteWhereUniqueInput
  }

  /**
   * CampanhaTeste findUniqueOrThrow
   */
  export type CampanhaTesteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * Filter, which CampanhaTeste to fetch.
     */
    where: CampanhaTesteWhereUniqueInput
  }

  /**
   * CampanhaTeste findFirst
   */
  export type CampanhaTesteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * Filter, which CampanhaTeste to fetch.
     */
    where?: CampanhaTesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampanhaTestes to fetch.
     */
    orderBy?: CampanhaTesteOrderByWithRelationInput | CampanhaTesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampanhaTestes.
     */
    cursor?: CampanhaTesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampanhaTestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampanhaTestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampanhaTestes.
     */
    distinct?: CampanhaTesteScalarFieldEnum | CampanhaTesteScalarFieldEnum[]
  }

  /**
   * CampanhaTeste findFirstOrThrow
   */
  export type CampanhaTesteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * Filter, which CampanhaTeste to fetch.
     */
    where?: CampanhaTesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampanhaTestes to fetch.
     */
    orderBy?: CampanhaTesteOrderByWithRelationInput | CampanhaTesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampanhaTestes.
     */
    cursor?: CampanhaTesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampanhaTestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampanhaTestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampanhaTestes.
     */
    distinct?: CampanhaTesteScalarFieldEnum | CampanhaTesteScalarFieldEnum[]
  }

  /**
   * CampanhaTeste findMany
   */
  export type CampanhaTesteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * Filter, which CampanhaTestes to fetch.
     */
    where?: CampanhaTesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampanhaTestes to fetch.
     */
    orderBy?: CampanhaTesteOrderByWithRelationInput | CampanhaTesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampanhaTestes.
     */
    cursor?: CampanhaTesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampanhaTestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampanhaTestes.
     */
    skip?: number
    distinct?: CampanhaTesteScalarFieldEnum | CampanhaTesteScalarFieldEnum[]
  }

  /**
   * CampanhaTeste create
   */
  export type CampanhaTesteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * The data needed to create a CampanhaTeste.
     */
    data: XOR<CampanhaTesteCreateInput, CampanhaTesteUncheckedCreateInput>
  }

  /**
   * CampanhaTeste createMany
   */
  export type CampanhaTesteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampanhaTestes.
     */
    data: CampanhaTesteCreateManyInput | CampanhaTesteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampanhaTeste createManyAndReturn
   */
  export type CampanhaTesteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * The data used to create many CampanhaTestes.
     */
    data: CampanhaTesteCreateManyInput | CampanhaTesteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampanhaTeste update
   */
  export type CampanhaTesteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * The data needed to update a CampanhaTeste.
     */
    data: XOR<CampanhaTesteUpdateInput, CampanhaTesteUncheckedUpdateInput>
    /**
     * Choose, which CampanhaTeste to update.
     */
    where: CampanhaTesteWhereUniqueInput
  }

  /**
   * CampanhaTeste updateMany
   */
  export type CampanhaTesteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampanhaTestes.
     */
    data: XOR<CampanhaTesteUpdateManyMutationInput, CampanhaTesteUncheckedUpdateManyInput>
    /**
     * Filter which CampanhaTestes to update
     */
    where?: CampanhaTesteWhereInput
    /**
     * Limit how many CampanhaTestes to update.
     */
    limit?: number
  }

  /**
   * CampanhaTeste updateManyAndReturn
   */
  export type CampanhaTesteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * The data used to update CampanhaTestes.
     */
    data: XOR<CampanhaTesteUpdateManyMutationInput, CampanhaTesteUncheckedUpdateManyInput>
    /**
     * Filter which CampanhaTestes to update
     */
    where?: CampanhaTesteWhereInput
    /**
     * Limit how many CampanhaTestes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampanhaTeste upsert
   */
  export type CampanhaTesteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * The filter to search for the CampanhaTeste to update in case it exists.
     */
    where: CampanhaTesteWhereUniqueInput
    /**
     * In case the CampanhaTeste found by the `where` argument doesn't exist, create a new CampanhaTeste with this data.
     */
    create: XOR<CampanhaTesteCreateInput, CampanhaTesteUncheckedCreateInput>
    /**
     * In case the CampanhaTeste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampanhaTesteUpdateInput, CampanhaTesteUncheckedUpdateInput>
  }

  /**
   * CampanhaTeste delete
   */
  export type CampanhaTesteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    /**
     * Filter which CampanhaTeste to delete.
     */
    where: CampanhaTesteWhereUniqueInput
  }

  /**
   * CampanhaTeste deleteMany
   */
  export type CampanhaTesteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampanhaTestes to delete
     */
    where?: CampanhaTesteWhereInput
    /**
     * Limit how many CampanhaTestes to delete.
     */
    limit?: number
  }

  /**
   * CampanhaTeste without action
   */
  export type CampanhaTesteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
  }


  /**
   * Model Campanha
   */

  export type AggregateCampanha = {
    _count: CampanhaCountAggregateOutputType | null
    _min: CampanhaMinAggregateOutputType | null
    _max: CampanhaMaxAggregateOutputType | null
  }

  export type CampanhaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    status: $Enums.StatusCampanha | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type CampanhaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    status: $Enums.StatusCampanha | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type CampanhaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    status: number
    ativo: number
    criadoEm: number
    criadoPor: number
    atualizadoEm: number
    atualizadoPor: number
    inativadoEm: number
    inativadoPor: number
    _all: number
  }


  export type CampanhaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type CampanhaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type CampanhaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
    _all?: true
  }

  export type CampanhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campanha to aggregate.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campanhas
    **/
    _count?: true | CampanhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampanhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampanhaMaxAggregateInputType
  }

  export type GetCampanhaAggregateType<T extends CampanhaAggregateArgs> = {
        [P in keyof T & keyof AggregateCampanha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampanha[P]>
      : GetScalarType<T[P], AggregateCampanha[P]>
  }




  export type CampanhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanhaWhereInput
    orderBy?: CampanhaOrderByWithAggregationInput | CampanhaOrderByWithAggregationInput[]
    by: CampanhaScalarFieldEnum[] | CampanhaScalarFieldEnum
    having?: CampanhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampanhaCountAggregateInputType | true
    _min?: CampanhaMinAggregateInputType
    _max?: CampanhaMaxAggregateInputType
  }

  export type CampanhaGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    status: $Enums.StatusCampanha
    ativo: boolean
    criadoEm: Date
    criadoPor: string | null
    atualizadoEm: Date
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
    _count: CampanhaCountAggregateOutputType | null
    _min: CampanhaMinAggregateOutputType | null
    _max: CampanhaMaxAggregateOutputType | null
  }

  type GetCampanhaGroupByPayload<T extends CampanhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampanhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampanhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampanhaGroupByOutputType[P]>
            : GetScalarType<T[P], CampanhaGroupByOutputType[P]>
        }
      >
    >


  export type CampanhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    logs?: boolean | Campanha$logsArgs<ExtArgs>
    testes?: boolean | Campanha$testesArgs<ExtArgs>
    _count?: boolean | CampanhaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }

  export type CampanhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "status" | "ativo" | "criadoEm" | "criadoPor" | "atualizadoEm" | "atualizadoPor" | "inativadoEm" | "inativadoPor", ExtArgs["result"]["campanha"]>
  export type CampanhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Campanha$logsArgs<ExtArgs>
    testes?: boolean | Campanha$testesArgs<ExtArgs>
    _count?: boolean | CampanhaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampanhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampanhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampanhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campanha"
    objects: {
      logs: Prisma.$LogPayload<ExtArgs>[]
      testes: Prisma.$CampanhaTestePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      status: $Enums.StatusCampanha
      ativo: boolean
      criadoEm: Date
      criadoPor: string | null
      atualizadoEm: Date
      atualizadoPor: string | null
      inativadoEm: Date | null
      inativadoPor: string | null
    }, ExtArgs["result"]["campanha"]>
    composites: {}
  }

  type CampanhaGetPayload<S extends boolean | null | undefined | CampanhaDefaultArgs> = $Result.GetResult<Prisma.$CampanhaPayload, S>

  type CampanhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampanhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampanhaCountAggregateInputType | true
    }

  export interface CampanhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campanha'], meta: { name: 'Campanha' } }
    /**
     * Find zero or one Campanha that matches the filter.
     * @param {CampanhaFindUniqueArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampanhaFindUniqueArgs>(args: SelectSubset<T, CampanhaFindUniqueArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campanha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampanhaFindUniqueOrThrowArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampanhaFindUniqueOrThrowArgs>(args: SelectSubset<T, CampanhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campanha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindFirstArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampanhaFindFirstArgs>(args?: SelectSubset<T, CampanhaFindFirstArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campanha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindFirstOrThrowArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampanhaFindFirstOrThrowArgs>(args?: SelectSubset<T, CampanhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campanhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campanhas
     * const campanhas = await prisma.campanha.findMany()
     * 
     * // Get first 10 Campanhas
     * const campanhas = await prisma.campanha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campanhaWithIdOnly = await prisma.campanha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampanhaFindManyArgs>(args?: SelectSubset<T, CampanhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campanha.
     * @param {CampanhaCreateArgs} args - Arguments to create a Campanha.
     * @example
     * // Create one Campanha
     * const Campanha = await prisma.campanha.create({
     *   data: {
     *     // ... data to create a Campanha
     *   }
     * })
     * 
     */
    create<T extends CampanhaCreateArgs>(args: SelectSubset<T, CampanhaCreateArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campanhas.
     * @param {CampanhaCreateManyArgs} args - Arguments to create many Campanhas.
     * @example
     * // Create many Campanhas
     * const campanha = await prisma.campanha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampanhaCreateManyArgs>(args?: SelectSubset<T, CampanhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campanhas and returns the data saved in the database.
     * @param {CampanhaCreateManyAndReturnArgs} args - Arguments to create many Campanhas.
     * @example
     * // Create many Campanhas
     * const campanha = await prisma.campanha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campanhas and only return the `id`
     * const campanhaWithIdOnly = await prisma.campanha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampanhaCreateManyAndReturnArgs>(args?: SelectSubset<T, CampanhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campanha.
     * @param {CampanhaDeleteArgs} args - Arguments to delete one Campanha.
     * @example
     * // Delete one Campanha
     * const Campanha = await prisma.campanha.delete({
     *   where: {
     *     // ... filter to delete one Campanha
     *   }
     * })
     * 
     */
    delete<T extends CampanhaDeleteArgs>(args: SelectSubset<T, CampanhaDeleteArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campanha.
     * @param {CampanhaUpdateArgs} args - Arguments to update one Campanha.
     * @example
     * // Update one Campanha
     * const campanha = await prisma.campanha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampanhaUpdateArgs>(args: SelectSubset<T, CampanhaUpdateArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campanhas.
     * @param {CampanhaDeleteManyArgs} args - Arguments to filter Campanhas to delete.
     * @example
     * // Delete a few Campanhas
     * const { count } = await prisma.campanha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampanhaDeleteManyArgs>(args?: SelectSubset<T, CampanhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campanhas
     * const campanha = await prisma.campanha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampanhaUpdateManyArgs>(args: SelectSubset<T, CampanhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campanhas and returns the data updated in the database.
     * @param {CampanhaUpdateManyAndReturnArgs} args - Arguments to update many Campanhas.
     * @example
     * // Update many Campanhas
     * const campanha = await prisma.campanha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campanhas and only return the `id`
     * const campanhaWithIdOnly = await prisma.campanha.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampanhaUpdateManyAndReturnArgs>(args: SelectSubset<T, CampanhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campanha.
     * @param {CampanhaUpsertArgs} args - Arguments to update or create a Campanha.
     * @example
     * // Update or create a Campanha
     * const campanha = await prisma.campanha.upsert({
     *   create: {
     *     // ... data to create a Campanha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campanha we want to update
     *   }
     * })
     */
    upsert<T extends CampanhaUpsertArgs>(args: SelectSubset<T, CampanhaUpsertArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaCountArgs} args - Arguments to filter Campanhas to count.
     * @example
     * // Count the number of Campanhas
     * const count = await prisma.campanha.count({
     *   where: {
     *     // ... the filter for the Campanhas we want to count
     *   }
     * })
    **/
    count<T extends CampanhaCountArgs>(
      args?: Subset<T, CampanhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampanhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampanhaAggregateArgs>(args: Subset<T, CampanhaAggregateArgs>): Prisma.PrismaPromise<GetCampanhaAggregateType<T>>

    /**
     * Group by Campanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampanhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampanhaGroupByArgs['orderBy'] }
        : { orderBy?: CampanhaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampanhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampanhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campanha model
   */
  readonly fields: CampanhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campanha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampanhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Campanha$logsArgs<ExtArgs> = {}>(args?: Subset<T, Campanha$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testes<T extends Campanha$testesArgs<ExtArgs> = {}>(args?: Subset<T, Campanha$testesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campanha model
   */ 
  interface CampanhaFieldRefs {
    readonly id: FieldRef<"Campanha", 'String'>
    readonly titulo: FieldRef<"Campanha", 'String'>
    readonly descricao: FieldRef<"Campanha", 'String'>
    readonly status: FieldRef<"Campanha", 'StatusCampanha'>
    readonly ativo: FieldRef<"Campanha", 'Boolean'>
    readonly criadoEm: FieldRef<"Campanha", 'DateTime'>
    readonly criadoPor: FieldRef<"Campanha", 'String'>
    readonly atualizadoEm: FieldRef<"Campanha", 'DateTime'>
    readonly atualizadoPor: FieldRef<"Campanha", 'String'>
    readonly inativadoEm: FieldRef<"Campanha", 'DateTime'>
    readonly inativadoPor: FieldRef<"Campanha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campanha findUnique
   */
  export type CampanhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha findUniqueOrThrow
   */
  export type CampanhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha findFirst
   */
  export type CampanhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campanhas.
     */
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha findFirstOrThrow
   */
  export type CampanhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campanhas.
     */
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha findMany
   */
  export type CampanhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanhas to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha create
   */
  export type CampanhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The data needed to create a Campanha.
     */
    data: XOR<CampanhaCreateInput, CampanhaUncheckedCreateInput>
  }

  /**
   * Campanha createMany
   */
  export type CampanhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campanhas.
     */
    data: CampanhaCreateManyInput | CampanhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campanha createManyAndReturn
   */
  export type CampanhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * The data used to create many Campanhas.
     */
    data: CampanhaCreateManyInput | CampanhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campanha update
   */
  export type CampanhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The data needed to update a Campanha.
     */
    data: XOR<CampanhaUpdateInput, CampanhaUncheckedUpdateInput>
    /**
     * Choose, which Campanha to update.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha updateMany
   */
  export type CampanhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campanhas.
     */
    data: XOR<CampanhaUpdateManyMutationInput, CampanhaUncheckedUpdateManyInput>
    /**
     * Filter which Campanhas to update
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to update.
     */
    limit?: number
  }

  /**
   * Campanha updateManyAndReturn
   */
  export type CampanhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * The data used to update Campanhas.
     */
    data: XOR<CampanhaUpdateManyMutationInput, CampanhaUncheckedUpdateManyInput>
    /**
     * Filter which Campanhas to update
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to update.
     */
    limit?: number
  }

  /**
   * Campanha upsert
   */
  export type CampanhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The filter to search for the Campanha to update in case it exists.
     */
    where: CampanhaWhereUniqueInput
    /**
     * In case the Campanha found by the `where` argument doesn't exist, create a new Campanha with this data.
     */
    create: XOR<CampanhaCreateInput, CampanhaUncheckedCreateInput>
    /**
     * In case the Campanha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampanhaUpdateInput, CampanhaUncheckedUpdateInput>
  }

  /**
   * Campanha delete
   */
  export type CampanhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter which Campanha to delete.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha deleteMany
   */
  export type CampanhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campanhas to delete
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to delete.
     */
    limit?: number
  }

  /**
   * Campanha.logs
   */
  export type Campanha$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Campanha.testes
   */
  export type Campanha$testesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    where?: CampanhaTesteWhereInput
    orderBy?: CampanhaTesteOrderByWithRelationInput | CampanhaTesteOrderByWithRelationInput[]
    cursor?: CampanhaTesteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampanhaTesteScalarFieldEnum | CampanhaTesteScalarFieldEnum[]
  }

  /**
   * Campanha without action
   */
  export type CampanhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
  }


  /**
   * Model Departamento
   */

  export type AggregateDepartamento = {
    _count: DepartamentoCountAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  export type DepartamentoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type DepartamentoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type DepartamentoCountAggregateOutputType = {
    id: number
    nome: number
    ativo: number
    criadoEm: number
    criadoPor: number
    atualizadoEm: number
    atualizadoPor: number
    inativadoEm: number
    inativadoPor: number
    _all: number
  }


  export type DepartamentoMinAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type DepartamentoMaxAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type DepartamentoCountAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
    _all?: true
  }

  export type DepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamento to aggregate.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departamentos
    **/
    _count?: true | DepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartamentoMaxAggregateInputType
  }

  export type GetDepartamentoAggregateType<T extends DepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartamento[P]>
      : GetScalarType<T[P], AggregateDepartamento[P]>
  }




  export type DepartamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartamentoWhereInput
    orderBy?: DepartamentoOrderByWithAggregationInput | DepartamentoOrderByWithAggregationInput[]
    by: DepartamentoScalarFieldEnum[] | DepartamentoScalarFieldEnum
    having?: DepartamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartamentoCountAggregateInputType | true
    _min?: DepartamentoMinAggregateInputType
    _max?: DepartamentoMaxAggregateInputType
  }

  export type DepartamentoGroupByOutputType = {
    id: string
    nome: string
    ativo: boolean
    criadoEm: Date
    criadoPor: string | null
    atualizadoEm: Date
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
    _count: DepartamentoCountAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  type GetDepartamentoGroupByPayload<T extends DepartamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type DepartamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    testes?: boolean | Departamento$testesArgs<ExtArgs>
    logs?: boolean | Departamento$logsArgs<ExtArgs>
    usuarios?: boolean | Departamento$usuariosArgs<ExtArgs>
    _count?: boolean | DepartamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectScalar = {
    id?: boolean
    nome?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }

  export type DepartamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "ativo" | "criadoEm" | "criadoPor" | "atualizadoEm" | "atualizadoPor" | "inativadoEm" | "inativadoPor", ExtArgs["result"]["departamento"]>
  export type DepartamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testes?: boolean | Departamento$testesArgs<ExtArgs>
    logs?: boolean | Departamento$logsArgs<ExtArgs>
    usuarios?: boolean | Departamento$usuariosArgs<ExtArgs>
    _count?: boolean | DepartamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departamento"
    objects: {
      testes: Prisma.$TesteDepartamentoPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioDepartamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      ativo: boolean
      criadoEm: Date
      criadoPor: string | null
      atualizadoEm: Date
      atualizadoPor: string | null
      inativadoEm: Date | null
      inativadoPor: string | null
    }, ExtArgs["result"]["departamento"]>
    composites: {}
  }

  type DepartamentoGetPayload<S extends boolean | null | undefined | DepartamentoDefaultArgs> = $Result.GetResult<Prisma.$DepartamentoPayload, S>

  type DepartamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartamentoCountAggregateInputType | true
    }

  export interface DepartamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departamento'], meta: { name: 'Departamento' } }
    /**
     * Find zero or one Departamento that matches the filter.
     * @param {DepartamentoFindUniqueArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartamentoFindUniqueArgs>(args: SelectSubset<T, DepartamentoFindUniqueArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartamentoFindUniqueOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartamentoFindFirstArgs>(args?: SelectSubset<T, DepartamentoFindFirstArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departamentos
     * const departamentos = await prisma.departamento.findMany()
     * 
     * // Get first 10 Departamentos
     * const departamentos = await prisma.departamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departamentoWithIdOnly = await prisma.departamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartamentoFindManyArgs>(args?: SelectSubset<T, DepartamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departamento.
     * @param {DepartamentoCreateArgs} args - Arguments to create a Departamento.
     * @example
     * // Create one Departamento
     * const Departamento = await prisma.departamento.create({
     *   data: {
     *     // ... data to create a Departamento
     *   }
     * })
     * 
     */
    create<T extends DepartamentoCreateArgs>(args: SelectSubset<T, DepartamentoCreateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departamentos.
     * @param {DepartamentoCreateManyArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartamentoCreateManyArgs>(args?: SelectSubset<T, DepartamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departamentos and returns the data saved in the database.
     * @param {DepartamentoCreateManyAndReturnArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departamentos and only return the `id`
     * const departamentoWithIdOnly = await prisma.departamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departamento.
     * @param {DepartamentoDeleteArgs} args - Arguments to delete one Departamento.
     * @example
     * // Delete one Departamento
     * const Departamento = await prisma.departamento.delete({
     *   where: {
     *     // ... filter to delete one Departamento
     *   }
     * })
     * 
     */
    delete<T extends DepartamentoDeleteArgs>(args: SelectSubset<T, DepartamentoDeleteArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departamento.
     * @param {DepartamentoUpdateArgs} args - Arguments to update one Departamento.
     * @example
     * // Update one Departamento
     * const departamento = await prisma.departamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartamentoUpdateArgs>(args: SelectSubset<T, DepartamentoUpdateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departamentos.
     * @param {DepartamentoDeleteManyArgs} args - Arguments to filter Departamentos to delete.
     * @example
     * // Delete a few Departamentos
     * const { count } = await prisma.departamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartamentoDeleteManyArgs>(args?: SelectSubset<T, DepartamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartamentoUpdateManyArgs>(args: SelectSubset<T, DepartamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos and returns the data updated in the database.
     * @param {DepartamentoUpdateManyAndReturnArgs} args - Arguments to update many Departamentos.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departamentos and only return the `id`
     * const departamentoWithIdOnly = await prisma.departamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departamento.
     * @param {DepartamentoUpsertArgs} args - Arguments to update or create a Departamento.
     * @example
     * // Update or create a Departamento
     * const departamento = await prisma.departamento.upsert({
     *   create: {
     *     // ... data to create a Departamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departamento we want to update
     *   }
     * })
     */
    upsert<T extends DepartamentoUpsertArgs>(args: SelectSubset<T, DepartamentoUpsertArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoCountArgs} args - Arguments to filter Departamentos to count.
     * @example
     * // Count the number of Departamentos
     * const count = await prisma.departamento.count({
     *   where: {
     *     // ... the filter for the Departamentos we want to count
     *   }
     * })
    **/
    count<T extends DepartamentoCountArgs>(
      args?: Subset<T, DepartamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartamentoAggregateArgs>(args: Subset<T, DepartamentoAggregateArgs>): Prisma.PrismaPromise<GetDepartamentoAggregateType<T>>

    /**
     * Group by Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartamentoGroupByArgs['orderBy'] }
        : { orderBy?: DepartamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departamento model
   */
  readonly fields: DepartamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testes<T extends Departamento$testesArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$testesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Departamento$logsArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Departamento$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Departamento model
   */ 
  interface DepartamentoFieldRefs {
    readonly id: FieldRef<"Departamento", 'String'>
    readonly nome: FieldRef<"Departamento", 'String'>
    readonly ativo: FieldRef<"Departamento", 'Boolean'>
    readonly criadoEm: FieldRef<"Departamento", 'DateTime'>
    readonly criadoPor: FieldRef<"Departamento", 'String'>
    readonly atualizadoEm: FieldRef<"Departamento", 'DateTime'>
    readonly atualizadoPor: FieldRef<"Departamento", 'String'>
    readonly inativadoEm: FieldRef<"Departamento", 'DateTime'>
    readonly inativadoPor: FieldRef<"Departamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Departamento findUnique
   */
  export type DepartamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento findUniqueOrThrow
   */
  export type DepartamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento findFirst
   */
  export type DepartamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento findFirstOrThrow
   */
  export type DepartamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento findMany
   */
  export type DepartamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamentos to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento create
   */
  export type DepartamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Departamento.
     */
    data: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
  }

  /**
   * Departamento createMany
   */
  export type DepartamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departamentos.
     */
    data: DepartamentoCreateManyInput | DepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departamento createManyAndReturn
   */
  export type DepartamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Departamentos.
     */
    data: DepartamentoCreateManyInput | DepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departamento update
   */
  export type DepartamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Departamento.
     */
    data: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
    /**
     * Choose, which Departamento to update.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento updateMany
   */
  export type DepartamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departamentos.
     */
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which Departamentos to update
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to update.
     */
    limit?: number
  }

  /**
   * Departamento updateManyAndReturn
   */
  export type DepartamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * The data used to update Departamentos.
     */
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which Departamentos to update
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to update.
     */
    limit?: number
  }

  /**
   * Departamento upsert
   */
  export type DepartamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Departamento to update in case it exists.
     */
    where: DepartamentoWhereUniqueInput
    /**
     * In case the Departamento found by the `where` argument doesn't exist, create a new Departamento with this data.
     */
    create: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
    /**
     * In case the Departamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
  }

  /**
   * Departamento delete
   */
  export type DepartamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter which Departamento to delete.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento deleteMany
   */
  export type DepartamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamentos to delete
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to delete.
     */
    limit?: number
  }

  /**
   * Departamento.testes
   */
  export type Departamento$testesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    where?: TesteDepartamentoWhereInput
    orderBy?: TesteDepartamentoOrderByWithRelationInput | TesteDepartamentoOrderByWithRelationInput[]
    cursor?: TesteDepartamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TesteDepartamentoScalarFieldEnum | TesteDepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento.logs
   */
  export type Departamento$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Departamento.usuarios
   */
  export type Departamento$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    where?: UsuarioDepartamentoWhereInput
    orderBy?: UsuarioDepartamentoOrderByWithRelationInput | UsuarioDepartamentoOrderByWithRelationInput[]
    cursor?: UsuarioDepartamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioDepartamentoScalarFieldEnum | UsuarioDepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento without action
   */
  export type DepartamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoLog | null
    descricao: string | null
    campanhaId: string | null
    departamentoId: string | null
    testeId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoLog | null
    descricao: string | null
    campanhaId: string | null
    departamentoId: string | null
    testeId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    tipo: number
    descricao: number
    campanhaId: number
    departamentoId: number
    testeId: number
    ativo: number
    criadoEm: number
    criadoPor: number
    atualizadoEm: number
    atualizadoPor: number
    inativadoEm: number
    inativadoPor: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    campanhaId?: true
    departamentoId?: true
    testeId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    campanhaId?: true
    departamentoId?: true
    testeId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    campanhaId?: true
    departamentoId?: true
    testeId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    tipo: $Enums.TipoLog
    descricao: string | null
    campanhaId: string | null
    departamentoId: string | null
    testeId: string | null
    ativo: boolean
    criadoEm: Date
    criadoPor: string | null
    atualizadoEm: Date
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    campanhaId?: boolean
    departamentoId?: boolean
    testeId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    campanha?: boolean | Log$campanhaArgs<ExtArgs>
    departamento?: boolean | Log$departamentoArgs<ExtArgs>
    teste?: boolean | Log$testeArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    campanhaId?: boolean
    departamentoId?: boolean
    testeId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    campanha?: boolean | Log$campanhaArgs<ExtArgs>
    departamento?: boolean | Log$departamentoArgs<ExtArgs>
    teste?: boolean | Log$testeArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    campanhaId?: boolean
    departamentoId?: boolean
    testeId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    campanha?: boolean | Log$campanhaArgs<ExtArgs>
    departamento?: boolean | Log$departamentoArgs<ExtArgs>
    teste?: boolean | Log$testeArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    campanhaId?: boolean
    departamentoId?: boolean
    testeId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "descricao" | "campanhaId" | "departamentoId" | "testeId" | "ativo" | "criadoEm" | "criadoPor" | "atualizadoEm" | "atualizadoPor" | "inativadoEm" | "inativadoPor", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | Log$campanhaArgs<ExtArgs>
    departamento?: boolean | Log$departamentoArgs<ExtArgs>
    teste?: boolean | Log$testeArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | Log$campanhaArgs<ExtArgs>
    departamento?: boolean | Log$departamentoArgs<ExtArgs>
    teste?: boolean | Log$testeArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | Log$campanhaArgs<ExtArgs>
    departamento?: boolean | Log$departamentoArgs<ExtArgs>
    teste?: boolean | Log$testeArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      campanha: Prisma.$CampanhaPayload<ExtArgs> | null
      departamento: Prisma.$DepartamentoPayload<ExtArgs> | null
      teste: Prisma.$TestePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: $Enums.TipoLog
      descricao: string | null
      campanhaId: string | null
      departamentoId: string | null
      testeId: string | null
      ativo: boolean
      criadoEm: Date
      criadoPor: string | null
      atualizadoEm: Date
      atualizadoPor: string | null
      inativadoEm: Date | null
      inativadoPor: string | null
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campanha<T extends Log$campanhaArgs<ExtArgs> = {}>(args?: Subset<T, Log$campanhaArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departamento<T extends Log$departamentoArgs<ExtArgs> = {}>(args?: Subset<T, Log$departamentoArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teste<T extends Log$testeArgs<ExtArgs> = {}>(args?: Subset<T, Log$testeArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */ 
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly tipo: FieldRef<"Log", 'TipoLog'>
    readonly descricao: FieldRef<"Log", 'String'>
    readonly campanhaId: FieldRef<"Log", 'String'>
    readonly departamentoId: FieldRef<"Log", 'String'>
    readonly testeId: FieldRef<"Log", 'String'>
    readonly ativo: FieldRef<"Log", 'Boolean'>
    readonly criadoEm: FieldRef<"Log", 'DateTime'>
    readonly criadoPor: FieldRef<"Log", 'String'>
    readonly atualizadoEm: FieldRef<"Log", 'DateTime'>
    readonly atualizadoPor: FieldRef<"Log", 'String'>
    readonly inativadoEm: FieldRef<"Log", 'DateTime'>
    readonly inativadoPor: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log.campanha
   */
  export type Log$campanhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    where?: CampanhaWhereInput
  }

  /**
   * Log.departamento
   */
  export type Log$departamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    where?: DepartamentoWhereInput
  }

  /**
   * Log.teste
   */
  export type Log$testeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    where?: TesteWhereInput
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model TesteDepartamento
   */

  export type AggregateTesteDepartamento = {
    _count: TesteDepartamentoCountAggregateOutputType | null
    _min: TesteDepartamentoMinAggregateOutputType | null
    _max: TesteDepartamentoMaxAggregateOutputType | null
  }

  export type TesteDepartamentoMinAggregateOutputType = {
    id: string | null
    testeId: string | null
    departamentoId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type TesteDepartamentoMaxAggregateOutputType = {
    id: string | null
    testeId: string | null
    departamentoId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type TesteDepartamentoCountAggregateOutputType = {
    id: number
    testeId: number
    departamentoId: number
    ativo: number
    criadoEm: number
    criadoPor: number
    atualizadoEm: number
    atualizadoPor: number
    inativadoEm: number
    inativadoPor: number
    _all: number
  }


  export type TesteDepartamentoMinAggregateInputType = {
    id?: true
    testeId?: true
    departamentoId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type TesteDepartamentoMaxAggregateInputType = {
    id?: true
    testeId?: true
    departamentoId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type TesteDepartamentoCountAggregateInputType = {
    id?: true
    testeId?: true
    departamentoId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
    _all?: true
  }

  export type TesteDepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TesteDepartamento to aggregate.
     */
    where?: TesteDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TesteDepartamentos to fetch.
     */
    orderBy?: TesteDepartamentoOrderByWithRelationInput | TesteDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TesteDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TesteDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TesteDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TesteDepartamentos
    **/
    _count?: true | TesteDepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TesteDepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TesteDepartamentoMaxAggregateInputType
  }

  export type GetTesteDepartamentoAggregateType<T extends TesteDepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTesteDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTesteDepartamento[P]>
      : GetScalarType<T[P], AggregateTesteDepartamento[P]>
  }




  export type TesteDepartamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteDepartamentoWhereInput
    orderBy?: TesteDepartamentoOrderByWithAggregationInput | TesteDepartamentoOrderByWithAggregationInput[]
    by: TesteDepartamentoScalarFieldEnum[] | TesteDepartamentoScalarFieldEnum
    having?: TesteDepartamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TesteDepartamentoCountAggregateInputType | true
    _min?: TesteDepartamentoMinAggregateInputType
    _max?: TesteDepartamentoMaxAggregateInputType
  }

  export type TesteDepartamentoGroupByOutputType = {
    id: string
    testeId: string
    departamentoId: string
    ativo: boolean
    criadoEm: Date
    criadoPor: string | null
    atualizadoEm: Date
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
    _count: TesteDepartamentoCountAggregateOutputType | null
    _min: TesteDepartamentoMinAggregateOutputType | null
    _max: TesteDepartamentoMaxAggregateOutputType | null
  }

  type GetTesteDepartamentoGroupByPayload<T extends TesteDepartamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TesteDepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TesteDepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TesteDepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], TesteDepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type TesteDepartamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testeId?: boolean
    departamentoId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    teste?: boolean | TesteDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testeDepartamento"]>

  export type TesteDepartamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testeId?: boolean
    departamentoId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    teste?: boolean | TesteDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testeDepartamento"]>

  export type TesteDepartamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testeId?: boolean
    departamentoId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    teste?: boolean | TesteDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testeDepartamento"]>

  export type TesteDepartamentoSelectScalar = {
    id?: boolean
    testeId?: boolean
    departamentoId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }

  export type TesteDepartamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testeId" | "departamentoId" | "ativo" | "criadoEm" | "criadoPor" | "atualizadoEm" | "atualizadoPor" | "inativadoEm" | "inativadoPor", ExtArgs["result"]["testeDepartamento"]>
  export type TesteDepartamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teste?: boolean | TesteDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }
  export type TesteDepartamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teste?: boolean | TesteDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }
  export type TesteDepartamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teste?: boolean | TesteDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }

  export type $TesteDepartamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TesteDepartamento"
    objects: {
      teste: Prisma.$TestePayload<ExtArgs>
      departamento: Prisma.$DepartamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testeId: string
      departamentoId: string
      ativo: boolean
      criadoEm: Date
      criadoPor: string | null
      atualizadoEm: Date
      atualizadoPor: string | null
      inativadoEm: Date | null
      inativadoPor: string | null
    }, ExtArgs["result"]["testeDepartamento"]>
    composites: {}
  }

  type TesteDepartamentoGetPayload<S extends boolean | null | undefined | TesteDepartamentoDefaultArgs> = $Result.GetResult<Prisma.$TesteDepartamentoPayload, S>

  type TesteDepartamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TesteDepartamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TesteDepartamentoCountAggregateInputType | true
    }

  export interface TesteDepartamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TesteDepartamento'], meta: { name: 'TesteDepartamento' } }
    /**
     * Find zero or one TesteDepartamento that matches the filter.
     * @param {TesteDepartamentoFindUniqueArgs} args - Arguments to find a TesteDepartamento
     * @example
     * // Get one TesteDepartamento
     * const testeDepartamento = await prisma.testeDepartamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TesteDepartamentoFindUniqueArgs>(args: SelectSubset<T, TesteDepartamentoFindUniqueArgs<ExtArgs>>): Prisma__TesteDepartamentoClient<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TesteDepartamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TesteDepartamentoFindUniqueOrThrowArgs} args - Arguments to find a TesteDepartamento
     * @example
     * // Get one TesteDepartamento
     * const testeDepartamento = await prisma.testeDepartamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TesteDepartamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, TesteDepartamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TesteDepartamentoClient<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TesteDepartamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteDepartamentoFindFirstArgs} args - Arguments to find a TesteDepartamento
     * @example
     * // Get one TesteDepartamento
     * const testeDepartamento = await prisma.testeDepartamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TesteDepartamentoFindFirstArgs>(args?: SelectSubset<T, TesteDepartamentoFindFirstArgs<ExtArgs>>): Prisma__TesteDepartamentoClient<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TesteDepartamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteDepartamentoFindFirstOrThrowArgs} args - Arguments to find a TesteDepartamento
     * @example
     * // Get one TesteDepartamento
     * const testeDepartamento = await prisma.testeDepartamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TesteDepartamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, TesteDepartamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TesteDepartamentoClient<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TesteDepartamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteDepartamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TesteDepartamentos
     * const testeDepartamentos = await prisma.testeDepartamento.findMany()
     * 
     * // Get first 10 TesteDepartamentos
     * const testeDepartamentos = await prisma.testeDepartamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testeDepartamentoWithIdOnly = await prisma.testeDepartamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TesteDepartamentoFindManyArgs>(args?: SelectSubset<T, TesteDepartamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TesteDepartamento.
     * @param {TesteDepartamentoCreateArgs} args - Arguments to create a TesteDepartamento.
     * @example
     * // Create one TesteDepartamento
     * const TesteDepartamento = await prisma.testeDepartamento.create({
     *   data: {
     *     // ... data to create a TesteDepartamento
     *   }
     * })
     * 
     */
    create<T extends TesteDepartamentoCreateArgs>(args: SelectSubset<T, TesteDepartamentoCreateArgs<ExtArgs>>): Prisma__TesteDepartamentoClient<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TesteDepartamentos.
     * @param {TesteDepartamentoCreateManyArgs} args - Arguments to create many TesteDepartamentos.
     * @example
     * // Create many TesteDepartamentos
     * const testeDepartamento = await prisma.testeDepartamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TesteDepartamentoCreateManyArgs>(args?: SelectSubset<T, TesteDepartamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TesteDepartamentos and returns the data saved in the database.
     * @param {TesteDepartamentoCreateManyAndReturnArgs} args - Arguments to create many TesteDepartamentos.
     * @example
     * // Create many TesteDepartamentos
     * const testeDepartamento = await prisma.testeDepartamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TesteDepartamentos and only return the `id`
     * const testeDepartamentoWithIdOnly = await prisma.testeDepartamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TesteDepartamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, TesteDepartamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TesteDepartamento.
     * @param {TesteDepartamentoDeleteArgs} args - Arguments to delete one TesteDepartamento.
     * @example
     * // Delete one TesteDepartamento
     * const TesteDepartamento = await prisma.testeDepartamento.delete({
     *   where: {
     *     // ... filter to delete one TesteDepartamento
     *   }
     * })
     * 
     */
    delete<T extends TesteDepartamentoDeleteArgs>(args: SelectSubset<T, TesteDepartamentoDeleteArgs<ExtArgs>>): Prisma__TesteDepartamentoClient<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TesteDepartamento.
     * @param {TesteDepartamentoUpdateArgs} args - Arguments to update one TesteDepartamento.
     * @example
     * // Update one TesteDepartamento
     * const testeDepartamento = await prisma.testeDepartamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TesteDepartamentoUpdateArgs>(args: SelectSubset<T, TesteDepartamentoUpdateArgs<ExtArgs>>): Prisma__TesteDepartamentoClient<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TesteDepartamentos.
     * @param {TesteDepartamentoDeleteManyArgs} args - Arguments to filter TesteDepartamentos to delete.
     * @example
     * // Delete a few TesteDepartamentos
     * const { count } = await prisma.testeDepartamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TesteDepartamentoDeleteManyArgs>(args?: SelectSubset<T, TesteDepartamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TesteDepartamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteDepartamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TesteDepartamentos
     * const testeDepartamento = await prisma.testeDepartamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TesteDepartamentoUpdateManyArgs>(args: SelectSubset<T, TesteDepartamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TesteDepartamentos and returns the data updated in the database.
     * @param {TesteDepartamentoUpdateManyAndReturnArgs} args - Arguments to update many TesteDepartamentos.
     * @example
     * // Update many TesteDepartamentos
     * const testeDepartamento = await prisma.testeDepartamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TesteDepartamentos and only return the `id`
     * const testeDepartamentoWithIdOnly = await prisma.testeDepartamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TesteDepartamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, TesteDepartamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TesteDepartamento.
     * @param {TesteDepartamentoUpsertArgs} args - Arguments to update or create a TesteDepartamento.
     * @example
     * // Update or create a TesteDepartamento
     * const testeDepartamento = await prisma.testeDepartamento.upsert({
     *   create: {
     *     // ... data to create a TesteDepartamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TesteDepartamento we want to update
     *   }
     * })
     */
    upsert<T extends TesteDepartamentoUpsertArgs>(args: SelectSubset<T, TesteDepartamentoUpsertArgs<ExtArgs>>): Prisma__TesteDepartamentoClient<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TesteDepartamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteDepartamentoCountArgs} args - Arguments to filter TesteDepartamentos to count.
     * @example
     * // Count the number of TesteDepartamentos
     * const count = await prisma.testeDepartamento.count({
     *   where: {
     *     // ... the filter for the TesteDepartamentos we want to count
     *   }
     * })
    **/
    count<T extends TesteDepartamentoCountArgs>(
      args?: Subset<T, TesteDepartamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TesteDepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TesteDepartamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteDepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TesteDepartamentoAggregateArgs>(args: Subset<T, TesteDepartamentoAggregateArgs>): Prisma.PrismaPromise<GetTesteDepartamentoAggregateType<T>>

    /**
     * Group by TesteDepartamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteDepartamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TesteDepartamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TesteDepartamentoGroupByArgs['orderBy'] }
        : { orderBy?: TesteDepartamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TesteDepartamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTesteDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TesteDepartamento model
   */
  readonly fields: TesteDepartamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TesteDepartamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TesteDepartamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teste<T extends TesteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TesteDefaultArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departamento<T extends DepartamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartamentoDefaultArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TesteDepartamento model
   */ 
  interface TesteDepartamentoFieldRefs {
    readonly id: FieldRef<"TesteDepartamento", 'String'>
    readonly testeId: FieldRef<"TesteDepartamento", 'String'>
    readonly departamentoId: FieldRef<"TesteDepartamento", 'String'>
    readonly ativo: FieldRef<"TesteDepartamento", 'Boolean'>
    readonly criadoEm: FieldRef<"TesteDepartamento", 'DateTime'>
    readonly criadoPor: FieldRef<"TesteDepartamento", 'String'>
    readonly atualizadoEm: FieldRef<"TesteDepartamento", 'DateTime'>
    readonly atualizadoPor: FieldRef<"TesteDepartamento", 'String'>
    readonly inativadoEm: FieldRef<"TesteDepartamento", 'DateTime'>
    readonly inativadoPor: FieldRef<"TesteDepartamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TesteDepartamento findUnique
   */
  export type TesteDepartamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which TesteDepartamento to fetch.
     */
    where: TesteDepartamentoWhereUniqueInput
  }

  /**
   * TesteDepartamento findUniqueOrThrow
   */
  export type TesteDepartamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which TesteDepartamento to fetch.
     */
    where: TesteDepartamentoWhereUniqueInput
  }

  /**
   * TesteDepartamento findFirst
   */
  export type TesteDepartamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which TesteDepartamento to fetch.
     */
    where?: TesteDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TesteDepartamentos to fetch.
     */
    orderBy?: TesteDepartamentoOrderByWithRelationInput | TesteDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TesteDepartamentos.
     */
    cursor?: TesteDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TesteDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TesteDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TesteDepartamentos.
     */
    distinct?: TesteDepartamentoScalarFieldEnum | TesteDepartamentoScalarFieldEnum[]
  }

  /**
   * TesteDepartamento findFirstOrThrow
   */
  export type TesteDepartamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which TesteDepartamento to fetch.
     */
    where?: TesteDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TesteDepartamentos to fetch.
     */
    orderBy?: TesteDepartamentoOrderByWithRelationInput | TesteDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TesteDepartamentos.
     */
    cursor?: TesteDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TesteDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TesteDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TesteDepartamentos.
     */
    distinct?: TesteDepartamentoScalarFieldEnum | TesteDepartamentoScalarFieldEnum[]
  }

  /**
   * TesteDepartamento findMany
   */
  export type TesteDepartamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which TesteDepartamentos to fetch.
     */
    where?: TesteDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TesteDepartamentos to fetch.
     */
    orderBy?: TesteDepartamentoOrderByWithRelationInput | TesteDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TesteDepartamentos.
     */
    cursor?: TesteDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TesteDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TesteDepartamentos.
     */
    skip?: number
    distinct?: TesteDepartamentoScalarFieldEnum | TesteDepartamentoScalarFieldEnum[]
  }

  /**
   * TesteDepartamento create
   */
  export type TesteDepartamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a TesteDepartamento.
     */
    data: XOR<TesteDepartamentoCreateInput, TesteDepartamentoUncheckedCreateInput>
  }

  /**
   * TesteDepartamento createMany
   */
  export type TesteDepartamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TesteDepartamentos.
     */
    data: TesteDepartamentoCreateManyInput | TesteDepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TesteDepartamento createManyAndReturn
   */
  export type TesteDepartamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * The data used to create many TesteDepartamentos.
     */
    data: TesteDepartamentoCreateManyInput | TesteDepartamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TesteDepartamento update
   */
  export type TesteDepartamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a TesteDepartamento.
     */
    data: XOR<TesteDepartamentoUpdateInput, TesteDepartamentoUncheckedUpdateInput>
    /**
     * Choose, which TesteDepartamento to update.
     */
    where: TesteDepartamentoWhereUniqueInput
  }

  /**
   * TesteDepartamento updateMany
   */
  export type TesteDepartamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TesteDepartamentos.
     */
    data: XOR<TesteDepartamentoUpdateManyMutationInput, TesteDepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which TesteDepartamentos to update
     */
    where?: TesteDepartamentoWhereInput
    /**
     * Limit how many TesteDepartamentos to update.
     */
    limit?: number
  }

  /**
   * TesteDepartamento updateManyAndReturn
   */
  export type TesteDepartamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * The data used to update TesteDepartamentos.
     */
    data: XOR<TesteDepartamentoUpdateManyMutationInput, TesteDepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which TesteDepartamentos to update
     */
    where?: TesteDepartamentoWhereInput
    /**
     * Limit how many TesteDepartamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TesteDepartamento upsert
   */
  export type TesteDepartamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the TesteDepartamento to update in case it exists.
     */
    where: TesteDepartamentoWhereUniqueInput
    /**
     * In case the TesteDepartamento found by the `where` argument doesn't exist, create a new TesteDepartamento with this data.
     */
    create: XOR<TesteDepartamentoCreateInput, TesteDepartamentoUncheckedCreateInput>
    /**
     * In case the TesteDepartamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TesteDepartamentoUpdateInput, TesteDepartamentoUncheckedUpdateInput>
  }

  /**
   * TesteDepartamento delete
   */
  export type TesteDepartamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    /**
     * Filter which TesteDepartamento to delete.
     */
    where: TesteDepartamentoWhereUniqueInput
  }

  /**
   * TesteDepartamento deleteMany
   */
  export type TesteDepartamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TesteDepartamentos to delete
     */
    where?: TesteDepartamentoWhereInput
    /**
     * Limit how many TesteDepartamentos to delete.
     */
    limit?: number
  }

  /**
   * TesteDepartamento without action
   */
  export type TesteDepartamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
  }


  /**
   * Model Teste
   */

  export type AggregateTeste = {
    _count: TesteCountAggregateOutputType | null
    _min: TesteMinAggregateOutputType | null
    _max: TesteMaxAggregateOutputType | null
  }

  export type TesteMinAggregateOutputType = {
    id: string | null
    canal: $Enums.CanalTeste | null
    status: $Enums.StatusTeste | null
    caiuNoTeste: boolean | null
    reportouPhishing: boolean | null
    usuarioId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type TesteMaxAggregateOutputType = {
    id: string | null
    canal: $Enums.CanalTeste | null
    status: $Enums.StatusTeste | null
    caiuNoTeste: boolean | null
    reportouPhishing: boolean | null
    usuarioId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type TesteCountAggregateOutputType = {
    id: number
    canal: number
    status: number
    caiuNoTeste: number
    reportouPhishing: number
    usuarioId: number
    ativo: number
    criadoEm: number
    criadoPor: number
    atualizadoEm: number
    atualizadoPor: number
    inativadoEm: number
    inativadoPor: number
    _all: number
  }


  export type TesteMinAggregateInputType = {
    id?: true
    canal?: true
    status?: true
    caiuNoTeste?: true
    reportouPhishing?: true
    usuarioId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type TesteMaxAggregateInputType = {
    id?: true
    canal?: true
    status?: true
    caiuNoTeste?: true
    reportouPhishing?: true
    usuarioId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type TesteCountAggregateInputType = {
    id?: true
    canal?: true
    status?: true
    caiuNoTeste?: true
    reportouPhishing?: true
    usuarioId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
    _all?: true
  }

  export type TesteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teste to aggregate.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testes
    **/
    _count?: true | TesteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TesteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TesteMaxAggregateInputType
  }

  export type GetTesteAggregateType<T extends TesteAggregateArgs> = {
        [P in keyof T & keyof AggregateTeste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeste[P]>
      : GetScalarType<T[P], AggregateTeste[P]>
  }




  export type TesteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteWhereInput
    orderBy?: TesteOrderByWithAggregationInput | TesteOrderByWithAggregationInput[]
    by: TesteScalarFieldEnum[] | TesteScalarFieldEnum
    having?: TesteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TesteCountAggregateInputType | true
    _min?: TesteMinAggregateInputType
    _max?: TesteMaxAggregateInputType
  }

  export type TesteGroupByOutputType = {
    id: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste: boolean
    reportouPhishing: boolean
    usuarioId: string | null
    ativo: boolean
    criadoEm: Date
    criadoPor: string | null
    atualizadoEm: Date
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
    _count: TesteCountAggregateOutputType | null
    _min: TesteMinAggregateOutputType | null
    _max: TesteMaxAggregateOutputType | null
  }

  type GetTesteGroupByPayload<T extends TesteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TesteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TesteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TesteGroupByOutputType[P]>
            : GetScalarType<T[P], TesteGroupByOutputType[P]>
        }
      >
    >


  export type TesteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canal?: boolean
    status?: boolean
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    departamentos?: boolean | Teste$departamentosArgs<ExtArgs>
    logs?: boolean | Teste$logsArgs<ExtArgs>
    campanhas?: boolean | Teste$campanhasArgs<ExtArgs>
    usuario?: boolean | Teste$usuarioArgs<ExtArgs>
    _count?: boolean | TesteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canal?: boolean
    status?: boolean
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    usuario?: boolean | Teste$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canal?: boolean
    status?: boolean
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    usuario?: boolean | Teste$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectScalar = {
    id?: boolean
    canal?: boolean
    status?: boolean
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }

  export type TesteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "canal" | "status" | "caiuNoTeste" | "reportouPhishing" | "usuarioId" | "ativo" | "criadoEm" | "criadoPor" | "atualizadoEm" | "atualizadoPor" | "inativadoEm" | "inativadoPor", ExtArgs["result"]["teste"]>
  export type TesteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamentos?: boolean | Teste$departamentosArgs<ExtArgs>
    logs?: boolean | Teste$logsArgs<ExtArgs>
    campanhas?: boolean | Teste$campanhasArgs<ExtArgs>
    usuario?: boolean | Teste$usuarioArgs<ExtArgs>
    _count?: boolean | TesteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TesteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Teste$usuarioArgs<ExtArgs>
  }
  export type TesteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Teste$usuarioArgs<ExtArgs>
  }

  export type $TestePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teste"
    objects: {
      departamentos: Prisma.$TesteDepartamentoPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
      campanhas: Prisma.$CampanhaTestePayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      canal: $Enums.CanalTeste
      status: $Enums.StatusTeste
      caiuNoTeste: boolean
      reportouPhishing: boolean
      usuarioId: string | null
      ativo: boolean
      criadoEm: Date
      criadoPor: string | null
      atualizadoEm: Date
      atualizadoPor: string | null
      inativadoEm: Date | null
      inativadoPor: string | null
    }, ExtArgs["result"]["teste"]>
    composites: {}
  }

  type TesteGetPayload<S extends boolean | null | undefined | TesteDefaultArgs> = $Result.GetResult<Prisma.$TestePayload, S>

  type TesteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TesteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TesteCountAggregateInputType | true
    }

  export interface TesteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teste'], meta: { name: 'Teste' } }
    /**
     * Find zero or one Teste that matches the filter.
     * @param {TesteFindUniqueArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TesteFindUniqueArgs>(args: SelectSubset<T, TesteFindUniqueArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teste that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TesteFindUniqueOrThrowArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TesteFindUniqueOrThrowArgs>(args: SelectSubset<T, TesteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindFirstArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TesteFindFirstArgs>(args?: SelectSubset<T, TesteFindFirstArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindFirstOrThrowArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TesteFindFirstOrThrowArgs>(args?: SelectSubset<T, TesteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testes
     * const testes = await prisma.teste.findMany()
     * 
     * // Get first 10 Testes
     * const testes = await prisma.teste.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testeWithIdOnly = await prisma.teste.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TesteFindManyArgs>(args?: SelectSubset<T, TesteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teste.
     * @param {TesteCreateArgs} args - Arguments to create a Teste.
     * @example
     * // Create one Teste
     * const Teste = await prisma.teste.create({
     *   data: {
     *     // ... data to create a Teste
     *   }
     * })
     * 
     */
    create<T extends TesteCreateArgs>(args: SelectSubset<T, TesteCreateArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testes.
     * @param {TesteCreateManyArgs} args - Arguments to create many Testes.
     * @example
     * // Create many Testes
     * const teste = await prisma.teste.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TesteCreateManyArgs>(args?: SelectSubset<T, TesteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testes and returns the data saved in the database.
     * @param {TesteCreateManyAndReturnArgs} args - Arguments to create many Testes.
     * @example
     * // Create many Testes
     * const teste = await prisma.teste.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testes and only return the `id`
     * const testeWithIdOnly = await prisma.teste.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TesteCreateManyAndReturnArgs>(args?: SelectSubset<T, TesteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teste.
     * @param {TesteDeleteArgs} args - Arguments to delete one Teste.
     * @example
     * // Delete one Teste
     * const Teste = await prisma.teste.delete({
     *   where: {
     *     // ... filter to delete one Teste
     *   }
     * })
     * 
     */
    delete<T extends TesteDeleteArgs>(args: SelectSubset<T, TesteDeleteArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teste.
     * @param {TesteUpdateArgs} args - Arguments to update one Teste.
     * @example
     * // Update one Teste
     * const teste = await prisma.teste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TesteUpdateArgs>(args: SelectSubset<T, TesteUpdateArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testes.
     * @param {TesteDeleteManyArgs} args - Arguments to filter Testes to delete.
     * @example
     * // Delete a few Testes
     * const { count } = await prisma.teste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TesteDeleteManyArgs>(args?: SelectSubset<T, TesteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testes
     * const teste = await prisma.teste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TesteUpdateManyArgs>(args: SelectSubset<T, TesteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testes and returns the data updated in the database.
     * @param {TesteUpdateManyAndReturnArgs} args - Arguments to update many Testes.
     * @example
     * // Update many Testes
     * const teste = await prisma.teste.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testes and only return the `id`
     * const testeWithIdOnly = await prisma.teste.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TesteUpdateManyAndReturnArgs>(args: SelectSubset<T, TesteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teste.
     * @param {TesteUpsertArgs} args - Arguments to update or create a Teste.
     * @example
     * // Update or create a Teste
     * const teste = await prisma.teste.upsert({
     *   create: {
     *     // ... data to create a Teste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teste we want to update
     *   }
     * })
     */
    upsert<T extends TesteUpsertArgs>(args: SelectSubset<T, TesteUpsertArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteCountArgs} args - Arguments to filter Testes to count.
     * @example
     * // Count the number of Testes
     * const count = await prisma.teste.count({
     *   where: {
     *     // ... the filter for the Testes we want to count
     *   }
     * })
    **/
    count<T extends TesteCountArgs>(
      args?: Subset<T, TesteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TesteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TesteAggregateArgs>(args: Subset<T, TesteAggregateArgs>): Prisma.PrismaPromise<GetTesteAggregateType<T>>

    /**
     * Group by Teste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TesteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TesteGroupByArgs['orderBy'] }
        : { orderBy?: TesteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TesteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTesteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teste model
   */
  readonly fields: TesteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TesteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departamentos<T extends Teste$departamentosArgs<ExtArgs> = {}>(args?: Subset<T, Teste$departamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TesteDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Teste$logsArgs<ExtArgs> = {}>(args?: Subset<T, Teste$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campanhas<T extends Teste$campanhasArgs<ExtArgs> = {}>(args?: Subset<T, Teste$campanhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaTestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends Teste$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Teste$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teste model
   */ 
  interface TesteFieldRefs {
    readonly id: FieldRef<"Teste", 'String'>
    readonly canal: FieldRef<"Teste", 'CanalTeste'>
    readonly status: FieldRef<"Teste", 'StatusTeste'>
    readonly caiuNoTeste: FieldRef<"Teste", 'Boolean'>
    readonly reportouPhishing: FieldRef<"Teste", 'Boolean'>
    readonly usuarioId: FieldRef<"Teste", 'String'>
    readonly ativo: FieldRef<"Teste", 'Boolean'>
    readonly criadoEm: FieldRef<"Teste", 'DateTime'>
    readonly criadoPor: FieldRef<"Teste", 'String'>
    readonly atualizadoEm: FieldRef<"Teste", 'DateTime'>
    readonly atualizadoPor: FieldRef<"Teste", 'String'>
    readonly inativadoEm: FieldRef<"Teste", 'DateTime'>
    readonly inativadoPor: FieldRef<"Teste", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teste findUnique
   */
  export type TesteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste findUniqueOrThrow
   */
  export type TesteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste findFirst
   */
  export type TesteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testes.
     */
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste findFirstOrThrow
   */
  export type TesteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testes.
     */
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste findMany
   */
  export type TesteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Testes to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste create
   */
  export type TesteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * The data needed to create a Teste.
     */
    data: XOR<TesteCreateInput, TesteUncheckedCreateInput>
  }

  /**
   * Teste createMany
   */
  export type TesteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testes.
     */
    data: TesteCreateManyInput | TesteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teste createManyAndReturn
   */
  export type TesteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The data used to create many Testes.
     */
    data: TesteCreateManyInput | TesteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teste update
   */
  export type TesteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * The data needed to update a Teste.
     */
    data: XOR<TesteUpdateInput, TesteUncheckedUpdateInput>
    /**
     * Choose, which Teste to update.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste updateMany
   */
  export type TesteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testes.
     */
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyInput>
    /**
     * Filter which Testes to update
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to update.
     */
    limit?: number
  }

  /**
   * Teste updateManyAndReturn
   */
  export type TesteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The data used to update Testes.
     */
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyInput>
    /**
     * Filter which Testes to update
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teste upsert
   */
  export type TesteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * The filter to search for the Teste to update in case it exists.
     */
    where: TesteWhereUniqueInput
    /**
     * In case the Teste found by the `where` argument doesn't exist, create a new Teste with this data.
     */
    create: XOR<TesteCreateInput, TesteUncheckedCreateInput>
    /**
     * In case the Teste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TesteUpdateInput, TesteUncheckedUpdateInput>
  }

  /**
   * Teste delete
   */
  export type TesteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter which Teste to delete.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste deleteMany
   */
  export type TesteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testes to delete
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to delete.
     */
    limit?: number
  }

  /**
   * Teste.departamentos
   */
  export type Teste$departamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TesteDepartamento
     */
    select?: TesteDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TesteDepartamento
     */
    omit?: TesteDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteDepartamentoInclude<ExtArgs> | null
    where?: TesteDepartamentoWhereInput
    orderBy?: TesteDepartamentoOrderByWithRelationInput | TesteDepartamentoOrderByWithRelationInput[]
    cursor?: TesteDepartamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TesteDepartamentoScalarFieldEnum | TesteDepartamentoScalarFieldEnum[]
  }

  /**
   * Teste.logs
   */
  export type Teste$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Teste.campanhas
   */
  export type Teste$campanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaTeste
     */
    select?: CampanhaTesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampanhaTeste
     */
    omit?: CampanhaTesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaTesteInclude<ExtArgs> | null
    where?: CampanhaTesteWhereInput
    orderBy?: CampanhaTesteOrderByWithRelationInput | CampanhaTesteOrderByWithRelationInput[]
    cursor?: CampanhaTesteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampanhaTesteScalarFieldEnum | CampanhaTesteScalarFieldEnum[]
  }

  /**
   * Teste.usuario
   */
  export type Teste$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Teste without action
   */
  export type TesteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioDepartamento
   */

  export type AggregateUsuarioDepartamento = {
    _count: UsuarioDepartamentoCountAggregateOutputType | null
    _min: UsuarioDepartamentoMinAggregateOutputType | null
    _max: UsuarioDepartamentoMaxAggregateOutputType | null
  }

  export type UsuarioDepartamentoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    departamentoId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type UsuarioDepartamentoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    departamentoId: string | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type UsuarioDepartamentoCountAggregateOutputType = {
    id: number
    usuarioId: number
    departamentoId: number
    ativo: number
    criadoEm: number
    criadoPor: number
    atualizadoEm: number
    atualizadoPor: number
    inativadoEm: number
    inativadoPor: number
    _all: number
  }


  export type UsuarioDepartamentoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    departamentoId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type UsuarioDepartamentoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    departamentoId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type UsuarioDepartamentoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    departamentoId?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
    _all?: true
  }

  export type UsuarioDepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioDepartamento to aggregate.
     */
    where?: UsuarioDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDepartamentos to fetch.
     */
    orderBy?: UsuarioDepartamentoOrderByWithRelationInput | UsuarioDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioDepartamentos
    **/
    _count?: true | UsuarioDepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioDepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioDepartamentoMaxAggregateInputType
  }

  export type GetUsuarioDepartamentoAggregateType<T extends UsuarioDepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioDepartamento[P]>
      : GetScalarType<T[P], AggregateUsuarioDepartamento[P]>
  }




  export type UsuarioDepartamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDepartamentoWhereInput
    orderBy?: UsuarioDepartamentoOrderByWithAggregationInput | UsuarioDepartamentoOrderByWithAggregationInput[]
    by: UsuarioDepartamentoScalarFieldEnum[] | UsuarioDepartamentoScalarFieldEnum
    having?: UsuarioDepartamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioDepartamentoCountAggregateInputType | true
    _min?: UsuarioDepartamentoMinAggregateInputType
    _max?: UsuarioDepartamentoMaxAggregateInputType
  }

  export type UsuarioDepartamentoGroupByOutputType = {
    id: string
    usuarioId: string
    departamentoId: string
    ativo: boolean
    criadoEm: Date
    criadoPor: string | null
    atualizadoEm: Date
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
    _count: UsuarioDepartamentoCountAggregateOutputType | null
    _min: UsuarioDepartamentoMinAggregateOutputType | null
    _max: UsuarioDepartamentoMaxAggregateOutputType | null
  }

  type GetUsuarioDepartamentoGroupByPayload<T extends UsuarioDepartamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioDepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioDepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioDepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioDepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioDepartamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    departamentoId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDepartamento"]>

  export type UsuarioDepartamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    departamentoId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDepartamento"]>

  export type UsuarioDepartamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    departamentoId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDepartamento"]>

  export type UsuarioDepartamentoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    departamentoId?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }

  export type UsuarioDepartamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "departamentoId" | "ativo" | "criadoEm" | "criadoPor" | "atualizadoEm" | "atualizadoPor" | "inativadoEm" | "inativadoPor", ExtArgs["result"]["usuarioDepartamento"]>
  export type UsuarioDepartamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }
  export type UsuarioDepartamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }
  export type UsuarioDepartamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }

  export type $UsuarioDepartamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioDepartamento"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      departamento: Prisma.$DepartamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      departamentoId: string
      ativo: boolean
      criadoEm: Date
      criadoPor: string | null
      atualizadoEm: Date
      atualizadoPor: string | null
      inativadoEm: Date | null
      inativadoPor: string | null
    }, ExtArgs["result"]["usuarioDepartamento"]>
    composites: {}
  }

  type UsuarioDepartamentoGetPayload<S extends boolean | null | undefined | UsuarioDepartamentoDefaultArgs> = $Result.GetResult<Prisma.$UsuarioDepartamentoPayload, S>

  type UsuarioDepartamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioDepartamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioDepartamentoCountAggregateInputType | true
    }

  export interface UsuarioDepartamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioDepartamento'], meta: { name: 'UsuarioDepartamento' } }
    /**
     * Find zero or one UsuarioDepartamento that matches the filter.
     * @param {UsuarioDepartamentoFindUniqueArgs} args - Arguments to find a UsuarioDepartamento
     * @example
     * // Get one UsuarioDepartamento
     * const usuarioDepartamento = await prisma.usuarioDepartamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioDepartamentoFindUniqueArgs>(args: SelectSubset<T, UsuarioDepartamentoFindUniqueArgs<ExtArgs>>): Prisma__UsuarioDepartamentoClient<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioDepartamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioDepartamentoFindUniqueOrThrowArgs} args - Arguments to find a UsuarioDepartamento
     * @example
     * // Get one UsuarioDepartamento
     * const usuarioDepartamento = await prisma.usuarioDepartamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioDepartamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioDepartamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioDepartamentoClient<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioDepartamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDepartamentoFindFirstArgs} args - Arguments to find a UsuarioDepartamento
     * @example
     * // Get one UsuarioDepartamento
     * const usuarioDepartamento = await prisma.usuarioDepartamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioDepartamentoFindFirstArgs>(args?: SelectSubset<T, UsuarioDepartamentoFindFirstArgs<ExtArgs>>): Prisma__UsuarioDepartamentoClient<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioDepartamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDepartamentoFindFirstOrThrowArgs} args - Arguments to find a UsuarioDepartamento
     * @example
     * // Get one UsuarioDepartamento
     * const usuarioDepartamento = await prisma.usuarioDepartamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioDepartamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioDepartamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioDepartamentoClient<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioDepartamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDepartamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioDepartamentos
     * const usuarioDepartamentos = await prisma.usuarioDepartamento.findMany()
     * 
     * // Get first 10 UsuarioDepartamentos
     * const usuarioDepartamentos = await prisma.usuarioDepartamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioDepartamentoWithIdOnly = await prisma.usuarioDepartamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioDepartamentoFindManyArgs>(args?: SelectSubset<T, UsuarioDepartamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioDepartamento.
     * @param {UsuarioDepartamentoCreateArgs} args - Arguments to create a UsuarioDepartamento.
     * @example
     * // Create one UsuarioDepartamento
     * const UsuarioDepartamento = await prisma.usuarioDepartamento.create({
     *   data: {
     *     // ... data to create a UsuarioDepartamento
     *   }
     * })
     * 
     */
    create<T extends UsuarioDepartamentoCreateArgs>(args: SelectSubset<T, UsuarioDepartamentoCreateArgs<ExtArgs>>): Prisma__UsuarioDepartamentoClient<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioDepartamentos.
     * @param {UsuarioDepartamentoCreateManyArgs} args - Arguments to create many UsuarioDepartamentos.
     * @example
     * // Create many UsuarioDepartamentos
     * const usuarioDepartamento = await prisma.usuarioDepartamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioDepartamentoCreateManyArgs>(args?: SelectSubset<T, UsuarioDepartamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioDepartamentos and returns the data saved in the database.
     * @param {UsuarioDepartamentoCreateManyAndReturnArgs} args - Arguments to create many UsuarioDepartamentos.
     * @example
     * // Create many UsuarioDepartamentos
     * const usuarioDepartamento = await prisma.usuarioDepartamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioDepartamentos and only return the `id`
     * const usuarioDepartamentoWithIdOnly = await prisma.usuarioDepartamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioDepartamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioDepartamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioDepartamento.
     * @param {UsuarioDepartamentoDeleteArgs} args - Arguments to delete one UsuarioDepartamento.
     * @example
     * // Delete one UsuarioDepartamento
     * const UsuarioDepartamento = await prisma.usuarioDepartamento.delete({
     *   where: {
     *     // ... filter to delete one UsuarioDepartamento
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDepartamentoDeleteArgs>(args: SelectSubset<T, UsuarioDepartamentoDeleteArgs<ExtArgs>>): Prisma__UsuarioDepartamentoClient<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioDepartamento.
     * @param {UsuarioDepartamentoUpdateArgs} args - Arguments to update one UsuarioDepartamento.
     * @example
     * // Update one UsuarioDepartamento
     * const usuarioDepartamento = await prisma.usuarioDepartamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioDepartamentoUpdateArgs>(args: SelectSubset<T, UsuarioDepartamentoUpdateArgs<ExtArgs>>): Prisma__UsuarioDepartamentoClient<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioDepartamentos.
     * @param {UsuarioDepartamentoDeleteManyArgs} args - Arguments to filter UsuarioDepartamentos to delete.
     * @example
     * // Delete a few UsuarioDepartamentos
     * const { count } = await prisma.usuarioDepartamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDepartamentoDeleteManyArgs>(args?: SelectSubset<T, UsuarioDepartamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioDepartamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDepartamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioDepartamentos
     * const usuarioDepartamento = await prisma.usuarioDepartamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioDepartamentoUpdateManyArgs>(args: SelectSubset<T, UsuarioDepartamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioDepartamentos and returns the data updated in the database.
     * @param {UsuarioDepartamentoUpdateManyAndReturnArgs} args - Arguments to update many UsuarioDepartamentos.
     * @example
     * // Update many UsuarioDepartamentos
     * const usuarioDepartamento = await prisma.usuarioDepartamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioDepartamentos and only return the `id`
     * const usuarioDepartamentoWithIdOnly = await prisma.usuarioDepartamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioDepartamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioDepartamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioDepartamento.
     * @param {UsuarioDepartamentoUpsertArgs} args - Arguments to update or create a UsuarioDepartamento.
     * @example
     * // Update or create a UsuarioDepartamento
     * const usuarioDepartamento = await prisma.usuarioDepartamento.upsert({
     *   create: {
     *     // ... data to create a UsuarioDepartamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioDepartamento we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioDepartamentoUpsertArgs>(args: SelectSubset<T, UsuarioDepartamentoUpsertArgs<ExtArgs>>): Prisma__UsuarioDepartamentoClient<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioDepartamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDepartamentoCountArgs} args - Arguments to filter UsuarioDepartamentos to count.
     * @example
     * // Count the number of UsuarioDepartamentos
     * const count = await prisma.usuarioDepartamento.count({
     *   where: {
     *     // ... the filter for the UsuarioDepartamentos we want to count
     *   }
     * })
    **/
    count<T extends UsuarioDepartamentoCountArgs>(
      args?: Subset<T, UsuarioDepartamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioDepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioDepartamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioDepartamentoAggregateArgs>(args: Subset<T, UsuarioDepartamentoAggregateArgs>): Prisma.PrismaPromise<GetUsuarioDepartamentoAggregateType<T>>

    /**
     * Group by UsuarioDepartamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDepartamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioDepartamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioDepartamentoGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioDepartamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioDepartamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioDepartamento model
   */
  readonly fields: UsuarioDepartamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioDepartamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioDepartamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departamento<T extends DepartamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartamentoDefaultArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioDepartamento model
   */ 
  interface UsuarioDepartamentoFieldRefs {
    readonly id: FieldRef<"UsuarioDepartamento", 'String'>
    readonly usuarioId: FieldRef<"UsuarioDepartamento", 'String'>
    readonly departamentoId: FieldRef<"UsuarioDepartamento", 'String'>
    readonly ativo: FieldRef<"UsuarioDepartamento", 'Boolean'>
    readonly criadoEm: FieldRef<"UsuarioDepartamento", 'DateTime'>
    readonly criadoPor: FieldRef<"UsuarioDepartamento", 'String'>
    readonly atualizadoEm: FieldRef<"UsuarioDepartamento", 'DateTime'>
    readonly atualizadoPor: FieldRef<"UsuarioDepartamento", 'String'>
    readonly inativadoEm: FieldRef<"UsuarioDepartamento", 'DateTime'>
    readonly inativadoPor: FieldRef<"UsuarioDepartamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioDepartamento findUnique
   */
  export type UsuarioDepartamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDepartamento to fetch.
     */
    where: UsuarioDepartamentoWhereUniqueInput
  }

  /**
   * UsuarioDepartamento findUniqueOrThrow
   */
  export type UsuarioDepartamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDepartamento to fetch.
     */
    where: UsuarioDepartamentoWhereUniqueInput
  }

  /**
   * UsuarioDepartamento findFirst
   */
  export type UsuarioDepartamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDepartamento to fetch.
     */
    where?: UsuarioDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDepartamentos to fetch.
     */
    orderBy?: UsuarioDepartamentoOrderByWithRelationInput | UsuarioDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioDepartamentos.
     */
    cursor?: UsuarioDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioDepartamentos.
     */
    distinct?: UsuarioDepartamentoScalarFieldEnum | UsuarioDepartamentoScalarFieldEnum[]
  }

  /**
   * UsuarioDepartamento findFirstOrThrow
   */
  export type UsuarioDepartamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDepartamento to fetch.
     */
    where?: UsuarioDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDepartamentos to fetch.
     */
    orderBy?: UsuarioDepartamentoOrderByWithRelationInput | UsuarioDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioDepartamentos.
     */
    cursor?: UsuarioDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioDepartamentos.
     */
    distinct?: UsuarioDepartamentoScalarFieldEnum | UsuarioDepartamentoScalarFieldEnum[]
  }

  /**
   * UsuarioDepartamento findMany
   */
  export type UsuarioDepartamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDepartamentos to fetch.
     */
    where?: UsuarioDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDepartamentos to fetch.
     */
    orderBy?: UsuarioDepartamentoOrderByWithRelationInput | UsuarioDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioDepartamentos.
     */
    cursor?: UsuarioDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDepartamentos.
     */
    skip?: number
    distinct?: UsuarioDepartamentoScalarFieldEnum | UsuarioDepartamentoScalarFieldEnum[]
  }

  /**
   * UsuarioDepartamento create
   */
  export type UsuarioDepartamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioDepartamento.
     */
    data: XOR<UsuarioDepartamentoCreateInput, UsuarioDepartamentoUncheckedCreateInput>
  }

  /**
   * UsuarioDepartamento createMany
   */
  export type UsuarioDepartamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioDepartamentos.
     */
    data: UsuarioDepartamentoCreateManyInput | UsuarioDepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioDepartamento createManyAndReturn
   */
  export type UsuarioDepartamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioDepartamentos.
     */
    data: UsuarioDepartamentoCreateManyInput | UsuarioDepartamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioDepartamento update
   */
  export type UsuarioDepartamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioDepartamento.
     */
    data: XOR<UsuarioDepartamentoUpdateInput, UsuarioDepartamentoUncheckedUpdateInput>
    /**
     * Choose, which UsuarioDepartamento to update.
     */
    where: UsuarioDepartamentoWhereUniqueInput
  }

  /**
   * UsuarioDepartamento updateMany
   */
  export type UsuarioDepartamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioDepartamentos.
     */
    data: XOR<UsuarioDepartamentoUpdateManyMutationInput, UsuarioDepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioDepartamentos to update
     */
    where?: UsuarioDepartamentoWhereInput
    /**
     * Limit how many UsuarioDepartamentos to update.
     */
    limit?: number
  }

  /**
   * UsuarioDepartamento updateManyAndReturn
   */
  export type UsuarioDepartamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioDepartamentos.
     */
    data: XOR<UsuarioDepartamentoUpdateManyMutationInput, UsuarioDepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioDepartamentos to update
     */
    where?: UsuarioDepartamentoWhereInput
    /**
     * Limit how many UsuarioDepartamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioDepartamento upsert
   */
  export type UsuarioDepartamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioDepartamento to update in case it exists.
     */
    where: UsuarioDepartamentoWhereUniqueInput
    /**
     * In case the UsuarioDepartamento found by the `where` argument doesn't exist, create a new UsuarioDepartamento with this data.
     */
    create: XOR<UsuarioDepartamentoCreateInput, UsuarioDepartamentoUncheckedCreateInput>
    /**
     * In case the UsuarioDepartamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioDepartamentoUpdateInput, UsuarioDepartamentoUncheckedUpdateInput>
  }

  /**
   * UsuarioDepartamento delete
   */
  export type UsuarioDepartamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    /**
     * Filter which UsuarioDepartamento to delete.
     */
    where: UsuarioDepartamentoWhereUniqueInput
  }

  /**
   * UsuarioDepartamento deleteMany
   */
  export type UsuarioDepartamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioDepartamentos to delete
     */
    where?: UsuarioDepartamentoWhereInput
    /**
     * Limit how many UsuarioDepartamentos to delete.
     */
    limit?: number
  }

  /**
   * UsuarioDepartamento without action
   */
  export type UsuarioDepartamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    cargo: $Enums.CargoUsuario | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    cargo: $Enums.CargoUsuario | null
    ativo: boolean | null
    criadoEm: Date | null
    criadoPor: string | null
    atualizadoEm: Date | null
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    email: number
    cargo: number
    ativo: number
    criadoEm: number
    criadoPor: number
    atualizadoEm: number
    atualizadoPor: number
    inativadoEm: number
    inativadoPor: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    cargo?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    cargo?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    cargo?: true
    ativo?: true
    criadoEm?: true
    criadoPor?: true
    atualizadoEm?: true
    atualizadoPor?: true
    inativadoEm?: true
    inativadoPor?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    sobrenome: string | null
    email: string
    cargo: $Enums.CargoUsuario
    ativo: boolean
    criadoEm: Date
    criadoPor: string | null
    atualizadoEm: Date
    atualizadoPor: string | null
    inativadoEm: Date | null
    inativadoPor: string | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    cargo?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
    departamentos?: boolean | Usuario$departamentosArgs<ExtArgs>
    testes?: boolean | Usuario$testesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    cargo?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    cargo?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    cargo?: boolean
    ativo?: boolean
    criadoEm?: boolean
    criadoPor?: boolean
    atualizadoEm?: boolean
    atualizadoPor?: boolean
    inativadoEm?: boolean
    inativadoPor?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "email" | "cargo" | "ativo" | "criadoEm" | "criadoPor" | "atualizadoEm" | "atualizadoPor" | "inativadoEm" | "inativadoPor", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamentos?: boolean | Usuario$departamentosArgs<ExtArgs>
    testes?: boolean | Usuario$testesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      departamentos: Prisma.$UsuarioDepartamentoPayload<ExtArgs>[]
      testes: Prisma.$TestePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sobrenome: string | null
      email: string
      cargo: $Enums.CargoUsuario
      ativo: boolean
      criadoEm: Date
      criadoPor: string | null
      atualizadoEm: Date
      atualizadoPor: string | null
      inativadoEm: Date | null
      inativadoPor: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departamentos<T extends Usuario$departamentosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$departamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testes<T extends Usuario$testesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$testesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly sobrenome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly cargo: FieldRef<"Usuario", 'CargoUsuario'>
    readonly ativo: FieldRef<"Usuario", 'Boolean'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly criadoPor: FieldRef<"Usuario", 'String'>
    readonly atualizadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly atualizadoPor: FieldRef<"Usuario", 'String'>
    readonly inativadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly inativadoPor: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.departamentos
   */
  export type Usuario$departamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDepartamento
     */
    select?: UsuarioDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDepartamento
     */
    omit?: UsuarioDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDepartamentoInclude<ExtArgs> | null
    where?: UsuarioDepartamentoWhereInput
    orderBy?: UsuarioDepartamentoOrderByWithRelationInput | UsuarioDepartamentoOrderByWithRelationInput[]
    cursor?: UsuarioDepartamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioDepartamentoScalarFieldEnum | UsuarioDepartamentoScalarFieldEnum[]
  }

  /**
   * Usuario.testes
   */
  export type Usuario$testesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    where?: TesteWhereInput
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    cursor?: TesteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampanhaTesteScalarFieldEnum: {
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

  export type CampanhaTesteScalarFieldEnum = (typeof CampanhaTesteScalarFieldEnum)[keyof typeof CampanhaTesteScalarFieldEnum]


  export const CampanhaScalarFieldEnum: {
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

  export type CampanhaScalarFieldEnum = (typeof CampanhaScalarFieldEnum)[keyof typeof CampanhaScalarFieldEnum]


  export const DepartamentoScalarFieldEnum: {
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

  export type DepartamentoScalarFieldEnum = (typeof DepartamentoScalarFieldEnum)[keyof typeof DepartamentoScalarFieldEnum]


  export const LogScalarFieldEnum: {
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

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const TesteDepartamentoScalarFieldEnum: {
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

  export type TesteDepartamentoScalarFieldEnum = (typeof TesteDepartamentoScalarFieldEnum)[keyof typeof TesteDepartamentoScalarFieldEnum]


  export const TesteScalarFieldEnum: {
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

  export type TesteScalarFieldEnum = (typeof TesteScalarFieldEnum)[keyof typeof TesteScalarFieldEnum]


  export const UsuarioDepartamentoScalarFieldEnum: {
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

  export type UsuarioDepartamentoScalarFieldEnum = (typeof UsuarioDepartamentoScalarFieldEnum)[keyof typeof UsuarioDepartamentoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
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

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusCampanha'
   */
  export type EnumStatusCampanhaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusCampanha'>
    


  /**
   * Reference to a field of type 'StatusCampanha[]'
   */
  export type ListEnumStatusCampanhaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusCampanha[]'>
    


  /**
   * Reference to a field of type 'TipoLog'
   */
  export type EnumTipoLogFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoLog'>
    


  /**
   * Reference to a field of type 'TipoLog[]'
   */
  export type ListEnumTipoLogFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoLog[]'>
    


  /**
   * Reference to a field of type 'CanalTeste'
   */
  export type EnumCanalTesteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CanalTeste'>
    


  /**
   * Reference to a field of type 'CanalTeste[]'
   */
  export type ListEnumCanalTesteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CanalTeste[]'>
    


  /**
   * Reference to a field of type 'StatusTeste'
   */
  export type EnumStatusTesteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTeste'>
    


  /**
   * Reference to a field of type 'StatusTeste[]'
   */
  export type ListEnumStatusTesteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTeste[]'>
    


  /**
   * Reference to a field of type 'CargoUsuario'
   */
  export type EnumCargoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoUsuario'>
    


  /**
   * Reference to a field of type 'CargoUsuario[]'
   */
  export type ListEnumCargoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoUsuario[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CampanhaTesteWhereInput = {
    AND?: CampanhaTesteWhereInput | CampanhaTesteWhereInput[]
    OR?: CampanhaTesteWhereInput[]
    NOT?: CampanhaTesteWhereInput | CampanhaTesteWhereInput[]
    id?: StringFilter<"CampanhaTeste"> | string
    campanhaId?: StringFilter<"CampanhaTeste"> | string
    testeId?: StringFilter<"CampanhaTeste"> | string
    ativo?: BoolFilter<"CampanhaTeste"> | boolean
    criadoEm?: DateTimeFilter<"CampanhaTeste"> | Date | string
    criadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
    atualizadoEm?: DateTimeFilter<"CampanhaTeste"> | Date | string
    atualizadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
    inativadoEm?: DateTimeNullableFilter<"CampanhaTeste"> | Date | string | null
    inativadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
    campanha?: XOR<CampanhaScalarRelationFilter, CampanhaWhereInput>
    teste?: XOR<TesteScalarRelationFilter, TesteWhereInput>
  }

  export type CampanhaTesteOrderByWithRelationInput = {
    id?: SortOrder
    campanhaId?: SortOrder
    testeId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    campanha?: CampanhaOrderByWithRelationInput
    teste?: TesteOrderByWithRelationInput
  }

  export type CampanhaTesteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campanhaId_testeId?: CampanhaTesteCampanhaIdTesteIdCompoundUniqueInput
    AND?: CampanhaTesteWhereInput | CampanhaTesteWhereInput[]
    OR?: CampanhaTesteWhereInput[]
    NOT?: CampanhaTesteWhereInput | CampanhaTesteWhereInput[]
    campanhaId?: StringFilter<"CampanhaTeste"> | string
    testeId?: StringFilter<"CampanhaTeste"> | string
    ativo?: BoolFilter<"CampanhaTeste"> | boolean
    criadoEm?: DateTimeFilter<"CampanhaTeste"> | Date | string
    criadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
    atualizadoEm?: DateTimeFilter<"CampanhaTeste"> | Date | string
    atualizadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
    inativadoEm?: DateTimeNullableFilter<"CampanhaTeste"> | Date | string | null
    inativadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
    campanha?: XOR<CampanhaScalarRelationFilter, CampanhaWhereInput>
    teste?: XOR<TesteScalarRelationFilter, TesteWhereInput>
  }, "id" | "campanhaId_testeId">

  export type CampanhaTesteOrderByWithAggregationInput = {
    id?: SortOrder
    campanhaId?: SortOrder
    testeId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    _count?: CampanhaTesteCountOrderByAggregateInput
    _max?: CampanhaTesteMaxOrderByAggregateInput
    _min?: CampanhaTesteMinOrderByAggregateInput
  }

  export type CampanhaTesteScalarWhereWithAggregatesInput = {
    AND?: CampanhaTesteScalarWhereWithAggregatesInput | CampanhaTesteScalarWhereWithAggregatesInput[]
    OR?: CampanhaTesteScalarWhereWithAggregatesInput[]
    NOT?: CampanhaTesteScalarWhereWithAggregatesInput | CampanhaTesteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampanhaTeste"> | string
    campanhaId?: StringWithAggregatesFilter<"CampanhaTeste"> | string
    testeId?: StringWithAggregatesFilter<"CampanhaTeste"> | string
    ativo?: BoolWithAggregatesFilter<"CampanhaTeste"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"CampanhaTeste"> | Date | string
    criadoPor?: StringNullableWithAggregatesFilter<"CampanhaTeste"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"CampanhaTeste"> | Date | string
    atualizadoPor?: StringNullableWithAggregatesFilter<"CampanhaTeste"> | string | null
    inativadoEm?: DateTimeNullableWithAggregatesFilter<"CampanhaTeste"> | Date | string | null
    inativadoPor?: StringNullableWithAggregatesFilter<"CampanhaTeste"> | string | null
  }

  export type CampanhaWhereInput = {
    AND?: CampanhaWhereInput | CampanhaWhereInput[]
    OR?: CampanhaWhereInput[]
    NOT?: CampanhaWhereInput | CampanhaWhereInput[]
    id?: StringFilter<"Campanha"> | string
    titulo?: StringFilter<"Campanha"> | string
    descricao?: StringNullableFilter<"Campanha"> | string | null
    status?: EnumStatusCampanhaFilter<"Campanha"> | $Enums.StatusCampanha
    ativo?: BoolFilter<"Campanha"> | boolean
    criadoEm?: DateTimeFilter<"Campanha"> | Date | string
    criadoPor?: StringNullableFilter<"Campanha"> | string | null
    atualizadoEm?: DateTimeFilter<"Campanha"> | Date | string
    atualizadoPor?: StringNullableFilter<"Campanha"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Campanha"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Campanha"> | string | null
    logs?: LogListRelationFilter
    testes?: CampanhaTesteListRelationFilter
  }

  export type CampanhaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    logs?: LogOrderByRelationAggregateInput
    testes?: CampanhaTesteOrderByRelationAggregateInput
  }

  export type CampanhaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampanhaWhereInput | CampanhaWhereInput[]
    OR?: CampanhaWhereInput[]
    NOT?: CampanhaWhereInput | CampanhaWhereInput[]
    titulo?: StringFilter<"Campanha"> | string
    descricao?: StringNullableFilter<"Campanha"> | string | null
    status?: EnumStatusCampanhaFilter<"Campanha"> | $Enums.StatusCampanha
    ativo?: BoolFilter<"Campanha"> | boolean
    criadoEm?: DateTimeFilter<"Campanha"> | Date | string
    criadoPor?: StringNullableFilter<"Campanha"> | string | null
    atualizadoEm?: DateTimeFilter<"Campanha"> | Date | string
    atualizadoPor?: StringNullableFilter<"Campanha"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Campanha"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Campanha"> | string | null
    logs?: LogListRelationFilter
    testes?: CampanhaTesteListRelationFilter
  }, "id">

  export type CampanhaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    _count?: CampanhaCountOrderByAggregateInput
    _max?: CampanhaMaxOrderByAggregateInput
    _min?: CampanhaMinOrderByAggregateInput
  }

  export type CampanhaScalarWhereWithAggregatesInput = {
    AND?: CampanhaScalarWhereWithAggregatesInput | CampanhaScalarWhereWithAggregatesInput[]
    OR?: CampanhaScalarWhereWithAggregatesInput[]
    NOT?: CampanhaScalarWhereWithAggregatesInput | CampanhaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campanha"> | string
    titulo?: StringWithAggregatesFilter<"Campanha"> | string
    descricao?: StringNullableWithAggregatesFilter<"Campanha"> | string | null
    status?: EnumStatusCampanhaWithAggregatesFilter<"Campanha"> | $Enums.StatusCampanha
    ativo?: BoolWithAggregatesFilter<"Campanha"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Campanha"> | Date | string
    criadoPor?: StringNullableWithAggregatesFilter<"Campanha"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"Campanha"> | Date | string
    atualizadoPor?: StringNullableWithAggregatesFilter<"Campanha"> | string | null
    inativadoEm?: DateTimeNullableWithAggregatesFilter<"Campanha"> | Date | string | null
    inativadoPor?: StringNullableWithAggregatesFilter<"Campanha"> | string | null
  }

  export type DepartamentoWhereInput = {
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    id?: StringFilter<"Departamento"> | string
    nome?: StringFilter<"Departamento"> | string
    ativo?: BoolFilter<"Departamento"> | boolean
    criadoEm?: DateTimeFilter<"Departamento"> | Date | string
    criadoPor?: StringNullableFilter<"Departamento"> | string | null
    atualizadoEm?: DateTimeFilter<"Departamento"> | Date | string
    atualizadoPor?: StringNullableFilter<"Departamento"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Departamento"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Departamento"> | string | null
    testes?: TesteDepartamentoListRelationFilter
    logs?: LogListRelationFilter
    usuarios?: UsuarioDepartamentoListRelationFilter
  }

  export type DepartamentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    testes?: TesteDepartamentoOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
    usuarios?: UsuarioDepartamentoOrderByRelationAggregateInput
  }

  export type DepartamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    nome?: StringFilter<"Departamento"> | string
    ativo?: BoolFilter<"Departamento"> | boolean
    criadoEm?: DateTimeFilter<"Departamento"> | Date | string
    criadoPor?: StringNullableFilter<"Departamento"> | string | null
    atualizadoEm?: DateTimeFilter<"Departamento"> | Date | string
    atualizadoPor?: StringNullableFilter<"Departamento"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Departamento"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Departamento"> | string | null
    testes?: TesteDepartamentoListRelationFilter
    logs?: LogListRelationFilter
    usuarios?: UsuarioDepartamentoListRelationFilter
  }, "id">

  export type DepartamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    _count?: DepartamentoCountOrderByAggregateInput
    _max?: DepartamentoMaxOrderByAggregateInput
    _min?: DepartamentoMinOrderByAggregateInput
  }

  export type DepartamentoScalarWhereWithAggregatesInput = {
    AND?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    OR?: DepartamentoScalarWhereWithAggregatesInput[]
    NOT?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Departamento"> | string
    nome?: StringWithAggregatesFilter<"Departamento"> | string
    ativo?: BoolWithAggregatesFilter<"Departamento"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Departamento"> | Date | string
    criadoPor?: StringNullableWithAggregatesFilter<"Departamento"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"Departamento"> | Date | string
    atualizadoPor?: StringNullableWithAggregatesFilter<"Departamento"> | string | null
    inativadoEm?: DateTimeNullableWithAggregatesFilter<"Departamento"> | Date | string | null
    inativadoPor?: StringNullableWithAggregatesFilter<"Departamento"> | string | null
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    tipo?: EnumTipoLogFilter<"Log"> | $Enums.TipoLog
    descricao?: StringNullableFilter<"Log"> | string | null
    campanhaId?: StringNullableFilter<"Log"> | string | null
    departamentoId?: StringNullableFilter<"Log"> | string | null
    testeId?: StringNullableFilter<"Log"> | string | null
    ativo?: BoolFilter<"Log"> | boolean
    criadoEm?: DateTimeFilter<"Log"> | Date | string
    criadoPor?: StringNullableFilter<"Log"> | string | null
    atualizadoEm?: DateTimeFilter<"Log"> | Date | string
    atualizadoPor?: StringNullableFilter<"Log"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Log"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Log"> | string | null
    campanha?: XOR<CampanhaNullableScalarRelationFilter, CampanhaWhereInput> | null
    departamento?: XOR<DepartamentoNullableScalarRelationFilter, DepartamentoWhereInput> | null
    teste?: XOR<TesteNullableScalarRelationFilter, TesteWhereInput> | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    campanhaId?: SortOrderInput | SortOrder
    departamentoId?: SortOrderInput | SortOrder
    testeId?: SortOrderInput | SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    campanha?: CampanhaOrderByWithRelationInput
    departamento?: DepartamentoOrderByWithRelationInput
    teste?: TesteOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    tipo?: EnumTipoLogFilter<"Log"> | $Enums.TipoLog
    descricao?: StringNullableFilter<"Log"> | string | null
    campanhaId?: StringNullableFilter<"Log"> | string | null
    departamentoId?: StringNullableFilter<"Log"> | string | null
    testeId?: StringNullableFilter<"Log"> | string | null
    ativo?: BoolFilter<"Log"> | boolean
    criadoEm?: DateTimeFilter<"Log"> | Date | string
    criadoPor?: StringNullableFilter<"Log"> | string | null
    atualizadoEm?: DateTimeFilter<"Log"> | Date | string
    atualizadoPor?: StringNullableFilter<"Log"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Log"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Log"> | string | null
    campanha?: XOR<CampanhaNullableScalarRelationFilter, CampanhaWhereInput> | null
    departamento?: XOR<DepartamentoNullableScalarRelationFilter, DepartamentoWhereInput> | null
    teste?: XOR<TesteNullableScalarRelationFilter, TesteWhereInput> | null
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    campanhaId?: SortOrderInput | SortOrder
    departamentoId?: SortOrderInput | SortOrder
    testeId?: SortOrderInput | SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    tipo?: EnumTipoLogWithAggregatesFilter<"Log"> | $Enums.TipoLog
    descricao?: StringNullableWithAggregatesFilter<"Log"> | string | null
    campanhaId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    departamentoId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    testeId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    ativo?: BoolWithAggregatesFilter<"Log"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    criadoPor?: StringNullableWithAggregatesFilter<"Log"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    atualizadoPor?: StringNullableWithAggregatesFilter<"Log"> | string | null
    inativadoEm?: DateTimeNullableWithAggregatesFilter<"Log"> | Date | string | null
    inativadoPor?: StringNullableWithAggregatesFilter<"Log"> | string | null
  }

  export type TesteDepartamentoWhereInput = {
    AND?: TesteDepartamentoWhereInput | TesteDepartamentoWhereInput[]
    OR?: TesteDepartamentoWhereInput[]
    NOT?: TesteDepartamentoWhereInput | TesteDepartamentoWhereInput[]
    id?: StringFilter<"TesteDepartamento"> | string
    testeId?: StringFilter<"TesteDepartamento"> | string
    departamentoId?: StringFilter<"TesteDepartamento"> | string
    ativo?: BoolFilter<"TesteDepartamento"> | boolean
    criadoEm?: DateTimeFilter<"TesteDepartamento"> | Date | string
    criadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
    atualizadoEm?: DateTimeFilter<"TesteDepartamento"> | Date | string
    atualizadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
    inativadoEm?: DateTimeNullableFilter<"TesteDepartamento"> | Date | string | null
    inativadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
    teste?: XOR<TesteScalarRelationFilter, TesteWhereInput>
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
  }

  export type TesteDepartamentoOrderByWithRelationInput = {
    id?: SortOrder
    testeId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    teste?: TesteOrderByWithRelationInput
    departamento?: DepartamentoOrderByWithRelationInput
  }

  export type TesteDepartamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    testeId_departamentoId?: TesteDepartamentoTesteIdDepartamentoIdCompoundUniqueInput
    AND?: TesteDepartamentoWhereInput | TesteDepartamentoWhereInput[]
    OR?: TesteDepartamentoWhereInput[]
    NOT?: TesteDepartamentoWhereInput | TesteDepartamentoWhereInput[]
    testeId?: StringFilter<"TesteDepartamento"> | string
    departamentoId?: StringFilter<"TesteDepartamento"> | string
    ativo?: BoolFilter<"TesteDepartamento"> | boolean
    criadoEm?: DateTimeFilter<"TesteDepartamento"> | Date | string
    criadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
    atualizadoEm?: DateTimeFilter<"TesteDepartamento"> | Date | string
    atualizadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
    inativadoEm?: DateTimeNullableFilter<"TesteDepartamento"> | Date | string | null
    inativadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
    teste?: XOR<TesteScalarRelationFilter, TesteWhereInput>
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
  }, "id" | "testeId_departamentoId">

  export type TesteDepartamentoOrderByWithAggregationInput = {
    id?: SortOrder
    testeId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    _count?: TesteDepartamentoCountOrderByAggregateInput
    _max?: TesteDepartamentoMaxOrderByAggregateInput
    _min?: TesteDepartamentoMinOrderByAggregateInput
  }

  export type TesteDepartamentoScalarWhereWithAggregatesInput = {
    AND?: TesteDepartamentoScalarWhereWithAggregatesInput | TesteDepartamentoScalarWhereWithAggregatesInput[]
    OR?: TesteDepartamentoScalarWhereWithAggregatesInput[]
    NOT?: TesteDepartamentoScalarWhereWithAggregatesInput | TesteDepartamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TesteDepartamento"> | string
    testeId?: StringWithAggregatesFilter<"TesteDepartamento"> | string
    departamentoId?: StringWithAggregatesFilter<"TesteDepartamento"> | string
    ativo?: BoolWithAggregatesFilter<"TesteDepartamento"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"TesteDepartamento"> | Date | string
    criadoPor?: StringNullableWithAggregatesFilter<"TesteDepartamento"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"TesteDepartamento"> | Date | string
    atualizadoPor?: StringNullableWithAggregatesFilter<"TesteDepartamento"> | string | null
    inativadoEm?: DateTimeNullableWithAggregatesFilter<"TesteDepartamento"> | Date | string | null
    inativadoPor?: StringNullableWithAggregatesFilter<"TesteDepartamento"> | string | null
  }

  export type TesteWhereInput = {
    AND?: TesteWhereInput | TesteWhereInput[]
    OR?: TesteWhereInput[]
    NOT?: TesteWhereInput | TesteWhereInput[]
    id?: StringFilter<"Teste"> | string
    canal?: EnumCanalTesteFilter<"Teste"> | $Enums.CanalTeste
    status?: EnumStatusTesteFilter<"Teste"> | $Enums.StatusTeste
    caiuNoTeste?: BoolFilter<"Teste"> | boolean
    reportouPhishing?: BoolFilter<"Teste"> | boolean
    usuarioId?: StringNullableFilter<"Teste"> | string | null
    ativo?: BoolFilter<"Teste"> | boolean
    criadoEm?: DateTimeFilter<"Teste"> | Date | string
    criadoPor?: StringNullableFilter<"Teste"> | string | null
    atualizadoEm?: DateTimeFilter<"Teste"> | Date | string
    atualizadoPor?: StringNullableFilter<"Teste"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Teste"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Teste"> | string | null
    departamentos?: TesteDepartamentoListRelationFilter
    logs?: LogListRelationFilter
    campanhas?: CampanhaTesteListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type TesteOrderByWithRelationInput = {
    id?: SortOrder
    canal?: SortOrder
    status?: SortOrder
    caiuNoTeste?: SortOrder
    reportouPhishing?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    departamentos?: TesteDepartamentoOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
    campanhas?: CampanhaTesteOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type TesteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TesteWhereInput | TesteWhereInput[]
    OR?: TesteWhereInput[]
    NOT?: TesteWhereInput | TesteWhereInput[]
    canal?: EnumCanalTesteFilter<"Teste"> | $Enums.CanalTeste
    status?: EnumStatusTesteFilter<"Teste"> | $Enums.StatusTeste
    caiuNoTeste?: BoolFilter<"Teste"> | boolean
    reportouPhishing?: BoolFilter<"Teste"> | boolean
    usuarioId?: StringNullableFilter<"Teste"> | string | null
    ativo?: BoolFilter<"Teste"> | boolean
    criadoEm?: DateTimeFilter<"Teste"> | Date | string
    criadoPor?: StringNullableFilter<"Teste"> | string | null
    atualizadoEm?: DateTimeFilter<"Teste"> | Date | string
    atualizadoPor?: StringNullableFilter<"Teste"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Teste"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Teste"> | string | null
    departamentos?: TesteDepartamentoListRelationFilter
    logs?: LogListRelationFilter
    campanhas?: CampanhaTesteListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type TesteOrderByWithAggregationInput = {
    id?: SortOrder
    canal?: SortOrder
    status?: SortOrder
    caiuNoTeste?: SortOrder
    reportouPhishing?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    _count?: TesteCountOrderByAggregateInput
    _max?: TesteMaxOrderByAggregateInput
    _min?: TesteMinOrderByAggregateInput
  }

  export type TesteScalarWhereWithAggregatesInput = {
    AND?: TesteScalarWhereWithAggregatesInput | TesteScalarWhereWithAggregatesInput[]
    OR?: TesteScalarWhereWithAggregatesInput[]
    NOT?: TesteScalarWhereWithAggregatesInput | TesteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teste"> | string
    canal?: EnumCanalTesteWithAggregatesFilter<"Teste"> | $Enums.CanalTeste
    status?: EnumStatusTesteWithAggregatesFilter<"Teste"> | $Enums.StatusTeste
    caiuNoTeste?: BoolWithAggregatesFilter<"Teste"> | boolean
    reportouPhishing?: BoolWithAggregatesFilter<"Teste"> | boolean
    usuarioId?: StringNullableWithAggregatesFilter<"Teste"> | string | null
    ativo?: BoolWithAggregatesFilter<"Teste"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Teste"> | Date | string
    criadoPor?: StringNullableWithAggregatesFilter<"Teste"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"Teste"> | Date | string
    atualizadoPor?: StringNullableWithAggregatesFilter<"Teste"> | string | null
    inativadoEm?: DateTimeNullableWithAggregatesFilter<"Teste"> | Date | string | null
    inativadoPor?: StringNullableWithAggregatesFilter<"Teste"> | string | null
  }

  export type UsuarioDepartamentoWhereInput = {
    AND?: UsuarioDepartamentoWhereInput | UsuarioDepartamentoWhereInput[]
    OR?: UsuarioDepartamentoWhereInput[]
    NOT?: UsuarioDepartamentoWhereInput | UsuarioDepartamentoWhereInput[]
    id?: StringFilter<"UsuarioDepartamento"> | string
    usuarioId?: StringFilter<"UsuarioDepartamento"> | string
    departamentoId?: StringFilter<"UsuarioDepartamento"> | string
    ativo?: BoolFilter<"UsuarioDepartamento"> | boolean
    criadoEm?: DateTimeFilter<"UsuarioDepartamento"> | Date | string
    criadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
    atualizadoEm?: DateTimeFilter<"UsuarioDepartamento"> | Date | string
    atualizadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
    inativadoEm?: DateTimeNullableFilter<"UsuarioDepartamento"> | Date | string | null
    inativadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
  }

  export type UsuarioDepartamentoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    departamento?: DepartamentoOrderByWithRelationInput
  }

  export type UsuarioDepartamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId_departamentoId?: UsuarioDepartamentoUsuarioIdDepartamentoIdCompoundUniqueInput
    AND?: UsuarioDepartamentoWhereInput | UsuarioDepartamentoWhereInput[]
    OR?: UsuarioDepartamentoWhereInput[]
    NOT?: UsuarioDepartamentoWhereInput | UsuarioDepartamentoWhereInput[]
    usuarioId?: StringFilter<"UsuarioDepartamento"> | string
    departamentoId?: StringFilter<"UsuarioDepartamento"> | string
    ativo?: BoolFilter<"UsuarioDepartamento"> | boolean
    criadoEm?: DateTimeFilter<"UsuarioDepartamento"> | Date | string
    criadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
    atualizadoEm?: DateTimeFilter<"UsuarioDepartamento"> | Date | string
    atualizadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
    inativadoEm?: DateTimeNullableFilter<"UsuarioDepartamento"> | Date | string | null
    inativadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
  }, "id" | "usuarioId_departamentoId">

  export type UsuarioDepartamentoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    _count?: UsuarioDepartamentoCountOrderByAggregateInput
    _max?: UsuarioDepartamentoMaxOrderByAggregateInput
    _min?: UsuarioDepartamentoMinOrderByAggregateInput
  }

  export type UsuarioDepartamentoScalarWhereWithAggregatesInput = {
    AND?: UsuarioDepartamentoScalarWhereWithAggregatesInput | UsuarioDepartamentoScalarWhereWithAggregatesInput[]
    OR?: UsuarioDepartamentoScalarWhereWithAggregatesInput[]
    NOT?: UsuarioDepartamentoScalarWhereWithAggregatesInput | UsuarioDepartamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsuarioDepartamento"> | string
    usuarioId?: StringWithAggregatesFilter<"UsuarioDepartamento"> | string
    departamentoId?: StringWithAggregatesFilter<"UsuarioDepartamento"> | string
    ativo?: BoolWithAggregatesFilter<"UsuarioDepartamento"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"UsuarioDepartamento"> | Date | string
    criadoPor?: StringNullableWithAggregatesFilter<"UsuarioDepartamento"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"UsuarioDepartamento"> | Date | string
    atualizadoPor?: StringNullableWithAggregatesFilter<"UsuarioDepartamento"> | string | null
    inativadoEm?: DateTimeNullableWithAggregatesFilter<"UsuarioDepartamento"> | Date | string | null
    inativadoPor?: StringNullableWithAggregatesFilter<"UsuarioDepartamento"> | string | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringNullableFilter<"Usuario"> | string | null
    email?: StringFilter<"Usuario"> | string
    cargo?: EnumCargoUsuarioFilter<"Usuario"> | $Enums.CargoUsuario
    ativo?: BoolFilter<"Usuario"> | boolean
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    criadoPor?: StringNullableFilter<"Usuario"> | string | null
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoPor?: StringNullableFilter<"Usuario"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Usuario"> | string | null
    departamentos?: UsuarioDepartamentoListRelationFilter
    testes?: TesteListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrderInput | SortOrder
    email?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    departamentos?: UsuarioDepartamentoOrderByRelationAggregateInput
    testes?: TesteOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringNullableFilter<"Usuario"> | string | null
    cargo?: EnumCargoUsuarioFilter<"Usuario"> | $Enums.CargoUsuario
    ativo?: BoolFilter<"Usuario"> | boolean
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    criadoPor?: StringNullableFilter<"Usuario"> | string | null
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoPor?: StringNullableFilter<"Usuario"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Usuario"> | string | null
    departamentos?: UsuarioDepartamentoListRelationFilter
    testes?: TesteListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrderInput | SortOrder
    email?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrderInput | SortOrder
    inativadoEm?: SortOrderInput | SortOrder
    inativadoPor?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    sobrenome?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    email?: StringWithAggregatesFilter<"Usuario"> | string
    cargo?: EnumCargoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.CargoUsuario
    ativo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    criadoPor?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    atualizadoPor?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    inativadoEm?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    inativadoPor?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type CampanhaTesteCreateInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    campanha: CampanhaCreateNestedOneWithoutTestesInput
    teste: TesteCreateNestedOneWithoutCampanhasInput
  }

  export type CampanhaTesteUncheckedCreateInput = {
    id?: string
    campanhaId: string
    testeId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type CampanhaTesteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    campanha?: CampanhaUpdateOneRequiredWithoutTestesNestedInput
    teste?: TesteUpdateOneRequiredWithoutCampanhasNestedInput
  }

  export type CampanhaTesteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    testeId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampanhaTesteCreateManyInput = {
    id?: string
    campanhaId: string
    testeId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type CampanhaTesteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampanhaTesteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    testeId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampanhaCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status: $Enums.StatusCampanha
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    logs?: LogCreateNestedManyWithoutCampanhaInput
    testes?: CampanhaTesteCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status: $Enums.StatusCampanha
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutCampanhaInput
    testes?: CampanhaTesteUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUpdateManyWithoutCampanhaNestedInput
    testes?: CampanhaTesteUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutCampanhaNestedInput
    testes?: CampanhaTesteUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status: $Enums.StatusCampanha
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type CampanhaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampanhaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartamentoCreateInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: TesteDepartamentoCreateNestedManyWithoutDepartamentoInput
    logs?: LogCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioDepartamentoCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: TesteDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
    logs?: LogUncheckedCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: TesteDepartamentoUpdateManyWithoutDepartamentoNestedInput
    logs?: LogUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioDepartamentoUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: TesteDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
    logs?: LogUncheckedUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoCreateManyInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type DepartamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    campanha?: CampanhaCreateNestedOneWithoutLogsInput
    departamento?: DepartamentoCreateNestedOneWithoutLogsInput
    teste?: TesteCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    campanhaId?: string | null
    departamentoId?: string | null
    testeId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    campanha?: CampanhaUpdateOneWithoutLogsNestedInput
    departamento?: DepartamentoUpdateOneWithoutLogsNestedInput
    teste?: TesteUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    campanhaId?: NullableStringFieldUpdateOperationsInput | string | null
    departamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    testeId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateManyInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    campanhaId?: string | null
    departamentoId?: string | null
    testeId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    campanhaId?: NullableStringFieldUpdateOperationsInput | string | null
    departamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    testeId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteDepartamentoCreateInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    teste: TesteCreateNestedOneWithoutDepartamentosInput
    departamento: DepartamentoCreateNestedOneWithoutTestesInput
  }

  export type TesteDepartamentoUncheckedCreateInput = {
    id?: string
    testeId: string
    departamentoId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type TesteDepartamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    teste?: TesteUpdateOneRequiredWithoutDepartamentosNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutTestesNestedInput
  }

  export type TesteDepartamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testeId?: StringFieldUpdateOperationsInput | string
    departamentoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteDepartamentoCreateManyInput = {
    id?: string
    testeId: string
    departamentoId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type TesteDepartamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteDepartamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testeId?: StringFieldUpdateOperationsInput | string
    departamentoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteCreateInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: TesteDepartamentoCreateNestedManyWithoutTesteInput
    logs?: LogCreateNestedManyWithoutTesteInput
    campanhas?: CampanhaTesteCreateNestedManyWithoutTesteInput
    usuario?: UsuarioCreateNestedOneWithoutTestesInput
  }

  export type TesteUncheckedCreateInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: TesteDepartamentoUncheckedCreateNestedManyWithoutTesteInput
    logs?: LogUncheckedCreateNestedManyWithoutTesteInput
    campanhas?: CampanhaTesteUncheckedCreateNestedManyWithoutTesteInput
  }

  export type TesteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: TesteDepartamentoUpdateManyWithoutTesteNestedInput
    logs?: LogUpdateManyWithoutTesteNestedInput
    campanhas?: CampanhaTesteUpdateManyWithoutTesteNestedInput
    usuario?: UsuarioUpdateOneWithoutTestesNestedInput
  }

  export type TesteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: TesteDepartamentoUncheckedUpdateManyWithoutTesteNestedInput
    logs?: LogUncheckedUpdateManyWithoutTesteNestedInput
    campanhas?: CampanhaTesteUncheckedUpdateManyWithoutTesteNestedInput
  }

  export type TesteCreateManyInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type TesteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioDepartamentoCreateInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    usuario: UsuarioCreateNestedOneWithoutDepartamentosInput
    departamento: DepartamentoCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioDepartamentoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    departamentoId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type UsuarioDepartamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDepartamentosNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioDepartamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    departamentoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioDepartamentoCreateManyInput = {
    id?: string
    usuarioId: string
    departamentoId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type UsuarioDepartamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioDepartamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    departamentoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    sobrenome?: string | null
    email: string
    cargo?: $Enums.CargoUsuario
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: UsuarioDepartamentoCreateNestedManyWithoutUsuarioInput
    testes?: TesteCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    sobrenome?: string | null
    email: string
    cargo?: $Enums.CargoUsuario
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: UsuarioDepartamentoUncheckedCreateNestedManyWithoutUsuarioInput
    testes?: TesteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: UsuarioDepartamentoUpdateManyWithoutUsuarioNestedInput
    testes?: TesteUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: UsuarioDepartamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    testes?: TesteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    sobrenome?: string | null
    email: string
    cargo?: $Enums.CargoUsuario
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CampanhaScalarRelationFilter = {
    is?: CampanhaWhereInput
    isNot?: CampanhaWhereInput
  }

  export type TesteScalarRelationFilter = {
    is?: TesteWhereInput
    isNot?: TesteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampanhaTesteCampanhaIdTesteIdCompoundUniqueInput = {
    campanhaId: string
    testeId: string
  }

  export type CampanhaTesteCountOrderByAggregateInput = {
    id?: SortOrder
    campanhaId?: SortOrder
    testeId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type CampanhaTesteMaxOrderByAggregateInput = {
    id?: SortOrder
    campanhaId?: SortOrder
    testeId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type CampanhaTesteMinOrderByAggregateInput = {
    id?: SortOrder
    campanhaId?: SortOrder
    testeId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusCampanhaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCampanha | EnumStatusCampanhaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCampanha[] | ListEnumStatusCampanhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCampanha[] | ListEnumStatusCampanhaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCampanhaFilter<$PrismaModel> | $Enums.StatusCampanha
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type CampanhaTesteListRelationFilter = {
    every?: CampanhaTesteWhereInput
    some?: CampanhaTesteWhereInput
    none?: CampanhaTesteWhereInput
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampanhaTesteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampanhaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type CampanhaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type CampanhaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type EnumStatusCampanhaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCampanha | EnumStatusCampanhaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCampanha[] | ListEnumStatusCampanhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCampanha[] | ListEnumStatusCampanhaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCampanhaWithAggregatesFilter<$PrismaModel> | $Enums.StatusCampanha
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusCampanhaFilter<$PrismaModel>
    _max?: NestedEnumStatusCampanhaFilter<$PrismaModel>
  }

  export type TesteDepartamentoListRelationFilter = {
    every?: TesteDepartamentoWhereInput
    some?: TesteDepartamentoWhereInput
    none?: TesteDepartamentoWhereInput
  }

  export type UsuarioDepartamentoListRelationFilter = {
    every?: UsuarioDepartamentoWhereInput
    some?: UsuarioDepartamentoWhereInput
    none?: UsuarioDepartamentoWhereInput
  }

  export type TesteDepartamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioDepartamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type DepartamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type DepartamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type EnumTipoLogFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLog | EnumTipoLogFieldRefInput<$PrismaModel>
    in?: $Enums.TipoLog[] | ListEnumTipoLogFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoLog[] | ListEnumTipoLogFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoLogFilter<$PrismaModel> | $Enums.TipoLog
  }

  export type CampanhaNullableScalarRelationFilter = {
    is?: CampanhaWhereInput | null
    isNot?: CampanhaWhereInput | null
  }

  export type DepartamentoNullableScalarRelationFilter = {
    is?: DepartamentoWhereInput | null
    isNot?: DepartamentoWhereInput | null
  }

  export type TesteNullableScalarRelationFilter = {
    is?: TesteWhereInput | null
    isNot?: TesteWhereInput | null
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    campanhaId?: SortOrder
    departamentoId?: SortOrder
    testeId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    campanhaId?: SortOrder
    departamentoId?: SortOrder
    testeId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    campanhaId?: SortOrder
    departamentoId?: SortOrder
    testeId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type EnumTipoLogWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLog | EnumTipoLogFieldRefInput<$PrismaModel>
    in?: $Enums.TipoLog[] | ListEnumTipoLogFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoLog[] | ListEnumTipoLogFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoLogWithAggregatesFilter<$PrismaModel> | $Enums.TipoLog
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoLogFilter<$PrismaModel>
    _max?: NestedEnumTipoLogFilter<$PrismaModel>
  }

  export type DepartamentoScalarRelationFilter = {
    is?: DepartamentoWhereInput
    isNot?: DepartamentoWhereInput
  }

  export type TesteDepartamentoTesteIdDepartamentoIdCompoundUniqueInput = {
    testeId: string
    departamentoId: string
  }

  export type TesteDepartamentoCountOrderByAggregateInput = {
    id?: SortOrder
    testeId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type TesteDepartamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    testeId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type TesteDepartamentoMinOrderByAggregateInput = {
    id?: SortOrder
    testeId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type EnumCanalTesteFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalTeste | EnumCanalTesteFieldRefInput<$PrismaModel>
    in?: $Enums.CanalTeste[] | ListEnumCanalTesteFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalTeste[] | ListEnumCanalTesteFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalTesteFilter<$PrismaModel> | $Enums.CanalTeste
  }

  export type EnumStatusTesteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTeste | EnumStatusTesteFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTeste[] | ListEnumStatusTesteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTeste[] | ListEnumStatusTesteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTesteFilter<$PrismaModel> | $Enums.StatusTeste
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type TesteCountOrderByAggregateInput = {
    id?: SortOrder
    canal?: SortOrder
    status?: SortOrder
    caiuNoTeste?: SortOrder
    reportouPhishing?: SortOrder
    usuarioId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type TesteMaxOrderByAggregateInput = {
    id?: SortOrder
    canal?: SortOrder
    status?: SortOrder
    caiuNoTeste?: SortOrder
    reportouPhishing?: SortOrder
    usuarioId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type TesteMinOrderByAggregateInput = {
    id?: SortOrder
    canal?: SortOrder
    status?: SortOrder
    caiuNoTeste?: SortOrder
    reportouPhishing?: SortOrder
    usuarioId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type EnumCanalTesteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalTeste | EnumCanalTesteFieldRefInput<$PrismaModel>
    in?: $Enums.CanalTeste[] | ListEnumCanalTesteFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalTeste[] | ListEnumCanalTesteFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalTesteWithAggregatesFilter<$PrismaModel> | $Enums.CanalTeste
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanalTesteFilter<$PrismaModel>
    _max?: NestedEnumCanalTesteFilter<$PrismaModel>
  }

  export type EnumStatusTesteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTeste | EnumStatusTesteFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTeste[] | ListEnumStatusTesteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTeste[] | ListEnumStatusTesteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTesteWithAggregatesFilter<$PrismaModel> | $Enums.StatusTeste
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTesteFilter<$PrismaModel>
    _max?: NestedEnumStatusTesteFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type UsuarioDepartamentoUsuarioIdDepartamentoIdCompoundUniqueInput = {
    usuarioId: string
    departamentoId: string
  }

  export type UsuarioDepartamentoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type UsuarioDepartamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type UsuarioDepartamentoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    departamentoId?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type EnumCargoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoUsuarioFilter<$PrismaModel> | $Enums.CargoUsuario
  }

  export type TesteListRelationFilter = {
    every?: TesteWhereInput
    some?: TesteWhereInput
    none?: TesteWhereInput
  }

  export type TesteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    criadoPor?: SortOrder
    atualizadoEm?: SortOrder
    atualizadoPor?: SortOrder
    inativadoEm?: SortOrder
    inativadoPor?: SortOrder
  }

  export type EnumCargoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.CargoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumCargoUsuarioFilter<$PrismaModel>
  }

  export type CampanhaCreateNestedOneWithoutTestesInput = {
    create?: XOR<CampanhaCreateWithoutTestesInput, CampanhaUncheckedCreateWithoutTestesInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutTestesInput
    connect?: CampanhaWhereUniqueInput
  }

  export type TesteCreateNestedOneWithoutCampanhasInput = {
    create?: XOR<TesteCreateWithoutCampanhasInput, TesteUncheckedCreateWithoutCampanhasInput>
    connectOrCreate?: TesteCreateOrConnectWithoutCampanhasInput
    connect?: TesteWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CampanhaUpdateOneRequiredWithoutTestesNestedInput = {
    create?: XOR<CampanhaCreateWithoutTestesInput, CampanhaUncheckedCreateWithoutTestesInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutTestesInput
    upsert?: CampanhaUpsertWithoutTestesInput
    connect?: CampanhaWhereUniqueInput
    update?: XOR<XOR<CampanhaUpdateToOneWithWhereWithoutTestesInput, CampanhaUpdateWithoutTestesInput>, CampanhaUncheckedUpdateWithoutTestesInput>
  }

  export type TesteUpdateOneRequiredWithoutCampanhasNestedInput = {
    create?: XOR<TesteCreateWithoutCampanhasInput, TesteUncheckedCreateWithoutCampanhasInput>
    connectOrCreate?: TesteCreateOrConnectWithoutCampanhasInput
    upsert?: TesteUpsertWithoutCampanhasInput
    connect?: TesteWhereUniqueInput
    update?: XOR<XOR<TesteUpdateToOneWithWhereWithoutCampanhasInput, TesteUpdateWithoutCampanhasInput>, TesteUncheckedUpdateWithoutCampanhasInput>
  }

  export type LogCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<LogCreateWithoutCampanhaInput, LogUncheckedCreateWithoutCampanhaInput> | LogCreateWithoutCampanhaInput[] | LogUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: LogCreateOrConnectWithoutCampanhaInput | LogCreateOrConnectWithoutCampanhaInput[]
    createMany?: LogCreateManyCampanhaInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type CampanhaTesteCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<CampanhaTesteCreateWithoutCampanhaInput, CampanhaTesteUncheckedCreateWithoutCampanhaInput> | CampanhaTesteCreateWithoutCampanhaInput[] | CampanhaTesteUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: CampanhaTesteCreateOrConnectWithoutCampanhaInput | CampanhaTesteCreateOrConnectWithoutCampanhaInput[]
    createMany?: CampanhaTesteCreateManyCampanhaInputEnvelope
    connect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<LogCreateWithoutCampanhaInput, LogUncheckedCreateWithoutCampanhaInput> | LogCreateWithoutCampanhaInput[] | LogUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: LogCreateOrConnectWithoutCampanhaInput | LogCreateOrConnectWithoutCampanhaInput[]
    createMany?: LogCreateManyCampanhaInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type CampanhaTesteUncheckedCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<CampanhaTesteCreateWithoutCampanhaInput, CampanhaTesteUncheckedCreateWithoutCampanhaInput> | CampanhaTesteCreateWithoutCampanhaInput[] | CampanhaTesteUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: CampanhaTesteCreateOrConnectWithoutCampanhaInput | CampanhaTesteCreateOrConnectWithoutCampanhaInput[]
    createMany?: CampanhaTesteCreateManyCampanhaInputEnvelope
    connect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
  }

  export type EnumStatusCampanhaFieldUpdateOperationsInput = {
    set?: $Enums.StatusCampanha
  }

  export type LogUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<LogCreateWithoutCampanhaInput, LogUncheckedCreateWithoutCampanhaInput> | LogCreateWithoutCampanhaInput[] | LogUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: LogCreateOrConnectWithoutCampanhaInput | LogCreateOrConnectWithoutCampanhaInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutCampanhaInput | LogUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: LogCreateManyCampanhaInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutCampanhaInput | LogUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: LogUpdateManyWithWhereWithoutCampanhaInput | LogUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type CampanhaTesteUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<CampanhaTesteCreateWithoutCampanhaInput, CampanhaTesteUncheckedCreateWithoutCampanhaInput> | CampanhaTesteCreateWithoutCampanhaInput[] | CampanhaTesteUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: CampanhaTesteCreateOrConnectWithoutCampanhaInput | CampanhaTesteCreateOrConnectWithoutCampanhaInput[]
    upsert?: CampanhaTesteUpsertWithWhereUniqueWithoutCampanhaInput | CampanhaTesteUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: CampanhaTesteCreateManyCampanhaInputEnvelope
    set?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    disconnect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    delete?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    connect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    update?: CampanhaTesteUpdateWithWhereUniqueWithoutCampanhaInput | CampanhaTesteUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: CampanhaTesteUpdateManyWithWhereWithoutCampanhaInput | CampanhaTesteUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: CampanhaTesteScalarWhereInput | CampanhaTesteScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<LogCreateWithoutCampanhaInput, LogUncheckedCreateWithoutCampanhaInput> | LogCreateWithoutCampanhaInput[] | LogUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: LogCreateOrConnectWithoutCampanhaInput | LogCreateOrConnectWithoutCampanhaInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutCampanhaInput | LogUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: LogCreateManyCampanhaInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutCampanhaInput | LogUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: LogUpdateManyWithWhereWithoutCampanhaInput | LogUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type CampanhaTesteUncheckedUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<CampanhaTesteCreateWithoutCampanhaInput, CampanhaTesteUncheckedCreateWithoutCampanhaInput> | CampanhaTesteCreateWithoutCampanhaInput[] | CampanhaTesteUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: CampanhaTesteCreateOrConnectWithoutCampanhaInput | CampanhaTesteCreateOrConnectWithoutCampanhaInput[]
    upsert?: CampanhaTesteUpsertWithWhereUniqueWithoutCampanhaInput | CampanhaTesteUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: CampanhaTesteCreateManyCampanhaInputEnvelope
    set?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    disconnect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    delete?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    connect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    update?: CampanhaTesteUpdateWithWhereUniqueWithoutCampanhaInput | CampanhaTesteUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: CampanhaTesteUpdateManyWithWhereWithoutCampanhaInput | CampanhaTesteUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: CampanhaTesteScalarWhereInput | CampanhaTesteScalarWhereInput[]
  }

  export type TesteDepartamentoCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<TesteDepartamentoCreateWithoutDepartamentoInput, TesteDepartamentoUncheckedCreateWithoutDepartamentoInput> | TesteDepartamentoCreateWithoutDepartamentoInput[] | TesteDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: TesteDepartamentoCreateOrConnectWithoutDepartamentoInput | TesteDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    createMany?: TesteDepartamentoCreateManyDepartamentoInputEnvelope
    connect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<LogCreateWithoutDepartamentoInput, LogUncheckedCreateWithoutDepartamentoInput> | LogCreateWithoutDepartamentoInput[] | LogUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: LogCreateOrConnectWithoutDepartamentoInput | LogCreateOrConnectWithoutDepartamentoInput[]
    createMany?: LogCreateManyDepartamentoInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type UsuarioDepartamentoCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<UsuarioDepartamentoCreateWithoutDepartamentoInput, UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput> | UsuarioDepartamentoCreateWithoutDepartamentoInput[] | UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput | UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    createMany?: UsuarioDepartamentoCreateManyDepartamentoInputEnvelope
    connect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
  }

  export type TesteDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<TesteDepartamentoCreateWithoutDepartamentoInput, TesteDepartamentoUncheckedCreateWithoutDepartamentoInput> | TesteDepartamentoCreateWithoutDepartamentoInput[] | TesteDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: TesteDepartamentoCreateOrConnectWithoutDepartamentoInput | TesteDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    createMany?: TesteDepartamentoCreateManyDepartamentoInputEnvelope
    connect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<LogCreateWithoutDepartamentoInput, LogUncheckedCreateWithoutDepartamentoInput> | LogCreateWithoutDepartamentoInput[] | LogUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: LogCreateOrConnectWithoutDepartamentoInput | LogCreateOrConnectWithoutDepartamentoInput[]
    createMany?: LogCreateManyDepartamentoInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type UsuarioDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<UsuarioDepartamentoCreateWithoutDepartamentoInput, UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput> | UsuarioDepartamentoCreateWithoutDepartamentoInput[] | UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput | UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    createMany?: UsuarioDepartamentoCreateManyDepartamentoInputEnvelope
    connect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
  }

  export type TesteDepartamentoUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<TesteDepartamentoCreateWithoutDepartamentoInput, TesteDepartamentoUncheckedCreateWithoutDepartamentoInput> | TesteDepartamentoCreateWithoutDepartamentoInput[] | TesteDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: TesteDepartamentoCreateOrConnectWithoutDepartamentoInput | TesteDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    upsert?: TesteDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput | TesteDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: TesteDepartamentoCreateManyDepartamentoInputEnvelope
    set?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    disconnect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    delete?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    connect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    update?: TesteDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput | TesteDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: TesteDepartamentoUpdateManyWithWhereWithoutDepartamentoInput | TesteDepartamentoUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: TesteDepartamentoScalarWhereInput | TesteDepartamentoScalarWhereInput[]
  }

  export type LogUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<LogCreateWithoutDepartamentoInput, LogUncheckedCreateWithoutDepartamentoInput> | LogCreateWithoutDepartamentoInput[] | LogUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: LogCreateOrConnectWithoutDepartamentoInput | LogCreateOrConnectWithoutDepartamentoInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutDepartamentoInput | LogUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: LogCreateManyDepartamentoInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutDepartamentoInput | LogUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: LogUpdateManyWithWhereWithoutDepartamentoInput | LogUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type UsuarioDepartamentoUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<UsuarioDepartamentoCreateWithoutDepartamentoInput, UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput> | UsuarioDepartamentoCreateWithoutDepartamentoInput[] | UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput | UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    upsert?: UsuarioDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput | UsuarioDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: UsuarioDepartamentoCreateManyDepartamentoInputEnvelope
    set?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    disconnect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    delete?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    connect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    update?: UsuarioDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput | UsuarioDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: UsuarioDepartamentoUpdateManyWithWhereWithoutDepartamentoInput | UsuarioDepartamentoUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: UsuarioDepartamentoScalarWhereInput | UsuarioDepartamentoScalarWhereInput[]
  }

  export type TesteDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<TesteDepartamentoCreateWithoutDepartamentoInput, TesteDepartamentoUncheckedCreateWithoutDepartamentoInput> | TesteDepartamentoCreateWithoutDepartamentoInput[] | TesteDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: TesteDepartamentoCreateOrConnectWithoutDepartamentoInput | TesteDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    upsert?: TesteDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput | TesteDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: TesteDepartamentoCreateManyDepartamentoInputEnvelope
    set?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    disconnect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    delete?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    connect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    update?: TesteDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput | TesteDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: TesteDepartamentoUpdateManyWithWhereWithoutDepartamentoInput | TesteDepartamentoUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: TesteDepartamentoScalarWhereInput | TesteDepartamentoScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<LogCreateWithoutDepartamentoInput, LogUncheckedCreateWithoutDepartamentoInput> | LogCreateWithoutDepartamentoInput[] | LogUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: LogCreateOrConnectWithoutDepartamentoInput | LogCreateOrConnectWithoutDepartamentoInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutDepartamentoInput | LogUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: LogCreateManyDepartamentoInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutDepartamentoInput | LogUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: LogUpdateManyWithWhereWithoutDepartamentoInput | LogUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type UsuarioDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<UsuarioDepartamentoCreateWithoutDepartamentoInput, UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput> | UsuarioDepartamentoCreateWithoutDepartamentoInput[] | UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput | UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    upsert?: UsuarioDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput | UsuarioDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: UsuarioDepartamentoCreateManyDepartamentoInputEnvelope
    set?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    disconnect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    delete?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    connect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    update?: UsuarioDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput | UsuarioDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: UsuarioDepartamentoUpdateManyWithWhereWithoutDepartamentoInput | UsuarioDepartamentoUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: UsuarioDepartamentoScalarWhereInput | UsuarioDepartamentoScalarWhereInput[]
  }

  export type CampanhaCreateNestedOneWithoutLogsInput = {
    create?: XOR<CampanhaCreateWithoutLogsInput, CampanhaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutLogsInput
    connect?: CampanhaWhereUniqueInput
  }

  export type DepartamentoCreateNestedOneWithoutLogsInput = {
    create?: XOR<DepartamentoCreateWithoutLogsInput, DepartamentoUncheckedCreateWithoutLogsInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutLogsInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type TesteCreateNestedOneWithoutLogsInput = {
    create?: XOR<TesteCreateWithoutLogsInput, TesteUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TesteCreateOrConnectWithoutLogsInput
    connect?: TesteWhereUniqueInput
  }

  export type EnumTipoLogFieldUpdateOperationsInput = {
    set?: $Enums.TipoLog
  }

  export type CampanhaUpdateOneWithoutLogsNestedInput = {
    create?: XOR<CampanhaCreateWithoutLogsInput, CampanhaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutLogsInput
    upsert?: CampanhaUpsertWithoutLogsInput
    disconnect?: CampanhaWhereInput | boolean
    delete?: CampanhaWhereInput | boolean
    connect?: CampanhaWhereUniqueInput
    update?: XOR<XOR<CampanhaUpdateToOneWithWhereWithoutLogsInput, CampanhaUpdateWithoutLogsInput>, CampanhaUncheckedUpdateWithoutLogsInput>
  }

  export type DepartamentoUpdateOneWithoutLogsNestedInput = {
    create?: XOR<DepartamentoCreateWithoutLogsInput, DepartamentoUncheckedCreateWithoutLogsInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutLogsInput
    upsert?: DepartamentoUpsertWithoutLogsInput
    disconnect?: DepartamentoWhereInput | boolean
    delete?: DepartamentoWhereInput | boolean
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutLogsInput, DepartamentoUpdateWithoutLogsInput>, DepartamentoUncheckedUpdateWithoutLogsInput>
  }

  export type TesteUpdateOneWithoutLogsNestedInput = {
    create?: XOR<TesteCreateWithoutLogsInput, TesteUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TesteCreateOrConnectWithoutLogsInput
    upsert?: TesteUpsertWithoutLogsInput
    disconnect?: TesteWhereInput | boolean
    delete?: TesteWhereInput | boolean
    connect?: TesteWhereUniqueInput
    update?: XOR<XOR<TesteUpdateToOneWithWhereWithoutLogsInput, TesteUpdateWithoutLogsInput>, TesteUncheckedUpdateWithoutLogsInput>
  }

  export type TesteCreateNestedOneWithoutDepartamentosInput = {
    create?: XOR<TesteCreateWithoutDepartamentosInput, TesteUncheckedCreateWithoutDepartamentosInput>
    connectOrCreate?: TesteCreateOrConnectWithoutDepartamentosInput
    connect?: TesteWhereUniqueInput
  }

  export type DepartamentoCreateNestedOneWithoutTestesInput = {
    create?: XOR<DepartamentoCreateWithoutTestesInput, DepartamentoUncheckedCreateWithoutTestesInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutTestesInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type TesteUpdateOneRequiredWithoutDepartamentosNestedInput = {
    create?: XOR<TesteCreateWithoutDepartamentosInput, TesteUncheckedCreateWithoutDepartamentosInput>
    connectOrCreate?: TesteCreateOrConnectWithoutDepartamentosInput
    upsert?: TesteUpsertWithoutDepartamentosInput
    connect?: TesteWhereUniqueInput
    update?: XOR<XOR<TesteUpdateToOneWithWhereWithoutDepartamentosInput, TesteUpdateWithoutDepartamentosInput>, TesteUncheckedUpdateWithoutDepartamentosInput>
  }

  export type DepartamentoUpdateOneRequiredWithoutTestesNestedInput = {
    create?: XOR<DepartamentoCreateWithoutTestesInput, DepartamentoUncheckedCreateWithoutTestesInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutTestesInput
    upsert?: DepartamentoUpsertWithoutTestesInput
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutTestesInput, DepartamentoUpdateWithoutTestesInput>, DepartamentoUncheckedUpdateWithoutTestesInput>
  }

  export type TesteDepartamentoCreateNestedManyWithoutTesteInput = {
    create?: XOR<TesteDepartamentoCreateWithoutTesteInput, TesteDepartamentoUncheckedCreateWithoutTesteInput> | TesteDepartamentoCreateWithoutTesteInput[] | TesteDepartamentoUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: TesteDepartamentoCreateOrConnectWithoutTesteInput | TesteDepartamentoCreateOrConnectWithoutTesteInput[]
    createMany?: TesteDepartamentoCreateManyTesteInputEnvelope
    connect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutTesteInput = {
    create?: XOR<LogCreateWithoutTesteInput, LogUncheckedCreateWithoutTesteInput> | LogCreateWithoutTesteInput[] | LogUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: LogCreateOrConnectWithoutTesteInput | LogCreateOrConnectWithoutTesteInput[]
    createMany?: LogCreateManyTesteInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type CampanhaTesteCreateNestedManyWithoutTesteInput = {
    create?: XOR<CampanhaTesteCreateWithoutTesteInput, CampanhaTesteUncheckedCreateWithoutTesteInput> | CampanhaTesteCreateWithoutTesteInput[] | CampanhaTesteUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: CampanhaTesteCreateOrConnectWithoutTesteInput | CampanhaTesteCreateOrConnectWithoutTesteInput[]
    createMany?: CampanhaTesteCreateManyTesteInputEnvelope
    connect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutTestesInput = {
    create?: XOR<UsuarioCreateWithoutTestesInput, UsuarioUncheckedCreateWithoutTestesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTestesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TesteDepartamentoUncheckedCreateNestedManyWithoutTesteInput = {
    create?: XOR<TesteDepartamentoCreateWithoutTesteInput, TesteDepartamentoUncheckedCreateWithoutTesteInput> | TesteDepartamentoCreateWithoutTesteInput[] | TesteDepartamentoUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: TesteDepartamentoCreateOrConnectWithoutTesteInput | TesteDepartamentoCreateOrConnectWithoutTesteInput[]
    createMany?: TesteDepartamentoCreateManyTesteInputEnvelope
    connect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutTesteInput = {
    create?: XOR<LogCreateWithoutTesteInput, LogUncheckedCreateWithoutTesteInput> | LogCreateWithoutTesteInput[] | LogUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: LogCreateOrConnectWithoutTesteInput | LogCreateOrConnectWithoutTesteInput[]
    createMany?: LogCreateManyTesteInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type CampanhaTesteUncheckedCreateNestedManyWithoutTesteInput = {
    create?: XOR<CampanhaTesteCreateWithoutTesteInput, CampanhaTesteUncheckedCreateWithoutTesteInput> | CampanhaTesteCreateWithoutTesteInput[] | CampanhaTesteUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: CampanhaTesteCreateOrConnectWithoutTesteInput | CampanhaTesteCreateOrConnectWithoutTesteInput[]
    createMany?: CampanhaTesteCreateManyTesteInputEnvelope
    connect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
  }

  export type EnumCanalTesteFieldUpdateOperationsInput = {
    set?: $Enums.CanalTeste
  }

  export type EnumStatusTesteFieldUpdateOperationsInput = {
    set?: $Enums.StatusTeste
  }

  export type TesteDepartamentoUpdateManyWithoutTesteNestedInput = {
    create?: XOR<TesteDepartamentoCreateWithoutTesteInput, TesteDepartamentoUncheckedCreateWithoutTesteInput> | TesteDepartamentoCreateWithoutTesteInput[] | TesteDepartamentoUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: TesteDepartamentoCreateOrConnectWithoutTesteInput | TesteDepartamentoCreateOrConnectWithoutTesteInput[]
    upsert?: TesteDepartamentoUpsertWithWhereUniqueWithoutTesteInput | TesteDepartamentoUpsertWithWhereUniqueWithoutTesteInput[]
    createMany?: TesteDepartamentoCreateManyTesteInputEnvelope
    set?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    disconnect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    delete?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    connect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    update?: TesteDepartamentoUpdateWithWhereUniqueWithoutTesteInput | TesteDepartamentoUpdateWithWhereUniqueWithoutTesteInput[]
    updateMany?: TesteDepartamentoUpdateManyWithWhereWithoutTesteInput | TesteDepartamentoUpdateManyWithWhereWithoutTesteInput[]
    deleteMany?: TesteDepartamentoScalarWhereInput | TesteDepartamentoScalarWhereInput[]
  }

  export type LogUpdateManyWithoutTesteNestedInput = {
    create?: XOR<LogCreateWithoutTesteInput, LogUncheckedCreateWithoutTesteInput> | LogCreateWithoutTesteInput[] | LogUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: LogCreateOrConnectWithoutTesteInput | LogCreateOrConnectWithoutTesteInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutTesteInput | LogUpsertWithWhereUniqueWithoutTesteInput[]
    createMany?: LogCreateManyTesteInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutTesteInput | LogUpdateWithWhereUniqueWithoutTesteInput[]
    updateMany?: LogUpdateManyWithWhereWithoutTesteInput | LogUpdateManyWithWhereWithoutTesteInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type CampanhaTesteUpdateManyWithoutTesteNestedInput = {
    create?: XOR<CampanhaTesteCreateWithoutTesteInput, CampanhaTesteUncheckedCreateWithoutTesteInput> | CampanhaTesteCreateWithoutTesteInput[] | CampanhaTesteUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: CampanhaTesteCreateOrConnectWithoutTesteInput | CampanhaTesteCreateOrConnectWithoutTesteInput[]
    upsert?: CampanhaTesteUpsertWithWhereUniqueWithoutTesteInput | CampanhaTesteUpsertWithWhereUniqueWithoutTesteInput[]
    createMany?: CampanhaTesteCreateManyTesteInputEnvelope
    set?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    disconnect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    delete?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    connect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    update?: CampanhaTesteUpdateWithWhereUniqueWithoutTesteInput | CampanhaTesteUpdateWithWhereUniqueWithoutTesteInput[]
    updateMany?: CampanhaTesteUpdateManyWithWhereWithoutTesteInput | CampanhaTesteUpdateManyWithWhereWithoutTesteInput[]
    deleteMany?: CampanhaTesteScalarWhereInput | CampanhaTesteScalarWhereInput[]
  }

  export type UsuarioUpdateOneWithoutTestesNestedInput = {
    create?: XOR<UsuarioCreateWithoutTestesInput, UsuarioUncheckedCreateWithoutTestesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTestesInput
    upsert?: UsuarioUpsertWithoutTestesInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTestesInput, UsuarioUpdateWithoutTestesInput>, UsuarioUncheckedUpdateWithoutTestesInput>
  }

  export type TesteDepartamentoUncheckedUpdateManyWithoutTesteNestedInput = {
    create?: XOR<TesteDepartamentoCreateWithoutTesteInput, TesteDepartamentoUncheckedCreateWithoutTesteInput> | TesteDepartamentoCreateWithoutTesteInput[] | TesteDepartamentoUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: TesteDepartamentoCreateOrConnectWithoutTesteInput | TesteDepartamentoCreateOrConnectWithoutTesteInput[]
    upsert?: TesteDepartamentoUpsertWithWhereUniqueWithoutTesteInput | TesteDepartamentoUpsertWithWhereUniqueWithoutTesteInput[]
    createMany?: TesteDepartamentoCreateManyTesteInputEnvelope
    set?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    disconnect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    delete?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    connect?: TesteDepartamentoWhereUniqueInput | TesteDepartamentoWhereUniqueInput[]
    update?: TesteDepartamentoUpdateWithWhereUniqueWithoutTesteInput | TesteDepartamentoUpdateWithWhereUniqueWithoutTesteInput[]
    updateMany?: TesteDepartamentoUpdateManyWithWhereWithoutTesteInput | TesteDepartamentoUpdateManyWithWhereWithoutTesteInput[]
    deleteMany?: TesteDepartamentoScalarWhereInput | TesteDepartamentoScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutTesteNestedInput = {
    create?: XOR<LogCreateWithoutTesteInput, LogUncheckedCreateWithoutTesteInput> | LogCreateWithoutTesteInput[] | LogUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: LogCreateOrConnectWithoutTesteInput | LogCreateOrConnectWithoutTesteInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutTesteInput | LogUpsertWithWhereUniqueWithoutTesteInput[]
    createMany?: LogCreateManyTesteInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutTesteInput | LogUpdateWithWhereUniqueWithoutTesteInput[]
    updateMany?: LogUpdateManyWithWhereWithoutTesteInput | LogUpdateManyWithWhereWithoutTesteInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type CampanhaTesteUncheckedUpdateManyWithoutTesteNestedInput = {
    create?: XOR<CampanhaTesteCreateWithoutTesteInput, CampanhaTesteUncheckedCreateWithoutTesteInput> | CampanhaTesteCreateWithoutTesteInput[] | CampanhaTesteUncheckedCreateWithoutTesteInput[]
    connectOrCreate?: CampanhaTesteCreateOrConnectWithoutTesteInput | CampanhaTesteCreateOrConnectWithoutTesteInput[]
    upsert?: CampanhaTesteUpsertWithWhereUniqueWithoutTesteInput | CampanhaTesteUpsertWithWhereUniqueWithoutTesteInput[]
    createMany?: CampanhaTesteCreateManyTesteInputEnvelope
    set?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    disconnect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    delete?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    connect?: CampanhaTesteWhereUniqueInput | CampanhaTesteWhereUniqueInput[]
    update?: CampanhaTesteUpdateWithWhereUniqueWithoutTesteInput | CampanhaTesteUpdateWithWhereUniqueWithoutTesteInput[]
    updateMany?: CampanhaTesteUpdateManyWithWhereWithoutTesteInput | CampanhaTesteUpdateManyWithWhereWithoutTesteInput[]
    deleteMany?: CampanhaTesteScalarWhereInput | CampanhaTesteScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDepartamentosInput = {
    create?: XOR<UsuarioCreateWithoutDepartamentosInput, UsuarioUncheckedCreateWithoutDepartamentosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDepartamentosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DepartamentoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<DepartamentoCreateWithoutUsuariosInput, DepartamentoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutUsuariosInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutDepartamentosNestedInput = {
    create?: XOR<UsuarioCreateWithoutDepartamentosInput, UsuarioUncheckedCreateWithoutDepartamentosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDepartamentosInput
    upsert?: UsuarioUpsertWithoutDepartamentosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDepartamentosInput, UsuarioUpdateWithoutDepartamentosInput>, UsuarioUncheckedUpdateWithoutDepartamentosInput>
  }

  export type DepartamentoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<DepartamentoCreateWithoutUsuariosInput, DepartamentoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutUsuariosInput
    upsert?: DepartamentoUpsertWithoutUsuariosInput
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutUsuariosInput, DepartamentoUpdateWithoutUsuariosInput>, DepartamentoUncheckedUpdateWithoutUsuariosInput>
  }

  export type UsuarioDepartamentoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioDepartamentoCreateWithoutUsuarioInput, UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput> | UsuarioDepartamentoCreateWithoutUsuarioInput[] | UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput | UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioDepartamentoCreateManyUsuarioInputEnvelope
    connect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
  }

  export type TesteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TesteCreateWithoutUsuarioInput, TesteUncheckedCreateWithoutUsuarioInput> | TesteCreateWithoutUsuarioInput[] | TesteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutUsuarioInput | TesteCreateOrConnectWithoutUsuarioInput[]
    createMany?: TesteCreateManyUsuarioInputEnvelope
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
  }

  export type UsuarioDepartamentoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioDepartamentoCreateWithoutUsuarioInput, UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput> | UsuarioDepartamentoCreateWithoutUsuarioInput[] | UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput | UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioDepartamentoCreateManyUsuarioInputEnvelope
    connect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
  }

  export type TesteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TesteCreateWithoutUsuarioInput, TesteUncheckedCreateWithoutUsuarioInput> | TesteCreateWithoutUsuarioInput[] | TesteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutUsuarioInput | TesteCreateOrConnectWithoutUsuarioInput[]
    createMany?: TesteCreateManyUsuarioInputEnvelope
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
  }

  export type EnumCargoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.CargoUsuario
  }

  export type UsuarioDepartamentoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioDepartamentoCreateWithoutUsuarioInput, UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput> | UsuarioDepartamentoCreateWithoutUsuarioInput[] | UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput | UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioDepartamentoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioDepartamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioDepartamentoCreateManyUsuarioInputEnvelope
    set?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    disconnect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    delete?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    connect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    update?: UsuarioDepartamentoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioDepartamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioDepartamentoUpdateManyWithWhereWithoutUsuarioInput | UsuarioDepartamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioDepartamentoScalarWhereInput | UsuarioDepartamentoScalarWhereInput[]
  }

  export type TesteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TesteCreateWithoutUsuarioInput, TesteUncheckedCreateWithoutUsuarioInput> | TesteCreateWithoutUsuarioInput[] | TesteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutUsuarioInput | TesteCreateOrConnectWithoutUsuarioInput[]
    upsert?: TesteUpsertWithWhereUniqueWithoutUsuarioInput | TesteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TesteCreateManyUsuarioInputEnvelope
    set?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    disconnect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    delete?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    update?: TesteUpdateWithWhereUniqueWithoutUsuarioInput | TesteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TesteUpdateManyWithWhereWithoutUsuarioInput | TesteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TesteScalarWhereInput | TesteScalarWhereInput[]
  }

  export type UsuarioDepartamentoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioDepartamentoCreateWithoutUsuarioInput, UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput> | UsuarioDepartamentoCreateWithoutUsuarioInput[] | UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput | UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioDepartamentoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioDepartamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioDepartamentoCreateManyUsuarioInputEnvelope
    set?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    disconnect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    delete?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    connect?: UsuarioDepartamentoWhereUniqueInput | UsuarioDepartamentoWhereUniqueInput[]
    update?: UsuarioDepartamentoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioDepartamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioDepartamentoUpdateManyWithWhereWithoutUsuarioInput | UsuarioDepartamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioDepartamentoScalarWhereInput | UsuarioDepartamentoScalarWhereInput[]
  }

  export type TesteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TesteCreateWithoutUsuarioInput, TesteUncheckedCreateWithoutUsuarioInput> | TesteCreateWithoutUsuarioInput[] | TesteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutUsuarioInput | TesteCreateOrConnectWithoutUsuarioInput[]
    upsert?: TesteUpsertWithWhereUniqueWithoutUsuarioInput | TesteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TesteCreateManyUsuarioInputEnvelope
    set?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    disconnect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    delete?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    update?: TesteUpdateWithWhereUniqueWithoutUsuarioInput | TesteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TesteUpdateManyWithWhereWithoutUsuarioInput | TesteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TesteScalarWhereInput | TesteScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusCampanhaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCampanha | EnumStatusCampanhaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCampanha[] | ListEnumStatusCampanhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCampanha[] | ListEnumStatusCampanhaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCampanhaFilter<$PrismaModel> | $Enums.StatusCampanha
  }

  export type NestedEnumStatusCampanhaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCampanha | EnumStatusCampanhaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCampanha[] | ListEnumStatusCampanhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCampanha[] | ListEnumStatusCampanhaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCampanhaWithAggregatesFilter<$PrismaModel> | $Enums.StatusCampanha
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusCampanhaFilter<$PrismaModel>
    _max?: NestedEnumStatusCampanhaFilter<$PrismaModel>
  }

  export type NestedEnumTipoLogFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLog | EnumTipoLogFieldRefInput<$PrismaModel>
    in?: $Enums.TipoLog[] | ListEnumTipoLogFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoLog[] | ListEnumTipoLogFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoLogFilter<$PrismaModel> | $Enums.TipoLog
  }

  export type NestedEnumTipoLogWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLog | EnumTipoLogFieldRefInput<$PrismaModel>
    in?: $Enums.TipoLog[] | ListEnumTipoLogFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoLog[] | ListEnumTipoLogFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoLogWithAggregatesFilter<$PrismaModel> | $Enums.TipoLog
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoLogFilter<$PrismaModel>
    _max?: NestedEnumTipoLogFilter<$PrismaModel>
  }

  export type NestedEnumCanalTesteFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalTeste | EnumCanalTesteFieldRefInput<$PrismaModel>
    in?: $Enums.CanalTeste[] | ListEnumCanalTesteFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalTeste[] | ListEnumCanalTesteFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalTesteFilter<$PrismaModel> | $Enums.CanalTeste
  }

  export type NestedEnumStatusTesteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTeste | EnumStatusTesteFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTeste[] | ListEnumStatusTesteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTeste[] | ListEnumStatusTesteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTesteFilter<$PrismaModel> | $Enums.StatusTeste
  }

  export type NestedEnumCanalTesteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalTeste | EnumCanalTesteFieldRefInput<$PrismaModel>
    in?: $Enums.CanalTeste[] | ListEnumCanalTesteFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalTeste[] | ListEnumCanalTesteFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalTesteWithAggregatesFilter<$PrismaModel> | $Enums.CanalTeste
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanalTesteFilter<$PrismaModel>
    _max?: NestedEnumCanalTesteFilter<$PrismaModel>
  }

  export type NestedEnumStatusTesteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTeste | EnumStatusTesteFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTeste[] | ListEnumStatusTesteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTeste[] | ListEnumStatusTesteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTesteWithAggregatesFilter<$PrismaModel> | $Enums.StatusTeste
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTesteFilter<$PrismaModel>
    _max?: NestedEnumStatusTesteFilter<$PrismaModel>
  }

  export type NestedEnumCargoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoUsuarioFilter<$PrismaModel> | $Enums.CargoUsuario
  }

  export type NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.CargoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumCargoUsuarioFilter<$PrismaModel>
  }

  export type CampanhaCreateWithoutTestesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status: $Enums.StatusCampanha
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    logs?: LogCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateWithoutTestesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status: $Enums.StatusCampanha
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaCreateOrConnectWithoutTestesInput = {
    where: CampanhaWhereUniqueInput
    create: XOR<CampanhaCreateWithoutTestesInput, CampanhaUncheckedCreateWithoutTestesInput>
  }

  export type TesteCreateWithoutCampanhasInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: TesteDepartamentoCreateNestedManyWithoutTesteInput
    logs?: LogCreateNestedManyWithoutTesteInput
    usuario?: UsuarioCreateNestedOneWithoutTestesInput
  }

  export type TesteUncheckedCreateWithoutCampanhasInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: TesteDepartamentoUncheckedCreateNestedManyWithoutTesteInput
    logs?: LogUncheckedCreateNestedManyWithoutTesteInput
  }

  export type TesteCreateOrConnectWithoutCampanhasInput = {
    where: TesteWhereUniqueInput
    create: XOR<TesteCreateWithoutCampanhasInput, TesteUncheckedCreateWithoutCampanhasInput>
  }

  export type CampanhaUpsertWithoutTestesInput = {
    update: XOR<CampanhaUpdateWithoutTestesInput, CampanhaUncheckedUpdateWithoutTestesInput>
    create: XOR<CampanhaCreateWithoutTestesInput, CampanhaUncheckedCreateWithoutTestesInput>
    where?: CampanhaWhereInput
  }

  export type CampanhaUpdateToOneWithWhereWithoutTestesInput = {
    where?: CampanhaWhereInput
    data: XOR<CampanhaUpdateWithoutTestesInput, CampanhaUncheckedUpdateWithoutTestesInput>
  }

  export type CampanhaUpdateWithoutTestesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateWithoutTestesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type TesteUpsertWithoutCampanhasInput = {
    update: XOR<TesteUpdateWithoutCampanhasInput, TesteUncheckedUpdateWithoutCampanhasInput>
    create: XOR<TesteCreateWithoutCampanhasInput, TesteUncheckedCreateWithoutCampanhasInput>
    where?: TesteWhereInput
  }

  export type TesteUpdateToOneWithWhereWithoutCampanhasInput = {
    where?: TesteWhereInput
    data: XOR<TesteUpdateWithoutCampanhasInput, TesteUncheckedUpdateWithoutCampanhasInput>
  }

  export type TesteUpdateWithoutCampanhasInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: TesteDepartamentoUpdateManyWithoutTesteNestedInput
    logs?: LogUpdateManyWithoutTesteNestedInput
    usuario?: UsuarioUpdateOneWithoutTestesNestedInput
  }

  export type TesteUncheckedUpdateWithoutCampanhasInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: TesteDepartamentoUncheckedUpdateManyWithoutTesteNestedInput
    logs?: LogUncheckedUpdateManyWithoutTesteNestedInput
  }

  export type LogCreateWithoutCampanhaInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamento?: DepartamentoCreateNestedOneWithoutLogsInput
    teste?: TesteCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutCampanhaInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    departamentoId?: string | null
    testeId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type LogCreateOrConnectWithoutCampanhaInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutCampanhaInput, LogUncheckedCreateWithoutCampanhaInput>
  }

  export type LogCreateManyCampanhaInputEnvelope = {
    data: LogCreateManyCampanhaInput | LogCreateManyCampanhaInput[]
    skipDuplicates?: boolean
  }

  export type CampanhaTesteCreateWithoutCampanhaInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    teste: TesteCreateNestedOneWithoutCampanhasInput
  }

  export type CampanhaTesteUncheckedCreateWithoutCampanhaInput = {
    id?: string
    testeId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type CampanhaTesteCreateOrConnectWithoutCampanhaInput = {
    where: CampanhaTesteWhereUniqueInput
    create: XOR<CampanhaTesteCreateWithoutCampanhaInput, CampanhaTesteUncheckedCreateWithoutCampanhaInput>
  }

  export type CampanhaTesteCreateManyCampanhaInputEnvelope = {
    data: CampanhaTesteCreateManyCampanhaInput | CampanhaTesteCreateManyCampanhaInput[]
    skipDuplicates?: boolean
  }

  export type LogUpsertWithWhereUniqueWithoutCampanhaInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutCampanhaInput, LogUncheckedUpdateWithoutCampanhaInput>
    create: XOR<LogCreateWithoutCampanhaInput, LogUncheckedCreateWithoutCampanhaInput>
  }

  export type LogUpdateWithWhereUniqueWithoutCampanhaInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutCampanhaInput, LogUncheckedUpdateWithoutCampanhaInput>
  }

  export type LogUpdateManyWithWhereWithoutCampanhaInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutCampanhaInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    tipo?: EnumTipoLogFilter<"Log"> | $Enums.TipoLog
    descricao?: StringNullableFilter<"Log"> | string | null
    campanhaId?: StringNullableFilter<"Log"> | string | null
    departamentoId?: StringNullableFilter<"Log"> | string | null
    testeId?: StringNullableFilter<"Log"> | string | null
    ativo?: BoolFilter<"Log"> | boolean
    criadoEm?: DateTimeFilter<"Log"> | Date | string
    criadoPor?: StringNullableFilter<"Log"> | string | null
    atualizadoEm?: DateTimeFilter<"Log"> | Date | string
    atualizadoPor?: StringNullableFilter<"Log"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Log"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Log"> | string | null
  }

  export type CampanhaTesteUpsertWithWhereUniqueWithoutCampanhaInput = {
    where: CampanhaTesteWhereUniqueInput
    update: XOR<CampanhaTesteUpdateWithoutCampanhaInput, CampanhaTesteUncheckedUpdateWithoutCampanhaInput>
    create: XOR<CampanhaTesteCreateWithoutCampanhaInput, CampanhaTesteUncheckedCreateWithoutCampanhaInput>
  }

  export type CampanhaTesteUpdateWithWhereUniqueWithoutCampanhaInput = {
    where: CampanhaTesteWhereUniqueInput
    data: XOR<CampanhaTesteUpdateWithoutCampanhaInput, CampanhaTesteUncheckedUpdateWithoutCampanhaInput>
  }

  export type CampanhaTesteUpdateManyWithWhereWithoutCampanhaInput = {
    where: CampanhaTesteScalarWhereInput
    data: XOR<CampanhaTesteUpdateManyMutationInput, CampanhaTesteUncheckedUpdateManyWithoutCampanhaInput>
  }

  export type CampanhaTesteScalarWhereInput = {
    AND?: CampanhaTesteScalarWhereInput | CampanhaTesteScalarWhereInput[]
    OR?: CampanhaTesteScalarWhereInput[]
    NOT?: CampanhaTesteScalarWhereInput | CampanhaTesteScalarWhereInput[]
    id?: StringFilter<"CampanhaTeste"> | string
    campanhaId?: StringFilter<"CampanhaTeste"> | string
    testeId?: StringFilter<"CampanhaTeste"> | string
    ativo?: BoolFilter<"CampanhaTeste"> | boolean
    criadoEm?: DateTimeFilter<"CampanhaTeste"> | Date | string
    criadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
    atualizadoEm?: DateTimeFilter<"CampanhaTeste"> | Date | string
    atualizadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
    inativadoEm?: DateTimeNullableFilter<"CampanhaTeste"> | Date | string | null
    inativadoPor?: StringNullableFilter<"CampanhaTeste"> | string | null
  }

  export type TesteDepartamentoCreateWithoutDepartamentoInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    teste: TesteCreateNestedOneWithoutDepartamentosInput
  }

  export type TesteDepartamentoUncheckedCreateWithoutDepartamentoInput = {
    id?: string
    testeId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type TesteDepartamentoCreateOrConnectWithoutDepartamentoInput = {
    where: TesteDepartamentoWhereUniqueInput
    create: XOR<TesteDepartamentoCreateWithoutDepartamentoInput, TesteDepartamentoUncheckedCreateWithoutDepartamentoInput>
  }

  export type TesteDepartamentoCreateManyDepartamentoInputEnvelope = {
    data: TesteDepartamentoCreateManyDepartamentoInput | TesteDepartamentoCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutDepartamentoInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    campanha?: CampanhaCreateNestedOneWithoutLogsInput
    teste?: TesteCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutDepartamentoInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    campanhaId?: string | null
    testeId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type LogCreateOrConnectWithoutDepartamentoInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutDepartamentoInput, LogUncheckedCreateWithoutDepartamentoInput>
  }

  export type LogCreateManyDepartamentoInputEnvelope = {
    data: LogCreateManyDepartamentoInput | LogCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioDepartamentoCreateWithoutDepartamentoInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    usuario: UsuarioCreateNestedOneWithoutDepartamentosInput
  }

  export type UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput = {
    id?: string
    usuarioId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type UsuarioDepartamentoCreateOrConnectWithoutDepartamentoInput = {
    where: UsuarioDepartamentoWhereUniqueInput
    create: XOR<UsuarioDepartamentoCreateWithoutDepartamentoInput, UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput>
  }

  export type UsuarioDepartamentoCreateManyDepartamentoInputEnvelope = {
    data: UsuarioDepartamentoCreateManyDepartamentoInput | UsuarioDepartamentoCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type TesteDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: TesteDepartamentoWhereUniqueInput
    update: XOR<TesteDepartamentoUpdateWithoutDepartamentoInput, TesteDepartamentoUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<TesteDepartamentoCreateWithoutDepartamentoInput, TesteDepartamentoUncheckedCreateWithoutDepartamentoInput>
  }

  export type TesteDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: TesteDepartamentoWhereUniqueInput
    data: XOR<TesteDepartamentoUpdateWithoutDepartamentoInput, TesteDepartamentoUncheckedUpdateWithoutDepartamentoInput>
  }

  export type TesteDepartamentoUpdateManyWithWhereWithoutDepartamentoInput = {
    where: TesteDepartamentoScalarWhereInput
    data: XOR<TesteDepartamentoUpdateManyMutationInput, TesteDepartamentoUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type TesteDepartamentoScalarWhereInput = {
    AND?: TesteDepartamentoScalarWhereInput | TesteDepartamentoScalarWhereInput[]
    OR?: TesteDepartamentoScalarWhereInput[]
    NOT?: TesteDepartamentoScalarWhereInput | TesteDepartamentoScalarWhereInput[]
    id?: StringFilter<"TesteDepartamento"> | string
    testeId?: StringFilter<"TesteDepartamento"> | string
    departamentoId?: StringFilter<"TesteDepartamento"> | string
    ativo?: BoolFilter<"TesteDepartamento"> | boolean
    criadoEm?: DateTimeFilter<"TesteDepartamento"> | Date | string
    criadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
    atualizadoEm?: DateTimeFilter<"TesteDepartamento"> | Date | string
    atualizadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
    inativadoEm?: DateTimeNullableFilter<"TesteDepartamento"> | Date | string | null
    inativadoPor?: StringNullableFilter<"TesteDepartamento"> | string | null
  }

  export type LogUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutDepartamentoInput, LogUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<LogCreateWithoutDepartamentoInput, LogUncheckedCreateWithoutDepartamentoInput>
  }

  export type LogUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutDepartamentoInput, LogUncheckedUpdateWithoutDepartamentoInput>
  }

  export type LogUpdateManyWithWhereWithoutDepartamentoInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type UsuarioDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: UsuarioDepartamentoWhereUniqueInput
    update: XOR<UsuarioDepartamentoUpdateWithoutDepartamentoInput, UsuarioDepartamentoUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<UsuarioDepartamentoCreateWithoutDepartamentoInput, UsuarioDepartamentoUncheckedCreateWithoutDepartamentoInput>
  }

  export type UsuarioDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: UsuarioDepartamentoWhereUniqueInput
    data: XOR<UsuarioDepartamentoUpdateWithoutDepartamentoInput, UsuarioDepartamentoUncheckedUpdateWithoutDepartamentoInput>
  }

  export type UsuarioDepartamentoUpdateManyWithWhereWithoutDepartamentoInput = {
    where: UsuarioDepartamentoScalarWhereInput
    data: XOR<UsuarioDepartamentoUpdateManyMutationInput, UsuarioDepartamentoUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type UsuarioDepartamentoScalarWhereInput = {
    AND?: UsuarioDepartamentoScalarWhereInput | UsuarioDepartamentoScalarWhereInput[]
    OR?: UsuarioDepartamentoScalarWhereInput[]
    NOT?: UsuarioDepartamentoScalarWhereInput | UsuarioDepartamentoScalarWhereInput[]
    id?: StringFilter<"UsuarioDepartamento"> | string
    usuarioId?: StringFilter<"UsuarioDepartamento"> | string
    departamentoId?: StringFilter<"UsuarioDepartamento"> | string
    ativo?: BoolFilter<"UsuarioDepartamento"> | boolean
    criadoEm?: DateTimeFilter<"UsuarioDepartamento"> | Date | string
    criadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
    atualizadoEm?: DateTimeFilter<"UsuarioDepartamento"> | Date | string
    atualizadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
    inativadoEm?: DateTimeNullableFilter<"UsuarioDepartamento"> | Date | string | null
    inativadoPor?: StringNullableFilter<"UsuarioDepartamento"> | string | null
  }

  export type CampanhaCreateWithoutLogsInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status: $Enums.StatusCampanha
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: CampanhaTesteCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateWithoutLogsInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status: $Enums.StatusCampanha
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: CampanhaTesteUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaCreateOrConnectWithoutLogsInput = {
    where: CampanhaWhereUniqueInput
    create: XOR<CampanhaCreateWithoutLogsInput, CampanhaUncheckedCreateWithoutLogsInput>
  }

  export type DepartamentoCreateWithoutLogsInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: TesteDepartamentoCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioDepartamentoCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateWithoutLogsInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: TesteDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoCreateOrConnectWithoutLogsInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutLogsInput, DepartamentoUncheckedCreateWithoutLogsInput>
  }

  export type TesteCreateWithoutLogsInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: TesteDepartamentoCreateNestedManyWithoutTesteInput
    campanhas?: CampanhaTesteCreateNestedManyWithoutTesteInput
    usuario?: UsuarioCreateNestedOneWithoutTestesInput
  }

  export type TesteUncheckedCreateWithoutLogsInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: TesteDepartamentoUncheckedCreateNestedManyWithoutTesteInput
    campanhas?: CampanhaTesteUncheckedCreateNestedManyWithoutTesteInput
  }

  export type TesteCreateOrConnectWithoutLogsInput = {
    where: TesteWhereUniqueInput
    create: XOR<TesteCreateWithoutLogsInput, TesteUncheckedCreateWithoutLogsInput>
  }

  export type CampanhaUpsertWithoutLogsInput = {
    update: XOR<CampanhaUpdateWithoutLogsInput, CampanhaUncheckedUpdateWithoutLogsInput>
    create: XOR<CampanhaCreateWithoutLogsInput, CampanhaUncheckedCreateWithoutLogsInput>
    where?: CampanhaWhereInput
  }

  export type CampanhaUpdateToOneWithWhereWithoutLogsInput = {
    where?: CampanhaWhereInput
    data: XOR<CampanhaUpdateWithoutLogsInput, CampanhaUncheckedUpdateWithoutLogsInput>
  }

  export type CampanhaUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: CampanhaTesteUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: CampanhaTesteUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type DepartamentoUpsertWithoutLogsInput = {
    update: XOR<DepartamentoUpdateWithoutLogsInput, DepartamentoUncheckedUpdateWithoutLogsInput>
    create: XOR<DepartamentoCreateWithoutLogsInput, DepartamentoUncheckedCreateWithoutLogsInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutLogsInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutLogsInput, DepartamentoUncheckedUpdateWithoutLogsInput>
  }

  export type DepartamentoUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: TesteDepartamentoUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioDepartamentoUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: TesteDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type TesteUpsertWithoutLogsInput = {
    update: XOR<TesteUpdateWithoutLogsInput, TesteUncheckedUpdateWithoutLogsInput>
    create: XOR<TesteCreateWithoutLogsInput, TesteUncheckedCreateWithoutLogsInput>
    where?: TesteWhereInput
  }

  export type TesteUpdateToOneWithWhereWithoutLogsInput = {
    where?: TesteWhereInput
    data: XOR<TesteUpdateWithoutLogsInput, TesteUncheckedUpdateWithoutLogsInput>
  }

  export type TesteUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: TesteDepartamentoUpdateManyWithoutTesteNestedInput
    campanhas?: CampanhaTesteUpdateManyWithoutTesteNestedInput
    usuario?: UsuarioUpdateOneWithoutTestesNestedInput
  }

  export type TesteUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: TesteDepartamentoUncheckedUpdateManyWithoutTesteNestedInput
    campanhas?: CampanhaTesteUncheckedUpdateManyWithoutTesteNestedInput
  }

  export type TesteCreateWithoutDepartamentosInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    logs?: LogCreateNestedManyWithoutTesteInput
    campanhas?: CampanhaTesteCreateNestedManyWithoutTesteInput
    usuario?: UsuarioCreateNestedOneWithoutTestesInput
  }

  export type TesteUncheckedCreateWithoutDepartamentosInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    usuarioId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutTesteInput
    campanhas?: CampanhaTesteUncheckedCreateNestedManyWithoutTesteInput
  }

  export type TesteCreateOrConnectWithoutDepartamentosInput = {
    where: TesteWhereUniqueInput
    create: XOR<TesteCreateWithoutDepartamentosInput, TesteUncheckedCreateWithoutDepartamentosInput>
  }

  export type DepartamentoCreateWithoutTestesInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    logs?: LogCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioDepartamentoCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateWithoutTestesInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoCreateOrConnectWithoutTestesInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutTestesInput, DepartamentoUncheckedCreateWithoutTestesInput>
  }

  export type TesteUpsertWithoutDepartamentosInput = {
    update: XOR<TesteUpdateWithoutDepartamentosInput, TesteUncheckedUpdateWithoutDepartamentosInput>
    create: XOR<TesteCreateWithoutDepartamentosInput, TesteUncheckedCreateWithoutDepartamentosInput>
    where?: TesteWhereInput
  }

  export type TesteUpdateToOneWithWhereWithoutDepartamentosInput = {
    where?: TesteWhereInput
    data: XOR<TesteUpdateWithoutDepartamentosInput, TesteUncheckedUpdateWithoutDepartamentosInput>
  }

  export type TesteUpdateWithoutDepartamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUpdateManyWithoutTesteNestedInput
    campanhas?: CampanhaTesteUpdateManyWithoutTesteNestedInput
    usuario?: UsuarioUpdateOneWithoutTestesNestedInput
  }

  export type TesteUncheckedUpdateWithoutDepartamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutTesteNestedInput
    campanhas?: CampanhaTesteUncheckedUpdateManyWithoutTesteNestedInput
  }

  export type DepartamentoUpsertWithoutTestesInput = {
    update: XOR<DepartamentoUpdateWithoutTestesInput, DepartamentoUncheckedUpdateWithoutTestesInput>
    create: XOR<DepartamentoCreateWithoutTestesInput, DepartamentoUncheckedCreateWithoutTestesInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutTestesInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutTestesInput, DepartamentoUncheckedUpdateWithoutTestesInput>
  }

  export type DepartamentoUpdateWithoutTestesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioDepartamentoUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutTestesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type TesteDepartamentoCreateWithoutTesteInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamento: DepartamentoCreateNestedOneWithoutTestesInput
  }

  export type TesteDepartamentoUncheckedCreateWithoutTesteInput = {
    id?: string
    departamentoId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type TesteDepartamentoCreateOrConnectWithoutTesteInput = {
    where: TesteDepartamentoWhereUniqueInput
    create: XOR<TesteDepartamentoCreateWithoutTesteInput, TesteDepartamentoUncheckedCreateWithoutTesteInput>
  }

  export type TesteDepartamentoCreateManyTesteInputEnvelope = {
    data: TesteDepartamentoCreateManyTesteInput | TesteDepartamentoCreateManyTesteInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutTesteInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    campanha?: CampanhaCreateNestedOneWithoutLogsInput
    departamento?: DepartamentoCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutTesteInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    campanhaId?: string | null
    departamentoId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type LogCreateOrConnectWithoutTesteInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutTesteInput, LogUncheckedCreateWithoutTesteInput>
  }

  export type LogCreateManyTesteInputEnvelope = {
    data: LogCreateManyTesteInput | LogCreateManyTesteInput[]
    skipDuplicates?: boolean
  }

  export type CampanhaTesteCreateWithoutTesteInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    campanha: CampanhaCreateNestedOneWithoutTestesInput
  }

  export type CampanhaTesteUncheckedCreateWithoutTesteInput = {
    id?: string
    campanhaId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type CampanhaTesteCreateOrConnectWithoutTesteInput = {
    where: CampanhaTesteWhereUniqueInput
    create: XOR<CampanhaTesteCreateWithoutTesteInput, CampanhaTesteUncheckedCreateWithoutTesteInput>
  }

  export type CampanhaTesteCreateManyTesteInputEnvelope = {
    data: CampanhaTesteCreateManyTesteInput | CampanhaTesteCreateManyTesteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutTestesInput = {
    id?: string
    nome: string
    sobrenome?: string | null
    email: string
    cargo?: $Enums.CargoUsuario
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: UsuarioDepartamentoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTestesInput = {
    id?: string
    nome: string
    sobrenome?: string | null
    email: string
    cargo?: $Enums.CargoUsuario
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: UsuarioDepartamentoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTestesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTestesInput, UsuarioUncheckedCreateWithoutTestesInput>
  }

  export type TesteDepartamentoUpsertWithWhereUniqueWithoutTesteInput = {
    where: TesteDepartamentoWhereUniqueInput
    update: XOR<TesteDepartamentoUpdateWithoutTesteInput, TesteDepartamentoUncheckedUpdateWithoutTesteInput>
    create: XOR<TesteDepartamentoCreateWithoutTesteInput, TesteDepartamentoUncheckedCreateWithoutTesteInput>
  }

  export type TesteDepartamentoUpdateWithWhereUniqueWithoutTesteInput = {
    where: TesteDepartamentoWhereUniqueInput
    data: XOR<TesteDepartamentoUpdateWithoutTesteInput, TesteDepartamentoUncheckedUpdateWithoutTesteInput>
  }

  export type TesteDepartamentoUpdateManyWithWhereWithoutTesteInput = {
    where: TesteDepartamentoScalarWhereInput
    data: XOR<TesteDepartamentoUpdateManyMutationInput, TesteDepartamentoUncheckedUpdateManyWithoutTesteInput>
  }

  export type LogUpsertWithWhereUniqueWithoutTesteInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutTesteInput, LogUncheckedUpdateWithoutTesteInput>
    create: XOR<LogCreateWithoutTesteInput, LogUncheckedCreateWithoutTesteInput>
  }

  export type LogUpdateWithWhereUniqueWithoutTesteInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutTesteInput, LogUncheckedUpdateWithoutTesteInput>
  }

  export type LogUpdateManyWithWhereWithoutTesteInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutTesteInput>
  }

  export type CampanhaTesteUpsertWithWhereUniqueWithoutTesteInput = {
    where: CampanhaTesteWhereUniqueInput
    update: XOR<CampanhaTesteUpdateWithoutTesteInput, CampanhaTesteUncheckedUpdateWithoutTesteInput>
    create: XOR<CampanhaTesteCreateWithoutTesteInput, CampanhaTesteUncheckedCreateWithoutTesteInput>
  }

  export type CampanhaTesteUpdateWithWhereUniqueWithoutTesteInput = {
    where: CampanhaTesteWhereUniqueInput
    data: XOR<CampanhaTesteUpdateWithoutTesteInput, CampanhaTesteUncheckedUpdateWithoutTesteInput>
  }

  export type CampanhaTesteUpdateManyWithWhereWithoutTesteInput = {
    where: CampanhaTesteScalarWhereInput
    data: XOR<CampanhaTesteUpdateManyMutationInput, CampanhaTesteUncheckedUpdateManyWithoutTesteInput>
  }

  export type UsuarioUpsertWithoutTestesInput = {
    update: XOR<UsuarioUpdateWithoutTestesInput, UsuarioUncheckedUpdateWithoutTestesInput>
    create: XOR<UsuarioCreateWithoutTestesInput, UsuarioUncheckedCreateWithoutTestesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTestesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTestesInput, UsuarioUncheckedUpdateWithoutTestesInput>
  }

  export type UsuarioUpdateWithoutTestesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: UsuarioDepartamentoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTestesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: UsuarioDepartamentoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutDepartamentosInput = {
    id?: string
    nome: string
    sobrenome?: string | null
    email: string
    cargo?: $Enums.CargoUsuario
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: TesteCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDepartamentosInput = {
    id?: string
    nome: string
    sobrenome?: string | null
    email: string
    cargo?: $Enums.CargoUsuario
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: TesteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDepartamentosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDepartamentosInput, UsuarioUncheckedCreateWithoutDepartamentosInput>
  }

  export type DepartamentoCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: TesteDepartamentoCreateNestedManyWithoutDepartamentoInput
    logs?: LogCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    testes?: TesteDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
    logs?: LogUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoCreateOrConnectWithoutUsuariosInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutUsuariosInput, DepartamentoUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutDepartamentosInput = {
    update: XOR<UsuarioUpdateWithoutDepartamentosInput, UsuarioUncheckedUpdateWithoutDepartamentosInput>
    create: XOR<UsuarioCreateWithoutDepartamentosInput, UsuarioUncheckedCreateWithoutDepartamentosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDepartamentosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDepartamentosInput, UsuarioUncheckedUpdateWithoutDepartamentosInput>
  }

  export type UsuarioUpdateWithoutDepartamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: TesteUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDepartamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: TesteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DepartamentoUpsertWithoutUsuariosInput = {
    update: XOR<DepartamentoUpdateWithoutUsuariosInput, DepartamentoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<DepartamentoCreateWithoutUsuariosInput, DepartamentoUncheckedCreateWithoutUsuariosInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutUsuariosInput, DepartamentoUncheckedUpdateWithoutUsuariosInput>
  }

  export type DepartamentoUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: TesteDepartamentoUpdateManyWithoutDepartamentoNestedInput
    logs?: LogUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    testes?: TesteDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
    logs?: LogUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type UsuarioDepartamentoCreateWithoutUsuarioInput = {
    id?: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamento: DepartamentoCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    departamentoId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type UsuarioDepartamentoCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioDepartamentoWhereUniqueInput
    create: XOR<UsuarioDepartamentoCreateWithoutUsuarioInput, UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioDepartamentoCreateManyUsuarioInputEnvelope = {
    data: UsuarioDepartamentoCreateManyUsuarioInput | UsuarioDepartamentoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TesteCreateWithoutUsuarioInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: TesteDepartamentoCreateNestedManyWithoutTesteInput
    logs?: LogCreateNestedManyWithoutTesteInput
    campanhas?: CampanhaTesteCreateNestedManyWithoutTesteInput
  }

  export type TesteUncheckedCreateWithoutUsuarioInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
    departamentos?: TesteDepartamentoUncheckedCreateNestedManyWithoutTesteInput
    logs?: LogUncheckedCreateNestedManyWithoutTesteInput
    campanhas?: CampanhaTesteUncheckedCreateNestedManyWithoutTesteInput
  }

  export type TesteCreateOrConnectWithoutUsuarioInput = {
    where: TesteWhereUniqueInput
    create: XOR<TesteCreateWithoutUsuarioInput, TesteUncheckedCreateWithoutUsuarioInput>
  }

  export type TesteCreateManyUsuarioInputEnvelope = {
    data: TesteCreateManyUsuarioInput | TesteCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioDepartamentoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioDepartamentoWhereUniqueInput
    update: XOR<UsuarioDepartamentoUpdateWithoutUsuarioInput, UsuarioDepartamentoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioDepartamentoCreateWithoutUsuarioInput, UsuarioDepartamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioDepartamentoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioDepartamentoWhereUniqueInput
    data: XOR<UsuarioDepartamentoUpdateWithoutUsuarioInput, UsuarioDepartamentoUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioDepartamentoUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioDepartamentoScalarWhereInput
    data: XOR<UsuarioDepartamentoUpdateManyMutationInput, UsuarioDepartamentoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TesteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TesteWhereUniqueInput
    update: XOR<TesteUpdateWithoutUsuarioInput, TesteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TesteCreateWithoutUsuarioInput, TesteUncheckedCreateWithoutUsuarioInput>
  }

  export type TesteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TesteWhereUniqueInput
    data: XOR<TesteUpdateWithoutUsuarioInput, TesteUncheckedUpdateWithoutUsuarioInput>
  }

  export type TesteUpdateManyWithWhereWithoutUsuarioInput = {
    where: TesteScalarWhereInput
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TesteScalarWhereInput = {
    AND?: TesteScalarWhereInput | TesteScalarWhereInput[]
    OR?: TesteScalarWhereInput[]
    NOT?: TesteScalarWhereInput | TesteScalarWhereInput[]
    id?: StringFilter<"Teste"> | string
    canal?: EnumCanalTesteFilter<"Teste"> | $Enums.CanalTeste
    status?: EnumStatusTesteFilter<"Teste"> | $Enums.StatusTeste
    caiuNoTeste?: BoolFilter<"Teste"> | boolean
    reportouPhishing?: BoolFilter<"Teste"> | boolean
    usuarioId?: StringNullableFilter<"Teste"> | string | null
    ativo?: BoolFilter<"Teste"> | boolean
    criadoEm?: DateTimeFilter<"Teste"> | Date | string
    criadoPor?: StringNullableFilter<"Teste"> | string | null
    atualizadoEm?: DateTimeFilter<"Teste"> | Date | string
    atualizadoPor?: StringNullableFilter<"Teste"> | string | null
    inativadoEm?: DateTimeNullableFilter<"Teste"> | Date | string | null
    inativadoPor?: StringNullableFilter<"Teste"> | string | null
  }

  export type LogCreateManyCampanhaInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    departamentoId?: string | null
    testeId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type CampanhaTesteCreateManyCampanhaInput = {
    id?: string
    testeId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type LogUpdateWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: DepartamentoUpdateOneWithoutLogsNestedInput
    teste?: TesteUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    departamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    testeId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    departamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    testeId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampanhaTesteUpdateWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    teste?: TesteUpdateOneRequiredWithoutCampanhasNestedInput
  }

  export type CampanhaTesteUncheckedUpdateWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    testeId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampanhaTesteUncheckedUpdateManyWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    testeId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteDepartamentoCreateManyDepartamentoInput = {
    id?: string
    testeId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type LogCreateManyDepartamentoInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    campanhaId?: string | null
    testeId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type UsuarioDepartamentoCreateManyDepartamentoInput = {
    id?: string
    usuarioId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type TesteDepartamentoUpdateWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    teste?: TesteUpdateOneRequiredWithoutDepartamentosNestedInput
  }

  export type TesteDepartamentoUncheckedUpdateWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    testeId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteDepartamentoUncheckedUpdateManyWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    testeId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUpdateWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    campanha?: CampanhaUpdateOneWithoutLogsNestedInput
    teste?: TesteUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    campanhaId?: NullableStringFieldUpdateOperationsInput | string | null
    testeId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    campanhaId?: NullableStringFieldUpdateOperationsInput | string | null
    testeId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioDepartamentoUpdateWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDepartamentosNestedInput
  }

  export type UsuarioDepartamentoUncheckedUpdateWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioDepartamentoUncheckedUpdateManyWithoutDepartamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteDepartamentoCreateManyTesteInput = {
    id?: string
    departamentoId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type LogCreateManyTesteInput = {
    id?: string
    tipo: $Enums.TipoLog
    descricao?: string | null
    campanhaId?: string | null
    departamentoId?: string | null
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type CampanhaTesteCreateManyTesteInput = {
    id?: string
    campanhaId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type TesteDepartamentoUpdateWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: DepartamentoUpdateOneRequiredWithoutTestesNestedInput
  }

  export type TesteDepartamentoUncheckedUpdateWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    departamentoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteDepartamentoUncheckedUpdateManyWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    departamentoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUpdateWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    campanha?: CampanhaUpdateOneWithoutLogsNestedInput
    departamento?: DepartamentoUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    campanhaId?: NullableStringFieldUpdateOperationsInput | string | null
    departamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    campanhaId?: NullableStringFieldUpdateOperationsInput | string | null
    departamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampanhaTesteUpdateWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    campanha?: CampanhaUpdateOneRequiredWithoutTestesNestedInput
  }

  export type CampanhaTesteUncheckedUpdateWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampanhaTesteUncheckedUpdateManyWithoutTesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioDepartamentoCreateManyUsuarioInput = {
    id?: string
    departamentoId: string
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type TesteCreateManyUsuarioInput = {
    id?: string
    canal: $Enums.CanalTeste
    status: $Enums.StatusTeste
    caiuNoTeste?: boolean
    reportouPhishing?: boolean
    ativo?: boolean
    criadoEm?: Date | string
    criadoPor?: string | null
    atualizadoEm?: Date | string
    atualizadoPor?: string | null
    inativadoEm?: Date | string | null
    inativadoPor?: string | null
  }

  export type UsuarioDepartamentoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: DepartamentoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioDepartamentoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    departamentoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioDepartamentoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    departamentoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TesteUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: TesteDepartamentoUpdateManyWithoutTesteNestedInput
    logs?: LogUpdateManyWithoutTesteNestedInput
    campanhas?: CampanhaTesteUpdateManyWithoutTesteNestedInput
  }

  export type TesteUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    departamentos?: TesteDepartamentoUncheckedUpdateManyWithoutTesteNestedInput
    logs?: LogUncheckedUpdateManyWithoutTesteNestedInput
    campanhas?: CampanhaTesteUncheckedUpdateManyWithoutTesteNestedInput
  }

  export type TesteUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    canal?: EnumCanalTesteFieldUpdateOperationsInput | $Enums.CanalTeste
    status?: EnumStatusTesteFieldUpdateOperationsInput | $Enums.StatusTeste
    caiuNoTeste?: BoolFieldUpdateOperationsInput | boolean
    reportouPhishing?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    inativadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inativadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
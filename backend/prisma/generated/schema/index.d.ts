
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
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Email
 * 
 */
export type Email = $Result.DefaultSelection<Prisma.$EmailPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model PhishingDepartment
 * 
 */
export type PhishingDepartment = $Result.DefaultSelection<Prisma.$PhishingDepartmentPayload>
/**
 * Model Phishing
 * 
 */
export type Phishing = $Result.DefaultSelection<Prisma.$PhishingPayload>
/**
 * Model UserDepartment
 * 
 */
export type UserDepartment = $Result.DefaultSelection<Prisma.$UserDepartmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Action: {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  OPEN: 'OPEN',
  SEND: 'SEND',
  ERROR: 'ERROR'
};

export type Action = (typeof Action)[keyof typeof Action]


export const EmailType: {
  WORK: 'WORK',
  PERSONAL: 'PERSONAL'
};

export type EmailType = (typeof EmailType)[keyof typeof EmailType]


export const Entity: {
  DEPARTMENT: 'DEPARTMENT',
  EMAIL: 'EMAIL',
  ENUM: 'ENUM',
  MODULE: 'MODULE',
  PHISHING: 'PHISHING',
  PSEUDONYM: 'PSEUDONYM',
  TENANT: 'TENANT',
  TENANT_MODULE: 'TENANT_MODULE',
  USER: 'USER',
  USER_DEPARTMENT: 'USER_DEPARTMENT'
};

export type Entity = (typeof Entity)[keyof typeof Entity]


export const PhishingChannel: {
  EMAIL: 'EMAIL'
};

export type PhishingChannel = (typeof PhishingChannel)[keyof typeof PhishingChannel]


export const PhishingStatus: {
  SENT: 'SENT',
  CLICKED: 'CLICKED',
  SEND_FAILED: 'SEND_FAILED'
};

export type PhishingStatus = (typeof PhishingStatus)[keyof typeof PhishingStatus]

}

export type Action = $Enums.Action

export const Action: typeof $Enums.Action

export type EmailType = $Enums.EmailType

export const EmailType: typeof $Enums.EmailType

export type Entity = $Enums.Entity

export const Entity: typeof $Enums.Entity

export type PhishingChannel = $Enums.PhishingChannel

export const PhishingChannel: typeof $Enums.PhishingChannel

export type PhishingStatus = $Enums.PhishingStatus

export const PhishingStatus: typeof $Enums.PhishingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Departments
 * const departments = await prisma.department.findMany()
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
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
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
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.phishingDepartment`: Exposes CRUD operations for the **PhishingDepartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhishingDepartments
    * const phishingDepartments = await prisma.phishingDepartment.findMany()
    * ```
    */
  get phishingDepartment(): Prisma.PhishingDepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phishing`: Exposes CRUD operations for the **Phishing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phishings
    * const phishings = await prisma.phishing.findMany()
    * ```
    */
  get phishing(): Prisma.PhishingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDepartment`: Exposes CRUD operations for the **UserDepartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDepartments
    * const userDepartments = await prisma.userDepartment.findMany()
    * ```
    */
  get userDepartment(): Prisma.UserDepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
    Department: 'Department',
    Email: 'Email',
    Log: 'Log',
    PhishingDepartment: 'PhishingDepartment',
    Phishing: 'Phishing',
    UserDepartment: 'UserDepartment',
    User: 'User'
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
      modelProps: "department" | "email" | "log" | "phishingDepartment" | "phishing" | "userDepartment" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Email: {
        payload: Prisma.$EmailPayload<ExtArgs>
        fields: Prisma.EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findFirst: {
            args: Prisma.EmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findMany: {
            args: Prisma.EmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          create: {
            args: Prisma.EmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          createMany: {
            args: Prisma.EmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          delete: {
            args: Prisma.EmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          update: {
            args: Prisma.EmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          deleteMany: {
            args: Prisma.EmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          upsert: {
            args: Prisma.EmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          aggregate: {
            args: Prisma.EmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail>
          }
          groupBy: {
            args: Prisma.EmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCountAggregateOutputType> | number
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
      PhishingDepartment: {
        payload: Prisma.$PhishingDepartmentPayload<ExtArgs>
        fields: Prisma.PhishingDepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhishingDepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhishingDepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>
          }
          findFirst: {
            args: Prisma.PhishingDepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhishingDepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>
          }
          findMany: {
            args: Prisma.PhishingDepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>[]
          }
          create: {
            args: Prisma.PhishingDepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>
          }
          createMany: {
            args: Prisma.PhishingDepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhishingDepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>[]
          }
          delete: {
            args: Prisma.PhishingDepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>
          }
          update: {
            args: Prisma.PhishingDepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>
          }
          deleteMany: {
            args: Prisma.PhishingDepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhishingDepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhishingDepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>[]
          }
          upsert: {
            args: Prisma.PhishingDepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingDepartmentPayload>
          }
          aggregate: {
            args: Prisma.PhishingDepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhishingDepartment>
          }
          groupBy: {
            args: Prisma.PhishingDepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhishingDepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhishingDepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<PhishingDepartmentCountAggregateOutputType> | number
          }
        }
      }
      Phishing: {
        payload: Prisma.$PhishingPayload<ExtArgs>
        fields: Prisma.PhishingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhishingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhishingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>
          }
          findFirst: {
            args: Prisma.PhishingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhishingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>
          }
          findMany: {
            args: Prisma.PhishingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>[]
          }
          create: {
            args: Prisma.PhishingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>
          }
          createMany: {
            args: Prisma.PhishingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhishingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>[]
          }
          delete: {
            args: Prisma.PhishingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>
          }
          update: {
            args: Prisma.PhishingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>
          }
          deleteMany: {
            args: Prisma.PhishingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhishingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhishingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>[]
          }
          upsert: {
            args: Prisma.PhishingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhishingPayload>
          }
          aggregate: {
            args: Prisma.PhishingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhishing>
          }
          groupBy: {
            args: Prisma.PhishingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhishingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhishingCountArgs<ExtArgs>
            result: $Utils.Optional<PhishingCountAggregateOutputType> | number
          }
        }
      }
      UserDepartment: {
        payload: Prisma.$UserDepartmentPayload<ExtArgs>
        fields: Prisma.UserDepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>
          }
          findFirst: {
            args: Prisma.UserDepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>
          }
          findMany: {
            args: Prisma.UserDepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>[]
          }
          create: {
            args: Prisma.UserDepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>
          }
          createMany: {
            args: Prisma.UserDepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>[]
          }
          delete: {
            args: Prisma.UserDepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>
          }
          update: {
            args: Prisma.UserDepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>
          }
          deleteMany: {
            args: Prisma.UserDepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>[]
          }
          upsert: {
            args: Prisma.UserDepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDepartmentPayload>
          }
          aggregate: {
            args: Prisma.UserDepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDepartment>
          }
          groupBy: {
            args: Prisma.UserDepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<UserDepartmentCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    department?: DepartmentOmit
    email?: EmailOmit
    log?: LogOmit
    phishingDepartment?: PhishingDepartmentOmit
    phishing?: PhishingOmit
    userDepartment?: UserDepartmentOmit
    user?: UserOmit
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
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    phishings: number
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phishings?: boolean | DepartmentCountOutputTypeCountPhishingsArgs
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountPhishingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhishingDepartmentWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDepartmentWhereInput
  }


  /**
   * Count Type PhishingCountOutputType
   */

  export type PhishingCountOutputType = {
    departments: number
  }

  export type PhishingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | PhishingCountOutputTypeCountDepartmentsArgs
  }

  // Custom InputTypes
  /**
   * PhishingCountOutputType without action
   */
  export type PhishingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingCountOutputType
     */
    select?: PhishingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhishingCountOutputType without action
   */
  export type PhishingCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhishingDepartmentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emails: number
    phishings: number
    user_departments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | UserCountOutputTypeCountEmailsArgs
    phishings?: boolean | UserCountOutputTypeCountPhishingsArgs
    user_departments?: boolean | UserCountOutputTypeCountUser_departmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhishingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhishingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDepartmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    created_by: number
    updated_by: number
    updated_at: number
    inactivated_at: number
    inactivated_by: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    created_by: string
    updated_by: string
    updated_at: Date
    inactivated_at: Date | null
    inactivated_by: string | null
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    phishings?: boolean | Department$phishingsArgs<ExtArgs>
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "created_by" | "updated_by" | "updated_at" | "inactivated_at" | "inactivated_by", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phishings?: boolean | Department$phishingsArgs<ExtArgs>
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      phishings: Prisma.$PhishingDepartmentPayload<ExtArgs>[]
      users: Prisma.$UserDepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      created_by: string
      updated_by: string
      updated_at: Date
      inactivated_at: Date | null
      inactivated_by: string | null
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phishings<T extends Department$phishingsArgs<ExtArgs> = {}>(args?: Subset<T, Department$phishingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly is_active: FieldRef<"Department", 'Boolean'>
    readonly created_at: FieldRef<"Department", 'DateTime'>
    readonly created_by: FieldRef<"Department", 'String'>
    readonly updated_by: FieldRef<"Department", 'String'>
    readonly updated_at: FieldRef<"Department", 'DateTime'>
    readonly inactivated_at: FieldRef<"Department", 'DateTime'>
    readonly inactivated_by: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.phishings
   */
  export type Department$phishingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    where?: PhishingDepartmentWhereInput
    orderBy?: PhishingDepartmentOrderByWithRelationInput | PhishingDepartmentOrderByWithRelationInput[]
    cursor?: PhishingDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhishingDepartmentScalarFieldEnum | PhishingDepartmentScalarFieldEnum[]
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    where?: UserDepartmentWhereInput
    orderBy?: UserDepartmentOrderByWithRelationInput | UserDepartmentOrderByWithRelationInput[]
    cursor?: UserDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDepartmentScalarFieldEnum | UserDepartmentScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Email
   */

  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailMinAggregateOutputType = {
    id: string | null
    address: string | null
    user_id: string | null
    type: $Enums.EmailType | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type EmailMaxAggregateOutputType = {
    id: string | null
    address: string | null
    user_id: string | null
    type: $Enums.EmailType | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    address: number
    user_id: number
    type: number
    is_active: number
    created_at: number
    created_by: number
    updated_by: number
    updated_at: number
    inactivated_at: number
    inactivated_by: number
    _all: number
  }


  export type EmailMinAggregateInputType = {
    id?: true
    address?: true
    user_id?: true
    type?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    address?: true
    user_id?: true
    type?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    address?: true
    user_id?: true
    type?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
    _all?: true
  }

  export type EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Email to aggregate.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithAggregationInput | EmailOrderByWithAggregationInput[]
    by: EmailScalarFieldEnum[] | EmailScalarFieldEnum
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }

  export type EmailGroupByOutputType = {
    id: string
    address: string
    user_id: string
    type: $Enums.EmailType
    is_active: boolean
    created_at: Date
    created_by: string
    updated_by: string
    updated_at: Date
    inactivated_at: Date | null
    inactivated_by: string | null
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    user_id?: boolean
    type?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    user_id?: boolean
    type?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    user_id?: boolean
    type?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectScalar = {
    id?: boolean
    address?: boolean
    user_id?: boolean
    type?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }

  export type EmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "user_id" | "type" | "is_active" | "created_at" | "created_by" | "updated_by" | "updated_at" | "inactivated_at" | "inactivated_by", ExtArgs["result"]["email"]>
  export type EmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Email"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      user_id: string
      type: $Enums.EmailType
      is_active: boolean
      created_at: Date
      created_by: string
      updated_by: string
      updated_at: Date
      inactivated_at: Date | null
      inactivated_by: string | null
    }, ExtArgs["result"]["email"]>
    composites: {}
  }

  type EmailGetPayload<S extends boolean | null | undefined | EmailDefaultArgs> = $Result.GetResult<Prisma.$EmailPayload, S>

  type EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Email'], meta: { name: 'Email' } }
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailFindUniqueArgs>(args: SelectSubset<T, EmailFindUniqueArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailFindFirstArgs>(args?: SelectSubset<T, EmailFindFirstArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailFindManyArgs>(args?: SelectSubset<T, EmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
     */
    create<T extends EmailCreateArgs>(args: SelectSubset<T, EmailCreateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCreateManyArgs>(args?: SelectSubset<T, EmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails and returns the data saved in the database.
     * @param {EmailCreateManyAndReturnArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
     */
    delete<T extends EmailDeleteArgs>(args: SelectSubset<T, EmailDeleteArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailUpdateArgs>(args: SelectSubset<T, EmailUpdateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailDeleteManyArgs>(args?: SelectSubset<T, EmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailUpdateManyArgs>(args: SelectSubset<T, EmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails and returns the data updated in the database.
     * @param {EmailUpdateManyAndReturnArgs} args - Arguments to update many Emails.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
     */
    upsert<T extends EmailUpsertArgs>(args: SelectSubset<T, EmailUpsertArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
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
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Email model
   */
  readonly fields: EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Email model
   */ 
  interface EmailFieldRefs {
    readonly id: FieldRef<"Email", 'String'>
    readonly address: FieldRef<"Email", 'String'>
    readonly user_id: FieldRef<"Email", 'String'>
    readonly type: FieldRef<"Email", 'EmailType'>
    readonly is_active: FieldRef<"Email", 'Boolean'>
    readonly created_at: FieldRef<"Email", 'DateTime'>
    readonly created_by: FieldRef<"Email", 'String'>
    readonly updated_by: FieldRef<"Email", 'String'>
    readonly updated_at: FieldRef<"Email", 'DateTime'>
    readonly inactivated_at: FieldRef<"Email", 'DateTime'>
    readonly inactivated_by: FieldRef<"Email", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Email findUnique
   */
  export type EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findFirst
   */
  export type EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findMany
   */
  export type EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email create
   */
  export type EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to create a Email.
     */
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }

  /**
   * Email createMany
   */
  export type EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Email createManyAndReturn
   */
  export type EmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email update
   */
  export type EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to update a Email.
     */
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email updateManyAndReturn
   */
  export type EmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email upsert
   */
  export type EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The filter to search for the Email to update in case it exists.
     */
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     */
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }

  /**
   * Email delete
   */
  export type EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter which Email to delete.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Email without action
   */
  export type EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
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
    entity: $Enums.Entity | null
    entity_id: string | null
    action: $Enums.Action | null
    created_at: Date | null
    created_by: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    entity: $Enums.Entity | null
    entity_id: string | null
    action: $Enums.Action | null
    created_at: Date | null
    created_by: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    entity: number
    entity_id: number
    action: number
    created_at: number
    created_by: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    entity?: true
    entity_id?: true
    action?: true
    created_at?: true
    created_by?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    entity?: true
    entity_id?: true
    action?: true
    created_at?: true
    created_by?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    entity?: true
    entity_id?: true
    action?: true
    created_at?: true
    created_by?: true
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
    entity: $Enums.Entity
    entity_id: string
    action: $Enums.Action
    created_at: Date
    created_by: string
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
    entity?: boolean
    entity_id?: boolean
    action?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entity_id?: boolean
    action?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entity_id?: boolean
    action?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    entity?: boolean
    entity_id?: boolean
    action?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entity" | "entity_id" | "action" | "created_at" | "created_by", ExtArgs["result"]["log"]>

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entity: $Enums.Entity
      entity_id: string
      action: $Enums.Action
      created_at: Date
      created_by: string
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
    readonly entity: FieldRef<"Log", 'Entity'>
    readonly entity_id: FieldRef<"Log", 'String'>
    readonly action: FieldRef<"Log", 'Action'>
    readonly created_at: FieldRef<"Log", 'DateTime'>
    readonly created_by: FieldRef<"Log", 'String'>
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
  }


  /**
   * Model PhishingDepartment
   */

  export type AggregatePhishingDepartment = {
    _count: PhishingDepartmentCountAggregateOutputType | null
    _min: PhishingDepartmentMinAggregateOutputType | null
    _max: PhishingDepartmentMaxAggregateOutputType | null
  }

  export type PhishingDepartmentMinAggregateOutputType = {
    id: string | null
    phishing_id: string | null
    department_id: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type PhishingDepartmentMaxAggregateOutputType = {
    id: string | null
    phishing_id: string | null
    department_id: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type PhishingDepartmentCountAggregateOutputType = {
    id: number
    phishing_id: number
    department_id: number
    is_active: number
    created_at: number
    created_by: number
    updated_by: number
    updated_at: number
    inactivated_at: number
    inactivated_by: number
    _all: number
  }


  export type PhishingDepartmentMinAggregateInputType = {
    id?: true
    phishing_id?: true
    department_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type PhishingDepartmentMaxAggregateInputType = {
    id?: true
    phishing_id?: true
    department_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type PhishingDepartmentCountAggregateInputType = {
    id?: true
    phishing_id?: true
    department_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
    _all?: true
  }

  export type PhishingDepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhishingDepartment to aggregate.
     */
    where?: PhishingDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhishingDepartments to fetch.
     */
    orderBy?: PhishingDepartmentOrderByWithRelationInput | PhishingDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhishingDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhishingDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhishingDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhishingDepartments
    **/
    _count?: true | PhishingDepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhishingDepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhishingDepartmentMaxAggregateInputType
  }

  export type GetPhishingDepartmentAggregateType<T extends PhishingDepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregatePhishingDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhishingDepartment[P]>
      : GetScalarType<T[P], AggregatePhishingDepartment[P]>
  }




  export type PhishingDepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhishingDepartmentWhereInput
    orderBy?: PhishingDepartmentOrderByWithAggregationInput | PhishingDepartmentOrderByWithAggregationInput[]
    by: PhishingDepartmentScalarFieldEnum[] | PhishingDepartmentScalarFieldEnum
    having?: PhishingDepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhishingDepartmentCountAggregateInputType | true
    _min?: PhishingDepartmentMinAggregateInputType
    _max?: PhishingDepartmentMaxAggregateInputType
  }

  export type PhishingDepartmentGroupByOutputType = {
    id: string
    phishing_id: string
    department_id: string
    is_active: boolean
    created_at: Date
    created_by: string
    updated_by: string
    updated_at: Date
    inactivated_at: Date | null
    inactivated_by: string | null
    _count: PhishingDepartmentCountAggregateOutputType | null
    _min: PhishingDepartmentMinAggregateOutputType | null
    _max: PhishingDepartmentMaxAggregateOutputType | null
  }

  type GetPhishingDepartmentGroupByPayload<T extends PhishingDepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhishingDepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhishingDepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhishingDepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], PhishingDepartmentGroupByOutputType[P]>
        }
      >
    >


  export type PhishingDepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phishing_id?: boolean
    department_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    phishing?: boolean | PhishingDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phishingDepartment"]>

  export type PhishingDepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phishing_id?: boolean
    department_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    phishing?: boolean | PhishingDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phishingDepartment"]>

  export type PhishingDepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phishing_id?: boolean
    department_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    phishing?: boolean | PhishingDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phishingDepartment"]>

  export type PhishingDepartmentSelectScalar = {
    id?: boolean
    phishing_id?: boolean
    department_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }

  export type PhishingDepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phishing_id" | "department_id" | "is_active" | "created_at" | "created_by" | "updated_by" | "updated_at" | "inactivated_at" | "inactivated_by", ExtArgs["result"]["phishingDepartment"]>
  export type PhishingDepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phishing?: boolean | PhishingDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type PhishingDepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phishing?: boolean | PhishingDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type PhishingDepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phishing?: boolean | PhishingDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $PhishingDepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhishingDepartment"
    objects: {
      phishing: Prisma.$PhishingPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phishing_id: string
      department_id: string
      is_active: boolean
      created_at: Date
      created_by: string
      updated_by: string
      updated_at: Date
      inactivated_at: Date | null
      inactivated_by: string | null
    }, ExtArgs["result"]["phishingDepartment"]>
    composites: {}
  }

  type PhishingDepartmentGetPayload<S extends boolean | null | undefined | PhishingDepartmentDefaultArgs> = $Result.GetResult<Prisma.$PhishingDepartmentPayload, S>

  type PhishingDepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhishingDepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhishingDepartmentCountAggregateInputType | true
    }

  export interface PhishingDepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhishingDepartment'], meta: { name: 'PhishingDepartment' } }
    /**
     * Find zero or one PhishingDepartment that matches the filter.
     * @param {PhishingDepartmentFindUniqueArgs} args - Arguments to find a PhishingDepartment
     * @example
     * // Get one PhishingDepartment
     * const phishingDepartment = await prisma.phishingDepartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhishingDepartmentFindUniqueArgs>(args: SelectSubset<T, PhishingDepartmentFindUniqueArgs<ExtArgs>>): Prisma__PhishingDepartmentClient<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhishingDepartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhishingDepartmentFindUniqueOrThrowArgs} args - Arguments to find a PhishingDepartment
     * @example
     * // Get one PhishingDepartment
     * const phishingDepartment = await prisma.phishingDepartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhishingDepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, PhishingDepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhishingDepartmentClient<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhishingDepartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingDepartmentFindFirstArgs} args - Arguments to find a PhishingDepartment
     * @example
     * // Get one PhishingDepartment
     * const phishingDepartment = await prisma.phishingDepartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhishingDepartmentFindFirstArgs>(args?: SelectSubset<T, PhishingDepartmentFindFirstArgs<ExtArgs>>): Prisma__PhishingDepartmentClient<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhishingDepartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingDepartmentFindFirstOrThrowArgs} args - Arguments to find a PhishingDepartment
     * @example
     * // Get one PhishingDepartment
     * const phishingDepartment = await prisma.phishingDepartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhishingDepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, PhishingDepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhishingDepartmentClient<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhishingDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingDepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhishingDepartments
     * const phishingDepartments = await prisma.phishingDepartment.findMany()
     * 
     * // Get first 10 PhishingDepartments
     * const phishingDepartments = await prisma.phishingDepartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phishingDepartmentWithIdOnly = await prisma.phishingDepartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhishingDepartmentFindManyArgs>(args?: SelectSubset<T, PhishingDepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhishingDepartment.
     * @param {PhishingDepartmentCreateArgs} args - Arguments to create a PhishingDepartment.
     * @example
     * // Create one PhishingDepartment
     * const PhishingDepartment = await prisma.phishingDepartment.create({
     *   data: {
     *     // ... data to create a PhishingDepartment
     *   }
     * })
     * 
     */
    create<T extends PhishingDepartmentCreateArgs>(args: SelectSubset<T, PhishingDepartmentCreateArgs<ExtArgs>>): Prisma__PhishingDepartmentClient<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhishingDepartments.
     * @param {PhishingDepartmentCreateManyArgs} args - Arguments to create many PhishingDepartments.
     * @example
     * // Create many PhishingDepartments
     * const phishingDepartment = await prisma.phishingDepartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhishingDepartmentCreateManyArgs>(args?: SelectSubset<T, PhishingDepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhishingDepartments and returns the data saved in the database.
     * @param {PhishingDepartmentCreateManyAndReturnArgs} args - Arguments to create many PhishingDepartments.
     * @example
     * // Create many PhishingDepartments
     * const phishingDepartment = await prisma.phishingDepartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhishingDepartments and only return the `id`
     * const phishingDepartmentWithIdOnly = await prisma.phishingDepartment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhishingDepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, PhishingDepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhishingDepartment.
     * @param {PhishingDepartmentDeleteArgs} args - Arguments to delete one PhishingDepartment.
     * @example
     * // Delete one PhishingDepartment
     * const PhishingDepartment = await prisma.phishingDepartment.delete({
     *   where: {
     *     // ... filter to delete one PhishingDepartment
     *   }
     * })
     * 
     */
    delete<T extends PhishingDepartmentDeleteArgs>(args: SelectSubset<T, PhishingDepartmentDeleteArgs<ExtArgs>>): Prisma__PhishingDepartmentClient<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhishingDepartment.
     * @param {PhishingDepartmentUpdateArgs} args - Arguments to update one PhishingDepartment.
     * @example
     * // Update one PhishingDepartment
     * const phishingDepartment = await prisma.phishingDepartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhishingDepartmentUpdateArgs>(args: SelectSubset<T, PhishingDepartmentUpdateArgs<ExtArgs>>): Prisma__PhishingDepartmentClient<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhishingDepartments.
     * @param {PhishingDepartmentDeleteManyArgs} args - Arguments to filter PhishingDepartments to delete.
     * @example
     * // Delete a few PhishingDepartments
     * const { count } = await prisma.phishingDepartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhishingDepartmentDeleteManyArgs>(args?: SelectSubset<T, PhishingDepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhishingDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingDepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhishingDepartments
     * const phishingDepartment = await prisma.phishingDepartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhishingDepartmentUpdateManyArgs>(args: SelectSubset<T, PhishingDepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhishingDepartments and returns the data updated in the database.
     * @param {PhishingDepartmentUpdateManyAndReturnArgs} args - Arguments to update many PhishingDepartments.
     * @example
     * // Update many PhishingDepartments
     * const phishingDepartment = await prisma.phishingDepartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhishingDepartments and only return the `id`
     * const phishingDepartmentWithIdOnly = await prisma.phishingDepartment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhishingDepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, PhishingDepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhishingDepartment.
     * @param {PhishingDepartmentUpsertArgs} args - Arguments to update or create a PhishingDepartment.
     * @example
     * // Update or create a PhishingDepartment
     * const phishingDepartment = await prisma.phishingDepartment.upsert({
     *   create: {
     *     // ... data to create a PhishingDepartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhishingDepartment we want to update
     *   }
     * })
     */
    upsert<T extends PhishingDepartmentUpsertArgs>(args: SelectSubset<T, PhishingDepartmentUpsertArgs<ExtArgs>>): Prisma__PhishingDepartmentClient<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhishingDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingDepartmentCountArgs} args - Arguments to filter PhishingDepartments to count.
     * @example
     * // Count the number of PhishingDepartments
     * const count = await prisma.phishingDepartment.count({
     *   where: {
     *     // ... the filter for the PhishingDepartments we want to count
     *   }
     * })
    **/
    count<T extends PhishingDepartmentCountArgs>(
      args?: Subset<T, PhishingDepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhishingDepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhishingDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingDepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhishingDepartmentAggregateArgs>(args: Subset<T, PhishingDepartmentAggregateArgs>): Prisma.PrismaPromise<GetPhishingDepartmentAggregateType<T>>

    /**
     * Group by PhishingDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingDepartmentGroupByArgs} args - Group by arguments.
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
      T extends PhishingDepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhishingDepartmentGroupByArgs['orderBy'] }
        : { orderBy?: PhishingDepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhishingDepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhishingDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhishingDepartment model
   */
  readonly fields: PhishingDepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhishingDepartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhishingDepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phishing<T extends PhishingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhishingDefaultArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PhishingDepartment model
   */ 
  interface PhishingDepartmentFieldRefs {
    readonly id: FieldRef<"PhishingDepartment", 'String'>
    readonly phishing_id: FieldRef<"PhishingDepartment", 'String'>
    readonly department_id: FieldRef<"PhishingDepartment", 'String'>
    readonly is_active: FieldRef<"PhishingDepartment", 'Boolean'>
    readonly created_at: FieldRef<"PhishingDepartment", 'DateTime'>
    readonly created_by: FieldRef<"PhishingDepartment", 'String'>
    readonly updated_by: FieldRef<"PhishingDepartment", 'String'>
    readonly updated_at: FieldRef<"PhishingDepartment", 'DateTime'>
    readonly inactivated_at: FieldRef<"PhishingDepartment", 'DateTime'>
    readonly inactivated_by: FieldRef<"PhishingDepartment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PhishingDepartment findUnique
   */
  export type PhishingDepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PhishingDepartment to fetch.
     */
    where: PhishingDepartmentWhereUniqueInput
  }

  /**
   * PhishingDepartment findUniqueOrThrow
   */
  export type PhishingDepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PhishingDepartment to fetch.
     */
    where: PhishingDepartmentWhereUniqueInput
  }

  /**
   * PhishingDepartment findFirst
   */
  export type PhishingDepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PhishingDepartment to fetch.
     */
    where?: PhishingDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhishingDepartments to fetch.
     */
    orderBy?: PhishingDepartmentOrderByWithRelationInput | PhishingDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhishingDepartments.
     */
    cursor?: PhishingDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhishingDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhishingDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhishingDepartments.
     */
    distinct?: PhishingDepartmentScalarFieldEnum | PhishingDepartmentScalarFieldEnum[]
  }

  /**
   * PhishingDepartment findFirstOrThrow
   */
  export type PhishingDepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PhishingDepartment to fetch.
     */
    where?: PhishingDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhishingDepartments to fetch.
     */
    orderBy?: PhishingDepartmentOrderByWithRelationInput | PhishingDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhishingDepartments.
     */
    cursor?: PhishingDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhishingDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhishingDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhishingDepartments.
     */
    distinct?: PhishingDepartmentScalarFieldEnum | PhishingDepartmentScalarFieldEnum[]
  }

  /**
   * PhishingDepartment findMany
   */
  export type PhishingDepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PhishingDepartments to fetch.
     */
    where?: PhishingDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhishingDepartments to fetch.
     */
    orderBy?: PhishingDepartmentOrderByWithRelationInput | PhishingDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhishingDepartments.
     */
    cursor?: PhishingDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhishingDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhishingDepartments.
     */
    skip?: number
    distinct?: PhishingDepartmentScalarFieldEnum | PhishingDepartmentScalarFieldEnum[]
  }

  /**
   * PhishingDepartment create
   */
  export type PhishingDepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a PhishingDepartment.
     */
    data: XOR<PhishingDepartmentCreateInput, PhishingDepartmentUncheckedCreateInput>
  }

  /**
   * PhishingDepartment createMany
   */
  export type PhishingDepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhishingDepartments.
     */
    data: PhishingDepartmentCreateManyInput | PhishingDepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhishingDepartment createManyAndReturn
   */
  export type PhishingDepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many PhishingDepartments.
     */
    data: PhishingDepartmentCreateManyInput | PhishingDepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhishingDepartment update
   */
  export type PhishingDepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a PhishingDepartment.
     */
    data: XOR<PhishingDepartmentUpdateInput, PhishingDepartmentUncheckedUpdateInput>
    /**
     * Choose, which PhishingDepartment to update.
     */
    where: PhishingDepartmentWhereUniqueInput
  }

  /**
   * PhishingDepartment updateMany
   */
  export type PhishingDepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhishingDepartments.
     */
    data: XOR<PhishingDepartmentUpdateManyMutationInput, PhishingDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which PhishingDepartments to update
     */
    where?: PhishingDepartmentWhereInput
    /**
     * Limit how many PhishingDepartments to update.
     */
    limit?: number
  }

  /**
   * PhishingDepartment updateManyAndReturn
   */
  export type PhishingDepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * The data used to update PhishingDepartments.
     */
    data: XOR<PhishingDepartmentUpdateManyMutationInput, PhishingDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which PhishingDepartments to update
     */
    where?: PhishingDepartmentWhereInput
    /**
     * Limit how many PhishingDepartments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhishingDepartment upsert
   */
  export type PhishingDepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the PhishingDepartment to update in case it exists.
     */
    where: PhishingDepartmentWhereUniqueInput
    /**
     * In case the PhishingDepartment found by the `where` argument doesn't exist, create a new PhishingDepartment with this data.
     */
    create: XOR<PhishingDepartmentCreateInput, PhishingDepartmentUncheckedCreateInput>
    /**
     * In case the PhishingDepartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhishingDepartmentUpdateInput, PhishingDepartmentUncheckedUpdateInput>
  }

  /**
   * PhishingDepartment delete
   */
  export type PhishingDepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    /**
     * Filter which PhishingDepartment to delete.
     */
    where: PhishingDepartmentWhereUniqueInput
  }

  /**
   * PhishingDepartment deleteMany
   */
  export type PhishingDepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhishingDepartments to delete
     */
    where?: PhishingDepartmentWhereInput
    /**
     * Limit how many PhishingDepartments to delete.
     */
    limit?: number
  }

  /**
   * PhishingDepartment without action
   */
  export type PhishingDepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Phishing
   */

  export type AggregatePhishing = {
    _count: PhishingCountAggregateOutputType | null
    _min: PhishingMinAggregateOutputType | null
    _max: PhishingMaxAggregateOutputType | null
  }

  export type PhishingMinAggregateOutputType = {
    id: string | null
    clicked: boolean | null
    reported: boolean | null
    channel: $Enums.PhishingChannel | null
    status: $Enums.PhishingStatus | null
    userId: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type PhishingMaxAggregateOutputType = {
    id: string | null
    clicked: boolean | null
    reported: boolean | null
    channel: $Enums.PhishingChannel | null
    status: $Enums.PhishingStatus | null
    userId: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type PhishingCountAggregateOutputType = {
    id: number
    clicked: number
    reported: number
    channel: number
    status: number
    userId: number
    is_active: number
    created_at: number
    created_by: number
    updated_by: number
    updated_at: number
    inactivated_at: number
    inactivated_by: number
    _all: number
  }


  export type PhishingMinAggregateInputType = {
    id?: true
    clicked?: true
    reported?: true
    channel?: true
    status?: true
    userId?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type PhishingMaxAggregateInputType = {
    id?: true
    clicked?: true
    reported?: true
    channel?: true
    status?: true
    userId?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type PhishingCountAggregateInputType = {
    id?: true
    clicked?: true
    reported?: true
    channel?: true
    status?: true
    userId?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
    _all?: true
  }

  export type PhishingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phishing to aggregate.
     */
    where?: PhishingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phishings to fetch.
     */
    orderBy?: PhishingOrderByWithRelationInput | PhishingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhishingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phishings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phishings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phishings
    **/
    _count?: true | PhishingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhishingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhishingMaxAggregateInputType
  }

  export type GetPhishingAggregateType<T extends PhishingAggregateArgs> = {
        [P in keyof T & keyof AggregatePhishing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhishing[P]>
      : GetScalarType<T[P], AggregatePhishing[P]>
  }




  export type PhishingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhishingWhereInput
    orderBy?: PhishingOrderByWithAggregationInput | PhishingOrderByWithAggregationInput[]
    by: PhishingScalarFieldEnum[] | PhishingScalarFieldEnum
    having?: PhishingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhishingCountAggregateInputType | true
    _min?: PhishingMinAggregateInputType
    _max?: PhishingMaxAggregateInputType
  }

  export type PhishingGroupByOutputType = {
    id: string
    clicked: boolean
    reported: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    userId: string | null
    is_active: boolean
    created_at: Date
    created_by: string
    updated_by: string
    updated_at: Date
    inactivated_at: Date | null
    inactivated_by: string | null
    _count: PhishingCountAggregateOutputType | null
    _min: PhishingMinAggregateOutputType | null
    _max: PhishingMaxAggregateOutputType | null
  }

  type GetPhishingGroupByPayload<T extends PhishingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhishingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhishingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhishingGroupByOutputType[P]>
            : GetScalarType<T[P], PhishingGroupByOutputType[P]>
        }
      >
    >


  export type PhishingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clicked?: boolean
    reported?: boolean
    channel?: boolean
    status?: boolean
    userId?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    departments?: boolean | Phishing$departmentsArgs<ExtArgs>
    user?: boolean | Phishing$userArgs<ExtArgs>
    _count?: boolean | PhishingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phishing"]>

  export type PhishingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clicked?: boolean
    reported?: boolean
    channel?: boolean
    status?: boolean
    userId?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    user?: boolean | Phishing$userArgs<ExtArgs>
  }, ExtArgs["result"]["phishing"]>

  export type PhishingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clicked?: boolean
    reported?: boolean
    channel?: boolean
    status?: boolean
    userId?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    user?: boolean | Phishing$userArgs<ExtArgs>
  }, ExtArgs["result"]["phishing"]>

  export type PhishingSelectScalar = {
    id?: boolean
    clicked?: boolean
    reported?: boolean
    channel?: boolean
    status?: boolean
    userId?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }

  export type PhishingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clicked" | "reported" | "channel" | "status" | "userId" | "is_active" | "created_at" | "created_by" | "updated_by" | "updated_at" | "inactivated_at" | "inactivated_by", ExtArgs["result"]["phishing"]>
  export type PhishingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | Phishing$departmentsArgs<ExtArgs>
    user?: boolean | Phishing$userArgs<ExtArgs>
    _count?: boolean | PhishingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhishingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Phishing$userArgs<ExtArgs>
  }
  export type PhishingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Phishing$userArgs<ExtArgs>
  }

  export type $PhishingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phishing"
    objects: {
      departments: Prisma.$PhishingDepartmentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clicked: boolean
      reported: boolean
      channel: $Enums.PhishingChannel
      status: $Enums.PhishingStatus
      userId: string | null
      is_active: boolean
      created_at: Date
      created_by: string
      updated_by: string
      updated_at: Date
      inactivated_at: Date | null
      inactivated_by: string | null
    }, ExtArgs["result"]["phishing"]>
    composites: {}
  }

  type PhishingGetPayload<S extends boolean | null | undefined | PhishingDefaultArgs> = $Result.GetResult<Prisma.$PhishingPayload, S>

  type PhishingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhishingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhishingCountAggregateInputType | true
    }

  export interface PhishingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phishing'], meta: { name: 'Phishing' } }
    /**
     * Find zero or one Phishing that matches the filter.
     * @param {PhishingFindUniqueArgs} args - Arguments to find a Phishing
     * @example
     * // Get one Phishing
     * const phishing = await prisma.phishing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhishingFindUniqueArgs>(args: SelectSubset<T, PhishingFindUniqueArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phishing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhishingFindUniqueOrThrowArgs} args - Arguments to find a Phishing
     * @example
     * // Get one Phishing
     * const phishing = await prisma.phishing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhishingFindUniqueOrThrowArgs>(args: SelectSubset<T, PhishingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phishing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingFindFirstArgs} args - Arguments to find a Phishing
     * @example
     * // Get one Phishing
     * const phishing = await prisma.phishing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhishingFindFirstArgs>(args?: SelectSubset<T, PhishingFindFirstArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phishing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingFindFirstOrThrowArgs} args - Arguments to find a Phishing
     * @example
     * // Get one Phishing
     * const phishing = await prisma.phishing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhishingFindFirstOrThrowArgs>(args?: SelectSubset<T, PhishingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phishings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phishings
     * const phishings = await prisma.phishing.findMany()
     * 
     * // Get first 10 Phishings
     * const phishings = await prisma.phishing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phishingWithIdOnly = await prisma.phishing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhishingFindManyArgs>(args?: SelectSubset<T, PhishingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phishing.
     * @param {PhishingCreateArgs} args - Arguments to create a Phishing.
     * @example
     * // Create one Phishing
     * const Phishing = await prisma.phishing.create({
     *   data: {
     *     // ... data to create a Phishing
     *   }
     * })
     * 
     */
    create<T extends PhishingCreateArgs>(args: SelectSubset<T, PhishingCreateArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phishings.
     * @param {PhishingCreateManyArgs} args - Arguments to create many Phishings.
     * @example
     * // Create many Phishings
     * const phishing = await prisma.phishing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhishingCreateManyArgs>(args?: SelectSubset<T, PhishingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phishings and returns the data saved in the database.
     * @param {PhishingCreateManyAndReturnArgs} args - Arguments to create many Phishings.
     * @example
     * // Create many Phishings
     * const phishing = await prisma.phishing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phishings and only return the `id`
     * const phishingWithIdOnly = await prisma.phishing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhishingCreateManyAndReturnArgs>(args?: SelectSubset<T, PhishingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phishing.
     * @param {PhishingDeleteArgs} args - Arguments to delete one Phishing.
     * @example
     * // Delete one Phishing
     * const Phishing = await prisma.phishing.delete({
     *   where: {
     *     // ... filter to delete one Phishing
     *   }
     * })
     * 
     */
    delete<T extends PhishingDeleteArgs>(args: SelectSubset<T, PhishingDeleteArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phishing.
     * @param {PhishingUpdateArgs} args - Arguments to update one Phishing.
     * @example
     * // Update one Phishing
     * const phishing = await prisma.phishing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhishingUpdateArgs>(args: SelectSubset<T, PhishingUpdateArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phishings.
     * @param {PhishingDeleteManyArgs} args - Arguments to filter Phishings to delete.
     * @example
     * // Delete a few Phishings
     * const { count } = await prisma.phishing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhishingDeleteManyArgs>(args?: SelectSubset<T, PhishingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phishings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phishings
     * const phishing = await prisma.phishing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhishingUpdateManyArgs>(args: SelectSubset<T, PhishingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phishings and returns the data updated in the database.
     * @param {PhishingUpdateManyAndReturnArgs} args - Arguments to update many Phishings.
     * @example
     * // Update many Phishings
     * const phishing = await prisma.phishing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phishings and only return the `id`
     * const phishingWithIdOnly = await prisma.phishing.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhishingUpdateManyAndReturnArgs>(args: SelectSubset<T, PhishingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phishing.
     * @param {PhishingUpsertArgs} args - Arguments to update or create a Phishing.
     * @example
     * // Update or create a Phishing
     * const phishing = await prisma.phishing.upsert({
     *   create: {
     *     // ... data to create a Phishing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phishing we want to update
     *   }
     * })
     */
    upsert<T extends PhishingUpsertArgs>(args: SelectSubset<T, PhishingUpsertArgs<ExtArgs>>): Prisma__PhishingClient<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phishings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingCountArgs} args - Arguments to filter Phishings to count.
     * @example
     * // Count the number of Phishings
     * const count = await prisma.phishing.count({
     *   where: {
     *     // ... the filter for the Phishings we want to count
     *   }
     * })
    **/
    count<T extends PhishingCountArgs>(
      args?: Subset<T, PhishingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhishingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phishing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhishingAggregateArgs>(args: Subset<T, PhishingAggregateArgs>): Prisma.PrismaPromise<GetPhishingAggregateType<T>>

    /**
     * Group by Phishing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhishingGroupByArgs} args - Group by arguments.
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
      T extends PhishingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhishingGroupByArgs['orderBy'] }
        : { orderBy?: PhishingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhishingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhishingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phishing model
   */
  readonly fields: PhishingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phishing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhishingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends Phishing$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Phishing$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Phishing$userArgs<ExtArgs> = {}>(args?: Subset<T, Phishing$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Phishing model
   */ 
  interface PhishingFieldRefs {
    readonly id: FieldRef<"Phishing", 'String'>
    readonly clicked: FieldRef<"Phishing", 'Boolean'>
    readonly reported: FieldRef<"Phishing", 'Boolean'>
    readonly channel: FieldRef<"Phishing", 'PhishingChannel'>
    readonly status: FieldRef<"Phishing", 'PhishingStatus'>
    readonly userId: FieldRef<"Phishing", 'String'>
    readonly is_active: FieldRef<"Phishing", 'Boolean'>
    readonly created_at: FieldRef<"Phishing", 'DateTime'>
    readonly created_by: FieldRef<"Phishing", 'String'>
    readonly updated_by: FieldRef<"Phishing", 'String'>
    readonly updated_at: FieldRef<"Phishing", 'DateTime'>
    readonly inactivated_at: FieldRef<"Phishing", 'DateTime'>
    readonly inactivated_by: FieldRef<"Phishing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Phishing findUnique
   */
  export type PhishingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * Filter, which Phishing to fetch.
     */
    where: PhishingWhereUniqueInput
  }

  /**
   * Phishing findUniqueOrThrow
   */
  export type PhishingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * Filter, which Phishing to fetch.
     */
    where: PhishingWhereUniqueInput
  }

  /**
   * Phishing findFirst
   */
  export type PhishingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * Filter, which Phishing to fetch.
     */
    where?: PhishingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phishings to fetch.
     */
    orderBy?: PhishingOrderByWithRelationInput | PhishingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phishings.
     */
    cursor?: PhishingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phishings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phishings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phishings.
     */
    distinct?: PhishingScalarFieldEnum | PhishingScalarFieldEnum[]
  }

  /**
   * Phishing findFirstOrThrow
   */
  export type PhishingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * Filter, which Phishing to fetch.
     */
    where?: PhishingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phishings to fetch.
     */
    orderBy?: PhishingOrderByWithRelationInput | PhishingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phishings.
     */
    cursor?: PhishingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phishings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phishings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phishings.
     */
    distinct?: PhishingScalarFieldEnum | PhishingScalarFieldEnum[]
  }

  /**
   * Phishing findMany
   */
  export type PhishingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * Filter, which Phishings to fetch.
     */
    where?: PhishingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phishings to fetch.
     */
    orderBy?: PhishingOrderByWithRelationInput | PhishingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phishings.
     */
    cursor?: PhishingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phishings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phishings.
     */
    skip?: number
    distinct?: PhishingScalarFieldEnum | PhishingScalarFieldEnum[]
  }

  /**
   * Phishing create
   */
  export type PhishingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * The data needed to create a Phishing.
     */
    data: XOR<PhishingCreateInput, PhishingUncheckedCreateInput>
  }

  /**
   * Phishing createMany
   */
  export type PhishingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phishings.
     */
    data: PhishingCreateManyInput | PhishingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Phishing createManyAndReturn
   */
  export type PhishingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * The data used to create many Phishings.
     */
    data: PhishingCreateManyInput | PhishingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phishing update
   */
  export type PhishingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * The data needed to update a Phishing.
     */
    data: XOR<PhishingUpdateInput, PhishingUncheckedUpdateInput>
    /**
     * Choose, which Phishing to update.
     */
    where: PhishingWhereUniqueInput
  }

  /**
   * Phishing updateMany
   */
  export type PhishingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phishings.
     */
    data: XOR<PhishingUpdateManyMutationInput, PhishingUncheckedUpdateManyInput>
    /**
     * Filter which Phishings to update
     */
    where?: PhishingWhereInput
    /**
     * Limit how many Phishings to update.
     */
    limit?: number
  }

  /**
   * Phishing updateManyAndReturn
   */
  export type PhishingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * The data used to update Phishings.
     */
    data: XOR<PhishingUpdateManyMutationInput, PhishingUncheckedUpdateManyInput>
    /**
     * Filter which Phishings to update
     */
    where?: PhishingWhereInput
    /**
     * Limit how many Phishings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phishing upsert
   */
  export type PhishingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * The filter to search for the Phishing to update in case it exists.
     */
    where: PhishingWhereUniqueInput
    /**
     * In case the Phishing found by the `where` argument doesn't exist, create a new Phishing with this data.
     */
    create: XOR<PhishingCreateInput, PhishingUncheckedCreateInput>
    /**
     * In case the Phishing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhishingUpdateInput, PhishingUncheckedUpdateInput>
  }

  /**
   * Phishing delete
   */
  export type PhishingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    /**
     * Filter which Phishing to delete.
     */
    where: PhishingWhereUniqueInput
  }

  /**
   * Phishing deleteMany
   */
  export type PhishingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phishings to delete
     */
    where?: PhishingWhereInput
    /**
     * Limit how many Phishings to delete.
     */
    limit?: number
  }

  /**
   * Phishing.departments
   */
  export type Phishing$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhishingDepartment
     */
    select?: PhishingDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhishingDepartment
     */
    omit?: PhishingDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingDepartmentInclude<ExtArgs> | null
    where?: PhishingDepartmentWhereInput
    orderBy?: PhishingDepartmentOrderByWithRelationInput | PhishingDepartmentOrderByWithRelationInput[]
    cursor?: PhishingDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhishingDepartmentScalarFieldEnum | PhishingDepartmentScalarFieldEnum[]
  }

  /**
   * Phishing.user
   */
  export type Phishing$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Phishing without action
   */
  export type PhishingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
  }


  /**
   * Model UserDepartment
   */

  export type AggregateUserDepartment = {
    _count: UserDepartmentCountAggregateOutputType | null
    _min: UserDepartmentMinAggregateOutputType | null
    _max: UserDepartmentMaxAggregateOutputType | null
  }

  export type UserDepartmentMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    department_id: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type UserDepartmentMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    department_id: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type UserDepartmentCountAggregateOutputType = {
    id: number
    user_id: number
    department_id: number
    is_active: number
    created_at: number
    created_by: number
    updated_by: number
    updated_at: number
    inactivated_at: number
    inactivated_by: number
    _all: number
  }


  export type UserDepartmentMinAggregateInputType = {
    id?: true
    user_id?: true
    department_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type UserDepartmentMaxAggregateInputType = {
    id?: true
    user_id?: true
    department_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type UserDepartmentCountAggregateInputType = {
    id?: true
    user_id?: true
    department_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
    _all?: true
  }

  export type UserDepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDepartment to aggregate.
     */
    where?: UserDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDepartments to fetch.
     */
    orderBy?: UserDepartmentOrderByWithRelationInput | UserDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDepartments
    **/
    _count?: true | UserDepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDepartmentMaxAggregateInputType
  }

  export type GetUserDepartmentAggregateType<T extends UserDepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDepartment[P]>
      : GetScalarType<T[P], AggregateUserDepartment[P]>
  }




  export type UserDepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDepartmentWhereInput
    orderBy?: UserDepartmentOrderByWithAggregationInput | UserDepartmentOrderByWithAggregationInput[]
    by: UserDepartmentScalarFieldEnum[] | UserDepartmentScalarFieldEnum
    having?: UserDepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDepartmentCountAggregateInputType | true
    _min?: UserDepartmentMinAggregateInputType
    _max?: UserDepartmentMaxAggregateInputType
  }

  export type UserDepartmentGroupByOutputType = {
    id: string
    user_id: string
    department_id: string
    is_active: boolean
    created_at: Date
    created_by: string
    updated_by: string
    updated_at: Date
    inactivated_at: Date | null
    inactivated_by: string | null
    _count: UserDepartmentCountAggregateOutputType | null
    _min: UserDepartmentMinAggregateOutputType | null
    _max: UserDepartmentMaxAggregateOutputType | null
  }

  type GetUserDepartmentGroupByPayload<T extends UserDepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], UserDepartmentGroupByOutputType[P]>
        }
      >
    >


  export type UserDepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    department_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDepartment"]>

  export type UserDepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    department_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDepartment"]>

  export type UserDepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    department_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDepartment"]>

  export type UserDepartmentSelectScalar = {
    id?: boolean
    user_id?: boolean
    department_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }

  export type UserDepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "department_id" | "is_active" | "created_at" | "created_by" | "updated_by" | "updated_at" | "inactivated_at" | "inactivated_by", ExtArgs["result"]["userDepartment"]>
  export type UserDepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type UserDepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type UserDepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $UserDepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDepartment"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      department_id: string
      is_active: boolean
      created_at: Date
      created_by: string
      updated_by: string
      updated_at: Date
      inactivated_at: Date | null
      inactivated_by: string | null
    }, ExtArgs["result"]["userDepartment"]>
    composites: {}
  }

  type UserDepartmentGetPayload<S extends boolean | null | undefined | UserDepartmentDefaultArgs> = $Result.GetResult<Prisma.$UserDepartmentPayload, S>

  type UserDepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDepartmentCountAggregateInputType | true
    }

  export interface UserDepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDepartment'], meta: { name: 'UserDepartment' } }
    /**
     * Find zero or one UserDepartment that matches the filter.
     * @param {UserDepartmentFindUniqueArgs} args - Arguments to find a UserDepartment
     * @example
     * // Get one UserDepartment
     * const userDepartment = await prisma.userDepartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDepartmentFindUniqueArgs>(args: SelectSubset<T, UserDepartmentFindUniqueArgs<ExtArgs>>): Prisma__UserDepartmentClient<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDepartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDepartmentFindUniqueOrThrowArgs} args - Arguments to find a UserDepartment
     * @example
     * // Get one UserDepartment
     * const userDepartment = await prisma.userDepartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDepartmentClient<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDepartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDepartmentFindFirstArgs} args - Arguments to find a UserDepartment
     * @example
     * // Get one UserDepartment
     * const userDepartment = await prisma.userDepartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDepartmentFindFirstArgs>(args?: SelectSubset<T, UserDepartmentFindFirstArgs<ExtArgs>>): Prisma__UserDepartmentClient<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDepartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDepartmentFindFirstOrThrowArgs} args - Arguments to find a UserDepartment
     * @example
     * // Get one UserDepartment
     * const userDepartment = await prisma.userDepartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDepartmentClient<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDepartments
     * const userDepartments = await prisma.userDepartment.findMany()
     * 
     * // Get first 10 UserDepartments
     * const userDepartments = await prisma.userDepartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDepartmentWithIdOnly = await prisma.userDepartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDepartmentFindManyArgs>(args?: SelectSubset<T, UserDepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDepartment.
     * @param {UserDepartmentCreateArgs} args - Arguments to create a UserDepartment.
     * @example
     * // Create one UserDepartment
     * const UserDepartment = await prisma.userDepartment.create({
     *   data: {
     *     // ... data to create a UserDepartment
     *   }
     * })
     * 
     */
    create<T extends UserDepartmentCreateArgs>(args: SelectSubset<T, UserDepartmentCreateArgs<ExtArgs>>): Prisma__UserDepartmentClient<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDepartments.
     * @param {UserDepartmentCreateManyArgs} args - Arguments to create many UserDepartments.
     * @example
     * // Create many UserDepartments
     * const userDepartment = await prisma.userDepartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDepartmentCreateManyArgs>(args?: SelectSubset<T, UserDepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDepartments and returns the data saved in the database.
     * @param {UserDepartmentCreateManyAndReturnArgs} args - Arguments to create many UserDepartments.
     * @example
     * // Create many UserDepartments
     * const userDepartment = await prisma.userDepartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDepartments and only return the `id`
     * const userDepartmentWithIdOnly = await prisma.userDepartment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDepartment.
     * @param {UserDepartmentDeleteArgs} args - Arguments to delete one UserDepartment.
     * @example
     * // Delete one UserDepartment
     * const UserDepartment = await prisma.userDepartment.delete({
     *   where: {
     *     // ... filter to delete one UserDepartment
     *   }
     * })
     * 
     */
    delete<T extends UserDepartmentDeleteArgs>(args: SelectSubset<T, UserDepartmentDeleteArgs<ExtArgs>>): Prisma__UserDepartmentClient<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDepartment.
     * @param {UserDepartmentUpdateArgs} args - Arguments to update one UserDepartment.
     * @example
     * // Update one UserDepartment
     * const userDepartment = await prisma.userDepartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDepartmentUpdateArgs>(args: SelectSubset<T, UserDepartmentUpdateArgs<ExtArgs>>): Prisma__UserDepartmentClient<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDepartments.
     * @param {UserDepartmentDeleteManyArgs} args - Arguments to filter UserDepartments to delete.
     * @example
     * // Delete a few UserDepartments
     * const { count } = await prisma.userDepartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDepartmentDeleteManyArgs>(args?: SelectSubset<T, UserDepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDepartments
     * const userDepartment = await prisma.userDepartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDepartmentUpdateManyArgs>(args: SelectSubset<T, UserDepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDepartments and returns the data updated in the database.
     * @param {UserDepartmentUpdateManyAndReturnArgs} args - Arguments to update many UserDepartments.
     * @example
     * // Update many UserDepartments
     * const userDepartment = await prisma.userDepartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDepartments and only return the `id`
     * const userDepartmentWithIdOnly = await prisma.userDepartment.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDepartment.
     * @param {UserDepartmentUpsertArgs} args - Arguments to update or create a UserDepartment.
     * @example
     * // Update or create a UserDepartment
     * const userDepartment = await prisma.userDepartment.upsert({
     *   create: {
     *     // ... data to create a UserDepartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDepartment we want to update
     *   }
     * })
     */
    upsert<T extends UserDepartmentUpsertArgs>(args: SelectSubset<T, UserDepartmentUpsertArgs<ExtArgs>>): Prisma__UserDepartmentClient<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDepartmentCountArgs} args - Arguments to filter UserDepartments to count.
     * @example
     * // Count the number of UserDepartments
     * const count = await prisma.userDepartment.count({
     *   where: {
     *     // ... the filter for the UserDepartments we want to count
     *   }
     * })
    **/
    count<T extends UserDepartmentCountArgs>(
      args?: Subset<T, UserDepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDepartmentAggregateArgs>(args: Subset<T, UserDepartmentAggregateArgs>): Prisma.PrismaPromise<GetUserDepartmentAggregateType<T>>

    /**
     * Group by UserDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDepartmentGroupByArgs} args - Group by arguments.
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
      T extends UserDepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDepartmentGroupByArgs['orderBy'] }
        : { orderBy?: UserDepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDepartment model
   */
  readonly fields: UserDepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDepartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserDepartment model
   */ 
  interface UserDepartmentFieldRefs {
    readonly id: FieldRef<"UserDepartment", 'String'>
    readonly user_id: FieldRef<"UserDepartment", 'String'>
    readonly department_id: FieldRef<"UserDepartment", 'String'>
    readonly is_active: FieldRef<"UserDepartment", 'Boolean'>
    readonly created_at: FieldRef<"UserDepartment", 'DateTime'>
    readonly created_by: FieldRef<"UserDepartment", 'String'>
    readonly updated_by: FieldRef<"UserDepartment", 'String'>
    readonly updated_at: FieldRef<"UserDepartment", 'DateTime'>
    readonly inactivated_at: FieldRef<"UserDepartment", 'DateTime'>
    readonly inactivated_by: FieldRef<"UserDepartment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserDepartment findUnique
   */
  export type UserDepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which UserDepartment to fetch.
     */
    where: UserDepartmentWhereUniqueInput
  }

  /**
   * UserDepartment findUniqueOrThrow
   */
  export type UserDepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which UserDepartment to fetch.
     */
    where: UserDepartmentWhereUniqueInput
  }

  /**
   * UserDepartment findFirst
   */
  export type UserDepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which UserDepartment to fetch.
     */
    where?: UserDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDepartments to fetch.
     */
    orderBy?: UserDepartmentOrderByWithRelationInput | UserDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDepartments.
     */
    cursor?: UserDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDepartments.
     */
    distinct?: UserDepartmentScalarFieldEnum | UserDepartmentScalarFieldEnum[]
  }

  /**
   * UserDepartment findFirstOrThrow
   */
  export type UserDepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which UserDepartment to fetch.
     */
    where?: UserDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDepartments to fetch.
     */
    orderBy?: UserDepartmentOrderByWithRelationInput | UserDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDepartments.
     */
    cursor?: UserDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDepartments.
     */
    distinct?: UserDepartmentScalarFieldEnum | UserDepartmentScalarFieldEnum[]
  }

  /**
   * UserDepartment findMany
   */
  export type UserDepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which UserDepartments to fetch.
     */
    where?: UserDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDepartments to fetch.
     */
    orderBy?: UserDepartmentOrderByWithRelationInput | UserDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDepartments.
     */
    cursor?: UserDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDepartments.
     */
    skip?: number
    distinct?: UserDepartmentScalarFieldEnum | UserDepartmentScalarFieldEnum[]
  }

  /**
   * UserDepartment create
   */
  export type UserDepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDepartment.
     */
    data: XOR<UserDepartmentCreateInput, UserDepartmentUncheckedCreateInput>
  }

  /**
   * UserDepartment createMany
   */
  export type UserDepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDepartments.
     */
    data: UserDepartmentCreateManyInput | UserDepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDepartment createManyAndReturn
   */
  export type UserDepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many UserDepartments.
     */
    data: UserDepartmentCreateManyInput | UserDepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDepartment update
   */
  export type UserDepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDepartment.
     */
    data: XOR<UserDepartmentUpdateInput, UserDepartmentUncheckedUpdateInput>
    /**
     * Choose, which UserDepartment to update.
     */
    where: UserDepartmentWhereUniqueInput
  }

  /**
   * UserDepartment updateMany
   */
  export type UserDepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDepartments.
     */
    data: XOR<UserDepartmentUpdateManyMutationInput, UserDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which UserDepartments to update
     */
    where?: UserDepartmentWhereInput
    /**
     * Limit how many UserDepartments to update.
     */
    limit?: number
  }

  /**
   * UserDepartment updateManyAndReturn
   */
  export type UserDepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * The data used to update UserDepartments.
     */
    data: XOR<UserDepartmentUpdateManyMutationInput, UserDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which UserDepartments to update
     */
    where?: UserDepartmentWhereInput
    /**
     * Limit how many UserDepartments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDepartment upsert
   */
  export type UserDepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDepartment to update in case it exists.
     */
    where: UserDepartmentWhereUniqueInput
    /**
     * In case the UserDepartment found by the `where` argument doesn't exist, create a new UserDepartment with this data.
     */
    create: XOR<UserDepartmentCreateInput, UserDepartmentUncheckedCreateInput>
    /**
     * In case the UserDepartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDepartmentUpdateInput, UserDepartmentUncheckedUpdateInput>
  }

  /**
   * UserDepartment delete
   */
  export type UserDepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    /**
     * Filter which UserDepartment to delete.
     */
    where: UserDepartmentWhereUniqueInput
  }

  /**
   * UserDepartment deleteMany
   */
  export type UserDepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDepartments to delete
     */
    where?: UserDepartmentWhereInput
    /**
     * Limit how many UserDepartments to delete.
     */
    limit?: number
  }

  /**
   * UserDepartment without action
   */
  export type UserDepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    tenant_id: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    tenant_id: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
    updated_by: string | null
    updated_at: Date | null
    inactivated_at: Date | null
    inactivated_by: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    roles: number
    tenant_id: number
    is_active: number
    created_at: number
    created_by: number
    updated_by: number
    updated_at: number
    inactivated_at: number
    inactivated_by: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    tenant_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    tenant_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    roles?: true
    tenant_id?: true
    is_active?: true
    created_at?: true
    created_by?: true
    updated_by?: true
    updated_at?: true
    inactivated_at?: true
    inactivated_by?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string | null
    roles: string[]
    tenant_id: string
    is_active: boolean
    created_at: Date
    created_by: string
    updated_by: string
    updated_at: Date
    inactivated_at: Date | null
    inactivated_by: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    roles?: boolean
    tenant_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
    emails?: boolean | User$emailsArgs<ExtArgs>
    phishings?: boolean | User$phishingsArgs<ExtArgs>
    user_departments?: boolean | User$user_departmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    roles?: boolean
    tenant_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    roles?: boolean
    tenant_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    roles?: boolean
    tenant_id?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    updated_at?: boolean
    inactivated_at?: boolean
    inactivated_by?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "roles" | "tenant_id" | "is_active" | "created_at" | "created_by" | "updated_by" | "updated_at" | "inactivated_at" | "inactivated_by", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | User$emailsArgs<ExtArgs>
    phishings?: boolean | User$phishingsArgs<ExtArgs>
    user_departments?: boolean | User$user_departmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emails: Prisma.$EmailPayload<ExtArgs>[]
      phishings: Prisma.$PhishingPayload<ExtArgs>[]
      user_departments: Prisma.$UserDepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string | null
      roles: string[]
      tenant_id: string
      is_active: boolean
      created_at: Date
      created_by: string
      updated_by: string
      updated_at: Date
      inactivated_at: Date | null
      inactivated_by: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emails<T extends User$emailsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phishings<T extends User$phishingsArgs<ExtArgs> = {}>(args?: Subset<T, User$phishingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhishingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_departments<T extends User$user_departmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$user_departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly roles: FieldRef<"User", 'String[]'>
    readonly tenant_id: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly created_by: FieldRef<"User", 'String'>
    readonly updated_by: FieldRef<"User", 'String'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly inactivated_at: FieldRef<"User", 'DateTime'>
    readonly inactivated_by: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emails
   */
  export type User$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * User.phishings
   */
  export type User$phishingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phishing
     */
    select?: PhishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phishing
     */
    omit?: PhishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhishingInclude<ExtArgs> | null
    where?: PhishingWhereInput
    orderBy?: PhishingOrderByWithRelationInput | PhishingOrderByWithRelationInput[]
    cursor?: PhishingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhishingScalarFieldEnum | PhishingScalarFieldEnum[]
  }

  /**
   * User.user_departments
   */
  export type User$user_departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDepartment
     */
    select?: UserDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDepartment
     */
    omit?: UserDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDepartmentInclude<ExtArgs> | null
    where?: UserDepartmentWhereInput
    orderBy?: UserDepartmentOrderByWithRelationInput | UserDepartmentOrderByWithRelationInput[]
    cursor?: UserDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDepartmentScalarFieldEnum | UserDepartmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    inactivated_at: 'inactivated_at',
    inactivated_by: 'inactivated_by'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    address: 'address',
    user_id: 'user_id',
    type: 'type',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    inactivated_at: 'inactivated_at',
    inactivated_by: 'inactivated_by'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    entity: 'entity',
    entity_id: 'entity_id',
    action: 'action',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const PhishingDepartmentScalarFieldEnum: {
    id: 'id',
    phishing_id: 'phishing_id',
    department_id: 'department_id',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    inactivated_at: 'inactivated_at',
    inactivated_by: 'inactivated_by'
  };

  export type PhishingDepartmentScalarFieldEnum = (typeof PhishingDepartmentScalarFieldEnum)[keyof typeof PhishingDepartmentScalarFieldEnum]


  export const PhishingScalarFieldEnum: {
    id: 'id',
    clicked: 'clicked',
    reported: 'reported',
    channel: 'channel',
    status: 'status',
    userId: 'userId',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    inactivated_at: 'inactivated_at',
    inactivated_by: 'inactivated_by'
  };

  export type PhishingScalarFieldEnum = (typeof PhishingScalarFieldEnum)[keyof typeof PhishingScalarFieldEnum]


  export const UserDepartmentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    department_id: 'department_id',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    inactivated_at: 'inactivated_at',
    inactivated_by: 'inactivated_by'
  };

  export type UserDepartmentScalarFieldEnum = (typeof UserDepartmentScalarFieldEnum)[keyof typeof UserDepartmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    roles: 'roles',
    tenant_id: 'tenant_id',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    inactivated_at: 'inactivated_at',
    inactivated_by: 'inactivated_by'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'EmailType'
   */
  export type EnumEmailTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailType'>
    


  /**
   * Reference to a field of type 'EmailType[]'
   */
  export type ListEnumEmailTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailType[]'>
    


  /**
   * Reference to a field of type 'Entity'
   */
  export type EnumEntityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Entity'>
    


  /**
   * Reference to a field of type 'Entity[]'
   */
  export type ListEnumEntityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Entity[]'>
    


  /**
   * Reference to a field of type 'Action'
   */
  export type EnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action'>
    


  /**
   * Reference to a field of type 'Action[]'
   */
  export type ListEnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action[]'>
    


  /**
   * Reference to a field of type 'PhishingChannel'
   */
  export type EnumPhishingChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhishingChannel'>
    


  /**
   * Reference to a field of type 'PhishingChannel[]'
   */
  export type ListEnumPhishingChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhishingChannel[]'>
    


  /**
   * Reference to a field of type 'PhishingStatus'
   */
  export type EnumPhishingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhishingStatus'>
    


  /**
   * Reference to a field of type 'PhishingStatus[]'
   */
  export type ListEnumPhishingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhishingStatus[]'>
    


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


  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    is_active?: BoolFilter<"Department"> | boolean
    created_at?: DateTimeFilter<"Department"> | Date | string
    created_by?: StringFilter<"Department"> | string
    updated_by?: StringFilter<"Department"> | string
    updated_at?: DateTimeFilter<"Department"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"Department"> | Date | string | null
    inactivated_by?: StringNullableFilter<"Department"> | string | null
    phishings?: PhishingDepartmentListRelationFilter
    users?: UserDepartmentListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    phishings?: PhishingDepartmentOrderByRelationAggregateInput
    users?: UserDepartmentOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    is_active?: BoolFilter<"Department"> | boolean
    created_at?: DateTimeFilter<"Department"> | Date | string
    created_by?: StringFilter<"Department"> | string
    updated_by?: StringFilter<"Department"> | string
    updated_at?: DateTimeFilter<"Department"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"Department"> | Date | string | null
    inactivated_by?: StringNullableFilter<"Department"> | string | null
    phishings?: PhishingDepartmentListRelationFilter
    users?: UserDepartmentListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    is_active?: BoolWithAggregatesFilter<"Department"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    created_by?: StringWithAggregatesFilter<"Department"> | string
    updated_by?: StringWithAggregatesFilter<"Department"> | string
    updated_at?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    inactivated_at?: DateTimeNullableWithAggregatesFilter<"Department"> | Date | string | null
    inactivated_by?: StringNullableWithAggregatesFilter<"Department"> | string | null
  }

  export type EmailWhereInput = {
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    id?: StringFilter<"Email"> | string
    address?: StringFilter<"Email"> | string
    user_id?: StringFilter<"Email"> | string
    type?: EnumEmailTypeFilter<"Email"> | $Enums.EmailType
    is_active?: BoolFilter<"Email"> | boolean
    created_at?: DateTimeFilter<"Email"> | Date | string
    created_by?: StringFilter<"Email"> | string
    updated_by?: StringFilter<"Email"> | string
    updated_at?: DateTimeFilter<"Email"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"Email"> | Date | string | null
    inactivated_by?: StringNullableFilter<"Email"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    user_id?: StringFilter<"Email"> | string
    type?: EnumEmailTypeFilter<"Email"> | $Enums.EmailType
    is_active?: BoolFilter<"Email"> | boolean
    created_at?: DateTimeFilter<"Email"> | Date | string
    created_by?: StringFilter<"Email"> | string
    updated_by?: StringFilter<"Email"> | string
    updated_at?: DateTimeFilter<"Email"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"Email"> | Date | string | null
    inactivated_by?: StringNullableFilter<"Email"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "address">

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    _count?: EmailCountOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    OR?: EmailScalarWhereWithAggregatesInput[]
    NOT?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Email"> | string
    address?: StringWithAggregatesFilter<"Email"> | string
    user_id?: StringWithAggregatesFilter<"Email"> | string
    type?: EnumEmailTypeWithAggregatesFilter<"Email"> | $Enums.EmailType
    is_active?: BoolWithAggregatesFilter<"Email"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    created_by?: StringWithAggregatesFilter<"Email"> | string
    updated_by?: StringWithAggregatesFilter<"Email"> | string
    updated_at?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    inactivated_at?: DateTimeNullableWithAggregatesFilter<"Email"> | Date | string | null
    inactivated_by?: StringNullableWithAggregatesFilter<"Email"> | string | null
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    entity?: EnumEntityFilter<"Log"> | $Enums.Entity
    entity_id?: StringFilter<"Log"> | string
    action?: EnumActionFilter<"Log"> | $Enums.Action
    created_at?: DateTimeFilter<"Log"> | Date | string
    created_by?: StringFilter<"Log"> | string
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    entity?: EnumEntityFilter<"Log"> | $Enums.Entity
    entity_id?: StringFilter<"Log"> | string
    action?: EnumActionFilter<"Log"> | $Enums.Action
    created_at?: DateTimeFilter<"Log"> | Date | string
    created_by?: StringFilter<"Log"> | string
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    entity?: EnumEntityWithAggregatesFilter<"Log"> | $Enums.Entity
    entity_id?: StringWithAggregatesFilter<"Log"> | string
    action?: EnumActionWithAggregatesFilter<"Log"> | $Enums.Action
    created_at?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    created_by?: StringWithAggregatesFilter<"Log"> | string
  }

  export type PhishingDepartmentWhereInput = {
    AND?: PhishingDepartmentWhereInput | PhishingDepartmentWhereInput[]
    OR?: PhishingDepartmentWhereInput[]
    NOT?: PhishingDepartmentWhereInput | PhishingDepartmentWhereInput[]
    id?: StringFilter<"PhishingDepartment"> | string
    phishing_id?: StringFilter<"PhishingDepartment"> | string
    department_id?: StringFilter<"PhishingDepartment"> | string
    is_active?: BoolFilter<"PhishingDepartment"> | boolean
    created_at?: DateTimeFilter<"PhishingDepartment"> | Date | string
    created_by?: StringFilter<"PhishingDepartment"> | string
    updated_by?: StringFilter<"PhishingDepartment"> | string
    updated_at?: DateTimeFilter<"PhishingDepartment"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"PhishingDepartment"> | Date | string | null
    inactivated_by?: StringNullableFilter<"PhishingDepartment"> | string | null
    phishing?: XOR<PhishingScalarRelationFilter, PhishingWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type PhishingDepartmentOrderByWithRelationInput = {
    id?: SortOrder
    phishing_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    phishing?: PhishingOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
  }

  export type PhishingDepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phishing_id_department_id?: PhishingDepartmentPhishing_idDepartment_idCompoundUniqueInput
    AND?: PhishingDepartmentWhereInput | PhishingDepartmentWhereInput[]
    OR?: PhishingDepartmentWhereInput[]
    NOT?: PhishingDepartmentWhereInput | PhishingDepartmentWhereInput[]
    phishing_id?: StringFilter<"PhishingDepartment"> | string
    department_id?: StringFilter<"PhishingDepartment"> | string
    is_active?: BoolFilter<"PhishingDepartment"> | boolean
    created_at?: DateTimeFilter<"PhishingDepartment"> | Date | string
    created_by?: StringFilter<"PhishingDepartment"> | string
    updated_by?: StringFilter<"PhishingDepartment"> | string
    updated_at?: DateTimeFilter<"PhishingDepartment"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"PhishingDepartment"> | Date | string | null
    inactivated_by?: StringNullableFilter<"PhishingDepartment"> | string | null
    phishing?: XOR<PhishingScalarRelationFilter, PhishingWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id" | "phishing_id_department_id">

  export type PhishingDepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    phishing_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    _count?: PhishingDepartmentCountOrderByAggregateInput
    _max?: PhishingDepartmentMaxOrderByAggregateInput
    _min?: PhishingDepartmentMinOrderByAggregateInput
  }

  export type PhishingDepartmentScalarWhereWithAggregatesInput = {
    AND?: PhishingDepartmentScalarWhereWithAggregatesInput | PhishingDepartmentScalarWhereWithAggregatesInput[]
    OR?: PhishingDepartmentScalarWhereWithAggregatesInput[]
    NOT?: PhishingDepartmentScalarWhereWithAggregatesInput | PhishingDepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhishingDepartment"> | string
    phishing_id?: StringWithAggregatesFilter<"PhishingDepartment"> | string
    department_id?: StringWithAggregatesFilter<"PhishingDepartment"> | string
    is_active?: BoolWithAggregatesFilter<"PhishingDepartment"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"PhishingDepartment"> | Date | string
    created_by?: StringWithAggregatesFilter<"PhishingDepartment"> | string
    updated_by?: StringWithAggregatesFilter<"PhishingDepartment"> | string
    updated_at?: DateTimeWithAggregatesFilter<"PhishingDepartment"> | Date | string
    inactivated_at?: DateTimeNullableWithAggregatesFilter<"PhishingDepartment"> | Date | string | null
    inactivated_by?: StringNullableWithAggregatesFilter<"PhishingDepartment"> | string | null
  }

  export type PhishingWhereInput = {
    AND?: PhishingWhereInput | PhishingWhereInput[]
    OR?: PhishingWhereInput[]
    NOT?: PhishingWhereInput | PhishingWhereInput[]
    id?: StringFilter<"Phishing"> | string
    clicked?: BoolFilter<"Phishing"> | boolean
    reported?: BoolFilter<"Phishing"> | boolean
    channel?: EnumPhishingChannelFilter<"Phishing"> | $Enums.PhishingChannel
    status?: EnumPhishingStatusFilter<"Phishing"> | $Enums.PhishingStatus
    userId?: StringNullableFilter<"Phishing"> | string | null
    is_active?: BoolFilter<"Phishing"> | boolean
    created_at?: DateTimeFilter<"Phishing"> | Date | string
    created_by?: StringFilter<"Phishing"> | string
    updated_by?: StringFilter<"Phishing"> | string
    updated_at?: DateTimeFilter<"Phishing"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"Phishing"> | Date | string | null
    inactivated_by?: StringNullableFilter<"Phishing"> | string | null
    departments?: PhishingDepartmentListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PhishingOrderByWithRelationInput = {
    id?: SortOrder
    clicked?: SortOrder
    reported?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    departments?: PhishingDepartmentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PhishingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhishingWhereInput | PhishingWhereInput[]
    OR?: PhishingWhereInput[]
    NOT?: PhishingWhereInput | PhishingWhereInput[]
    clicked?: BoolFilter<"Phishing"> | boolean
    reported?: BoolFilter<"Phishing"> | boolean
    channel?: EnumPhishingChannelFilter<"Phishing"> | $Enums.PhishingChannel
    status?: EnumPhishingStatusFilter<"Phishing"> | $Enums.PhishingStatus
    userId?: StringNullableFilter<"Phishing"> | string | null
    is_active?: BoolFilter<"Phishing"> | boolean
    created_at?: DateTimeFilter<"Phishing"> | Date | string
    created_by?: StringFilter<"Phishing"> | string
    updated_by?: StringFilter<"Phishing"> | string
    updated_at?: DateTimeFilter<"Phishing"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"Phishing"> | Date | string | null
    inactivated_by?: StringNullableFilter<"Phishing"> | string | null
    departments?: PhishingDepartmentListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PhishingOrderByWithAggregationInput = {
    id?: SortOrder
    clicked?: SortOrder
    reported?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    _count?: PhishingCountOrderByAggregateInput
    _max?: PhishingMaxOrderByAggregateInput
    _min?: PhishingMinOrderByAggregateInput
  }

  export type PhishingScalarWhereWithAggregatesInput = {
    AND?: PhishingScalarWhereWithAggregatesInput | PhishingScalarWhereWithAggregatesInput[]
    OR?: PhishingScalarWhereWithAggregatesInput[]
    NOT?: PhishingScalarWhereWithAggregatesInput | PhishingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Phishing"> | string
    clicked?: BoolWithAggregatesFilter<"Phishing"> | boolean
    reported?: BoolWithAggregatesFilter<"Phishing"> | boolean
    channel?: EnumPhishingChannelWithAggregatesFilter<"Phishing"> | $Enums.PhishingChannel
    status?: EnumPhishingStatusWithAggregatesFilter<"Phishing"> | $Enums.PhishingStatus
    userId?: StringNullableWithAggregatesFilter<"Phishing"> | string | null
    is_active?: BoolWithAggregatesFilter<"Phishing"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Phishing"> | Date | string
    created_by?: StringWithAggregatesFilter<"Phishing"> | string
    updated_by?: StringWithAggregatesFilter<"Phishing"> | string
    updated_at?: DateTimeWithAggregatesFilter<"Phishing"> | Date | string
    inactivated_at?: DateTimeNullableWithAggregatesFilter<"Phishing"> | Date | string | null
    inactivated_by?: StringNullableWithAggregatesFilter<"Phishing"> | string | null
  }

  export type UserDepartmentWhereInput = {
    AND?: UserDepartmentWhereInput | UserDepartmentWhereInput[]
    OR?: UserDepartmentWhereInput[]
    NOT?: UserDepartmentWhereInput | UserDepartmentWhereInput[]
    id?: StringFilter<"UserDepartment"> | string
    user_id?: StringFilter<"UserDepartment"> | string
    department_id?: StringFilter<"UserDepartment"> | string
    is_active?: BoolFilter<"UserDepartment"> | boolean
    created_at?: DateTimeFilter<"UserDepartment"> | Date | string
    created_by?: StringFilter<"UserDepartment"> | string
    updated_by?: StringFilter<"UserDepartment"> | string
    updated_at?: DateTimeFilter<"UserDepartment"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"UserDepartment"> | Date | string | null
    inactivated_by?: StringNullableFilter<"UserDepartment"> | string | null
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type UserDepartmentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    usuario?: UserOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
  }

  export type UserDepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_department_id?: UserDepartmentUser_idDepartment_idCompoundUniqueInput
    AND?: UserDepartmentWhereInput | UserDepartmentWhereInput[]
    OR?: UserDepartmentWhereInput[]
    NOT?: UserDepartmentWhereInput | UserDepartmentWhereInput[]
    user_id?: StringFilter<"UserDepartment"> | string
    department_id?: StringFilter<"UserDepartment"> | string
    is_active?: BoolFilter<"UserDepartment"> | boolean
    created_at?: DateTimeFilter<"UserDepartment"> | Date | string
    created_by?: StringFilter<"UserDepartment"> | string
    updated_by?: StringFilter<"UserDepartment"> | string
    updated_at?: DateTimeFilter<"UserDepartment"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"UserDepartment"> | Date | string | null
    inactivated_by?: StringNullableFilter<"UserDepartment"> | string | null
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id" | "user_id_department_id">

  export type UserDepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    _count?: UserDepartmentCountOrderByAggregateInput
    _max?: UserDepartmentMaxOrderByAggregateInput
    _min?: UserDepartmentMinOrderByAggregateInput
  }

  export type UserDepartmentScalarWhereWithAggregatesInput = {
    AND?: UserDepartmentScalarWhereWithAggregatesInput | UserDepartmentScalarWhereWithAggregatesInput[]
    OR?: UserDepartmentScalarWhereWithAggregatesInput[]
    NOT?: UserDepartmentScalarWhereWithAggregatesInput | UserDepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDepartment"> | string
    user_id?: StringWithAggregatesFilter<"UserDepartment"> | string
    department_id?: StringWithAggregatesFilter<"UserDepartment"> | string
    is_active?: BoolWithAggregatesFilter<"UserDepartment"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"UserDepartment"> | Date | string
    created_by?: StringWithAggregatesFilter<"UserDepartment"> | string
    updated_by?: StringWithAggregatesFilter<"UserDepartment"> | string
    updated_at?: DateTimeWithAggregatesFilter<"UserDepartment"> | Date | string
    inactivated_at?: DateTimeNullableWithAggregatesFilter<"UserDepartment"> | Date | string | null
    inactivated_by?: StringNullableWithAggregatesFilter<"UserDepartment"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    roles?: StringNullableListFilter<"User">
    tenant_id?: StringFilter<"User"> | string
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by?: StringFilter<"User"> | string
    updated_by?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    inactivated_by?: StringNullableFilter<"User"> | string | null
    emails?: EmailListRelationFilter
    phishings?: PhishingListRelationFilter
    user_departments?: UserDepartmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    roles?: SortOrder
    tenant_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    emails?: EmailOrderByRelationAggregateInput
    phishings?: PhishingOrderByRelationAggregateInput
    user_departments?: UserDepartmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    roles?: StringNullableListFilter<"User">
    tenant_id?: StringFilter<"User"> | string
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by?: StringFilter<"User"> | string
    updated_by?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    inactivated_by?: StringNullableFilter<"User"> | string | null
    emails?: EmailListRelationFilter
    phishings?: PhishingListRelationFilter
    user_departments?: UserDepartmentListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    roles?: SortOrder
    tenant_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrderInput | SortOrder
    inactivated_by?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    roles?: StringNullableListFilter<"User">
    tenant_id?: StringWithAggregatesFilter<"User"> | string
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_by?: StringWithAggregatesFilter<"User"> | string
    updated_by?: StringWithAggregatesFilter<"User"> | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    inactivated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    inactivated_by?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    phishings?: PhishingDepartmentCreateNestedManyWithoutDepartmentInput
    users?: UserDepartmentCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    phishings?: PhishingDepartmentUncheckedCreateNestedManyWithoutDepartmentInput
    users?: UserDepartmentUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    phishings?: PhishingDepartmentUpdateManyWithoutDepartmentNestedInput
    users?: UserDepartmentUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    phishings?: PhishingDepartmentUncheckedUpdateManyWithoutDepartmentNestedInput
    users?: UserDepartmentUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailCreateInput = {
    id?: string
    address: string
    type: $Enums.EmailType
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    user: UserCreateNestedOneWithoutEmailsInput
  }

  export type EmailUncheckedCreateInput = {
    id?: string
    address: string
    user_id: string
    type: $Enums.EmailType
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type EmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailCreateManyInput = {
    id?: string
    address: string
    user_id: string
    type: $Enums.EmailType
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type EmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateInput = {
    id?: string
    entity: $Enums.Entity
    entity_id: string
    action: $Enums.Action
    created_at?: Date | string
    created_by: string
  }

  export type LogUncheckedCreateInput = {
    id?: string
    entity: $Enums.Entity
    entity_id: string
    action: $Enums.Action
    created_at?: Date | string
    created_by: string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: EnumEntityFieldUpdateOperationsInput | $Enums.Entity
    entity_id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: EnumEntityFieldUpdateOperationsInput | $Enums.Entity
    entity_id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateManyInput = {
    id?: string
    entity: $Enums.Entity
    entity_id: string
    action: $Enums.Action
    created_at?: Date | string
    created_by: string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: EnumEntityFieldUpdateOperationsInput | $Enums.Entity
    entity_id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: EnumEntityFieldUpdateOperationsInput | $Enums.Entity
    entity_id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PhishingDepartmentCreateInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    phishing: PhishingCreateNestedOneWithoutDepartmentsInput
    department: DepartmentCreateNestedOneWithoutPhishingsInput
  }

  export type PhishingDepartmentUncheckedCreateInput = {
    id?: string
    phishing_id: string
    department_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingDepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    phishing?: PhishingUpdateOneRequiredWithoutDepartmentsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutPhishingsNestedInput
  }

  export type PhishingDepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phishing_id?: StringFieldUpdateOperationsInput | string
    department_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhishingDepartmentCreateManyInput = {
    id?: string
    phishing_id: string
    department_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingDepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhishingDepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phishing_id?: StringFieldUpdateOperationsInput | string
    department_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhishingCreateInput = {
    id?: string
    clicked?: boolean
    reported?: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    departments?: PhishingDepartmentCreateNestedManyWithoutPhishingInput
    user?: UserCreateNestedOneWithoutPhishingsInput
  }

  export type PhishingUncheckedCreateInput = {
    id?: string
    clicked?: boolean
    reported?: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    userId?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    departments?: PhishingDepartmentUncheckedCreateNestedManyWithoutPhishingInput
  }

  export type PhishingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: PhishingDepartmentUpdateManyWithoutPhishingNestedInput
    user?: UserUpdateOneWithoutPhishingsNestedInput
  }

  export type PhishingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: PhishingDepartmentUncheckedUpdateManyWithoutPhishingNestedInput
  }

  export type PhishingCreateManyInput = {
    id?: string
    clicked?: boolean
    reported?: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    userId?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhishingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDepartmentCreateInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    usuario: UserCreateNestedOneWithoutUser_departmentsInput
    department: DepartmentCreateNestedOneWithoutUsersInput
  }

  export type UserDepartmentUncheckedCreateInput = {
    id?: string
    user_id: string
    department_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type UserDepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UserUpdateOneRequiredWithoutUser_departmentsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserDepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    department_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDepartmentCreateManyInput = {
    id?: string
    user_id: string
    department_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type UserDepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    department_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    emails?: EmailCreateNestedManyWithoutUserInput
    phishings?: PhishingCreateNestedManyWithoutUserInput
    user_departments?: UserDepartmentCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    phishings?: PhishingUncheckedCreateNestedManyWithoutUserInput
    user_departments?: UserDepartmentUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: EmailUpdateManyWithoutUserNestedInput
    phishings?: PhishingUpdateManyWithoutUserNestedInput
    user_departments?: UserDepartmentUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    phishings?: PhishingUncheckedUpdateManyWithoutUserNestedInput
    user_departments?: UserDepartmentUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type PhishingDepartmentListRelationFilter = {
    every?: PhishingDepartmentWhereInput
    some?: PhishingDepartmentWhereInput
    none?: PhishingDepartmentWhereInput
  }

  export type UserDepartmentListRelationFilter = {
    every?: UserDepartmentWhereInput
    some?: UserDepartmentWhereInput
    none?: UserDepartmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PhishingDepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
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

  export type EnumEmailTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeFilter<$PrismaModel> | $Enums.EmailType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type EnumEmailTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailTypeFilter<$PrismaModel>
  }

  export type EnumEntityFilter<$PrismaModel = never> = {
    equals?: $Enums.Entity | EnumEntityFieldRefInput<$PrismaModel>
    in?: $Enums.Entity[] | ListEnumEntityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Entity[] | ListEnumEntityFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityFilter<$PrismaModel> | $Enums.Entity
  }

  export type EnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type EnumEntityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Entity | EnumEntityFieldRefInput<$PrismaModel>
    in?: $Enums.Entity[] | ListEnumEntityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Entity[] | ListEnumEntityFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityWithAggregatesFilter<$PrismaModel> | $Enums.Entity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityFilter<$PrismaModel>
    _max?: NestedEnumEntityFilter<$PrismaModel>
  }

  export type EnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type PhishingScalarRelationFilter = {
    is?: PhishingWhereInput
    isNot?: PhishingWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type PhishingDepartmentPhishing_idDepartment_idCompoundUniqueInput = {
    phishing_id: string
    department_id: string
  }

  export type PhishingDepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    phishing_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type PhishingDepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    phishing_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type PhishingDepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    phishing_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type EnumPhishingChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.PhishingChannel | EnumPhishingChannelFieldRefInput<$PrismaModel>
    in?: $Enums.PhishingChannel[] | ListEnumPhishingChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhishingChannel[] | ListEnumPhishingChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumPhishingChannelFilter<$PrismaModel> | $Enums.PhishingChannel
  }

  export type EnumPhishingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PhishingStatus | EnumPhishingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhishingStatus[] | ListEnumPhishingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhishingStatus[] | ListEnumPhishingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhishingStatusFilter<$PrismaModel> | $Enums.PhishingStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PhishingCountOrderByAggregateInput = {
    id?: SortOrder
    clicked?: SortOrder
    reported?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type PhishingMaxOrderByAggregateInput = {
    id?: SortOrder
    clicked?: SortOrder
    reported?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type PhishingMinOrderByAggregateInput = {
    id?: SortOrder
    clicked?: SortOrder
    reported?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type EnumPhishingChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhishingChannel | EnumPhishingChannelFieldRefInput<$PrismaModel>
    in?: $Enums.PhishingChannel[] | ListEnumPhishingChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhishingChannel[] | ListEnumPhishingChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumPhishingChannelWithAggregatesFilter<$PrismaModel> | $Enums.PhishingChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhishingChannelFilter<$PrismaModel>
    _max?: NestedEnumPhishingChannelFilter<$PrismaModel>
  }

  export type EnumPhishingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhishingStatus | EnumPhishingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhishingStatus[] | ListEnumPhishingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhishingStatus[] | ListEnumPhishingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhishingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PhishingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhishingStatusFilter<$PrismaModel>
    _max?: NestedEnumPhishingStatusFilter<$PrismaModel>
  }

  export type UserDepartmentUser_idDepartment_idCompoundUniqueInput = {
    user_id: string
    department_id: string
  }

  export type UserDepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type UserDepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type UserDepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    department_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EmailListRelationFilter = {
    every?: EmailWhereInput
    some?: EmailWhereInput
    none?: EmailWhereInput
  }

  export type PhishingListRelationFilter = {
    every?: PhishingWhereInput
    some?: PhishingWhereInput
    none?: PhishingWhereInput
  }

  export type EmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhishingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    tenant_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tenant_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tenant_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
    inactivated_at?: SortOrder
    inactivated_by?: SortOrder
  }

  export type PhishingDepartmentCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<PhishingDepartmentCreateWithoutDepartmentInput, PhishingDepartmentUncheckedCreateWithoutDepartmentInput> | PhishingDepartmentCreateWithoutDepartmentInput[] | PhishingDepartmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PhishingDepartmentCreateOrConnectWithoutDepartmentInput | PhishingDepartmentCreateOrConnectWithoutDepartmentInput[]
    createMany?: PhishingDepartmentCreateManyDepartmentInputEnvelope
    connect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
  }

  export type UserDepartmentCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserDepartmentCreateWithoutDepartmentInput, UserDepartmentUncheckedCreateWithoutDepartmentInput> | UserDepartmentCreateWithoutDepartmentInput[] | UserDepartmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserDepartmentCreateOrConnectWithoutDepartmentInput | UserDepartmentCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserDepartmentCreateManyDepartmentInputEnvelope
    connect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
  }

  export type PhishingDepartmentUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<PhishingDepartmentCreateWithoutDepartmentInput, PhishingDepartmentUncheckedCreateWithoutDepartmentInput> | PhishingDepartmentCreateWithoutDepartmentInput[] | PhishingDepartmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PhishingDepartmentCreateOrConnectWithoutDepartmentInput | PhishingDepartmentCreateOrConnectWithoutDepartmentInput[]
    createMany?: PhishingDepartmentCreateManyDepartmentInputEnvelope
    connect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
  }

  export type UserDepartmentUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserDepartmentCreateWithoutDepartmentInput, UserDepartmentUncheckedCreateWithoutDepartmentInput> | UserDepartmentCreateWithoutDepartmentInput[] | UserDepartmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserDepartmentCreateOrConnectWithoutDepartmentInput | UserDepartmentCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserDepartmentCreateManyDepartmentInputEnvelope
    connect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PhishingDepartmentUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<PhishingDepartmentCreateWithoutDepartmentInput, PhishingDepartmentUncheckedCreateWithoutDepartmentInput> | PhishingDepartmentCreateWithoutDepartmentInput[] | PhishingDepartmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PhishingDepartmentCreateOrConnectWithoutDepartmentInput | PhishingDepartmentCreateOrConnectWithoutDepartmentInput[]
    upsert?: PhishingDepartmentUpsertWithWhereUniqueWithoutDepartmentInput | PhishingDepartmentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: PhishingDepartmentCreateManyDepartmentInputEnvelope
    set?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    disconnect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    delete?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    connect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    update?: PhishingDepartmentUpdateWithWhereUniqueWithoutDepartmentInput | PhishingDepartmentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: PhishingDepartmentUpdateManyWithWhereWithoutDepartmentInput | PhishingDepartmentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: PhishingDepartmentScalarWhereInput | PhishingDepartmentScalarWhereInput[]
  }

  export type UserDepartmentUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserDepartmentCreateWithoutDepartmentInput, UserDepartmentUncheckedCreateWithoutDepartmentInput> | UserDepartmentCreateWithoutDepartmentInput[] | UserDepartmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserDepartmentCreateOrConnectWithoutDepartmentInput | UserDepartmentCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserDepartmentUpsertWithWhereUniqueWithoutDepartmentInput | UserDepartmentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserDepartmentCreateManyDepartmentInputEnvelope
    set?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    disconnect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    delete?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    connect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    update?: UserDepartmentUpdateWithWhereUniqueWithoutDepartmentInput | UserDepartmentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserDepartmentUpdateManyWithWhereWithoutDepartmentInput | UserDepartmentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserDepartmentScalarWhereInput | UserDepartmentScalarWhereInput[]
  }

  export type PhishingDepartmentUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<PhishingDepartmentCreateWithoutDepartmentInput, PhishingDepartmentUncheckedCreateWithoutDepartmentInput> | PhishingDepartmentCreateWithoutDepartmentInput[] | PhishingDepartmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PhishingDepartmentCreateOrConnectWithoutDepartmentInput | PhishingDepartmentCreateOrConnectWithoutDepartmentInput[]
    upsert?: PhishingDepartmentUpsertWithWhereUniqueWithoutDepartmentInput | PhishingDepartmentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: PhishingDepartmentCreateManyDepartmentInputEnvelope
    set?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    disconnect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    delete?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    connect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    update?: PhishingDepartmentUpdateWithWhereUniqueWithoutDepartmentInput | PhishingDepartmentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: PhishingDepartmentUpdateManyWithWhereWithoutDepartmentInput | PhishingDepartmentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: PhishingDepartmentScalarWhereInput | PhishingDepartmentScalarWhereInput[]
  }

  export type UserDepartmentUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserDepartmentCreateWithoutDepartmentInput, UserDepartmentUncheckedCreateWithoutDepartmentInput> | UserDepartmentCreateWithoutDepartmentInput[] | UserDepartmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserDepartmentCreateOrConnectWithoutDepartmentInput | UserDepartmentCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserDepartmentUpsertWithWhereUniqueWithoutDepartmentInput | UserDepartmentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserDepartmentCreateManyDepartmentInputEnvelope
    set?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    disconnect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    delete?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    connect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    update?: UserDepartmentUpdateWithWhereUniqueWithoutDepartmentInput | UserDepartmentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserDepartmentUpdateManyWithWhereWithoutDepartmentInput | UserDepartmentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserDepartmentScalarWhereInput | UserDepartmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailsInput = {
    create?: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEmailTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmailType
  }

  export type UserUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailsInput
    upsert?: UserUpsertWithoutEmailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailsInput, UserUpdateWithoutEmailsInput>, UserUncheckedUpdateWithoutEmailsInput>
  }

  export type EnumEntityFieldUpdateOperationsInput = {
    set?: $Enums.Entity
  }

  export type EnumActionFieldUpdateOperationsInput = {
    set?: $Enums.Action
  }

  export type PhishingCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<PhishingCreateWithoutDepartmentsInput, PhishingUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: PhishingCreateOrConnectWithoutDepartmentsInput
    connect?: PhishingWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutPhishingsInput = {
    create?: XOR<DepartmentCreateWithoutPhishingsInput, DepartmentUncheckedCreateWithoutPhishingsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutPhishingsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type PhishingUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<PhishingCreateWithoutDepartmentsInput, PhishingUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: PhishingCreateOrConnectWithoutDepartmentsInput
    upsert?: PhishingUpsertWithoutDepartmentsInput
    connect?: PhishingWhereUniqueInput
    update?: XOR<XOR<PhishingUpdateToOneWithWhereWithoutDepartmentsInput, PhishingUpdateWithoutDepartmentsInput>, PhishingUncheckedUpdateWithoutDepartmentsInput>
  }

  export type DepartmentUpdateOneRequiredWithoutPhishingsNestedInput = {
    create?: XOR<DepartmentCreateWithoutPhishingsInput, DepartmentUncheckedCreateWithoutPhishingsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutPhishingsInput
    upsert?: DepartmentUpsertWithoutPhishingsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutPhishingsInput, DepartmentUpdateWithoutPhishingsInput>, DepartmentUncheckedUpdateWithoutPhishingsInput>
  }

  export type PhishingDepartmentCreateNestedManyWithoutPhishingInput = {
    create?: XOR<PhishingDepartmentCreateWithoutPhishingInput, PhishingDepartmentUncheckedCreateWithoutPhishingInput> | PhishingDepartmentCreateWithoutPhishingInput[] | PhishingDepartmentUncheckedCreateWithoutPhishingInput[]
    connectOrCreate?: PhishingDepartmentCreateOrConnectWithoutPhishingInput | PhishingDepartmentCreateOrConnectWithoutPhishingInput[]
    createMany?: PhishingDepartmentCreateManyPhishingInputEnvelope
    connect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPhishingsInput = {
    create?: XOR<UserCreateWithoutPhishingsInput, UserUncheckedCreateWithoutPhishingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhishingsInput
    connect?: UserWhereUniqueInput
  }

  export type PhishingDepartmentUncheckedCreateNestedManyWithoutPhishingInput = {
    create?: XOR<PhishingDepartmentCreateWithoutPhishingInput, PhishingDepartmentUncheckedCreateWithoutPhishingInput> | PhishingDepartmentCreateWithoutPhishingInput[] | PhishingDepartmentUncheckedCreateWithoutPhishingInput[]
    connectOrCreate?: PhishingDepartmentCreateOrConnectWithoutPhishingInput | PhishingDepartmentCreateOrConnectWithoutPhishingInput[]
    createMany?: PhishingDepartmentCreateManyPhishingInputEnvelope
    connect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
  }

  export type EnumPhishingChannelFieldUpdateOperationsInput = {
    set?: $Enums.PhishingChannel
  }

  export type EnumPhishingStatusFieldUpdateOperationsInput = {
    set?: $Enums.PhishingStatus
  }

  export type PhishingDepartmentUpdateManyWithoutPhishingNestedInput = {
    create?: XOR<PhishingDepartmentCreateWithoutPhishingInput, PhishingDepartmentUncheckedCreateWithoutPhishingInput> | PhishingDepartmentCreateWithoutPhishingInput[] | PhishingDepartmentUncheckedCreateWithoutPhishingInput[]
    connectOrCreate?: PhishingDepartmentCreateOrConnectWithoutPhishingInput | PhishingDepartmentCreateOrConnectWithoutPhishingInput[]
    upsert?: PhishingDepartmentUpsertWithWhereUniqueWithoutPhishingInput | PhishingDepartmentUpsertWithWhereUniqueWithoutPhishingInput[]
    createMany?: PhishingDepartmentCreateManyPhishingInputEnvelope
    set?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    disconnect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    delete?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    connect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    update?: PhishingDepartmentUpdateWithWhereUniqueWithoutPhishingInput | PhishingDepartmentUpdateWithWhereUniqueWithoutPhishingInput[]
    updateMany?: PhishingDepartmentUpdateManyWithWhereWithoutPhishingInput | PhishingDepartmentUpdateManyWithWhereWithoutPhishingInput[]
    deleteMany?: PhishingDepartmentScalarWhereInput | PhishingDepartmentScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPhishingsNestedInput = {
    create?: XOR<UserCreateWithoutPhishingsInput, UserUncheckedCreateWithoutPhishingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhishingsInput
    upsert?: UserUpsertWithoutPhishingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhishingsInput, UserUpdateWithoutPhishingsInput>, UserUncheckedUpdateWithoutPhishingsInput>
  }

  export type PhishingDepartmentUncheckedUpdateManyWithoutPhishingNestedInput = {
    create?: XOR<PhishingDepartmentCreateWithoutPhishingInput, PhishingDepartmentUncheckedCreateWithoutPhishingInput> | PhishingDepartmentCreateWithoutPhishingInput[] | PhishingDepartmentUncheckedCreateWithoutPhishingInput[]
    connectOrCreate?: PhishingDepartmentCreateOrConnectWithoutPhishingInput | PhishingDepartmentCreateOrConnectWithoutPhishingInput[]
    upsert?: PhishingDepartmentUpsertWithWhereUniqueWithoutPhishingInput | PhishingDepartmentUpsertWithWhereUniqueWithoutPhishingInput[]
    createMany?: PhishingDepartmentCreateManyPhishingInputEnvelope
    set?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    disconnect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    delete?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    connect?: PhishingDepartmentWhereUniqueInput | PhishingDepartmentWhereUniqueInput[]
    update?: PhishingDepartmentUpdateWithWhereUniqueWithoutPhishingInput | PhishingDepartmentUpdateWithWhereUniqueWithoutPhishingInput[]
    updateMany?: PhishingDepartmentUpdateManyWithWhereWithoutPhishingInput | PhishingDepartmentUpdateManyWithWhereWithoutPhishingInput[]
    deleteMany?: PhishingDepartmentScalarWhereInput | PhishingDepartmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUser_departmentsInput = {
    create?: XOR<UserCreateWithoutUser_departmentsInput, UserUncheckedCreateWithoutUser_departmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_departmentsInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_departmentsNestedInput = {
    create?: XOR<UserCreateWithoutUser_departmentsInput, UserUncheckedCreateWithoutUser_departmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_departmentsInput
    upsert?: UserUpsertWithoutUser_departmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_departmentsInput, UserUpdateWithoutUser_departmentsInput>, UserUncheckedUpdateWithoutUser_departmentsInput>
  }

  export type DepartmentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreaterolesInput = {
    set: string[]
  }

  export type EmailCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type PhishingCreateNestedManyWithoutUserInput = {
    create?: XOR<PhishingCreateWithoutUserInput, PhishingUncheckedCreateWithoutUserInput> | PhishingCreateWithoutUserInput[] | PhishingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhishingCreateOrConnectWithoutUserInput | PhishingCreateOrConnectWithoutUserInput[]
    createMany?: PhishingCreateManyUserInputEnvelope
    connect?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
  }

  export type UserDepartmentCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UserDepartmentCreateWithoutUsuarioInput, UserDepartmentUncheckedCreateWithoutUsuarioInput> | UserDepartmentCreateWithoutUsuarioInput[] | UserDepartmentUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UserDepartmentCreateOrConnectWithoutUsuarioInput | UserDepartmentCreateOrConnectWithoutUsuarioInput[]
    createMany?: UserDepartmentCreateManyUsuarioInputEnvelope
    connect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type PhishingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PhishingCreateWithoutUserInput, PhishingUncheckedCreateWithoutUserInput> | PhishingCreateWithoutUserInput[] | PhishingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhishingCreateOrConnectWithoutUserInput | PhishingCreateOrConnectWithoutUserInput[]
    createMany?: PhishingCreateManyUserInputEnvelope
    connect?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
  }

  export type UserDepartmentUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UserDepartmentCreateWithoutUsuarioInput, UserDepartmentUncheckedCreateWithoutUsuarioInput> | UserDepartmentCreateWithoutUsuarioInput[] | UserDepartmentUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UserDepartmentCreateOrConnectWithoutUsuarioInput | UserDepartmentCreateOrConnectWithoutUsuarioInput[]
    createMany?: UserDepartmentCreateManyUsuarioInputEnvelope
    connect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
  }

  export type UserUpdaterolesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutUserInput | EmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutUserInput | EmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutUserInput | EmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type PhishingUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhishingCreateWithoutUserInput, PhishingUncheckedCreateWithoutUserInput> | PhishingCreateWithoutUserInput[] | PhishingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhishingCreateOrConnectWithoutUserInput | PhishingCreateOrConnectWithoutUserInput[]
    upsert?: PhishingUpsertWithWhereUniqueWithoutUserInput | PhishingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhishingCreateManyUserInputEnvelope
    set?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
    disconnect?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
    delete?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
    connect?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
    update?: PhishingUpdateWithWhereUniqueWithoutUserInput | PhishingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhishingUpdateManyWithWhereWithoutUserInput | PhishingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhishingScalarWhereInput | PhishingScalarWhereInput[]
  }

  export type UserDepartmentUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UserDepartmentCreateWithoutUsuarioInput, UserDepartmentUncheckedCreateWithoutUsuarioInput> | UserDepartmentCreateWithoutUsuarioInput[] | UserDepartmentUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UserDepartmentCreateOrConnectWithoutUsuarioInput | UserDepartmentCreateOrConnectWithoutUsuarioInput[]
    upsert?: UserDepartmentUpsertWithWhereUniqueWithoutUsuarioInput | UserDepartmentUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UserDepartmentCreateManyUsuarioInputEnvelope
    set?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    disconnect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    delete?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    connect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    update?: UserDepartmentUpdateWithWhereUniqueWithoutUsuarioInput | UserDepartmentUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UserDepartmentUpdateManyWithWhereWithoutUsuarioInput | UserDepartmentUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UserDepartmentScalarWhereInput | UserDepartmentScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutUserInput | EmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutUserInput | EmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutUserInput | EmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type PhishingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhishingCreateWithoutUserInput, PhishingUncheckedCreateWithoutUserInput> | PhishingCreateWithoutUserInput[] | PhishingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhishingCreateOrConnectWithoutUserInput | PhishingCreateOrConnectWithoutUserInput[]
    upsert?: PhishingUpsertWithWhereUniqueWithoutUserInput | PhishingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhishingCreateManyUserInputEnvelope
    set?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
    disconnect?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
    delete?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
    connect?: PhishingWhereUniqueInput | PhishingWhereUniqueInput[]
    update?: PhishingUpdateWithWhereUniqueWithoutUserInput | PhishingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhishingUpdateManyWithWhereWithoutUserInput | PhishingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhishingScalarWhereInput | PhishingScalarWhereInput[]
  }

  export type UserDepartmentUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UserDepartmentCreateWithoutUsuarioInput, UserDepartmentUncheckedCreateWithoutUsuarioInput> | UserDepartmentCreateWithoutUsuarioInput[] | UserDepartmentUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UserDepartmentCreateOrConnectWithoutUsuarioInput | UserDepartmentCreateOrConnectWithoutUsuarioInput[]
    upsert?: UserDepartmentUpsertWithWhereUniqueWithoutUsuarioInput | UserDepartmentUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UserDepartmentCreateManyUsuarioInputEnvelope
    set?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    disconnect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    delete?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    connect?: UserDepartmentWhereUniqueInput | UserDepartmentWhereUniqueInput[]
    update?: UserDepartmentUpdateWithWhereUniqueWithoutUsuarioInput | UserDepartmentUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UserDepartmentUpdateManyWithWhereWithoutUsuarioInput | UserDepartmentUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UserDepartmentScalarWhereInput | UserDepartmentScalarWhereInput[]
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

  export type NestedEnumEmailTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeFilter<$PrismaModel> | $Enums.EmailType
  }

  export type NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailTypeFilter<$PrismaModel>
  }

  export type NestedEnumEntityFilter<$PrismaModel = never> = {
    equals?: $Enums.Entity | EnumEntityFieldRefInput<$PrismaModel>
    in?: $Enums.Entity[] | ListEnumEntityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Entity[] | ListEnumEntityFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityFilter<$PrismaModel> | $Enums.Entity
  }

  export type NestedEnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type NestedEnumEntityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Entity | EnumEntityFieldRefInput<$PrismaModel>
    in?: $Enums.Entity[] | ListEnumEntityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Entity[] | ListEnumEntityFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityWithAggregatesFilter<$PrismaModel> | $Enums.Entity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityFilter<$PrismaModel>
    _max?: NestedEnumEntityFilter<$PrismaModel>
  }

  export type NestedEnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type NestedEnumPhishingChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.PhishingChannel | EnumPhishingChannelFieldRefInput<$PrismaModel>
    in?: $Enums.PhishingChannel[] | ListEnumPhishingChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhishingChannel[] | ListEnumPhishingChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumPhishingChannelFilter<$PrismaModel> | $Enums.PhishingChannel
  }

  export type NestedEnumPhishingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PhishingStatus | EnumPhishingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhishingStatus[] | ListEnumPhishingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhishingStatus[] | ListEnumPhishingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhishingStatusFilter<$PrismaModel> | $Enums.PhishingStatus
  }

  export type NestedEnumPhishingChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhishingChannel | EnumPhishingChannelFieldRefInput<$PrismaModel>
    in?: $Enums.PhishingChannel[] | ListEnumPhishingChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhishingChannel[] | ListEnumPhishingChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumPhishingChannelWithAggregatesFilter<$PrismaModel> | $Enums.PhishingChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhishingChannelFilter<$PrismaModel>
    _max?: NestedEnumPhishingChannelFilter<$PrismaModel>
  }

  export type NestedEnumPhishingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhishingStatus | EnumPhishingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhishingStatus[] | ListEnumPhishingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhishingStatus[] | ListEnumPhishingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhishingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PhishingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhishingStatusFilter<$PrismaModel>
    _max?: NestedEnumPhishingStatusFilter<$PrismaModel>
  }

  export type PhishingDepartmentCreateWithoutDepartmentInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    phishing: PhishingCreateNestedOneWithoutDepartmentsInput
  }

  export type PhishingDepartmentUncheckedCreateWithoutDepartmentInput = {
    id?: string
    phishing_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingDepartmentCreateOrConnectWithoutDepartmentInput = {
    where: PhishingDepartmentWhereUniqueInput
    create: XOR<PhishingDepartmentCreateWithoutDepartmentInput, PhishingDepartmentUncheckedCreateWithoutDepartmentInput>
  }

  export type PhishingDepartmentCreateManyDepartmentInputEnvelope = {
    data: PhishingDepartmentCreateManyDepartmentInput | PhishingDepartmentCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserDepartmentCreateWithoutDepartmentInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    usuario: UserCreateNestedOneWithoutUser_departmentsInput
  }

  export type UserDepartmentUncheckedCreateWithoutDepartmentInput = {
    id?: string
    user_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type UserDepartmentCreateOrConnectWithoutDepartmentInput = {
    where: UserDepartmentWhereUniqueInput
    create: XOR<UserDepartmentCreateWithoutDepartmentInput, UserDepartmentUncheckedCreateWithoutDepartmentInput>
  }

  export type UserDepartmentCreateManyDepartmentInputEnvelope = {
    data: UserDepartmentCreateManyDepartmentInput | UserDepartmentCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type PhishingDepartmentUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: PhishingDepartmentWhereUniqueInput
    update: XOR<PhishingDepartmentUpdateWithoutDepartmentInput, PhishingDepartmentUncheckedUpdateWithoutDepartmentInput>
    create: XOR<PhishingDepartmentCreateWithoutDepartmentInput, PhishingDepartmentUncheckedCreateWithoutDepartmentInput>
  }

  export type PhishingDepartmentUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: PhishingDepartmentWhereUniqueInput
    data: XOR<PhishingDepartmentUpdateWithoutDepartmentInput, PhishingDepartmentUncheckedUpdateWithoutDepartmentInput>
  }

  export type PhishingDepartmentUpdateManyWithWhereWithoutDepartmentInput = {
    where: PhishingDepartmentScalarWhereInput
    data: XOR<PhishingDepartmentUpdateManyMutationInput, PhishingDepartmentUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type PhishingDepartmentScalarWhereInput = {
    AND?: PhishingDepartmentScalarWhereInput | PhishingDepartmentScalarWhereInput[]
    OR?: PhishingDepartmentScalarWhereInput[]
    NOT?: PhishingDepartmentScalarWhereInput | PhishingDepartmentScalarWhereInput[]
    id?: StringFilter<"PhishingDepartment"> | string
    phishing_id?: StringFilter<"PhishingDepartment"> | string
    department_id?: StringFilter<"PhishingDepartment"> | string
    is_active?: BoolFilter<"PhishingDepartment"> | boolean
    created_at?: DateTimeFilter<"PhishingDepartment"> | Date | string
    created_by?: StringFilter<"PhishingDepartment"> | string
    updated_by?: StringFilter<"PhishingDepartment"> | string
    updated_at?: DateTimeFilter<"PhishingDepartment"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"PhishingDepartment"> | Date | string | null
    inactivated_by?: StringNullableFilter<"PhishingDepartment"> | string | null
  }

  export type UserDepartmentUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserDepartmentWhereUniqueInput
    update: XOR<UserDepartmentUpdateWithoutDepartmentInput, UserDepartmentUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserDepartmentCreateWithoutDepartmentInput, UserDepartmentUncheckedCreateWithoutDepartmentInput>
  }

  export type UserDepartmentUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserDepartmentWhereUniqueInput
    data: XOR<UserDepartmentUpdateWithoutDepartmentInput, UserDepartmentUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserDepartmentUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserDepartmentScalarWhereInput
    data: XOR<UserDepartmentUpdateManyMutationInput, UserDepartmentUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserDepartmentScalarWhereInput = {
    AND?: UserDepartmentScalarWhereInput | UserDepartmentScalarWhereInput[]
    OR?: UserDepartmentScalarWhereInput[]
    NOT?: UserDepartmentScalarWhereInput | UserDepartmentScalarWhereInput[]
    id?: StringFilter<"UserDepartment"> | string
    user_id?: StringFilter<"UserDepartment"> | string
    department_id?: StringFilter<"UserDepartment"> | string
    is_active?: BoolFilter<"UserDepartment"> | boolean
    created_at?: DateTimeFilter<"UserDepartment"> | Date | string
    created_by?: StringFilter<"UserDepartment"> | string
    updated_by?: StringFilter<"UserDepartment"> | string
    updated_at?: DateTimeFilter<"UserDepartment"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"UserDepartment"> | Date | string | null
    inactivated_by?: StringNullableFilter<"UserDepartment"> | string | null
  }

  export type UserCreateWithoutEmailsInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    phishings?: PhishingCreateNestedManyWithoutUserInput
    user_departments?: UserDepartmentCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutEmailsInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    phishings?: PhishingUncheckedCreateNestedManyWithoutUserInput
    user_departments?: UserDepartmentUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutEmailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
  }

  export type UserUpsertWithoutEmailsInput = {
    update: XOR<UserUpdateWithoutEmailsInput, UserUncheckedUpdateWithoutEmailsInput>
    create: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailsInput, UserUncheckedUpdateWithoutEmailsInput>
  }

  export type UserUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    phishings?: PhishingUpdateManyWithoutUserNestedInput
    user_departments?: UserDepartmentUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    phishings?: PhishingUncheckedUpdateManyWithoutUserNestedInput
    user_departments?: UserDepartmentUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PhishingCreateWithoutDepartmentsInput = {
    id?: string
    clicked?: boolean
    reported?: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    user?: UserCreateNestedOneWithoutPhishingsInput
  }

  export type PhishingUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    clicked?: boolean
    reported?: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    userId?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingCreateOrConnectWithoutDepartmentsInput = {
    where: PhishingWhereUniqueInput
    create: XOR<PhishingCreateWithoutDepartmentsInput, PhishingUncheckedCreateWithoutDepartmentsInput>
  }

  export type DepartmentCreateWithoutPhishingsInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    users?: UserDepartmentCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutPhishingsInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    users?: UserDepartmentUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutPhishingsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutPhishingsInput, DepartmentUncheckedCreateWithoutPhishingsInput>
  }

  export type PhishingUpsertWithoutDepartmentsInput = {
    update: XOR<PhishingUpdateWithoutDepartmentsInput, PhishingUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<PhishingCreateWithoutDepartmentsInput, PhishingUncheckedCreateWithoutDepartmentsInput>
    where?: PhishingWhereInput
  }

  export type PhishingUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: PhishingWhereInput
    data: XOR<PhishingUpdateWithoutDepartmentsInput, PhishingUncheckedUpdateWithoutDepartmentsInput>
  }

  export type PhishingUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutPhishingsNestedInput
  }

  export type PhishingUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentUpsertWithoutPhishingsInput = {
    update: XOR<DepartmentUpdateWithoutPhishingsInput, DepartmentUncheckedUpdateWithoutPhishingsInput>
    create: XOR<DepartmentCreateWithoutPhishingsInput, DepartmentUncheckedCreateWithoutPhishingsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutPhishingsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutPhishingsInput, DepartmentUncheckedUpdateWithoutPhishingsInput>
  }

  export type DepartmentUpdateWithoutPhishingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserDepartmentUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutPhishingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserDepartmentUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type PhishingDepartmentCreateWithoutPhishingInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    department: DepartmentCreateNestedOneWithoutPhishingsInput
  }

  export type PhishingDepartmentUncheckedCreateWithoutPhishingInput = {
    id?: string
    department_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingDepartmentCreateOrConnectWithoutPhishingInput = {
    where: PhishingDepartmentWhereUniqueInput
    create: XOR<PhishingDepartmentCreateWithoutPhishingInput, PhishingDepartmentUncheckedCreateWithoutPhishingInput>
  }

  export type PhishingDepartmentCreateManyPhishingInputEnvelope = {
    data: PhishingDepartmentCreateManyPhishingInput | PhishingDepartmentCreateManyPhishingInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPhishingsInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    emails?: EmailCreateNestedManyWithoutUserInput
    user_departments?: UserDepartmentCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutPhishingsInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    user_departments?: UserDepartmentUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutPhishingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhishingsInput, UserUncheckedCreateWithoutPhishingsInput>
  }

  export type PhishingDepartmentUpsertWithWhereUniqueWithoutPhishingInput = {
    where: PhishingDepartmentWhereUniqueInput
    update: XOR<PhishingDepartmentUpdateWithoutPhishingInput, PhishingDepartmentUncheckedUpdateWithoutPhishingInput>
    create: XOR<PhishingDepartmentCreateWithoutPhishingInput, PhishingDepartmentUncheckedCreateWithoutPhishingInput>
  }

  export type PhishingDepartmentUpdateWithWhereUniqueWithoutPhishingInput = {
    where: PhishingDepartmentWhereUniqueInput
    data: XOR<PhishingDepartmentUpdateWithoutPhishingInput, PhishingDepartmentUncheckedUpdateWithoutPhishingInput>
  }

  export type PhishingDepartmentUpdateManyWithWhereWithoutPhishingInput = {
    where: PhishingDepartmentScalarWhereInput
    data: XOR<PhishingDepartmentUpdateManyMutationInput, PhishingDepartmentUncheckedUpdateManyWithoutPhishingInput>
  }

  export type UserUpsertWithoutPhishingsInput = {
    update: XOR<UserUpdateWithoutPhishingsInput, UserUncheckedUpdateWithoutPhishingsInput>
    create: XOR<UserCreateWithoutPhishingsInput, UserUncheckedCreateWithoutPhishingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhishingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhishingsInput, UserUncheckedUpdateWithoutPhishingsInput>
  }

  export type UserUpdateWithoutPhishingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: EmailUpdateManyWithoutUserNestedInput
    user_departments?: UserDepartmentUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutPhishingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    user_departments?: UserDepartmentUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateWithoutUser_departmentsInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    emails?: EmailCreateNestedManyWithoutUserInput
    phishings?: PhishingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_departmentsInput = {
    id?: string
    name: string
    password?: string | null
    roles?: UserCreaterolesInput | string[]
    tenant_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    phishings?: PhishingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_departmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_departmentsInput, UserUncheckedCreateWithoutUser_departmentsInput>
  }

  export type DepartmentCreateWithoutUsersInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    phishings?: PhishingDepartmentCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    phishings?: PhishingDepartmentUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutUser_departmentsInput = {
    update: XOR<UserUpdateWithoutUser_departmentsInput, UserUncheckedUpdateWithoutUser_departmentsInput>
    create: XOR<UserCreateWithoutUser_departmentsInput, UserUncheckedCreateWithoutUser_departmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_departmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_departmentsInput, UserUncheckedUpdateWithoutUser_departmentsInput>
  }

  export type UserUpdateWithoutUser_departmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: EmailUpdateManyWithoutUserNestedInput
    phishings?: PhishingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_departmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    tenant_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    phishings?: PhishingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    phishings?: PhishingDepartmentUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    phishings?: PhishingDepartmentUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type EmailCreateWithoutUserInput = {
    id?: string
    address: string
    type: $Enums.EmailType
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type EmailUncheckedCreateWithoutUserInput = {
    id?: string
    address: string
    type: $Enums.EmailType
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type EmailCreateOrConnectWithoutUserInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput>
  }

  export type EmailCreateManyUserInputEnvelope = {
    data: EmailCreateManyUserInput | EmailCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PhishingCreateWithoutUserInput = {
    id?: string
    clicked?: boolean
    reported?: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    departments?: PhishingDepartmentCreateNestedManyWithoutPhishingInput
  }

  export type PhishingUncheckedCreateWithoutUserInput = {
    id?: string
    clicked?: boolean
    reported?: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    departments?: PhishingDepartmentUncheckedCreateNestedManyWithoutPhishingInput
  }

  export type PhishingCreateOrConnectWithoutUserInput = {
    where: PhishingWhereUniqueInput
    create: XOR<PhishingCreateWithoutUserInput, PhishingUncheckedCreateWithoutUserInput>
  }

  export type PhishingCreateManyUserInputEnvelope = {
    data: PhishingCreateManyUserInput | PhishingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDepartmentCreateWithoutUsuarioInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
    department: DepartmentCreateNestedOneWithoutUsersInput
  }

  export type UserDepartmentUncheckedCreateWithoutUsuarioInput = {
    id?: string
    department_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type UserDepartmentCreateOrConnectWithoutUsuarioInput = {
    where: UserDepartmentWhereUniqueInput
    create: XOR<UserDepartmentCreateWithoutUsuarioInput, UserDepartmentUncheckedCreateWithoutUsuarioInput>
  }

  export type UserDepartmentCreateManyUsuarioInputEnvelope = {
    data: UserDepartmentCreateManyUsuarioInput | UserDepartmentCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EmailUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutUserInput, EmailUncheckedUpdateWithoutUserInput>
    create: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutUserInput, EmailUncheckedUpdateWithoutUserInput>
  }

  export type EmailUpdateManyWithWhereWithoutUserInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailScalarWhereInput = {
    AND?: EmailScalarWhereInput | EmailScalarWhereInput[]
    OR?: EmailScalarWhereInput[]
    NOT?: EmailScalarWhereInput | EmailScalarWhereInput[]
    id?: StringFilter<"Email"> | string
    address?: StringFilter<"Email"> | string
    user_id?: StringFilter<"Email"> | string
    type?: EnumEmailTypeFilter<"Email"> | $Enums.EmailType
    is_active?: BoolFilter<"Email"> | boolean
    created_at?: DateTimeFilter<"Email"> | Date | string
    created_by?: StringFilter<"Email"> | string
    updated_by?: StringFilter<"Email"> | string
    updated_at?: DateTimeFilter<"Email"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"Email"> | Date | string | null
    inactivated_by?: StringNullableFilter<"Email"> | string | null
  }

  export type PhishingUpsertWithWhereUniqueWithoutUserInput = {
    where: PhishingWhereUniqueInput
    update: XOR<PhishingUpdateWithoutUserInput, PhishingUncheckedUpdateWithoutUserInput>
    create: XOR<PhishingCreateWithoutUserInput, PhishingUncheckedCreateWithoutUserInput>
  }

  export type PhishingUpdateWithWhereUniqueWithoutUserInput = {
    where: PhishingWhereUniqueInput
    data: XOR<PhishingUpdateWithoutUserInput, PhishingUncheckedUpdateWithoutUserInput>
  }

  export type PhishingUpdateManyWithWhereWithoutUserInput = {
    where: PhishingScalarWhereInput
    data: XOR<PhishingUpdateManyMutationInput, PhishingUncheckedUpdateManyWithoutUserInput>
  }

  export type PhishingScalarWhereInput = {
    AND?: PhishingScalarWhereInput | PhishingScalarWhereInput[]
    OR?: PhishingScalarWhereInput[]
    NOT?: PhishingScalarWhereInput | PhishingScalarWhereInput[]
    id?: StringFilter<"Phishing"> | string
    clicked?: BoolFilter<"Phishing"> | boolean
    reported?: BoolFilter<"Phishing"> | boolean
    channel?: EnumPhishingChannelFilter<"Phishing"> | $Enums.PhishingChannel
    status?: EnumPhishingStatusFilter<"Phishing"> | $Enums.PhishingStatus
    userId?: StringNullableFilter<"Phishing"> | string | null
    is_active?: BoolFilter<"Phishing"> | boolean
    created_at?: DateTimeFilter<"Phishing"> | Date | string
    created_by?: StringFilter<"Phishing"> | string
    updated_by?: StringFilter<"Phishing"> | string
    updated_at?: DateTimeFilter<"Phishing"> | Date | string
    inactivated_at?: DateTimeNullableFilter<"Phishing"> | Date | string | null
    inactivated_by?: StringNullableFilter<"Phishing"> | string | null
  }

  export type UserDepartmentUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UserDepartmentWhereUniqueInput
    update: XOR<UserDepartmentUpdateWithoutUsuarioInput, UserDepartmentUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UserDepartmentCreateWithoutUsuarioInput, UserDepartmentUncheckedCreateWithoutUsuarioInput>
  }

  export type UserDepartmentUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UserDepartmentWhereUniqueInput
    data: XOR<UserDepartmentUpdateWithoutUsuarioInput, UserDepartmentUncheckedUpdateWithoutUsuarioInput>
  }

  export type UserDepartmentUpdateManyWithWhereWithoutUsuarioInput = {
    where: UserDepartmentScalarWhereInput
    data: XOR<UserDepartmentUpdateManyMutationInput, UserDepartmentUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PhishingDepartmentCreateManyDepartmentInput = {
    id?: string
    phishing_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type UserDepartmentCreateManyDepartmentInput = {
    id?: string
    user_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingDepartmentUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    phishing?: PhishingUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type PhishingDepartmentUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    phishing_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhishingDepartmentUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    phishing_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDepartmentUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UserUpdateOneRequiredWithoutUser_departmentsNestedInput
  }

  export type UserDepartmentUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDepartmentUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhishingDepartmentCreateManyPhishingInput = {
    id?: string
    department_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingDepartmentUpdateWithoutPhishingInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    department?: DepartmentUpdateOneRequiredWithoutPhishingsNestedInput
  }

  export type PhishingDepartmentUncheckedUpdateWithoutPhishingInput = {
    id?: StringFieldUpdateOperationsInput | string
    department_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhishingDepartmentUncheckedUpdateManyWithoutPhishingInput = {
    id?: StringFieldUpdateOperationsInput | string
    department_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailCreateManyUserInput = {
    id?: string
    address: string
    type: $Enums.EmailType
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type PhishingCreateManyUserInput = {
    id?: string
    clicked?: boolean
    reported?: boolean
    channel: $Enums.PhishingChannel
    status: $Enums.PhishingStatus
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type UserDepartmentCreateManyUsuarioInput = {
    id?: string
    department_id: string
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    updated_by: string
    updated_at?: Date | string
    inactivated_at?: Date | string | null
    inactivated_by?: string | null
  }

  export type EmailUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhishingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: PhishingDepartmentUpdateManyWithoutPhishingNestedInput
  }

  export type PhishingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: PhishingDepartmentUncheckedUpdateManyWithoutPhishingNestedInput
  }

  export type PhishingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clicked?: BoolFieldUpdateOperationsInput | boolean
    reported?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumPhishingChannelFieldUpdateOperationsInput | $Enums.PhishingChannel
    status?: EnumPhishingStatusFieldUpdateOperationsInput | $Enums.PhishingStatus
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDepartmentUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserDepartmentUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    department_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDepartmentUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    department_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inactivated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inactivated_by?: NullableStringFieldUpdateOperationsInput | string | null
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
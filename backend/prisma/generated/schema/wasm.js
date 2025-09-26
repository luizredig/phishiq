
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

exports.Prisma.DepartmentScalarFieldEnum = {
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

exports.Prisma.EmailScalarFieldEnum = {
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

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  entity: 'entity',
  entity_id: 'entity_id',
  action: 'action',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.PhishingDepartmentScalarFieldEnum = {
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

exports.Prisma.PhishingScalarFieldEnum = {
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

exports.Prisma.UserDepartmentScalarFieldEnum = {
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

exports.Prisma.UserScalarFieldEnum = {
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
exports.EmailType = exports.$Enums.EmailType = {
  WORK: 'WORK',
  PERSONAL: 'PERSONAL'
};

exports.Entity = exports.$Enums.Entity = {
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

exports.Action = exports.$Enums.Action = {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  OPEN: 'OPEN',
  SEND: 'SEND',
  ERROR: 'ERROR'
};

exports.PhishingChannel = exports.$Enums.PhishingChannel = {
  EMAIL: 'EMAIL'
};

exports.PhishingStatus = exports.$Enums.PhishingStatus = {
  SENT: 'SENT',
  CLICKED: 'CLICKED',
  SEND_FAILED: 'SEND_FAILED'
};

exports.Prisma.ModelName = {
  Department: 'Department',
  Email: 'Email',
  Log: 'Log',
  PhishingDepartment: 'PhishingDepartment',
  Phishing: 'Phishing',
  UserDepartment: 'UserDepartment',
  User: 'User'
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

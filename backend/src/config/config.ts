export default () => ({
  server: {
    port: process.env.PORT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    accessTtl: process.env.JWT_ACCESS_TTL,
    refreshTtl: process.env.JWT_REFRESH_TTL,
  },
  database: {
    connectionString: process.env.DATABASE_URL,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    namePrefix: process.env.DB_NAME_PREFIX,
    schema: process.env.DB_SCHEMA,
  },
})

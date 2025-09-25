export default () => ({
  server: {
    port: process.env.PORT,
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
  keycloak: {
    url: process.env.KEYCLOAK_URL,
    realm: process.env.KEYCLOAK_REALM,
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
    issuer: process.env.KEYCLOAK_ISSUER,
  },
});

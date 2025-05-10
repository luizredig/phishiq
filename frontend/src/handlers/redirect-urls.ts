const keycloakBaseUrl = import.meta.env.VITE_KEYCLOAK_URL;
const keycloakRealm = import.meta.env.VITE_KEYCLOAK_REALM;

const buildClientId = (realm: string) => {
  return `${realm}-frontend-cli`;
};

export const getLoginUrl = (realm: string, email: string) => {
  const clientId = buildClientId(realm);

  const redirectUri = encodeURIComponent(
    `${import.meta.env.VITE_KEYCLOAK_REDIRECT_URI}/${realm}/inicio`
  );

  return (
    `${keycloakBaseUrl}/realms/${realm}/protocol/openid-connect/auth` +
    `?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}` +
    `&response_type=code` +
    `&scope=openid` +
    `&login_hint=${encodeURIComponent(email)}`
  );
};

export const getRegisterUrl = (email: string) => {
  const clientId = buildClientId(keycloakRealm);

  const redirectUri = encodeURIComponent(
    `${import.meta.env.VITE_KEYCLOAK_REDIRECT_URI}/${keycloakRealm}/inicio`
  );

  return (
    `${keycloakBaseUrl}/realms/${keycloakRealm}/protocol/openid-connect/registrations` +
    `?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}` +
    `&response_type=code` +
    `&scope=openid` +
    `&login_hint=${encodeURIComponent(email)}`
  );
};

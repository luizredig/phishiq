const keycloakBaseUrl = import.meta.env.VITE_KEYCLOAK_URL;

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

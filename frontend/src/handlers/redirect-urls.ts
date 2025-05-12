const keycloakBaseUrl = import.meta.env.VITE_KEYCLOAK_URL;

export const buildClientId = (realm: string) => {
  return `${realm}-frontend-cli`;
};

export function redirectToRealmLogin(
  realm: string,
  email: string,
  clientId: string
) {
  const redirectUri = window.location.origin;

  sessionStorage.setItem("realm", realm);
  sessionStorage.setItem("clientId", clientId);
  const loginUrl =
    `${keycloakBaseUrl}/realms/${realm}/protocol/openid-connect/auth` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=openid` +
    `&login_hint=${encodeURIComponent(email)}`;

  window.location.href = loginUrl;
}

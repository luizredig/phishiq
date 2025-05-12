export function redirectToRealmLogin({
  realm,
  email,
  clientId,
}: {
  realm: string;
  email: string;
  clientId: string;
}) {
  const baseUrl = import.meta.env.VITE_KEYCLOAK_URL;
  const redirectUri = window.location.origin;

  sessionStorage.setItem("realm", realm);
  sessionStorage.setItem("clientId", clientId);
  sessionStorage.setItem("login_email", email);

  const url =
    `${baseUrl}/realms/${realm}/protocol/openid-connect/auth` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=openid` +
    `&login_hint=${encodeURIComponent(email)}`;

  window.location.href = url;
}

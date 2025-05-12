import Keycloak from "keycloak-js";

export async function initKeycloakFromStorage() {
  const realm = sessionStorage.getItem("realm");
  const clientId = sessionStorage.getItem("clientId");

  if (!realm || !clientId) {
    throw new Error("Dados do Keycloak ausentes");
  }

  const keycloak = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm,
    clientId,
  });

  const authenticated = await keycloak.init({
    onLoad: "check-sso", // evita redirect automático
    checkLoginIframe: false,
    redirectUri: window.location.origin,
  });

  if (!authenticated) {
    // Usuário não autenticado — talvez redirecionar ou mostrar erro
  }

  return keycloak;
}

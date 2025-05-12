import Keycloak from "keycloak-js";
import { buildClientId } from "../handlers/redirect-urls";

export function createKeycloakInstance(): Keycloak | null {
  const realm = sessionStorage.getItem("realm");

  if (!realm) {
    return null;
  }

  return new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm,
    clientId: buildClientId(realm),
  });
}

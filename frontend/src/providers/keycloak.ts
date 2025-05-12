import Keycloak from "keycloak-js";

const createKeycloakInstance = ({
  realm,
  clientId,
}: {
  realm: string;
  clientId: string;
}) => {
  return new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm,
    clientId,
  });
};

export default createKeycloakInstance;

import { ReactNode, useMemo } from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";

type Props = {
  children: ReactNode;
};

export const KeycloakAuthProvider = ({ children }: Props) => {
  const realm = sessionStorage.getItem("realm");
  const clientId = sessionStorage.getItem("clientId");

  const keycloak = useMemo(() => {
    if (!realm || !clientId) return null;

    return new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm,
      clientId,
    });
  }, [realm, clientId]);

  if (!keycloak) {
    window.location.href = "/login";
    return null;
  }

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: "login-required",
        checkLoginIframe: false,
        redirectUri: window.location.origin,
      }}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

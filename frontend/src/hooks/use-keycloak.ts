import { useContext } from "react";
import { KeycloakContext } from "../contexts/keycloak-context";

export const useKeycloak = () => {
  const context = useContext(KeycloakContext);
  if (!context) {
    throw new Error("useKeycloak deve ser usado dentro de KeycloakProvider");
  }
  return context;
};

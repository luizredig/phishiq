import React, { createContext, useContext, useEffect, useState } from "react";
import { createKeycloakInstance } from "./keycloak";
import Keycloak from "keycloak-js";

interface AuthContextProps {
  keycloak: Keycloak | null;
  token: string | undefined;
  userInfo: Keycloak.KeycloakProfile | undefined;
}

const AuthContext = createContext<AuthContextProps>({
  keycloak: null,
  token: undefined,
  userInfo: undefined,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [token, setToken] = useState<string | undefined>();
  const [userInfo, setUserInfo] = useState<
    Keycloak.KeycloakProfile | undefined
  >();

  useEffect(() => {
    const instance = createKeycloakInstance();
    if (!instance) return;
    
    instance
      .init({ onLoad: "check-sso", pkceMethod: "S256" })
      .then(async (authenticated) => {
        if (authenticated) {
          setKeycloak(instance);
          setToken(instance.token);
          const profile = await instance.loadUserProfile();
          setUserInfo(profile);
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ keycloak, token, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

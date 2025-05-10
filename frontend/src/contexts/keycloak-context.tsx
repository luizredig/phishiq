import React, { createContext, useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import { useLocation, useNavigate } from "react-router-dom";
import { empresas } from "../lib/empresas-mock";
import { KEYCLOAK_ROLES, KeycloakRoles } from "../types/keycloak-roles";
import { api } from "../lib/axios";

export interface KeycloakContextType {
  keycloak: Keycloak | null;
  initialized: boolean;
  authenticated: boolean;
  token: string | null;
  usuario: {
    id: string;
    nome: string;
    email: string;
    cargos: string[];
  } | null;
  isAdmin: boolean;
  realm: string | null;
  roles: string[];
}

export const KeycloakContext = createContext<KeycloakContextType | undefined>(
  undefined
);

export const KeycloakProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [usuario, setUsuario] = useState<KeycloakContextType["usuario"]>(null);
  const [realm, setRealm] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [roles, setRoles] = useState<string[]>([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const match = location.pathname.match(/^\/([^/]+)/);
    const slug = match?.[1] || null;
    setRealm(slug);
    sessionStorage.setItem("realm", slug!);

    const pageWasReloaded =
      window.performance &&
      (
        window.performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming
      )?.type === "reload";

    if (pageWasReloaded) {
      sessionStorage.setItem("lastPath", location.pathname);
    }

    if (slug && !empresas.includes(slug)) {
      navigate("/nao-encontrado", { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    if (!realm || !empresas.includes(realm)) return;

    const keycloakInstance = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL || "",
      realm: realm,
      clientId: `${realm}-frontend-cli`,
    });

    keycloakInstance
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
        pkceMethod: "S256",
      })
      .then(async (auth) => {
        setKeycloak(keycloakInstance);
        setInitialized(true);
        setAuthenticated(auth);

        if (auth) {
          setToken(keycloakInstance.token || null);

          const profile = keycloakInstance.tokenParsed;
          const rawRoles = (profile?.realm_access?.roles || []) as string[];

          const roles = rawRoles.filter((role) =>
            KEYCLOAK_ROLES.includes(role as KeycloakRoles)
          );

          setUsuario({
            id: profile?.sub || "",
            nome: profile?.name || "",
            email: profile?.email || "",
            cargos: roles,
          });

          setIsAdmin(roles.includes("ADMINISTRADOR"));
          setRoles(roles);

          try {
            await api.post(
              "/usuarios/sync-user",
              {
                realm: realm,
                keycloakId: profile?.sub,
              },
              {
                headers: {
                  Authorization: `Bearer ${keycloakInstance.token}`,
                },
              }
            );
          } catch (error) {
            console.error("Error syncing user to Prisma:", error);
          }
        }
      })
      .catch((err) => {
        console.error("Erro ao iniciar Keycloak", err);
        setInitialized(true);
      });
  }, [realm]);

  useEffect(() => {
    if (!keycloak) return;

    const interval = setInterval(() => {
      keycloak
        .updateToken(30) // Renova se faltar menos de 30s
        .then((refreshed) => {
          if (refreshed) {
            setToken(keycloak.token || null);
          }
        })
        .catch(() => {
          console.warn("Erro ao atualizar token, fazendo logout");
          keycloak.logout();
        });
    }, 10000); // Verifica a cada 10s

    return () => clearInterval(interval);
  }, [keycloak]);

  return (
    <KeycloakContext.Provider
      value={{
        keycloak,
        initialized,
        authenticated,
        token,
        usuario,
        isAdmin,
        realm,
        roles,
      }}
    >
      {children}
    </KeycloakContext.Provider>
  );
};

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Keycloak from "keycloak-js";

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any | null;
  keycloak: Keycloak | null;
  logout: () => void;
  initializeKeycloak: (realm: string, clientId: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  keycloak: null,
  logout: () => {},
  initializeKeycloak: async () => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const refreshToken = sessionStorage.getItem("refreshToken");

        if (!token || !refreshToken) {
          setIsLoading(false);
          setInitialized(true); // ✅ importante para evitar loop
          return;
        }

        const realm = sessionStorage.getItem("realm");
        const clientId = sessionStorage.getItem("clientId");

        if (realm && clientId) {
          try {
            await initializeKeycloak(realm, clientId);
          } catch (error) {
            console.error("Erro ao reinicializar Keycloak:", error);
            sessionStorage.clear();
            setIsAuthenticated(false);
            setUser(null);
            setInitialized(true);
            // Limpar o code da URL para evitar loop
            window.history.replaceState(
              {},
              document.title,
              window.location.pathname
            );
          }
        } else {
          setInitialized(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (!initialized) {
      checkAuthentication();
    }
  }, [initialized]);

  const initializeKeycloak = async (realm: string, clientId: string) => {
    if (keycloak && isAuthenticated) {
      return;
    }

    setInitialized(true); // ✅ evita reexecução do useEffect
    setIsLoading(true);

    try {
      const keycloakInstance = new Keycloak({
        url: import.meta.env.VITE_KEYCLOAK_URL,
        realm,
        clientId,
      });

      const codeVerifier =
        localStorage.getItem("code_verifier") ||
        new URLSearchParams(window.location.search).get("code_verifier");
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      const initOptions: Keycloak.KeycloakInitOptions = {
        onLoad: "check-sso",
        checkLoginIframe: false,
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html",
      };

      if (code && codeVerifier) {
        initOptions.code = code;
        initOptions.pkceMethod = "S256";
        initOptions.codeVerifier = codeVerifier;
      }

      console.log("Inicializando Keycloak com opções:", {
        ...initOptions,
        codeVerifier: codeVerifier ? "[PRESENTE]" : "[AUSENTE]",
      });

      const authenticated = await keycloakInstance.init(initOptions);

      setKeycloak(keycloakInstance);
      setIsAuthenticated(authenticated);

      if (authenticated) {
        console.log("Usuário autenticado com sucesso!");

        localStorage.removeItem("code_verifier");


        if (!keycloakInstance.token || !keycloakInstance.refreshToken) {
          throw new Error("Token ou refreshToken ausentes após autenticação.");
        }

        setUser(keycloakInstance.tokenParsed);
        sessionStorage.setItem("token", keycloakInstance.token || "");
        sessionStorage.setItem(
          "refreshToken",
          keycloakInstance.refreshToken || ""
        );

        keycloakInstance.onTokenExpired = () => {
          console.log("Token expirado. Tentando atualizar...");
          keycloakInstance
            .updateToken(30)
            .then((refreshed) => {
              if (refreshed) {
                console.log("Token atualizado com sucesso.");
                sessionStorage.setItem("token", keycloakInstance.token || "");
                sessionStorage.setItem(
                  "refreshToken",
                  keycloakInstance.refreshToken || ""
                );
              }
            })
            .catch(() => {
              console.error("Falha ao atualizar token. Efetuando logout...");
              logout();
            });
        };
      } else {
        console.warn("Keycloak inicializado, mas não autenticado.");
      }

      // Limpar URL de query params (ex: code, state) após uso
      if (code) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    } catch (error) {
      console.error("Erro ao inicializar Keycloak:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    if (keycloak) {
      sessionStorage.clear();
      setIsAuthenticated(false);
      setUser(null);
      keycloak.logout({ redirectUri: window.location.origin + "/login" });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        keycloak,
        logout,
        initializeKeycloak,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

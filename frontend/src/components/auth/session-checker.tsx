import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Keycloak from "keycloak-js";
import { empresas } from "../../lib/empresas-mock";
import { KEYCLOAK_ROLES, KeycloakRoles } from "../../types/keycloak-roles";
import LoadingSpinner from "../layout/loading-spinner";

const SessionChecker = () => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const savedRealm = sessionStorage.getItem("realm");

        if (!savedRealm || !empresas.includes(savedRealm)) {
          navigate("/login", { replace: true });
          return;
        }

        const keycloakInstance = new Keycloak({
          url: import.meta.env.VITE_KEYCLOAK_URL || "",
          realm: savedRealm,
          clientId: `${savedRealm}-frontend-cli`,
        });

        const authenticated = await keycloakInstance.init({
          onLoad: "check-sso",
          checkLoginIframe: false,
          pkceMethod: "S256",
        });

        if (authenticated) {
          const isRootPath =
            location.pathname === "/" || location.pathname === "";

          if (isRootPath) {
            const profile = keycloakInstance.tokenParsed;
            const rawRoles = (profile?.realm_access?.roles || []) as string[];

            const roles = rawRoles.filter((role) =>
              KEYCLOAK_ROLES.includes(role as KeycloakRoles)
            );

            const isAdmin = roles.includes("ADMINISTRADOR");

            if (isAdmin) {
              navigate(`/${savedRealm}/agendamentos`, { replace: true });
            } else if (roles.includes("USUARIO")) {
              navigate(`/${savedRealm}/inicio`, {
                replace: true,
              });
            } else {
              navigate(`/${savedRealm}/login`, { replace: true });
            }
          }
        } else {
          navigate(`/${savedRealm}/login`, { replace: true });
        }
      } catch (error) {
        console.error("Erro ao verificar sessão:", error);
        navigate("/login", { replace: true });
      } finally {
        setIsChecking(false);
      }
    };

    checkSession();
  }, [navigate, location.pathname]);

  if (isChecking) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return null;
};

export default SessionChecker;

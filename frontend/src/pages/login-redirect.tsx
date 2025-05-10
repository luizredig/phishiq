import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "../hooks/use-keycloak";

const LoginRedirect = () => {
  const { authenticated, realm, token } = useKeycloak();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated && realm) {
      if (token) {
        sessionStorage.setItem("keycloak-token", token);
      }
      navigate(`/${realm}/inicio`);
    }
  }, [authenticated, navigate, realm, token]);

  return null;
};

export default LoginRedirect;

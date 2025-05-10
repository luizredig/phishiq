import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "../hooks/use-keycloak";
import LoadingSpinner from "../components/layout/loading-spinner";

const TelaInicial = () => {
  const { authenticated, realm, isAdmin, roles, usuario, token } =
    useKeycloak();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authenticated || !realm || !usuario?.id || !token) {
      setIsLoading(false);
      return;
    }

    if (isAdmin) {
      navigate(`/inicio`);
      return;
    }
  }, [authenticated, navigate, realm, isAdmin, roles, usuario, token]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <LoadingSpinner />
      </div>
    );
  }

  return null;
};

export default TelaInicial;

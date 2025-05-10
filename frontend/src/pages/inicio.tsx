import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "../hooks/use-keycloak";
import LoadingSpinner from "../components/layout/loading-spinner";
import { api } from "../lib/axios";

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
      navigate(`/${realm}/agendamentos`);
      return;
    }

    const checkCadastroStatus = async () => {
      try {
        const response = await api.get(`/usuarios/keycloak/${usuario.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userStatus = response.data;

        if (!userStatus || typeof userStatus !== "object") {
          console.error("Dados de usuário inválidos:", userStatus);
          navigate(`/${realm}/cadastro-pendente`);
          return;
        }

        if (
          userStatus.statusCadastro === "PENDENTE" ||
          userStatus.statusCadastro === "RECUSADO"
        ) {
          if (userStatus.id) {
            navigate(
              `/${realm}/cadastro-pendente/${userStatus.id}?status=${userStatus.statusCadastro}`
            );
          } else {
            console.warn(
              "ID do usuário não encontrado, usando rota sem parâmetros"
            );
            navigate(`/${realm}/cadastro-pendente`);
          }
        } else if (roles.includes("VISITANTE")) {
          navigate(`/${realm}/agendamentos/visitante`);
        }
      } catch (error) {
        console.error("Erro ao verificar status do cadastro:", error);

        navigate(`/${realm}/cadastro-pendente`);
      } finally {
        setIsLoading(false);
      }
    };

    checkCadastroStatus();
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

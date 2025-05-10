/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useKeycloak } from "../hooks/use-keycloak";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import StatusCadastro from "../components/usuario/status-cadastro";
import { socket } from "../lib/socket";
import { api } from "../lib/axios";
import LoadingSpinner from "../components/layout/loading-spinner";
import { Button } from "../components/ui/button";
import { RefreshCw } from "lucide-react";

export default function CadastroPendente() {
  const { initialized, authenticated, usuario, token, isAdmin, realm } =
    useKeycloak();
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const statusParam = searchParams.get("status");

  const navigate = useNavigate();

  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [userStatus, setUserStatus] = useState<string | null>(statusParam);

  useEffect(() => {
    if (!initialized) return;

    if (!authenticated) {
      navigate(`/${realm}/login`);
      return;
    }

    if (isAdmin) {
      navigate(`/${realm}/agendamentos`);
      return;
    }
  }, [initialized, authenticated, isAdmin, navigate, realm]);

  useEffect(() => {
    if (userId && userId !== "undefined" && usuario?.id) {
      fetchUserStatusById(userId);
    }
  }, [userId, usuario?.id]);

  const fetchUserStatusById = async (id: string) => {
    if (!token || id === "undefined") {
      setIsLoading(false);
      setError("Identificador de usuário inválido");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await api.get(`/usuarios/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && typeof response.data === "object") {
        setUserStatus(response.data.statusCadastro);

        if (response.data.statusCadastro === "APROVADO") {
          navigate(`/${realm}/login`);
        }
      } else {
        setError(
          "Erro ao verificar status do cadastro. Tente recarregar a página."
        );
      }
    } catch (error) {
      console.error("Erro ao verificar status do cadastro:", error);
      setError("Erro ao verificar status do cadastro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const checkUserStatus = async () => {
    if (!authenticated || !usuario?.id || !token || hasRedirected) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await api.get(`/usuarios/keycloak/${usuario.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && typeof response.data === "object") {
        const status = response.data.statusCadastro;
        const id = response.data.id;

        setUserStatus(status);

        if (id && id !== "undefined") {
          window.history.replaceState(
            null,
            "",
            `/${realm}/cadastro-pendente/${id}?status=${status}`
          );
        } else {
          console.warn(
            "ID do banco de dados não encontrado na resposta:",
            response.data
          );
        }

        if (status === "APROVADO") {
          setHasRedirected(true);

          navigate(`/${realm}/inicio`);
        }
      } else {
        setError("Erro ao verificar status do cadastro. Formato inválido.");
      }
    } catch (error) {
      console.error("Erro ao verificar status do cadastro:", error);
      setError("Erro ao verificar status do cadastro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualRefresh = () => {
    setRefreshKey((prev) => prev + 1);
    if (userId && userId !== "undefined" && userId !== usuario?.id) {
      fetchUserStatusById(userId);
    } else {
      checkUserStatus();
    }
  };

  useEffect(() => {
    if (
      !initialized ||
      !authenticated ||
      !usuario?.id ||
      !token ||
      (userId && userId !== "undefined" && userId !== usuario.id)
    ) {
      return;
    }

    checkUserStatus();

    if (socket.connected) {
      socket.disconnect();
    }

    socket.connect();

    const handleUserUpdate = (updatedUser: any) => {
      if (updatedUser && updatedUser.keycloakId === usuario.id) {
        if (hasRedirected) return;

        setUserStatus(updatedUser.statusCadastro);

        if (updatedUser.id && updatedUser.id !== "undefined") {
          window.history.replaceState(
            null,
            "",
            `/${realm}/cadastro-pendente/${updatedUser.id}?status=${updatedUser.statusCadastro}`
          );
        }

        setRefreshKey((prev) => prev + 1);

        if (updatedUser.statusCadastro === "APROVADO") {
          setHasRedirected(true);

          navigate(`/${realm}/inicio`);
        } else if (updatedUser.statusCadastro === "RECUSADO") {
          setRefreshKey((prev) => prev + 1);
        }
      }
    };

    socket.on("user_updated", handleUserUpdate);
    socket.on("user_approved", handleUserUpdate);
    socket.on("user_rejected", handleUserUpdate);

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("user_updated", handleUserUpdate);
      socket.off("user_approved", handleUserUpdate);
      socket.off("user_rejected", handleUserUpdate);
      socket.disconnect();
    };
  }, [
    usuario,
    realm,
    navigate,
    token,
    authenticated,
    initialized,
    hasRedirected,
    userId,
  ]);

  return (
    <div className="container mx-auto p-12 max-w-3xl flex justify-center items-center min-h-screen">
      <div className="space-y-8 flex justify-center items-center flex-col">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Status do Cadastro</h1>
          <p className="text-muted-foreground">
            {userId && userId !== "undefined" && userId !== usuario?.id
              ? "Visualizando status de cadastro compartilhado"
              : "Consulte aqui o status do seu cadastro na plataforma."}
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-700">
            {error}
            <button
              onClick={handleManualRefresh}
              className="ml-2 underline hover:text-red-800"
            >
              Tentar novamente
            </button>
          </div>
        ) : (
          <>
            <StatusCadastro key={refreshKey} statusOverride={userStatus} />

            <div className="pt-6 flex flex-col md:flex-row items-center gap-3">
              <Button
                variant="outline"
                onClick={handleManualRefresh}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Atualizar
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

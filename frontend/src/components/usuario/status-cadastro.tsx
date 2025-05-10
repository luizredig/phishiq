import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useKeycloak } from "../../hooks/use-keycloak";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import LoadingSpinner from "../layout/loading-spinner";

interface Usuario {
  id: string;
  statusCadastro: string;
}

interface StatusCadastroProps {
  statusOverride?: string | null;
}

export default function StatusCadastro({
  statusOverride,
}: StatusCadastroProps) {
  const { token, usuario } = useKeycloak();
  const [loading, setLoading] = useState(true);
  const [userStatus, setUserStatus] = useState<Usuario | null>(null);

  const fetchUserStatus = async () => {
    if (!usuario?.id || !token) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await api.get(`/usuarios/keycloak/${usuario.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && typeof response.data === "object") {
        setUserStatus({
          id: response.data.id || "",
          statusCadastro: response.data.statusCadastro || "PENDENTE",
        });
      } else {
        console.error(
          "Resposta da API não está na estrutura esperada:",
          response.data
        );
        setUserStatus(null);
      }
    } catch (error) {
      console.error("Erro ao buscar status do usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Se recebemos statusOverride, usamos ele ao invés de buscar da API
    if (statusOverride) {
      setUserStatus({
        id: usuario?.id || "",
        statusCadastro: statusOverride,
      });
      setLoading(false);
      return;
    }

    setLoading(true);
    setUserStatus(null);
    fetchUserStatus();
  }, [usuario, token, statusOverride]);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <LoadingSpinner />
      </div>
    );
  }

  if (!userStatus) {
    return null;
  }

  if (userStatus.statusCadastro === "APROVADO") {
    return (
      <Card className="border-green-200 bg-green-50 w-full max-w-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center text-green-700">
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Cadastro Aprovado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700">
            Seu cadastro foi aprovado! Você já pode utilizar a plataforma
            normalmente.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (userStatus.statusCadastro === "RECUSADO") {
    return (
      <Card className="border-red-200 bg-red-50 w-full max-w-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center text-red-700">
            <XCircle className="h-5 w-5 mr-2" />
            Cadastro Recusado
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-red-700">
            Infelizmente seu cadastro não foi aprovado. Por favor, entre em
            contato com o administrador para mais informações.
          </p>
          <Button
            variant="outline"
            className="border-red-300 text-red-700 hover:bg-red-100"
            onClick={() =>
              (window.location.href = `mailto:suporte@exemplo.com.br?subject=Dúvida sobre cadastro - ${usuario?.email}`)
            }
          >
            Entrar em contato
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-amber-200 bg-amber-50 w-full max-w-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center text-amber-700">
          <AlertCircle className="h-5 w-5 mr-2" />
          Cadastro em Análise
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-amber-700">
          Seu cadastro está sendo analisado pela equipe administrativa. Você
          receberá uma notificação em tempo real quando seu status for
          atualizado.
        </p>
      </CardContent>
    </Card>
  );
}

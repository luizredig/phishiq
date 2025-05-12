import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoadingSpinner from "../components/layout/loading-spinner";

export default function Callback() {
  const navigate = useNavigate();
  const location = useLocation();
  const { initializeKeycloak } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    // Evita múltiplos processamentos na mesma renderização
    if (!processing) return;

    const handleCallback = async () => {
      try {
        console.log("Callback: Processando resposta do Keycloak");

        // Verificar se há código de autorização na URL
        const params = new URLSearchParams(location.search);
        const code = params.get("code");

        if (!code) {
          setError(
            "Código de autorização ausente. Por favor, tente fazer login novamente."
          );
          setProcessing(false);
          return;
        }

        // Obter realm e clientId do sessionStorage
        const realm = sessionStorage.getItem("realm");
        const clientId = sessionStorage.getItem("clientId");
        const codeVerifier = localStorage.getItem("code_verifier");

        if (!realm || !clientId) {
          setError(
            "Dados do Keycloak ausentes. Por favor, tente fazer login novamente."
          );
          setProcessing(false);
          return;
        }

        if (!codeVerifier) {
          console.warn("Code Verifier ausente, o fluxo PKCE pode falhar");
        }

        // Inicializar o Keycloak - o auth context vai processar o código automaticamente
        console.log(
          "Callback: Inicializando Keycloak com realm:",
          realm,
          "clientId:",
          clientId
        );
        await initializeKeycloak(realm, clientId);

        // Remover parâmetros da URL para evitar loops
        console.log("Callback: Removendo parâmetros da URL");
        window.history.replaceState({}, document.title, "/callback");

        // Redirecionar para home após processamento bem-sucedido
        console.log("Callback: Redirecionando para home");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 500);
      } catch (error) {
        console.error("Erro ao inicializar Keycloak:", error);
        setError(
          "Erro ao inicializar a autenticação. Por favor, tente novamente."
        );
      } finally {
        setProcessing(false);
      }
    };

    handleCallback();
  }, [location.search, navigate, initializeKeycloak, processing]);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-red-500">{error}</div>
          <button
            onClick={() => navigate("/login")}
            className="rounded bg-primary px-4 py-2 text-white"
          >
            Voltar para o login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4">Autenticando...</div>
        <LoadingSpinner />
      </div>
    </div>
  );
}

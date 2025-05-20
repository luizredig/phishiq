import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Callback() {
  const navigate = useNavigate();
  const location = useLocation();
  const hasAttemptedExchange = useRef(false);

  useEffect(() => {
    const handleCallback = async () => {
      if (hasAttemptedExchange.current) {
        return;
      }
      hasAttemptedExchange.current = true;

      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code");
      const state = searchParams.get("state");

      if (!code) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:1421/keycloak/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("[Callback] Token exchange failed:", {
            status: response.status,
            statusText: response.statusText,
            error: errorText,
          });
          throw new Error("Failed to get token");
        }

        const data = await response.json();

        localStorage.setItem("access_token", data.access_token);

        const redirectPath = state || "/home";
        navigate(redirectPath);
      } catch (error) {
        console.error("[Callback] Error during authentication:", error);
        navigate("/login");
      }
    };

    handleCallback();
  }, [navigate, location]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Autenticando...</h2>
        <p className="text-muted-foreground">Por favor, aguarde.</p>
      </div>
    </div>
  );
}

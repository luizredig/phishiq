import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/layout/loading-spinner";

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
        await new Promise((resolve) => setTimeout(resolve, 100));

        const redirectPath = state || "/home";
        navigate(redirectPath, { replace: true });
      } catch (error) {
        console.error("[Callback] Error during authentication:", error);
        navigate("/login");
      }
    };

    handleCallback();
  }, [navigate, location]);

  return (
    <div className="flex h-screen items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

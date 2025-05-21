import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useAuthGuard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("access_token");
      const isPublicRoute =
        location.pathname.includes("/login") ||
        location.pathname.includes("/signup") ||
        location.pathname.includes("/callback");

      if (!token && !isPublicRoute) {
        navigate("/login", {
          state: { from: location },
          replace: true,
        });
        return;
      }

      if (token && !isPublicRoute) {
        try {
          const response = await fetch(
            "http://localhost:1421/keycloak/verify-token",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            localStorage.removeItem("access_token");
            navigate("/login", {
              state: { from: location },
              replace: true,
            });
          }
        } catch (error) {
          console.error("[useAuthGuard] Error verifying token:", error);
          localStorage.removeItem("access_token");
          navigate("/login", {
            state: { from: location },
            replace: true,
          });
        }
      }

      setIsChecking(false);
    };

    checkAuth();

    const handleStorageChange = () => {
      setIsChecking(true);
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [navigate, location]);

  return isChecking;
}

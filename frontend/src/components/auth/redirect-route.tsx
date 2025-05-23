/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../layout/loading-spinner";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const { getValidToken } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await getValidToken();
        const response = await fetch(
          "http://localhost:1421/keycloak/verify-token",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsAuthenticated(response.ok);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [getValidToken]);

  if (isAuthenticated === null) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return <Navigate to={isAuthenticated ? "/home" : "/login"} replace />;
} 
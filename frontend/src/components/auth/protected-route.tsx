/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../layout/loading-spinner";
import { useAuth } from "../../hooks/use-auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();
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
      <div className="flex h-screen items-center justify-center w-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

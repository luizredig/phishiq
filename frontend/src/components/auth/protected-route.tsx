/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../layout/loading-spinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
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

    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setIsAuthenticated(false);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

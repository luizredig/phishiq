/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../layout/loading-spinner";
import { useAuth } from "../../hooks/use-auth";

interface AdminRouteProps {
  children: React.ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const location = useLocation();
  const { isAdmin: checkIsAdmin } = useAuth();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const admin = await checkIsAdmin();
        setIsAdmin(admin);
      } catch (error) {
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, [checkIsAdmin]);

  if (isAdmin === null) {
    return (
      <div className="flex h-screen items-center justify-center w-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

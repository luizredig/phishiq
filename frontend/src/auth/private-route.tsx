import { Navigate } from "react-router-dom";
import { useAuthContext } from "./auth-provider";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { token } = useAuthContext();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

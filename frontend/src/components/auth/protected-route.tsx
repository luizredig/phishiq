import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { getRolesFromToken } from "./jwt-roles";

export default function ProtectedRoute() {
  const { isAuthenticated, loading, accessToken } = useAuth();
  const location = useLocation();

  const roles = getRolesFromToken(accessToken);
  const isAdmin = roles.includes("admin");

  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  const allowedForUser = new Set(["/", "/home", "/quiz"]);
  if (!isAdmin && !allowedForUser.has(location.pathname)) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

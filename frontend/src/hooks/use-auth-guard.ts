import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useAuthGuard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (
      !token &&
      !location.pathname.includes("/login") &&
      !location.pathname.includes("/signup") &&
      !location.pathname.includes("/callback")
    ) {
      navigate("/login", { state: { from: location } });
    }
  }, [navigate, location]);
}

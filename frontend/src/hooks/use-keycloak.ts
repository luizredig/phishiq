import { useAuthContext } from "../auth/auth-provider";

export const useKeycloak = () => {
  const context = useAuthContext();
  if (!context)
    throw new Error("useKeycloak deve ser usado dentro do AuthProvider");
  return context;
};

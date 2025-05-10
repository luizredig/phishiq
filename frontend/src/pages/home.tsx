import { Navigate } from "react-router-dom";
import { useKeycloak } from "../hooks/use-keycloak";

export default function Home() {
  const { isAdmin, roles, realm } = useKeycloak();

  if (isAdmin) {
    return <Navigate to={`/${realm}/agendamentos/`} />;
  }

  if (roles.includes("VISITANTE") && !isAdmin) {
    return <Navigate to={`/${realm}/inicio`} />;
  }

  return null;
}

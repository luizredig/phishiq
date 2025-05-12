import { useEffect, useState } from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { initKeycloakFromStorage } from "./auth/init-keycloak";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Login from "./pages/login";
export default function App() {
  const [keycloak, setKeycloak] = useState<any>(null);

  useEffect(() => {
    initKeycloakFromStorage()
      .then(({ keycloak }) => setKeycloak(keycloak))
      .catch(() => {
        sessionStorage.clear();
        window.location.href = "/login";
      });
  }, []);

  if (!keycloak) return null;

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ReactKeycloakProvider>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SessionChecker from "./components/auth/session-checker";
import AppLayout from "./components/layout/app-layout";
import { Toaster } from "./components/ui/toaster";
import { KeycloakProvider } from "./contexts/keycloak-context";
import TelaInicial from "./pages/inicio";
import TelaLogin from "./pages/login";
import LoginRedirect from "./pages/login-redirect";
import NaoEncontradoPage from "./pages/nao-encontrado";
import EmpresaRouter from "./pages/routers/empresa-router";
import TelaSignup from "./pages/signup";
import UsuariosPendentes from "./pages/usuarios/pendentes";
import Usuarios from "./pages/usuarios/usuarios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        
        <Route path="/signup" element={<TelaSignup />} />

        <Route path="/nao-encontrado" element={<NaoEncontradoPage />} />

        <Route path="/:empresa" element={<EmpresaRouter />} />

        <Route
          path="/:empresa/*"
          element={
            <KeycloakProvider>
              <RoutesWrapper />
            </KeycloakProvider>
          }
        />

        <Route path="/" element={<SessionChecker />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

function RoutesWrapper() {
  return (
    <Routes>
      <Route path="login" element={<LoginRedirect />} />

      <Route
        path="inicio"
        element={
          <AppLayout>
            <TelaInicial />
          </AppLayout>
        }
      />

      <Route
        path="usuarios"
        element={
          <AppLayout>
            <Usuarios />
          </AppLayout>
        }
      />

      <Route
        path="usuarios/pendentes"
        element={
          <AppLayout>
            <UsuariosPendentes />
          </AppLayout>
        }
      />

      <Route path="*" element={<NaoEncontradoPage />} />
    </Routes>
  );
}

export default App;

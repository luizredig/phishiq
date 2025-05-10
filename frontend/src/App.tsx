import { BrowserRouter, Route, Routes } from "react-router-dom";
import SessionChecker from "./components/auth/session-checker";
import AppLayout from "./components/layout/app-layout";
import { KeycloakProvider } from "./contexts/keycloak-context";
import AdminAgendamentos from "./pages/agendamentos/admin-agendamentos";
import UserAgendamentos from "./pages/agendamentos/visitante-agendamentos";
import CadastroPendente from "./pages/cadastro-pendente";
import TelaInicial from "./pages/inicio";
import LoginRedirect from "./pages/login-redirect";
import NaoEncontradoPage from "./pages/nao-encontrado";
import EmpresaRouter from "./pages/routers/empresa-router";
import TelaLogin from "./pages/login";
import UsuariosPendentes from "./pages/usuarios/pendentes";
import Usuarios from "./pages/usuarios/usuarios";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />

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
        path="agendamentos"
        element={
          <AppLayout>
            <AdminAgendamentos />
          </AppLayout>
        }
      />

      <Route
        path="agendamentos/visitante"
        element={
          <AppLayout>
            <UserAgendamentos />
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

      <Route path="cadastro-pendente" element={<CadastroPendente />} />

      <Route path="cadastro-pendente/:userId" element={<CadastroPendente />} />

      <Route path="*" element={<NaoEncontradoPage />} />
    </Routes>
  );
}

export default App;

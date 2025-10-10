import { Outlet, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/app-layout";
import { AuthProvider } from "./contexts/auth-context";

import { Dashboard } from "./pages/dashboard";
import Home from "./pages/home";
import ManageDepartments from "./pages/manage-departments";
import ManagePhishings from "./pages/manage-phishings";
import ManageUsers from "./pages/manage-users";
import Materiais from "./pages/materiais";
import NaoEncontrado from "./pages/pagina-nao-encontrada";
import Quiz from "./pages/quiz";
import GerenciarTemplates from "./pages/templates";
import PhishingClicked from "./pages/phishing-clicked";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ProtectedRoute from "./components/auth/protected-route";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/phishing/:id" element={<PhishingClicked />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Rotas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route
            element={
              <AppLayout>
                <Outlet />
              </AppLayout>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/materiais" element={<Materiais />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/gerenciar-usuarios" element={<ManageUsers />} />
            <Route
              path="/gerenciar-departamentos"
              element={<ManageDepartments />}
            />
            <Route path="/gerenciar-testes" element={<ManagePhishings />} />
            <Route path="/templates" element={<GerenciarTemplates />} />
          </Route>
        </Route>

        {/* Rota 404 para URLs não encontradas */}
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </AuthProvider>
  );
}

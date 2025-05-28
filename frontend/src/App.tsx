import { Outlet, Route, Routes } from "react-router-dom";
import AdminRoute from "./components/auth/admin-route";
import ProtectedRoute from "./components/auth/protected-route";
import RedirectRoute from "./components/auth/redirect-route";
import AppLayout from "./components/layout/app-layout";

import Callback from "./pages/callback";
import { Dashboard } from "./pages/dashboard";
import GerenciarCampanhas from "./pages/gerenciar-campanhas";
import GerenciarDepartamentos from "./pages/gerenciar-departamentos";
import GerenciarTestes from "./pages/gerenciar-testes";
import GerenciarUsuarios from "./pages/gerenciar-usuarios";
import Home from "./pages/home";
import Login from "./pages/login";
import Materiais from "./pages/materiais";
import NaoEncontrado from "./pages/pagina-nao-encontrada";
import Quiz from "./pages/quiz";
import Signup from "./pages/signup";
import Teste from "./pages/teste";

export default function App() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/teste/:id" element={<Teste />} />
      <Route path="/" element={<RedirectRoute />} />

      {/* Rotas protegidas */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout>
              <Outlet />
            </AppLayout>
          </ProtectedRoute>
        }
      >
        {/* Rotas para todos os usuários autenticados */}
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/materiais" element={<Materiais />} />

        {/* Rotas apenas para administradores */}
        <Route
          element={
            <AdminRoute>
              <Outlet />
            </AdminRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gerenciar-usuarios" element={<GerenciarUsuarios />} />
          <Route
            path="/gerenciar-departamentos"
            element={<GerenciarDepartamentos />}
          />
          <Route path="/gerenciar-testes" element={<GerenciarTestes />} />
          <Route path="/gerenciar-campanhas" element={<GerenciarCampanhas />} />
        </Route>
      </Route>

      {/* Rota 404 para URLs não encontradas */}
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  );
}

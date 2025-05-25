import { Outlet, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/protected-route";
import RedirectRoute from "./components/auth/redirect-route";
import AppLayout from "./components/layout/app-layout";

import Callback from "./pages/callback";
import GerenciarCampanhas from "./pages/gerenciar-campanhas";
import GerenciarDepartamentos from "./pages/gerenciar-departamentos";
import GerenciarTestes from "./pages/gerenciar-testes";
import GerenciarUsuarios from "./pages/gerenciar-usuarios";
import Home from "./pages/home";
import Login from "./pages/login";
import NaoEncontrado from "./pages/pagina-nao-encontrada";
import Signup from "./pages/signup";

export default function App() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/callback" element={<Callback />} />
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
        <Route path="/home" element={<Home />} />
        <Route path="/gerenciar-usuarios" element={<GerenciarUsuarios />} />
        <Route
          path="/gerenciar-departamentos"
          element={<GerenciarDepartamentos />}
        />
        <Route path="/gerenciar-testes" element={<GerenciarTestes />} />
        <Route path="/gerenciar-campanhas" element={<GerenciarCampanhas />} />
      </Route>

      {/* Rota 404 para URLs não encontradas */}
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  );
}

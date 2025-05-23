import { Route, Routes, Outlet } from "react-router-dom";
import ProtectedRoute from "./components/auth/protected-route";
import RedirectRoute from "./components/auth/redirect-route";
import AppLayout from "./components/layout/app-layout";

import Callback from "./pages/callback";
import Home from "./pages/home";
import Login from "./pages/login";
import NaoEncontrado from "./pages/pagina-nao-encontrada";
import Signup from "./pages/signup";
import GerenciarUsuarios from "./pages/gerenciar-usuarios";

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
      </Route>

      {/* Rota 404 para URLs não encontradas */}
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  );
}

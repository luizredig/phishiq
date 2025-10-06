import { Outlet, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/app-layout";

import { Dashboard } from "./pages/dashboard";
import Home from "./pages/home";
import ManageDepartments from "./pages/manage-departments";
import ManagePhishings from "./pages/manage-phishings";
import ManageUsers from "./pages/manage-users";
import Materiais from "./pages/materiais";
import NaoEncontrado from "./pages/pagina-nao-encontrada";
import Quiz from "./pages/quiz";
import GerenciarTemplates from "./pages/templates";
import Teste from "./pages/teste";

export default function App() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/teste/:id" element={<Teste />} />

      {/* Rotas protegidas */}
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
        <Route path="/gerenciar-departments" element={<ManageDepartments />} />
        <Route path="/gerenciar-testes" element={<ManagePhishings />} />
        <Route path="/templates" element={<GerenciarTemplates />} />
      </Route>

      {/* Rota 404 para URLs não encontradas */}
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  );
}

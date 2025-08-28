import { Outlet, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/app-layout";

import { Dashboard } from "./pages/dashboard";
import GerenciarCampanhas from "./pages/gerenciar-campanhas";
import GerenciarDepartamentos from "./pages/gerenciar-departamentos";
import GerenciarTestes from "./pages/gerenciar-testes";
import GerenciarUsuarios from "./pages/gerenciar-usuarios";
import Home from "./pages/home";
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
        <Route path="/gerenciar-usuarios" element={<GerenciarUsuarios />} />
        <Route
          path="/gerenciar-departamentos"
          element={<GerenciarDepartamentos />}
        />
        <Route path="/gerenciar-testes" element={<GerenciarTestes />} />
        <Route path="/gerenciar-campanhas" element={<GerenciarCampanhas />} />
        <Route path="/templates" element={<GerenciarTemplates />} />
      </Route>

      {/* Rota 404 para URLs não encontradas */}
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  );
}

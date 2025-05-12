import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./auth/auth-provider";
import { PrivateRoute } from "./auth/private-route";
import AppLayout from "./components/layout/app-layout";
import Callback from "./pages/callback";
import TelaInicial from "./pages/inicio";
import Login from "./pages/login";
import NaoEncontrado from "./pages/nao-encontrado";
import Signup from "./pages/signup";
import Usuarios from "./pages/usuarios/usuarios";

function RootRedirect() {
  const { token } = useAuthContext();

  if (token) {
    return <Navigate to="/inicio" replace />;
  }

  return <Navigate to="/login" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/nao-encontrado" element={<NaoEncontrado />} />

      <Route
        path="/inicio"
        element={
          <PrivateRoute>
            <AppLayout>
              <TelaInicial />
            </AppLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/usuarios"
        element={
          <PrivateRoute>
            <AppLayout>
              <Usuarios />
            </AppLayout>
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  );
}

export default App;

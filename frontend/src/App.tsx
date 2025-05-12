import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Login from "./pages/login";
import Callback from "./pages/callback";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </AuthProvider>
  );
}

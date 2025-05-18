import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/app-layout";
import ProtectedRoute from "./components/auth/protected-route";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Inicio from "./pages/inicio";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Inicio />} />
        <Route path="inicio" element={<Inicio />} />
      </Route>
    </Routes>
  );
}

import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Departamentos } from "./pages/departamentos";
import { Usuarios } from "./pages/usuarios";
import { Testes } from "./pages/testes";
import { Campanhas } from "./pages/campanhas";
import { Dashboard } from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/departamentos",
        element: <Departamentos />,
      },
      {
        path: "/usuarios",
        element: <Usuarios />,
      },
      {
        path: "/testes",
        element: <Testes />,
      },
      {
        path: "/campanhas",
        element: <Campanhas />,
      },
    ],
  },
]);

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App.tsx";
import { KeycloakAuthProvider } from "./providers/keycloak-provider.tsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <KeycloakAuthProvider>
        <App />
      </KeycloakAuthProvider>
    </BrowserRouter>
  </StrictMode>
);

import { useKeycloak } from "@react-keycloak/web";

const Inicio = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <p>Carregando...</p>;
  }

  if (!keycloak.authenticated) {
    return <p>Usuário não autenticado</p>;
  }

  return (
    <div>
      <h1>Bem-vindo, {keycloak.tokenParsed?.preferred_username}</h1>
      <button
        onClick={() => keycloak.logout({ redirectUri: window.location.origin })}
      >
        Sair
      </button>
    </div>
  );
};

export default Inicio;

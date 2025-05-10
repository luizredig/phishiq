import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { empresas } from "../../lib/empresas-mock";

const EmpresaRouter = () => {
  const { empresa } = useParams<{ empresa: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!empresa) return;

    if (empresas.includes(empresa)) {
      sessionStorage.setItem("realm", empresa);

      navigate(`/${empresa}/login`);
    } else {
      navigate(`/nao-encontrado`);
    }
  }, [empresa, navigate]);

  return null;
};

export default EmpresaRouter;

import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";


const NaoEncontrado = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 justify-center items-center h-screen px-5 gap-4">
      <span className="text-center">
        A página que você está procurando não existe.
      </span>

      <Button onClick={() => navigate("/")}>Voltar</Button>
    </div>
  );
};

export default NaoEncontrado;

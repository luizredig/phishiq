import { Button } from "../components/ui/button";
import { useNavigation } from "../handlers/navigate";

const NaoEncontrado = () => {
  const { goBack } = useNavigation();

  return (
    <div className="flex flex-col flex-1 justify-center items-center h-screen px-5 gap-4">
      <span className="text-center">
        A página que você está procurando não existe.
      </span>

      <Button onClick={goBack}>Voltar</Button>
    </div>
  );
};

export default NaoEncontrado;

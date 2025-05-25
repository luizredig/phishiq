import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../lib/socket";

export default function Teste() {
  const { id } = useParams();
  const [isProcessed, setIsProcessed] = useState(false);

  useEffect(() => {
    if (!id || isProcessed) return;

    // Emite o evento quando a página é carregada
    socket.emit("testeCaiu", id, (response: any) => {
      if (response) {
        setIsProcessed(true);
      }
    });

    // Escuta o evento de atualização do teste
    socket.on("testeAtualizado", (testeAtualizado: any) => {
      if (testeAtualizado.id === id) {
        setIsProcessed(true);
      }
    });

    return () => {
      socket.off("testeCaiu");
      socket.off("testeAtualizado");
    };
  }, [id, isProcessed]);

  // Retorna uma página em branco
  return null;
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../lib/socket";

export default function PhishingClicked() {
  const { id } = useParams();
  const [isProcessed, setIsProcessed] = useState(false);

  useEffect(() => {
    if (!id || isProcessed) return;

    socket.emit("phishing_clicked", id, (response: any) => {
      if (response) {
        setIsProcessed(true);
      }
    });

    socket.on("phishing_updated", (testeAtualizado: any) => {
      if (testeAtualizado.id === id) {
        setIsProcessed(true);
      }
    });

    return () => {
      socket.off("phishing_clicked");
      socket.off("phishing_updated");
    };
  }, [id, isProcessed]);

  return null;
}

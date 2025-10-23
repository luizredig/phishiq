import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/use-api";

export default function PhishingClicked() {
  const { id } = useParams();
  const [isProcessed, setIsProcessed] = useState(false);
  const { put } = useApi();
  const hasSentRef = useRef(false);

  useEffect(() => {
    if (!id || isProcessed || hasSentRef.current) return;
    hasSentRef.current = true;
    void (async () => {
      try {
        const res = await put(`/phishings/${id}/resultado`, { clicked: true });
        if (res) setIsProcessed(true);
      } catch {}
    })();
  }, [id, isProcessed]);

  return null;
}

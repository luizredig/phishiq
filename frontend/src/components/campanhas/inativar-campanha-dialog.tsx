/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { useApi } from "../../hooks/use-api";

import { socket } from "../../lib/socket";

interface InativarCampanhaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campanha: {
    id: string;
    titulo: string;
  };
}

export function InativarCampanhaDialog({
  open,
  onOpenChange,
  campanha,
}: InativarCampanhaDialogProps) {
  const { put, loading } = useApi();

  async function handleInativar() {
    try {
      await put(`/campanhas/${campanha.id}/status`, { ativo: false });
      socket.emit("updateCampanhaStatus", { id: campanha.id, ativo: false });
      onOpenChange(false);
    } catch (error) {
      console.error("Error inativating campanha:", error);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Inativar campanha</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja inativar a campanha "{campanha.titulo}"? Esta
            ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleInativar}
            disabled={loading}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Inativar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

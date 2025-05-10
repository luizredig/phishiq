import { useEffect, useState } from "react";
import { socket } from "../../lib/socket";
import { api } from "../../lib/axios";
import { useKeycloak } from "../../hooks/use-keycloak";
import { useNavigate } from "react-router-dom";
import { Check, X, AlertCircle } from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";
import { Button } from "../../components/ui/button";
import { Usuario } from "../../types/usuario";
import LoadingSpinner from "../../components/layout/loading-spinner";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function UsuariosPendentes() {
  const { isAdmin, realm, usuario, token, roles } = useKeycloak();
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false);
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);

  const fetchPendingUsuarios = async () => {
    if (!token) return;

    try {
      setIsLoading(true);
      const res = await api.get("/usuarios/pendentes/lista", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsuarios(res.data);
    } catch (error) {
      console.error("Erro ao buscar usuários pendentes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    socket.disconnect();

    socket.connect();

    const handleUserEvent = () => {
      fetchPendingUsuarios();
    };

    socket.on("user_updated", handleUserEvent);
    socket.on("user_deleted", handleUserEvent);
    socket.on("user_created", handleUserEvent);
    socket.on("user_approved", handleUserEvent);
    socket.on("user_rejected", handleUserEvent);

    return () => {
      socket.off("user_updated", handleUserEvent);
      socket.off("user_deleted", handleUserEvent);
      socket.off("user_created", handleUserEvent);
      socket.off("user_approved", handleUserEvent);
      socket.off("user_rejected", handleUserEvent);
      socket.disconnect();
    };
  }, [token]);

  useEffect(() => {
    if (!isAdmin && roles?.includes("USUARIO")) {
      navigate(`/${realm}/inicio`);
      return;
    }

    fetchPendingUsuarios();
  }, [isAdmin, navigate, realm, token]);

  const handleApproveDialog = (user: Usuario) => {
    setSelectedUser(user);
    setIsApproveDialogOpen(true);
  };

  const handleRejectDialog = (user: Usuario) => {
    setSelectedUser(user);
    setIsRejectDialogOpen(true);
  };

  const handleApprove = async () => {
    if (!selectedUser || !token) return;

    try {
      await api.post(
        `/usuarios/${selectedUser.id}/aprovar`,
        {
          userId: usuario?.email,
          realm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsApproveDialogOpen(false);

      fetchPendingUsuarios();
    } catch (error) {
      console.error("Erro ao aprovar usuário:", error);
    }
  };

  const handleReject = async () => {
    if (!selectedUser || !token) return;

    try {
      await api.post(
        `/usuarios/${selectedUser.id}/recusar`,
        {
          userId: usuario?.email,
          realm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsRejectDialogOpen(false);

      fetchPendingUsuarios();
    } catch (error) {
      console.error("Erro ao recusar usuário:", error);
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pendências de Cadastro</h1>
        <Button onClick={fetchPendingUsuarios} variant="outline" size="sm">
          Atualizar lista
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : usuarios.length === 0 ? (
        <div className="py-8 text-center">
          <AlertCircle className="mx-auto h-10 w-10 text-muted-foreground" />
          <p className="mt-4 text-lg text-muted-foreground">
            Não há usuários pendentes de aprovação.
          </p>
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Data de Cadastro</TableHead>
                <TableHead className="w-[180px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuarios.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.nome} {user.sobrenome}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.cargo}</TableCell>
                  <TableCell>
                    {formatDistanceToNow(new Date(user.criadoEm), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </TableCell>

                  <TableCell className="space-x-2 flex justify-center">
                    <Button
                      onClick={() => handleApproveDialog(user)}
                      variant="outline"
                      size="sm"
                      className="text-green-600 hover:text-green-700 hover:bg-green-50 mr-2"
                    >
                      <Check className="mr-1 h-4 w-4" />
                      Aprovar cadastro
                    </Button>

                    <Button
                      onClick={() => handleRejectDialog(user)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="mr-1 h-4 w-4" />
                      Recusar cadastro
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <AlertDialog
        open={isApproveDialogOpen}
        onOpenChange={setIsApproveDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Aprovar Cadastro</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja aprovar o cadastro de {selectedUser?.nome}{" "}
              {selectedUser?.sobrenome}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleApprove}
              className="bg-green-600 hover:bg-green-700"
            >
              Sim, Aprovar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={isRejectDialogOpen}
        onOpenChange={setIsRejectDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Recusar Cadastro</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja recusar o cadastro de {selectedUser?.nome}{" "}
              {selectedUser?.sobrenome}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleReject}
              className="bg-red-600 hover:bg-red-700"
            >
              Sim, Recusar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

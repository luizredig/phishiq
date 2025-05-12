import { useEffect, useState } from "react";
import { socket } from "../../lib/socket";
import { api } from "../../lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Edit, Trash, UserPlus, Check, X } from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../../components/ui/dialog";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Usuario } from "../../types/usuario";
import LoadingSpinner from "../../components/layout/loading-spinner";

const usuarioSchema = z.object({
  nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  sobrenome: z.string().min(2, "O sobrenome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  cargo: z.enum(["ADMINISTRADOR", "USUARIO"], {
    errorMap: () => ({ message: "Selecione um cargo válido" }),
  }),
});

type UsuarioFormData = z.infer<typeof usuarioSchema>;

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingUser, setEditingUser] = useState<Usuario | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);

  const form = useForm<UsuarioFormData>({
    resolver: zodResolver(usuarioSchema),
    defaultValues: {
      nome: "",
      sobrenome: "",
      email: "",
      cargo: "USUARIO",
    },
  });

  const fetchUsuarios = async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/usuarios", {
        headers: {
          Authorization: `Bearer token`,
        },
      });
      setUsuarios(res.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    socket.connect();

    socket.on("user_updated", () => {
      fetchUsuarios();
    });

    socket.on("user_deleted", () => {
      fetchUsuarios();
    });

    socket.on("user_created", () => {
      fetchUsuarios();
    });

    return () => {
      socket.off("user_updated");
      socket.off("user_deleted");
      socket.off("user_created");
      socket.disconnect();
    };
  }, []);

  const handleEdit = (user: Usuario) => {
    setEditingUser(user);
    form.reset({
      nome: user.nome,
      sobrenome: user.sobrenome,
      email: user.email,
      cargo: user.cargo as "ADMINISTRADOR" | "USUARIO",
    });
    setIsFormOpen(true);
  };

  const handleCreate = () => {
    setEditingUser(null);
    form.reset({
      nome: "",
      sobrenome: "",
      email: "",
      cargo: "USUARIO",
    });
    setIsFormOpen(true);
  };

  const handleDeleteDialog = (user: Usuario) => {
    setSelectedUser(user);
    setIsDeleteDialogOpen(true);
  };

  const handleStatusDialog = (user: Usuario) => {
    setSelectedUser(user);
    setIsStatusDialogOpen(true);
  };

  const onSubmit = async (data: UsuarioFormData) => {
    try {
      if (editingUser) {
        await api.put(
          `/usuarios/${editingUser.id}`,
          {
            ...data,
            userId: "usuario?.email",
            realm: "realm",
          },
          {
            headers: {
              Authorization: `Bearer token`,
            },
          }
        );
      } else {
        await api.post(
          "/usuarios",
          {
            ...data,
            userId: "usuario?.email",
            realm: "realm",
          },
          {
            headers: {
              Authorization: `Bearer token`,
            },
          }
        );
      }
      setIsFormOpen(false);
      fetchUsuarios();
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
    }
  };

  const handleDelete = async () => {
    if (!selectedUser) return;

    try {
      await api.delete(`/usuarios/${selectedUser.id}`, {
        data: { realm: "" },
        headers: {
          Authorization: `Bearer token`,
        },
      });
      setIsDeleteDialogOpen(false);
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  const handleStatusChange = async () => {
    if (!selectedUser) return;

    try {
      await api.put(
        `/usuarios/${selectedUser.id}`,
        {
          ...selectedUser,
          ativo: !selectedUser.ativo,
          userId: "usuario?.email",
          realm: "realm",
        },
        {
          headers: {
            Authorization: `Bearer token`,
          },
        }
      );
      setIsStatusDialogOpen(false);
    } catch (error) {
      console.error("Erro ao alterar status do usuário:", error);
    }
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciamento de Usuários</h1>
        <Button onClick={handleCreate}>
          <UserPlus className="mr-2 h-4 w-4" />
          Novo Usuário
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data de Criação</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10">
                  <LoadingSpinner />
                </TableCell>
              </TableRow>
            ) : usuarios.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10">
                  Nenhum usuário encontrado
                </TableCell>
              </TableRow>
            ) : (
              usuarios.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell className="font-medium">
                    {usuario.nome} {usuario.sobrenome}
                  </TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>{usuario.cargo}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        usuario.ativo
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {usuario.ativo ? "Ativo" : "Inativo"}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(usuario.criadoEm).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(usuario)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleStatusDialog(usuario)}
                      >
                        {usuario.ativo ? (
                          <X className="h-4 w-4 text-red-500" />
                        ) : (
                          <Check className="h-4 w-4 text-green-500" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteDialog(usuario)}
                      >
                        <Trash className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogDescription />
          <DialogHeader>
            <DialogTitle>
              {editingUser ? "Editar Usuário" : "Criar Novo Usuário"}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sobrenome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input placeholder="Sobrenome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@exemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cargo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {...field}
                      >
                        <option value="USUARIO">Visitante</option>
                        <option value="ADMINISTRADOR">Administrador</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsFormOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o usuário{" "}
              <strong>
                {selectedUser?.nome} {selectedUser?.sobrenome}
              </strong>
              ? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-500">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={isStatusDialogOpen}
        onOpenChange={setIsStatusDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar alteração de status</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja{" "}
              {selectedUser?.ativo ? "inativar" : "ativar"} o usuário{" "}
              <strong>
                {selectedUser?.nome} {selectedUser?.sobrenome}
              </strong>
              ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleStatusChange}>
              {selectedUser?.ativo ? "Inativar" : "Ativar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

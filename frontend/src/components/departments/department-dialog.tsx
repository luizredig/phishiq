import { useEffect, useState } from "react";
import { Search, User, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useApi } from "../../hooks/use-api";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { ConfirmDialog } from "../ui/confirm-dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Department {
  id: string;
  name: string;
  is_active: boolean;
  pseudonyms: {
    pseudonym: {
      user: User;
    };
  }[];
}

interface DepartmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  department?: Department;
}

const departmentFormSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .nonempty("O nome do departamento é obrigatório")
    .transform((name) => {
      if (!name) return name;

      const words = name.split(" ");

      if (words[0]) {
        const firstWord = words[0];
        const firstLetter = firstWord.charAt(0);

        if (firstLetter === firstLetter.toLowerCase()) {
          words[0] = firstLetter.toUpperCase() + firstWord.slice(1);
        }
      }

      return words.join(" ");
    }),
});

type DepartmentFormData = z.infer<typeof departmentFormSchema>;

export function DepartmentDialog({
  open,
  onOpenChange,
  department,
}: DepartmentDialogProps) {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [usuariosSelecionados, setUsuariosSelecionados] = useState<string[]>(
    []
  );
  const [buscaUsuario, setBuscaUsuario] = useState("");
  const { post, put, get, delete: deleteRequest, loading } = useApi();
  const [confirmSaveOpen, setConfirmSaveOpen] = useState(false);
  const [pendingData, setPendingData] = useState<DepartmentFormData | null>(
    null
  );
  const [usersTotal, setUsersTotal] = useState(0);
  const [usersPage, setUsersPage] = useState(1);
  const usersPerPage = 10;

  interface UsersResponse {
    items: User[];
    total: number;
  }

  const form = useForm<DepartmentFormData>({
    resolver: zodResolver(departmentFormSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (open) {
      if (department) {
        form.reset({
          name: department.name,
        });

        setUsuariosSelecionados(
          department.pseudonyms?.map((u) => u.pseudonym?.user?.id) ?? []
        );
      } else {
        form.reset({
          name: "",
        });
        setUsuariosSelecionados([]);
      }
      setUsersPage(1);
      void fetchUsuarios();
    }
  }, [open, department, form]);

  useEffect(() => {
    if (open) void fetchUsuarios();
  }, [usersPage, open]);

  async function fetchUsuarios() {
    try {
      const response = await get<UsersResponse>(
        `/users?page=${usersPage}&pageSize=${usersPerPage}`
      );
      if (response) {
        setUsuarios(response.items);
        setUsersTotal(response.total);
      }
    } catch (error) {
      console.error("Error fetching usuarios:", error);
    }
  }

  async function doSave(data: DepartmentFormData) {
    try {
      if (department) {
        await put(`/departments/${department.id}`, {
          name: data.name,
        });

        const usuariosAtuais =
          department.pseudonyms?.map((p) => p.pseudonym?.user?.id) ?? [];
        const usuariosParaAdicionar = usuariosSelecionados.filter(
          (id) => !usuariosAtuais.includes(id)
        );
        const usuariosParaRemover = usuariosAtuais.filter(
          (id) => !usuariosSelecionados.includes(id)
        );

        await Promise.all([
          ...usuariosParaAdicionar?.map((usuarioId) =>
            post(`/departments/${department.id}/users/${usuarioId}`)
          ),

          ...usuariosParaRemover?.map((usuarioId) =>
            deleteRequest(`/departments/${department.id}/users/${usuarioId}`)
          ),
        ]);
      } else {
        const response = await post<Department>("/departments", {
          name: data.name,
        });

        if (response && usuariosSelecionados.length > 0) {
          await Promise.all(
            usuariosSelecionados?.map((usuarioId) =>
              post(`/departments/${response.id}/users/${usuarioId}`)
            )
          );
        }
      }
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  function onSubmit(data: DepartmentFormData) {
    setPendingData(data);
    setConfirmSaveOpen(true);
  }

  const usuariosFiltrados = usuarios?.filter((usuario) => {
    if (!buscaUsuario) return true;
    const termoBusca = buscaUsuario.toLowerCase();
    return (
      usuario.name.toLowerCase().includes(termoBusca) ||
      usuario.email.toLowerCase().includes(termoBusca)
    );
  });

  function toggleUsuario(usuarioId: string) {
    setUsuariosSelecionados((prev) =>
      prev.includes(usuarioId)
        ? prev.filter((id) => id !== usuarioId)
        : [...prev, usuarioId]
    );
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {department ? "Editar" : "Novo"} departamento
            </DialogTitle>
            <DialogDescription>
              Preencha as informações do departamento abaixo.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o nome do departamento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Label>Usuários</Label>
                    <span className="text-sm text-muted-foreground">
                      (Opcional)
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {usuariosSelecionados?.length || 0} selecionado(s)
                  </span>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-10"
                    placeholder="Buscar por nome ou email"
                    value={buscaUsuario}
                    onChange={(e) => setBuscaUsuario(e.target.value)}
                  />
                </div>

                <div className="border rounded-md p-2 space-y-2 max-h-40 overflow-y-auto">
                  {usuariosFiltrados.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-2">
                      Nenhum usuário encontrado.
                    </p>
                  ) : (
                    usuariosFiltrados?.map((usuario) => {
                      const isSelecionado = usuariosSelecionados?.includes(
                        usuario.id
                      );
                      return (
                        <div
                          key={usuario.id}
                          className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                            isSelecionado
                              ? "bg-primary/10 hover:bg-primary/20"
                              : "hover:bg-muted/50"
                          }`}
                          onClick={() => toggleUsuario(usuario.id)}
                        >
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <div className="text-sm">
                              <p>{usuario.name}</p>
                              <p className="text-muted-foreground">
                                {usuario.email}
                              </p>
                            </div>
                          </div>
                          {isSelecionado && (
                            <Badge
                              variant="secondary"
                              className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-600 border-red-200"
                            >
                              <X className="h-3 w-3" />
                            </Badge>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {buscaUsuario === "" &&
                  Math.ceil(usersTotal / usersPerPage) > 1 && (
                    <div className="pt-2">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() =>
                                setUsersPage((prev) => Math.max(prev - 1, 1))
                              }
                              className={
                                usersPage === 1
                                  ? "pointer-events-none opacity-50"
                                  : ""
                              }
                            />
                          </PaginationItem>

                          {Array.from(
                            { length: Math.ceil(usersTotal / usersPerPage) },
                            (_, i) => i + 1
                          ).map((page) => (
                            <PaginationItem key={page}>
                              <PaginationLink
                                onClick={() => setUsersPage(page)}
                                isActive={usersPage === page}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          ))}

                          <PaginationItem>
                            <PaginationNext
                              onClick={() =>
                                setUsersPage((prev) =>
                                  Math.min(
                                    prev + 1,
                                    Math.ceil(usersTotal / usersPerPage)
                                  )
                                )
                              }
                              className={
                                usersPage ===
                                Math.ceil(usersTotal / usersPerPage)
                                  ? "pointer-events-none opacity-50"
                                  : ""
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={loading}>
                  {department ? "Salvar" : "Criar"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={confirmSaveOpen}
        onOpenChange={setConfirmSaveOpen}
        title={department ? "Confirmar salvamento" : "Confirmar criação"}
        description={
          department
            ? "Deseja salvar as alterações deste departamento?"
            : "Deseja criar este novo departamento?"
        }
        confirmText={department ? "Salvar" : "Criar"}
        onConfirm={() => {
          if (pendingData) void doSave(pendingData);
          setConfirmSaveOpen(false);
          setPendingData(null);
        }}
      />
    </>
  );
}

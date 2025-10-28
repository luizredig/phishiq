/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Search, X } from "lucide-react";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ConfirmDialog } from "../ui/confirm-dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface Department {
  id: string;
  name: string;
}

interface UsuarioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  usuarioParaEditar?: {
    id: string;
    name: string;
    email: string;
    pseudonym?: {
      pseudonym_departments: {
        department: Department;
      }[];
    };
  };
}

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
});

type FormValues = z.infer<typeof formSchema>;

export function UsuarioDialog({
  open,
  onOpenChange,
  usuarioParaEditar,
}: UsuarioDialogProps) {
  const { post, put, get, delete: deleteRequest, loading } = useApi();
  const [departments, setDepartamentos] = useState<Department[]>([]);
  const [departmentsSelecionados, setDepartamentosSelecionados] = useState<
    string[]
  >([]);
  const [buscaDepartamento, setBuscaDepartamento] = useState("");
  const [confirmSaveOpen, setConfirmSaveOpen] = useState(false);
  const [pendingData, setPendingData] = useState<FormValues | null>(null);
  const [departmentsTotal, setDepartmentsTotal] = useState(0);
  const [departmentsPage, setDepartmentsPage] = useState(1);
  const departmentsPerPage = 10;

  interface DepartmentsResponse {
    items: Department[];
    total: number;
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  useEffect(() => {
    if (open) {
      setDepartmentsPage(1);
      fetchDepartamentos();
      if (usuarioParaEditar) {
        form.reset({
          name: usuarioParaEditar.name,
          email: usuarioParaEditar.email,
        });

        setDepartamentosSelecionados(
          usuarioParaEditar.pseudonym?.pseudonym_departments?.map(
            (d) => d.department.id
          ) || []
        );
      } else {
        form.reset({
          name: "",
          email: "",
        });
        setDepartamentosSelecionados([]);
      }
    }
  }, [open, usuarioParaEditar, form]);

  useEffect(() => {
    if (open) fetchDepartamentos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [departmentsPage]);

  async function fetchDepartamentos() {
    try {
      const response = await get<DepartmentsResponse>(
        `/departments?page=${departmentsPage}&pageSize=${departmentsPerPage}`
      );
      if (response) {
        setDepartamentos(response.items);
        setDepartmentsTotal(response.total);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  }

  async function doSave(data: FormValues) {
    const normalized: FormValues = {
      ...data,
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    };

    try {
      if (usuarioParaEditar) {
        const response = await put(
          `/users/${usuarioParaEditar.id}`,
          normalized
        );
        if (response) {
          const departmentsAtuais =
            usuarioParaEditar.pseudonym?.pseudonym_departments?.map(
              (d) => d.department.id
            ) || [];
          const departmentsParaAdicionar = departmentsSelecionados?.filter(
            (id) => !departmentsAtuais.includes(id)
          );
          const departmentsParaRemover = departmentsAtuais?.filter(
            (id) => !departmentsSelecionados.includes(id)
          );

          await Promise.all([
            ...departmentsParaAdicionar?.map((departamentoId) =>
              post(
                `/departments/${departamentoId}/users/${usuarioParaEditar.id}`,
                {}
              )
            ),
            ...departmentsParaRemover?.map((departamentoId) =>
              deleteRequest(
                `/departments/${departamentoId}/users/${usuarioParaEditar.id}`
              )
            ),
          ]);

          onOpenChange(false);
          form.reset();
        }
      } else {
        const response = await post<{ id: string }>("/users", normalized);
        if (response && departmentsSelecionados.length > 0) {
          await Promise.all(
            departmentsSelecionados?.map((departamentoId) =>
              post(`/departments/${departamentoId}/users/${response.id}`, {})
            )
          );
        }

        onOpenChange(false);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  function onSubmit(data: FormValues) {
    setPendingData(data);
    setConfirmSaveOpen(true);
  }

  const departmentsFiltrados = departments?.filter((departamento) => {
    if (!buscaDepartamento) return true;
    const termoBusca = buscaDepartamento.toLowerCase();
    return departamento.name.toLowerCase().includes(termoBusca);
  });

  function toggleDepartamento(departamentoId: string) {
    setDepartamentosSelecionados((prev) =>
      prev.includes(departamentoId)
        ? prev?.filter((id) => id !== departamentoId)
        : [...prev, departamentoId]
    );
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {usuarioParaEditar ? "Editar usuário" : "Novo usuário"}
            </DialogTitle>
            <DialogDescription>
              {usuarioParaEditar
                ? "Edite as informações do usuário."
                : "Preencha as informações para criar um novo usuário."}
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
                      <Input placeholder="Nome do usuário" {...field} />
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
                      <Input
                        type="email"
                        placeholder="Email do usuário"
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
                    <FormLabel>Departamentos</FormLabel>
                    <span className="text-sm text-muted-foreground">
                      (Opcional)
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {departmentsSelecionados.length} selecionado(s)
                  </span>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-10"
                    placeholder="Buscar por nome"
                    value={buscaDepartamento}
                    onChange={(e) => setBuscaDepartamento(e.target.value)}
                  />
                </div>

                <div className="border rounded-md p-2 space-y-2 max-h-40 overflow-y-auto">
                  {departmentsFiltrados.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-2">
                      Nenhum departamento encontrado.
                    </p>
                  ) : (
                    departmentsFiltrados?.map((departamento) => {
                      const isSelecionado = departmentsSelecionados.includes(
                        departamento.id
                      );
                      return (
                        <div
                          key={departamento.id}
                          className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                            isSelecionado
                              ? "bg-primary/10 hover:bg-primary/20"
                              : "hover:bg-muted/50"
                          }`}
                          onClick={() => toggleDepartamento(departamento.id)}
                        >
                          <div className="flex items-center gap-2">
                            <div className="text-sm">
                              <p>{departamento.name}</p>
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

                {buscaDepartamento === "" &&
                  Math.ceil(departmentsTotal / departmentsPerPage) > 1 && (
                    <div className="pt-2">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() =>
                                setDepartmentsPage((prev) =>
                                  Math.max(prev - 1, 1)
                                )
                              }
                              className={
                                departmentsPage === 1
                                  ? "pointer-events-none opacity-50"
                                  : ""
                              }
                            />
                          </PaginationItem>

                          {Array.from(
                            {
                              length: Math.ceil(
                                departmentsTotal / departmentsPerPage
                              ),
                            },
                            (_, i) => i + 1
                          ).map((page) => (
                            <PaginationItem key={page}>
                              <PaginationLink
                                onClick={() => setDepartmentsPage(page)}
                                isActive={departmentsPage === page}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          ))}

                          <PaginationItem>
                            <PaginationNext
                              onClick={() =>
                                setDepartmentsPage((prev) =>
                                  Math.min(
                                    prev + 1,
                                    Math.ceil(
                                      departmentsTotal / departmentsPerPage
                                    )
                                  )
                                )
                              }
                              className={
                                departmentsPage ===
                                Math.ceil(departmentsTotal / departmentsPerPage)
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
                  {usuarioParaEditar ? "Salvar" : "Criar"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={confirmSaveOpen}
        onOpenChange={setConfirmSaveOpen}
        title={usuarioParaEditar ? "Confirmar salvamento" : "Confirmar criação"}
        description={
          usuarioParaEditar
            ? "Deseja salvar as alterações deste usuário?"
            : "Deseja criar este novo usuário?"
        }
        confirmText={usuarioParaEditar ? "Salvar" : "Criar"}
        onConfirm={() => {
          if (pendingData) void doSave(pendingData);
          setConfirmSaveOpen(false);
          setPendingData(null);
        }}
      />
    </>
  );
}

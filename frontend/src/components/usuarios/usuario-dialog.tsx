/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { CargoUsuario } from "../../types/cargo-usuario";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Departamento {
  id: string;
  nome: string;
}

interface UsuarioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  usuarioParaEditar?: {
    id: string;
    nome: string;
    sobrenome: string | null;
    email: string;
    cargo: CargoUsuario;
    departamentos: {
      departamento: Departamento;
    }[];
  };
}

const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  email: z.string().email("Email inválido"),
  cargo: z.enum(["FUNCIONARIO"]),
});

type FormValues = z.infer<typeof formSchema>;

export function UsuarioDialog({
  open,
  onOpenChange,
  usuarioParaEditar,
}: UsuarioDialogProps) {
  const { post, put, get, delete: deleteRequest, loading } = useApi();
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [departamentosSelecionados, setDepartamentosSelecionados] = useState<
    string[]
  >([]);
  const [buscaDepartamento, setBuscaDepartamento] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      sobrenome: "",
      email: "",
      cargo: "FUNCIONARIO",
    },
  });

  useEffect(() => {
    if (open) {
      fetchDepartamentos();
      if (usuarioParaEditar) {
        form.reset({
          nome: usuarioParaEditar.nome,
          sobrenome: usuarioParaEditar.sobrenome || "",
          email: usuarioParaEditar.email,
          cargo: "FUNCIONARIO",
        });
        setDepartamentosSelecionados(
          usuarioParaEditar.departamentos?.map((d) => d.department.id)
        );
      } else {
        form.reset({
          nome: "",
          sobrenome: "",
          email: "",
          cargo: "FUNCIONARIO",
        });
        setDepartamentosSelecionados([]);
      }
    }
  }, [open, usuarioParaEditar, form]);

  async function fetchDepartamentos() {
    try {
      const response = await get<Departamento[]>("/departamentos");
      if (response) {
        setDepartamentos(response);
      }
    } catch (error) {
      console.error("Error fetching departamentos:", error);
    }
  }

  async function onSubmit(data: FormValues) {
    data.nome = data.nome.charAt(0).toUpperCase() + data.nome.slice(1);
    data.sobrenome =
      data.sobrenome.charAt(0).toUpperCase() + data.sobrenome.slice(1);

    try {
      if (usuarioParaEditar) {
        const response = await put(`/usuarios/${usuarioParaEditar.id}`, data);
        if (response) {
          // Atualiza departamentos do usuário
          const departamentosAtuais = usuarioParaEditar.departamentos?.map(
            (d) => d.department.id
          );
          const departamentosParaAdicionar = departamentosSelecionados?.filter(
            (id) => !departamentosAtuais.includes(id)
          );
          const departamentosParaRemover = departamentosAtuais?.filter(
            (id) => !departamentosSelecionados.includes(id)
          );

          await Promise.all([
            // Adiciona novos departamentos
            ...departamentosParaAdicionar?.map((departamentoId) =>
              post(
                `/departamentos/${departamentoId}/usuarios/${usuarioParaEditar.id}`,
                {}
              )
            ),
            // Remove departamentos
            ...departamentosParaRemover?.map((departamentoId) =>
              deleteRequest(
                `/departamentos/${departamentoId}/usuarios/${usuarioParaEditar.id}`
              )
            ),
          ]);

          onOpenChange(false);
          form.reset();
        }
      } else {
        const response = await post<{ id: string }>("/usuarios", data);
        if (response && departamentosSelecionados.length > 0) {
          await Promise.all(
            departamentosSelecionados?.map((departamentoId) =>
              post(
                `/departamentos/${departamentoId}/usuarios/${response.id}`,
                {}
              )
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

  const departamentosFiltrados = departamentos?.filter((departamento) => {
    if (!buscaDepartamento) return true;
    const termoBusca = buscaDepartamento.toLowerCase();
    return departamento.nome.toLowerCase().includes(termoBusca);
  });

  function toggleDepartamento(departamentoId: string) {
    setDepartamentosSelecionados((prev) =>
      prev.includes(departamentoId)
        ? prev?.filter((id) => id !== departamentoId)
        : [...prev, departamentoId]
    );
  }

  return (
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
              name="nome"
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
              name="sobrenome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input placeholder="Sobrenome do usuário" {...field} />
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

            <FormField
              control={form.control}
              name="cargo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um cargo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FUNCIONARIO">Funcionário</SelectItem>
                    </SelectContent>
                  </Select>
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
                  {departamentosSelecionados.length} selecionado(s)
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
                {departamentosFiltrados.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-2">
                    Nenhum departamento encontrado.
                  </p>
                ) : (
                  departamentosFiltrados?.map((departamento) => {
                    const isSelecionado = departamentosSelecionados.includes(
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
                            <p>{departamento.nome}</p>
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
  );
}

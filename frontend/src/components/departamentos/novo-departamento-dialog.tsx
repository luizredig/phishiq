/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Plus, Search, User, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useApi } from "../../hooks/use-api";
import { useToast } from "../../hooks/use-toast";
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

interface Usuario {
  id: string;
  nome: string;
  email: string;
}

interface Departamento {
  id: string;
  nome: string;
  ativo: boolean;
  usuarios: {
    usuario: Usuario;
  }[];
}

interface NovoDepartamentoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  departamentoParaEditar?: Departamento;
}

const departamentoFormSchema = z.object({
  nome: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .nonempty("O nome do departamento é obrigatório")
    .transform((name) => {
      // Se a string estiver vazia, retorna ela mesma
      if (!name) return name;

      // Divide o nome em palavras
      const words = name.split(" ");

      // Capitaliza a primeira letra da primeira palavra se estiver em minúscula
      if (words[0]) {
        const firstWord = words[0];
        const firstLetter = firstWord.charAt(0);

        if (firstLetter === firstLetter.toLowerCase()) {
          words[0] = firstLetter.toUpperCase() + firstWord.slice(1);
        }
      }

      // Junta as palavras de volta
      return words.join(" ");
    }),
});

type DepartamentoFormData = z.infer<typeof departamentoFormSchema>;

export function NovoDepartamentoDialog({
  open,
  onOpenChange,
  departamentoParaEditar,
}: NovoDepartamentoDialogProps) {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuariosSelecionados, setUsuariosSelecionados] = useState<string[]>(
    []
  );
  const [buscaUsuario, setBuscaUsuario] = useState("");
  const { post, put, get, delete: deleteRequest, loading } = useApi();
  const { toast } = useToast();

  const form = useForm<DepartamentoFormData>({
    resolver: zodResolver(departamentoFormSchema),
    defaultValues: {
      nome: "",
    },
  });

  useEffect(() => {
    if (open) {
      fetchUsuarios();
      if (departamentoParaEditar) {
        form.reset({
          nome: departamentoParaEditar.nome,
        });
        setUsuariosSelecionados(
          departamentoParaEditar.usuarios.map((u) => u.usuario.id)
        );
      } else {
        form.reset({
          nome: "",
        });
        setUsuariosSelecionados([]);
      }
    }
  }, [open, departamentoParaEditar, form]);

  async function fetchUsuarios() {
    try {
      const response = await get<Usuario[]>("/usuarios");
      if (response) {
        setUsuarios(response);
      }
    } catch (error) {
      toast({
        title: "Erro!",
        description: "Não foi possível carregar os usuários.",
        variant: "error",
      });
    }
  }

  async function onSubmit(data: DepartamentoFormData) {
    try {
      if (departamentoParaEditar) {
        await put(`/departamentos/${departamentoParaEditar.id}`, {
          nome: data.nome,
        });

        // Atualiza usuários do departamento
        const usuariosAtuais = departamentoParaEditar.usuarios.map(
          (u) => u.usuario.id
        );
        const usuariosParaAdicionar = usuariosSelecionados.filter(
          (id) => !usuariosAtuais.includes(id)
        );
        const usuariosParaRemover = usuariosAtuais.filter(
          (id) => !usuariosSelecionados.includes(id)
        );

        await Promise.all([
          // Adiciona novos usuários
          ...usuariosParaAdicionar.map((usuarioId) =>
            post(
              `/departamentos/${departamentoParaEditar.id}/usuarios/${usuarioId}`,
              {}
            )
          ),
          // Remove usuários (exclui o registro da tabela de relacionamento)
          ...usuariosParaRemover.map((usuarioId) =>
            deleteRequest(
              `/departamentos/${departamentoParaEditar.id}/usuarios/${usuarioId}`
            )
          ),
        ]);

        toast({
          title: "Sucesso!",
          description: "Departamento atualizado com sucesso.",
          variant: "success",
        });
      } else {
        const response = await post<Departamento>("/departamentos", {
          nome: data.nome,
        });

        if (response && usuariosSelecionados.length > 0) {
          await Promise.all(
            usuariosSelecionados.map((usuarioId) =>
              post(`/departamentos/${response.id}/usuarios/${usuarioId}`, {})
            )
          );
        }

        toast({
          title: "Sucesso!",
          description: "Departamento criado com sucesso.",
          variant: "success",
        });
      }

      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Erro!",
        description: departamentoParaEditar
          ? "Não foi possível atualizar o departamento."
          : "Não foi possível criar o departamento.",
        variant: "error",
      });
    }
  }

  const usuariosFiltrados = usuarios.filter((usuario) => {
    if (!buscaUsuario) return true;
    const termoBusca = buscaUsuario.toLowerCase();
    return (
      usuario.nome.toLowerCase().includes(termoBusca) ||
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {departamentoParaEditar ? "Editar" : "Novo"} departamento
          </DialogTitle>
          <DialogDescription>
            Preencha as informações do departamento abaixo.
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
                  {usuariosSelecionados.length} selecionado(s)
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
                  usuariosFiltrados.map((usuario) => {
                    const isSelecionado = usuariosSelecionados.includes(
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
                            <p>{usuario.nome}</p>
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
                {departamentoParaEditar ? "Salvar" : "Criar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

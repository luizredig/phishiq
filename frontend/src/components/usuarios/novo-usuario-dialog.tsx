/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { CargoUsuario } from "../../types/cargo-usuario";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useApi } from "../../hooks/use-api";
import { useToast } from "../../hooks/use-toast";
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

interface NovoUsuarioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  usuarioParaEditar?: {
    id: string;
    nome: string;
    sobrenome: string | null;
    email: string;
    cargo: CargoUsuario;
  };
}

const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  email: z.string().email("Email inválido"),
  cargo: z.enum(["FUNCIONARIO"]),
});

type FormValues = z.infer<typeof formSchema>;

export function NovoUsuarioDialog({
  open,
  onOpenChange,
  usuarioParaEditar,
}: NovoUsuarioDialogProps) {
  const { toast } = useToast();
  const { post, put, loading } = useApi();

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
    if (usuarioParaEditar) {
      form.reset({
        nome: usuarioParaEditar.nome,
        sobrenome: usuarioParaEditar.sobrenome || "",
        email: usuarioParaEditar.email,
        cargo: "FUNCIONARIO",
      });
    } else {
      form.reset({
        nome: "",
        sobrenome: "",
        email: "",
        cargo: "FUNCIONARIO",
      });
    }
  }, [usuarioParaEditar, form]);

  async function onSubmit(data: FormValues) {
    data.nome = data.nome.charAt(0).toUpperCase() + data.nome.slice(1);
    data.sobrenome =
      data.sobrenome.charAt(0).toUpperCase() + data.sobrenome.slice(1);

    try {
      if (usuarioParaEditar) {
        const response = await put(`/usuarios/${usuarioParaEditar.id}`, data);
        if (response) {
          toast({
            title: "Sucesso!",
            description: "Usuário atualizado com sucesso.",
          });
          onOpenChange(false);
          form.reset();
        }
      } else {
        const response = await post("/usuarios", data);
        if (response) {
          toast({
            title: "Sucesso!",
            description: "Usuário criado com sucesso.",
          });
          onOpenChange(false);
          form.reset();
        }
      }
    } catch (error) {
      toast({
        title: "Erro!",
        description: usuarioParaEditar
          ? "Não foi possível atualizar o usuário."
          : "Não foi possível criar o usuário.",
        variant: "error",
      });
    }
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

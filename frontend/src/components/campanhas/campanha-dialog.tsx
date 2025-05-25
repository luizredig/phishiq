import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useApi } from "../../hooks/use-api";

import { socket } from "../../lib/socket";

const formSchema = z.object({
  titulo: z.string().min(1, "Título é obrigatório"),
  descricao: z.string().optional(),
  status: z.enum(["INICIADA", "EM_ANDAMENTO", "FINALIZADA"]),
});

type FormValues = z.infer<typeof formSchema>;

interface CampanhaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campanha?: {
    id: string;
    titulo: string;
    descricao: string | null;
    status: "INICIADA" | "EM_ANDAMENTO" | "FINALIZADA";
  };
}

export function CampanhaDialog({
  open,
  onOpenChange,
  campanha,
}: CampanhaDialogProps) {
  const { post, put, loading } = useApi();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titulo: "",
      descricao: "",
      status: "INICIADA",
    },
  });

  useEffect(() => {
    if (open) {
      if (campanha) {
        form.reset({
          titulo: campanha.titulo,
          descricao: campanha.descricao || "",
          status: campanha.status,
        });
      } else {
        form.reset({
          titulo: "",
          descricao: "",
          status: "INICIADA",
        });
      }
    }
  }, [open, campanha, form]);

  async function onSubmit(data: FormValues) {
    try {
      console.log("Submitting form data:", data);
      if (campanha) {
        await put(`/campanhas/${campanha.id}`, data);
        socket.emit("updateCampanha", { id: campanha.id, data });
      } else {
        await post("/campanhas", data);
        socket.emit("createCampanha", data);
      }
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {campanha ? "Editar campanha" : "Nova campanha"}
          </DialogTitle>
          <DialogDescription>
            {campanha
              ? "Faça alterações na campanha aqui."
              : "Preencha os dados para criar uma nova campanha."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o título" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite a descrição"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="INICIADA">Iniciada</SelectItem>
                      <SelectItem value="EM_ANDAMENTO">Em andamento</SelectItem>
                      <SelectItem value="FINALIZADA">Finalizada</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" disabled={loading}>
                {campanha ? "Salvar" : "Criar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

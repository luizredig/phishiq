import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useApi } from "../../hooks/use-api";
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
import { Textarea } from "../ui/textarea";

interface PhishingTemplate {
  id: string;
  name: string;
  text: string;
  is_active: boolean;
}

interface TemplateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  template?: PhishingTemplate;
}

const templateFormSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(100, "O nome deve ter no máximo 100 caracteres")
    .nonempty("O nome do template é obrigatório"),
  text: z.string().min(10, "O texto deve ter pelo menos 10 caracteres"),
});

type TemplateFormData = z.infer<typeof templateFormSchema>;

export function TemplateDialog({
  open,
  onOpenChange,
  template,
}: TemplateDialogProps) {
  const { post, put, loading } = useApi();

  const form = useForm<TemplateFormData>({
    resolver: zodResolver(templateFormSchema),
    defaultValues: {
      name: "",
      text: "",
    },
  });

  useEffect(() => {
    if (!open) return;
    if (template) {
      form.reset({
        name: template.name,
        text: template.text,
      });
    } else {
      form.reset({ name: "", text: "" });
    }
  }, [open, template, form]);

  async function onSubmit(data: TemplateFormData) {
    try {
      if (template) {
        await put(`/phishing-templates/${template.id}`, data);
      } else {
        await post(`/phishing-templates`, data);
      }
      onOpenChange(false);
    } catch (e) {
      // noop (erros já são tratados no hook)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{template ? "Editar" : "Novo"} template</DialogTitle>
          <DialogDescription>
            Defina nome, conteúdo HTML e miniatura (opcional).
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Este será o título do email enviado" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Texto</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[220px] font-mono text-sm"
                      placeholder="Escreva o texto que será enviado no e-mail"
                      {...field}
                    />
                  </FormControl>
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
                {template ? "Salvar" : "Criar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

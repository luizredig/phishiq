/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { X } from "lucide-react";
import { useApi } from "../../hooks/use-api";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface NovoTesteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  testeParaEditar?: {
    id: string;
    canal: "EMAIL";
    status: "ENVIADO" | "ABERTO" | "CLIQUE" | "SUCESSO" | "FALHA";
    caiuNoTeste: boolean;
    reportouPhishing: boolean;
    departamentos: {
      departamento: {
        id: string;
        nome: string;
      };
    }[];
  };
}

interface Departamento {
  id: string;
  nome: string;
}

interface Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
}

const baseFormSchema = z.object({
  canal: z.enum(["EMAIL"]),
  departamentos: z.array(z.string()).optional(),
  usuarioId: z.string().optional(),
});

type FormValues = z.infer<typeof baseFormSchema>;

export function NovoTesteDialog({
  open,
  onOpenChange,
  testeParaEditar,
}: NovoTesteDialogProps) {
  const { post, put, get, loading } = useApi();
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [selectedDepartamentos, setSelectedDepartamentos] = useState<
    Departamento[]
  >([]);
  const [activeTab, setActiveTab] = useState("departamentos");

  const formSchema = baseFormSchema.refine(
    (data) => {
      // Se estiver na aba de departamentos, precisa ter pelo menos um departamento
      if (activeTab === "departamentos") {
        return data.departamentos && data.departamentos.length > 0;
      }
      // Se estiver na aba individual, precisa ter um usuário
      return !!data.usuarioId;
    },
    {
      message: "Selecione pelo menos um departamento ou um usuário",
    }
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      canal: "EMAIL",
      departamentos: [],
      usuarioId: undefined,
    },
  });

  useEffect(() => {
    fetchDepartamentos();
    fetchUsuarios();
  }, []);

  useEffect(() => {
    if (testeParaEditar) {
      form.reset({
        canal: testeParaEditar.canal,
        departamentos: testeParaEditar.departamentos.map(
          (d) => d.departamento.id
        ),
        usuarioId: undefined,
      });
      setSelectedDepartamentos(
        testeParaEditar.departamentos.map((d) => d.departamento)
      );
      setActiveTab("departamentos");
    } else {
      form.reset({
        canal: "EMAIL",
        departamentos: [],
        usuarioId: undefined,
      });
      setSelectedDepartamentos([]);
    }
  }, [testeParaEditar, form]);

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

  async function fetchUsuarios() {
    try {
      const response = await get<Usuario[]>("/usuarios");
      if (response) {
        setUsuarios(response);
      }
    } catch (error) {
      console.error("Error fetching usuarios:", error);
    }
  }

  function handleDepartamentoSelect(departamento: Departamento) {
    const isSelected = selectedDepartamentos.some(
      (d) => d.id === departamento.id
    );
    if (isSelected) {
      setSelectedDepartamentos((prev) =>
        prev.filter((d) => d.id !== departamento.id)
      );
      form.setValue(
        "departamentos",
        form.getValues("departamentos")?.filter((id) => id !== departamento.id)
      );
    } else {
      setSelectedDepartamentos((prev) => [...prev, departamento]);
      form.setValue("departamentos", [
        ...(form.getValues("departamentos") || []),
        departamento.id,
      ]);
    }
  }

  async function onSubmit(data: FormValues) {
    try {
      // Limpa os campos não utilizados baseado na aba ativa
      const payload = {
        canal: data.canal,
        ...(activeTab === "departamentos"
          ? { departamentos: data.departamentos }
          : { usuarioId: data.usuarioId }),
      };

      if (testeParaEditar) {
        const response = await put(`/testes/${testeParaEditar.id}`, payload);
        if (response) {
          onOpenChange(false);
          form.reset();
        }
      } else {
        const response = await post("/testes", payload);
        if (response) {
          onOpenChange(false);
          form.reset();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {testeParaEditar ? "Editar teste" : "Novo teste"}
          </DialogTitle>
          <DialogDescription>
            {testeParaEditar
              ? "Edite as informações do teste."
              : "Preencha as informações para criar um novo teste."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="canal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Canal</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um canal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="EMAIL">Email</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="departamentos">
                  Envio por departamento
                </TabsTrigger>
                <TabsTrigger value="individual">Envio individual</TabsTrigger>
              </TabsList>

              <TabsContent value="departamentos">
                <FormField
                  control={form.control}
                  name="departamentos"
                  render={() => (
                    <FormItem>
                      <FormLabel>Departamentos</FormLabel>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {selectedDepartamentos.map((departamento) => (
                            <Badge
                              key={departamento.id}
                              variant="secondary"
                              className="flex items-center gap-1"
                            >
                              {departamento.nome}
                              <X
                                className="h-3 w-3 cursor-pointer"
                                onClick={() =>
                                  handleDepartamentoSelect(departamento)
                                }
                              />
                            </Badge>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {departamentos
                            .filter(
                              (d) =>
                                !selectedDepartamentos.some(
                                  (selected) => selected.id === d.id
                                )
                            )
                            .map((departamento) => (
                              <div
                                key={departamento.id}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={departamento.id}
                                  checked={selectedDepartamentos.some(
                                    (d) => d.id === departamento.id
                                  )}
                                  onCheckedChange={() =>
                                    handleDepartamentoSelect(departamento)
                                  }
                                />
                                <label
                                  htmlFor={departamento.id}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {departamento.nome}
                                </label>
                              </div>
                            ))}
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="individual">
                <FormField
                  control={form.control}
                  name="usuarioId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Usuário</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um usuário" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {usuarios.map((usuario) => (
                            <SelectItem key={usuario.id} value={usuario.id}>
                              {usuario.nome} {usuario.sobrenome} (
                              {usuario.email})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>

              <Button type="submit" disabled={loading}>
                {testeParaEditar ? "Salvar" : "Criar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

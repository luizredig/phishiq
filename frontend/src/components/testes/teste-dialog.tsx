/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { X, Info } from "lucide-react";
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
import { Alert, AlertDescription } from "../ui/alert";

interface TesteDialogProps {
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

interface Campanha {
  id: string;
  titulo: string;
}

const baseFormSchema = z.object({
  canal: z.enum(["EMAIL"]),
  departamentos: z.array(z.string()).optional(),
  usuarioId: z.string().optional(),
  campanhaId: z.string().optional(),
});

type FormValues = z.infer<typeof baseFormSchema>;

export function TesteDialog({
  open,
  onOpenChange,
  testeParaEditar,
}: TesteDialogProps) {
  const { post, put, get, loading } = useApi();
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [selectedDepartamentos, setSelectedDepartamentos] = useState<
    Departamento[]
  >([]);
  const [activeTab, setActiveTab] = useState("departamentos");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      message:
        activeTab === "departamentos"
          ? "Selecione pelo menos um departamento"
          : "Selecione um usuário",
      path: activeTab === "departamentos" ? ["departamentos"] : ["usuarioId"],
    }
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      canal: "EMAIL",
      departamentos: [],
      usuarioId: undefined,
      campanhaId: undefined,
    },
  });

  useEffect(() => {
    fetchDepartamentos();
    fetchUsuarios();
    fetchCampanhas();
  }, []);

  useEffect(() => {
    if (testeParaEditar) {
      form.reset({
        canal: testeParaEditar.canal,
        departamentos: testeParaEditar.departamentos.map(
          (d) => d.departamento.id
        ),
        usuarioId: undefined,
        campanhaId: undefined,
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
        campanhaId: undefined,
      });
      setSelectedDepartamentos([]);
    }
  }, [testeParaEditar, form]);

  // Limpa os campos da tab inativa quando trocar de tab
  useEffect(() => {
    if (activeTab === "departamentos") {
      form.setValue("usuarioId", undefined);
    } else {
      form.setValue("departamentos", []);
      setSelectedDepartamentos([]);
    }
  }, [activeTab, form]);

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

  async function fetchCampanhas() {
    try {
      const response = await get<Campanha[]>("/campanhas");
      if (response) {
        setCampanhas(response);
      }
    } catch (error) {
      console.error("Error fetching campanhas:", error);
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
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Limpa os campos não utilizados baseado na aba ativa
      const payload = {
        canal: data.canal,
        ...(activeTab === "departamentos"
          ? { departamentos: data.departamentos }
          : { usuarioId: data.usuarioId }),
        ...(data.campanhaId &&
          data.campanhaId !== "none" && { campanhaId: data.campanhaId }),
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
    } finally {
      setIsSubmitting(false);
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
                <Alert className="mb-4 bg-yellow-50 border-yellow-200 text-yellow-800">
                  <Info className="h-4 w-4 stroke-yellow-800" />
                  <AlertDescription>
                    Apenas departamentos com usuários cadastrados serão
                    exibidos.
                  </AlertDescription>
                </Alert>
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
                        {departamentos.length === 0 ? (
                          <div className="text-center py-4 text-muted-foreground">
                            Nenhum departamento com usuários cadastrados
                            encontrado.
                          </div>
                        ) : (
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
                        )}
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
                      {usuarios.length === 0 ? (
                        <div className="text-center py-4 text-muted-foreground">
                          Nenhum usuário cadastrado.
                        </div>
                      ) : (
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
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <FormField
              control={form.control}
              name="campanhaId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Campanha{" "}
                    <span className="text-muted-foreground">(opcional)</span>
                  </FormLabel>
                  <Alert className="mb-4 bg-blue-50 border-blue-200 text-blue-800">
                    <Info className="h-4 w-4 stroke-blue-800" />
                    <AlertDescription>
                      Atribuir um teste a uma campanha significa que ele possui
                      um objetivo específico, o da campanha.
                    </AlertDescription>
                  </Alert>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma campanha" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="none">Nenhuma</SelectItem>
                      {campanhas.map((campanha) => (
                        <SelectItem key={campanha.id} value={campanha.id}>
                          {campanha.titulo}
                        </SelectItem>
                      ))}
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
                disabled={isSubmitting}
              >
                Cancelar
              </Button>

              <Button type="submit" disabled={loading || isSubmitting}>
                {testeParaEditar ? "Salvar" : "Criar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

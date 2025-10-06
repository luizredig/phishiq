/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Info, Search, User, X } from "lucide-react";
import { useApi } from "../../hooks/use-api";
import { Alert, AlertDescription } from "../ui/alert";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface TesteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  testeParaEditar?: {
    id: string;
    canal: "EMAIL";
    status: "ENVIADO" | "FALHA";
    caiuNoTeste: boolean;
    reportouPhishing: boolean;
    departments: {
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
  departments: z.array(z.string()).optional(),
  usuarioId: z.string().optional(),
});

type FormValues = z.infer<typeof baseFormSchema>;

export function PhishingDialog({
  open,
  onOpenChange,
  testeParaEditar,
}: TesteDialogProps) {
  const { post, put, get, loading } = useApi();

  const [departments, setDepartamentos] = useState<Departamento[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [selectedDepartamentos, setSelectedDepartamentos] = useState<
    Departamento[]
  >([]);
  const [activeTab, setActiveTab] = useState("departments");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buscaUsuario, setBuscaUsuario] = useState("");
  const [buscaDepartamento, setBuscaDepartamento] = useState("");

  const formSchema = baseFormSchema.refine(
    (data) => {
      // Se estiver na aba de departments, precisa ter pelo menos um departamento
      if (activeTab === "departments") {
        return data.departments && data.departments.length > 0;
      }
      // Se estiver na aba individual, precisa ter um usuário
      return !!data.usuarioId;
    },
    {
      message:
        activeTab === "departments"
          ? "Selecione pelo menos um departamento"
          : "Selecione um usuário",
      path: activeTab === "departments" ? ["departments"] : ["usuarioId"],
    }
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      canal: "EMAIL",
      departments: [],
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
        departments: testeParaEditar.departments?.map((d) => d.department.id),
        usuarioId: undefined,
      });
      setSelectedDepartamentos(
        testeParaEditar.departments?.map((d) => d.departamento)
      );
      setActiveTab("departments");
    } else {
      form.reset({
        canal: "EMAIL",
        departments: [],
        usuarioId: undefined,
      });
      setSelectedDepartamentos([]);
    }
  }, [testeParaEditar, form]);

  // Limpa os campos da tab inativa quando trocar de tab
  useEffect(() => {
    if (activeTab === "departments") {
      form.setValue("usuarioId", undefined);
    } else {
      form.setValue("departments", []);
      setSelectedDepartamentos([]);
    }
  }, [activeTab, form]);

  async function fetchDepartamentos() {
    try {
      const response = await get<Departamento[]>(
        "/departments/ativos-com-usuarios"
      );
      if (response) {
        setDepartamentos(response);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
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
    const isSelected = selectedDepartamentos?.some(
      (d) => d.id === departamento.id
    );
    if (isSelected) {
      setSelectedDepartamentos((prev) =>
        prev?.filter((d) => d.id !== departamento.id)
      );
      form.setValue(
        "departments",
        form.getValues("departments")?.filter((id) => id !== departamento.id)
      );
    } else {
      setSelectedDepartamentos((prev) => [...prev, departamento]);
      form.setValue("departments", [
        ...(form.getValues("departments") || []),
        departamento.id,
      ]);
    }
  }

  const usuariosFiltrados = usuarios?.filter((usuario) => {
    if (!buscaUsuario) return true;
    const termoBusca = buscaUsuario.toLowerCase();
    return (
      usuario.nome.toLowerCase().includes(termoBusca) ||
      usuario.email.toLowerCase().includes(termoBusca)
    );
  });

  const departmentsFiltrados = departments?.filter((departamento) => {
    if (!buscaDepartamento) return true;
    const termoBusca = buscaDepartamento.toLowerCase();
    return departamento.nome.toLowerCase().includes(termoBusca);
  });

  async function onSubmit(data: FormValues) {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const payload = {
        canal: data.canal,
        nomeEmpresa: "Empresa",
        ...(activeTab === "departments"
          ? { departments: data.departments }
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
                <TabsTrigger value="departments">
                  Envio por departamento
                </TabsTrigger>
                <TabsTrigger value="individual">Envio individual</TabsTrigger>
              </TabsList>

              <TabsContent value="departments">
                <Alert className="mb-4 bg-muted border-muted-foreground/20">
                  <Info className="h-4 w-4 stroke-muted-foreground" />
                  <AlertDescription className="text-muted-foreground">
                    Atualmente, há apenas uma opção de template de e-mail
                    disponível e ele será automaticamente selecionado.
                  </AlertDescription>
                </Alert>

                <div className="mb-4">
                  <FormLabel>Template</FormLabel>
                  <Select disabled defaultValue="bonus">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bonus">Bônus surpresa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Alert className="mb-4 bg-yellow-50 border-yellow-200 text-yellow-800">
                  <Info className="h-4 w-4 stroke-yellow-800" />
                  <AlertDescription>
                    Apenas departments com usuários cadastrados serão exibidos.
                  </AlertDescription>
                </Alert>

                <FormField
                  control={form.control}
                  name="departments"
                  render={() => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Departamentos</FormLabel>
                        <span className="text-sm text-muted-foreground">
                          {selectedDepartamentos.length} selecionado(s)
                        </span>
                      </div>
                      <div className="space-y-2">
                        {departments.length === 0 ? (
                          <div className="text-center py-4 text-muted-foreground">
                            Nenhum departamento com usuários cadastrados
                            encontrado.
                          </div>
                        ) : (
                          <>
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                className="pl-10"
                                placeholder="Buscar por nome"
                                value={buscaDepartamento}
                                onChange={(e) =>
                                  setBuscaDepartamento(e.target.value)
                                }
                              />
                            </div>

                            <div className="border rounded-md p-2 space-y-2 max-h-40 overflow-y-auto">
                              {departmentsFiltrados.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-2">
                                  Nenhum departamento encontrado.
                                </p>
                              ) : (
                                departmentsFiltrados?.map((departamento) => {
                                  const isSelecionado =
                                    selectedDepartamentos?.some(
                                      (d) => d.id === departamento.id
                                    );
                                  return (
                                    <div
                                      key={departamento.id}
                                      className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                                        isSelecionado
                                          ? "bg-primary/10 hover:bg-primary/20"
                                          : "hover:bg-muted/50"
                                      }`}
                                      onClick={() =>
                                        handleDepartamentoSelect(departamento)
                                      }
                                    >
                                      <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-muted-foreground" />
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
                          </>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="individual">
                <Alert className="mb-4 bg-muted border-muted-foreground/20">
                  <Info className="h-4 w-4 stroke-muted-foreground" />
                  <AlertDescription className="text-muted-foreground">
                    Atualmente, há apenas uma opção de template de e-mail
                    disponível e ele será automaticamente selecionado.
                  </AlertDescription>
                </Alert>

                <div className="mb-4">
                  <FormLabel>Template</FormLabel>
                  <Select disabled defaultValue="bonus">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bonus">Bônus surpresa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
                        <div className="space-y-2">
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
                              usuariosFiltrados?.map((usuario) => (
                                <div
                                  key={usuario.id}
                                  className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                                    field.value === usuario.id
                                      ? "bg-primary/10 hover:bg-primary/20"
                                      : "hover:bg-muted/50"
                                  }`}
                                  onClick={() => field.onChange(usuario.id)}
                                >
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <div className="text-sm">
                                      <p>
                                        {usuario.nome} {usuario.sobrenome}
                                      </p>
                                      <p className="text-muted-foreground">
                                        {usuario.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      )}
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

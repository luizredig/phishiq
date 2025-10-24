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

interface PhishingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phishingParaEditar?: {
    id: string;
    channel: "EMAIL";
    status: "ENVIADO" | "FALHA";
    clicked: boolean;
    departments: {
      department: {
        id: string;
        name: string;
      };
    }[];
  };
}

interface Department {
  id: string;
  name: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface TemplateItem {
  id: string;
  name: string;
}

const baseFormSchema = z.object({
  channel: z.enum(["EMAIL"]),
  departments: z.array(z.string()).optional(),
  userId: z.string().optional(),
  templateId: z
    .string({ required_error: "Selecione um template" })
    .min(1, "Selecione um template"),
});

type FormValues = z.infer<typeof baseFormSchema>;

export function PhishingDialog({
  open,
  onOpenChange,
  phishingParaEditar,
}: PhishingDialogProps) {
  const { post, put, get, loading } = useApi();

  const [departments, setDepartamentos] = useState<Department[]>([]);
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [selectedDepartamentos, setSelectedDepartamentos] = useState<
    Department[]
  >([]);
  const [activeTab, setActiveTab] = useState("departments");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buscaUsuario, setBuscaUsuario] = useState("");
  const [buscaDepartamento, setBuscaDepartamento] = useState("");
  const [templates, setTemplates] = useState<TemplateItem[]>([]);

  const formSchema = baseFormSchema.refine(
    (data) => {
      if (activeTab === "departments") {
        return data.departments && data.departments.length > 0;
      }

      return !!data.userId;
    },
    {
      message:
        activeTab === "departments"
          ? "Selecione pelo menos um departamento"
          : "Selecione um usuário",
      path: activeTab === "departments" ? ["departments"] : ["userId"],
    }
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      channel: "EMAIL",
      departments: [],
      userId: undefined,
    },
  });

  useEffect(() => {
    fetchDepartamentos();
    fetchUsuarios();
    fetchTemplates();
  }, []);

  useEffect(() => {
    if (phishingParaEditar) {
      form.reset({
        channel: phishingParaEditar.channel,
        departments: phishingParaEditar.departments?.map(
          (d) => d.department.id
        ),
        userId: undefined,
      });
      setSelectedDepartamentos(
        phishingParaEditar.departments?.map((d) => d.department)
      );
      setActiveTab("departments");
    } else {
      form.reset({
        channel: "EMAIL",
        departments: [],
        userId: undefined,
      });
      setSelectedDepartamentos([]);
    }
  }, [phishingParaEditar, form]);

  useEffect(() => {
    if (activeTab === "departments") {
      form.setValue("userId", undefined);
    } else {
      form.setValue("departments", []);
      setSelectedDepartamentos([]);
    }
  }, [activeTab, form]);

  async function fetchDepartamentos() {
    try {
      const response = await get<Department[]>(
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
      const response = await get<User[]>("/users");
      if (response) {
        setUsuarios(response);
      }
    } catch (error) {
      console.error("Error fetching usuarios:", error);
    }
  }

  async function fetchTemplates() {
    try {
      const response = await get<TemplateItem[]>("/phishing-templates");
      if (response) {
        setTemplates(response.map((t) => ({ id: t.id, name: t.name })));
      }
    } catch (error) {
      console.error("Error fetching templates:", error);
    }
  }

  function handleDepartamentoSelect(departamento: Department) {
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
      usuario.name.toLowerCase().includes(termoBusca) ||
      usuario.email.toLowerCase().includes(termoBusca)
    );
  });

  const departmentsFiltrados = departments?.filter((departamento) => {
    if (!buscaDepartamento) return true;
    const termoBusca = buscaDepartamento.toLowerCase();
    return departamento.name.toLowerCase().includes(termoBusca);
  });

  async function onSubmit(data: FormValues) {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const payload = {
        channel: data.channel,
        template_id: data.templateId,
        ...(activeTab === "departments"
          ? { departments: data.departments }
          : { userId: data.userId }),
      };

      if (phishingParaEditar) {
        const response = await put(
          `/phishings/${phishingParaEditar.id}`,
          payload
        );
        if (response) {
          onOpenChange(false);
          form.reset();
        }
      } else {
        const response = await post("/phishings", payload);
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
            {phishingParaEditar ? "Editar phishing" : "Novo phishing"}
          </DialogTitle>
          <DialogDescription>
            {phishingParaEditar
              ? "Edite as informações do phishing."
              : "Preencha as informações para criar um novo phishing."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="channel"
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
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="templateId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Template</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um template" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {templates.length === 0 ? (
                              <div className="px-2 py-1 text-sm text-muted-foreground">
                                Nenhum template cadastrado.
                              </div>
                            ) : (
                              templates.map((t) => (
                                <SelectItem key={t.id} value={t.id}>
                                  {t.name}
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Alert className="mb-4 bg-yellow-50 border-yellow-200 text-yellow-800">
                  <Info className="h-4 w-4 stroke-yellow-800" />
                  <AlertDescription>
                    Apenas departamentos que tenham usuários serão exibidos.
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
                                departmentsFiltrados?.map((department) => {
                                  const isSelecionado =
                                    selectedDepartamentos?.some(
                                      (d) => d.id === department.id
                                    );
                                  return (
                                    <div
                                      key={department.id}
                                      className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                                        isSelecionado
                                          ? "bg-primary/10 hover:bg-primary/20"
                                          : "hover:bg-muted/50"
                                      }`}
                                      onClick={() =>
                                        handleDepartamentoSelect(department)
                                      }
                                    >
                                      <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-muted-foreground" />
                                        <div className="text-sm">
                                          <p>{department.name}</p>
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
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="templateId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Template</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um template" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {templates.length === 0 ? (
                              <div className="px-2 py-1 text-sm text-muted-foreground">
                                Nenhum template cadastrado.
                              </div>
                            ) : (
                              templates.map((t) => (
                                <SelectItem key={t.id} value={t.id}>
                                  {t.name}
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="userId"
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
                              usuariosFiltrados?.map((user) => (
                                <div
                                  key={user.id}
                                  className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                                    field.value === user.id
                                      ? "bg-primary/10 hover:bg-primary/20"
                                      : "hover:bg-muted/50"
                                  }`}
                                  onClick={() => field.onChange(user.id)}
                                >
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <div className="text-sm">
                                      <p>{user.name}</p>
                                      <p className="text-muted-foreground">
                                        {user.email}
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
                {phishingParaEditar ? "Salvar" : "Criar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { socket } from "../../lib/socket";
import { api } from "../../lib/axios";
import { useKeycloak } from "../../hooks/use-keycloak";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus, Info } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/layout/loading-spinner";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Agendamento, StatusAgendamento } from "../../types/agendamento";
import { Badge } from "../../components/ui/badge";

const agendamentoSchema = z
  .object({
    titulo: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
    descricao: z
      .string()
      .min(10, "A descrição deve ter pelo menos 10 caracteres"),
    dataInicio: z.string().refine((data) => new Date(data) > new Date(), {
      message: "A data de início deve ser no futuro",
    }),
    dataFim: z.string().refine((data) => new Date(data) > new Date(), {
      message: "A data de fim deve ser no futuro",
    }),
  })
  .refine((data) => new Date(data.dataFim) > new Date(data.dataInicio), {
    message: "A data de fim deve ser depois da data de início",
    path: ["dataFim"],
  });

type AgendamentoFormData = z.infer<typeof agendamentoSchema>;

export default function UserAgendamentos() {
  const { authenticated, realm, usuario, token } = useKeycloak();
  const navigate = useNavigate();
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedAgendamento, setSelectedAgendamento] =
    useState<Agendamento | null>(null);

  const form = useForm<AgendamentoFormData>({
    resolver: zodResolver(agendamentoSchema),
    defaultValues: {
      titulo: "",
      descricao: "",
      dataInicio: "",
      dataFim: "",
    },
  });

  useEffect(() => {
    if (!authenticated || !realm) {
      navigate(`/${realm}/login`);
      return;
    }

    const checkCadastroStatus = async () => {
      if (!usuario?.id || !token) return;

      try {
        const response = await api.get(`/usuarios/keycloak/${usuario.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userStatus = response.data;

        if (userStatus.statusCadastro !== "APROVADO") {
          if (userStatus.id) {
            navigate(
              `/${realm}/cadastro-pendente/${userStatus.id}?status=${userStatus.statusCadastro}`
            );
          } else {
            console.warn(
              "ID do usuário não encontrado, usando rota sem parâmetros"
            );
            navigate(`/${realm}/cadastro-pendente`);
          }
          return;
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao verificar status do cadastro:", error);
        navigate(`/${realm}/cadastro-pendente`);
        setIsLoading(false);
      }
    };

    checkCadastroStatus();
  }, [authenticated, navigate, realm, usuario, token]);

  const fetchAgendamentos = async () => {
    if (!usuario) return;

    try {
      setIsLoading(true);
      const res = await api.get(`/agendamentos/usuario/${usuario.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAgendamentos(res.data);
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!usuario) return;
    fetchAgendamentos();
  }, [usuario]);

  useEffect(() => {
    socket.connect();
    socket.on("agendamento_updated", fetchAgendamentos);
    socket.on("agendamento_deleted", fetchAgendamentos);
    socket.on("agendamento_created", fetchAgendamentos);
    return () => {
      socket.off("agendamento_updated");
      socket.off("agendamento_deleted");
      socket.off("agendamento_created");
      socket.disconnect();
    };
  }, []);

  const handleDetailsOpen = (agendamento: Agendamento) => {
    setSelectedAgendamento(agendamento);
    setDetailsOpen(true);
  };

  const handleCreate = () => {
    setIsFormOpen(true);
  };

  const onSubmit = async (data: AgendamentoFormData) => {
    if (!usuario) return;

    try {
      await api.post(
        "/agendamentos",
        {
          ...data,
          usuarioId: usuario.id,
          userId: usuario.email,
          dataInicio: new Date(data.dataInicio).toISOString(),
          dataFim: new Date(data.dataFim).toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsFormOpen(false);
      form.reset();
      fetchAgendamentos();
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
    }
  };

  const getStatusBadge = (status: StatusAgendamento) => {
    switch (status) {
      case StatusAgendamento.PENDENTE:
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
          >
            Pendente
          </Badge>
        );
      case StatusAgendamento.APROVADO:
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 hover:bg-green-100"
          >
            Aprovado
          </Badge>
        );
      case StatusAgendamento.RECUSADO:
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 hover:bg-red-100"
          >
            Recusado
          </Badge>
        );
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meus Agendamentos</h1>

        <Button onClick={handleCreate}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Agendamento
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>

              <TableHead>Data Início</TableHead>

              <TableHead>Data Fim</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Data Solicitação</TableHead>

              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10">
                  Carregando...
                </TableCell>
              </TableRow>
            ) : agendamentos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10">
                  Nenhum agendamento encontrado.
                </TableCell>
              </TableRow>
            ) : (
              agendamentos.map((agendamento) => (
                <TableRow key={agendamento.id}>
                  <TableCell className="font-medium">
                    {agendamento.titulo}
                  </TableCell>

                  <TableCell>
                    {format(
                      new Date(agendamento.dataInicio),
                      "dd/MM/yyyy HH:mm",
                      { locale: ptBR }
                    )}
                  </TableCell>

                  <TableCell>
                    {format(new Date(agendamento.dataFim), "dd/MM/yyyy HH:mm", {
                      locale: ptBR,
                    })}
                  </TableCell>

                  <TableCell>{getStatusBadge(agendamento.status)}</TableCell>

                  <TableCell>
                    {format(
                      new Date(agendamento.criadoEm),
                      "dd/MM/yyyy HH:mm",
                      { locale: ptBR }
                    )}
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDetailsOpen(agendamento)}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Novo Agendamento</DialogTitle>

            <DialogDescription>
              Preencha os dados para solicitar um novo agendamento.
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
                      <Input placeholder="Título do agendamento" {...field} />
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
                        placeholder="Descrição do agendamento"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataInicio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Início</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Data de Início"
                        type="datetime-local"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataFim"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Fim</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Data de Fim"
                        type="datetime-local"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit">Criar Agendamento</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Detalhes do Agendamento</DialogTitle>

            <DialogDescription>
              Informações completas do agendamento selecionado.
            </DialogDescription>
          </DialogHeader>

          {selectedAgendamento && (
            <div className="space-y-2">
              <p>
                <strong>Título:</strong> {selectedAgendamento.titulo}
              </p>

              <p>
                <strong>Descrição:</strong> {selectedAgendamento.descricao}
              </p>

              <p>
                <strong>Data de Início:</strong>{" "}
                {format(
                  new Date(selectedAgendamento.dataInicio),
                  "dd/MM/yyyy HH:mm",
                  { locale: ptBR }
                )}
              </p>

              <p>
                <strong>Data de Fim:</strong>{" "}
                {format(
                  new Date(selectedAgendamento.dataFim),
                  "dd/MM/yyyy HH:mm",
                  { locale: ptBR }
                )}
              </p>

              <div>
                <strong>Status:</strong>

                <div className="mt-1">
                  {getStatusBadge(selectedAgendamento.status)}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

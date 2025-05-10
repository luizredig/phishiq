import { useEffect, useState } from "react";
import { socket } from "../../lib/socket";
import { api } from "../../lib/axios";
import { useKeycloak } from "../../hooks/use-keycloak";
import { useNavigate } from "react-router-dom";
import { Check, X, Calendar, Info, User } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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
  DialogDescription,
  DialogFooter,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Agendamento, StatusAgendamento } from "../../types/agendamento";
import { Badge } from "../../components/ui/badge";

export default function AdminAgendamentos() {
  const { isAdmin, usuario, realm, token } = useKeycloak();
  const navigate = useNavigate();
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedAgendamento, setSelectedAgendamento] =
    useState<Agendamento | null>(null);

  const fetchAgendamentos = async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/agendamentos", {
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
    if (!isAdmin) {
      navigate(`/${realm}/inicio`);
      return;
    }

    fetchAgendamentos();
  }, [isAdmin, navigate, realm]);

  useEffect(() => {
    socket.connect();

    socket.on("agendamento_updated", () => {
      fetchAgendamentos();
    });

    socket.on("agendamento_deleted", () => {
      fetchAgendamentos();
    });

    socket.on("agendamento_created", () => {
      fetchAgendamentos();
    });

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

  const handleAprovar = async (id: string) => {
    try {
      await api.put(
        `/agendamentos/${id}/aprovar`,
        {
          userId: usuario?.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (selectedAgendamento?.id === id) {
        setDetailsOpen(false);
      }
      fetchAgendamentos();
    } catch (error) {
      console.error("Erro ao aprovar agendamento:", error);
    }
  };

  const handleRecusar = async (id: string) => {
    try {
      await api.put(
        `/agendamentos/${id}/recusar`,
        {
          userId: usuario?.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (selectedAgendamento?.id === id) {
        setDetailsOpen(false);
      }
      fetchAgendamentos();
    } catch (error) {
      console.error("Erro ao recusar agendamento:", error);
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

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciamento de Agendamentos</h1>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Solicitante</TableHead>
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
                <TableCell colSpan={7} className="text-center py-10">
                  Carregando...
                </TableCell>
              </TableRow>
            ) : agendamentos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10">
                  Nenhum agendamento pendente.
                </TableCell>
              </TableRow>
            ) : (
              agendamentos.map((agendamento) => (
                <TableRow key={agendamento.id}>
                  <TableCell className="font-medium">
                    {agendamento.titulo}
                  </TableCell>
                  <TableCell>
                    {agendamento.usuario?.nome} {agendamento.usuario?.sobrenome}
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
                      {agendamento.status === StatusAgendamento.PENDENTE && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-500"
                            onClick={() => handleAprovar(agendamento.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500"
                            onClick={() => handleRecusar(agendamento.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogDescription />
          <DialogHeader>
            <DialogTitle>Detalhes do Agendamento</DialogTitle>
          </DialogHeader>
          {selectedAgendamento && (
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">
                    {selectedAgendamento.titulo}
                  </span>
                </div>
                <p className="text-sm">{selectedAgendamento.descricao}</p>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">Solicitante</span>
                </div>
                <p className="text-sm">
                  {selectedAgendamento.usuario?.nome}{" "}
                  {selectedAgendamento.usuario?.sobrenome}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedAgendamento.usuario?.email}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold">Data de Início</p>
                  <p className="text-sm">
                    {format(
                      new Date(selectedAgendamento.dataInicio),
                      "dd/MM/yyyy HH:mm",
                      { locale: ptBR }
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Data de Fim</p>
                  <p className="text-sm">
                    {format(
                      new Date(selectedAgendamento.dataFim),
                      "dd/MM/yyyy HH:mm",
                      { locale: ptBR }
                    )}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold">Status</p>
                <div className="mt-1">
                  {getStatusBadge(selectedAgendamento.status)}
                </div>
              </div>

              {selectedAgendamento.status === StatusAgendamento.PENDENTE && (
                <DialogFooter className="mt-6">
                  <Button
                    variant="outline"
                    onClick={() => handleRecusar(selectedAgendamento.id)}
                    className="text-red-500"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Recusar
                  </Button>
                  <Button
                    onClick={() => handleAprovar(selectedAgendamento.id)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Aprovar
                  </Button>
                </DialogFooter>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

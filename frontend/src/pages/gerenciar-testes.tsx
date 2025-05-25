/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plus, Search, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";

import LoadingSpinner from "../components/layout/loading-spinner";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { NovoTesteDialog } from "../components/testes/novo-teste-dialog";
import { useApi } from "../hooks/use-api";
import { useToast } from "../hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { CustomDatePicker } from "../components/ui/date-picker";

interface Teste {
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
  ativo: boolean;
  criadoEm: string;
}

type TipoEnvio = "TODOS" | "INDIVIDUAL" | "DEPARTAMENTO";
type Status = "TODOS" | "ENVIADO" | "ABERTO" | "CLIQUE" | "SUCESSO" | "FALHA";
type Resultado = "TODOS" | "CAIU" | "REPORTOU" | "NAO_REPORTOU";

interface Filtros {
  tipoEnvio: TipoEnvio;
  dataInicio: Date | undefined;
  dataFim: Date | undefined;
  status: Status;
  resultado: Resultado;
}

export default function GerenciarTestes() {
  const [testes, setTestes] = useState<Teste[]>([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");
  const [isNovoTesteOpen, setIsNovoTesteOpen] = useState(false);
  const [includeInactive, setIncludeInactive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtros, setFiltros] = useState<Filtros>({
    tipoEnvio: "TODOS",
    dataInicio: undefined,
    dataFim: undefined,
    status: "TODOS",
    resultado: "TODOS",
  });
  const itemsPerPage = 5;
  const { toast } = useToast();
  const { get, loading: apiLoading } = useApi();

  useEffect(() => {
    fetchTestes();
  }, [includeInactive]);

  async function fetchTestes() {
    setLoading(true);
    try {
      const response = await get<Teste[]>(
        `/testes?includeInactive=${includeInactive}`
      );
      if (response) {
        setTestes(response);
      }
    } catch (error) {
      toast({
        title: "Erro!",
        description: "Não foi possível carregar os testes.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  const filteredTestes = testes.filter((teste) => {
    // Filtro de busca por departamento
    if (busca) {
      const termoBusca = busca.toLowerCase();
      if (
        !teste.departamentos.some((d) =>
          d.departamento.nome.toLowerCase().includes(termoBusca)
        )
      ) {
        return false;
      }
    }

    // Filtro por tipo de envio
    if (filtros.tipoEnvio !== "TODOS") {
      if (
        filtros.tipoEnvio === "INDIVIDUAL" &&
        teste.departamentos.length > 0
      ) {
        return false;
      }
      if (
        filtros.tipoEnvio === "DEPARTAMENTO" &&
        teste.departamentos.length === 0
      ) {
        return false;
      }
    }

    // Filtro por data
    if (filtros.dataInicio && filtros.dataFim) {
      const dataTeste = new Date(teste.criadoEm);
      if (dataTeste < filtros.dataInicio || dataTeste > filtros.dataFim) {
        return false;
      }
    }

    // Filtro por status
    if (filtros.status !== "TODOS" && teste.status !== filtros.status) {
      return false;
    }

    // Filtro por resultado
    if (filtros.resultado !== "TODOS") {
      if (filtros.resultado === "CAIU" && !teste.caiuNoTeste) {
        return false;
      }
      if (filtros.resultado === "REPORTOU" && !teste.reportouPhishing) {
        return false;
      }
      if (filtros.resultado === "NAO_REPORTOU" && teste.reportouPhishing) {
        return false;
      }
    }

    return true;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredTestes.length / itemsPerPage);
  const paginatedTestes = filteredTestes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function getTesteStatusBadge(teste: Teste) {
    const statusColors = {
      ENVIADO: "bg-blue-100 text-blue-800",
      ABERTO: "bg-yellow-100 text-yellow-800",
      CLIQUE: "bg-orange-100 text-orange-800",
      SUCESSO: "bg-green-100 text-green-800",
      FALHA: "bg-red-100 text-red-800",
    };

    return (
      <Badge
        variant="secondary"
        className={`${statusColors[teste.status]} border-0 w-fit`}
      >
        {teste.status}
      </Badge>
    );
  }

  function limparFiltros() {
    setFiltros({
      tipoEnvio: "TODOS",
      dataInicio: undefined,
      dataFim: undefined,
      status: "TODOS",
      resultado: "TODOS",
    });
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciar testes</h1>
        <Button onClick={() => setIsNovoTesteOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo teste
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10 truncate w-full"
              placeholder="Buscar por departamento"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            {(filtros.tipoEnvio !== "TODOS" ||
              filtros.dataInicio ||
              filtros.dataFim ||
              filtros.status !== "TODOS" ||
              filtros.resultado !== "TODOS") && (
              <Button
                variant="destructive"
                size="sm"
                onClick={limparFiltros}
                className="h-9"
              >
                <X className="h-4 w-4 mr-2" />
                Limpar filtros
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Tipo de Envio</label>
            <Select
              value={filtros.tipoEnvio}
              onValueChange={(value: TipoEnvio) =>
                setFiltros((prev) => ({ ...prev, tipoEnvio: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Tipo de envio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TODOS">Todos</SelectItem>
                <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                <SelectItem value="DEPARTAMENTO">Departamento</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Data Inicial</label>
            <CustomDatePicker
              date={filtros.dataInicio}
              setDate={(date) =>
                setFiltros((prev) => ({ ...prev, dataInicio: date }))
              }
              placeholder="Data inicial"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Data Final</label>
            <CustomDatePicker
              date={filtros.dataFim}
              setDate={(date) =>
                setFiltros((prev) => ({ ...prev, dataFim: date }))
              }
              placeholder="Data final"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <Select
              value={filtros.status}
              onValueChange={(value: Status) =>
                setFiltros((prev) => ({ ...prev, status: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TODOS">Todos</SelectItem>
                <SelectItem value="ENVIADO">Enviado</SelectItem>
                <SelectItem value="ABERTO">Aberto</SelectItem>
                <SelectItem value="CLIQUE">Clique</SelectItem>
                <SelectItem value="SUCESSO">Sucesso</SelectItem>
                <SelectItem value="FALHA">Falha</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Resultado</label>
            <Select
              value={filtros.resultado}
              onValueChange={(value: Resultado) =>
                setFiltros((prev) => ({ ...prev, resultado: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Resultado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TODOS">Todos</SelectItem>
                <SelectItem value="CAIU">Caiu no teste</SelectItem>
                <SelectItem value="REPORTOU">Reportou</SelectItem>
                <SelectItem value="NAO_REPORTOU">Não reportou</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {loading || apiLoading ? (
        <div className="flex justify-center items-center h-full">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="border rounded-md overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo de Envio</TableHead>
                <TableHead>Data de Envio</TableHead>
                <TableHead>Canal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Resultado</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedTestes.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-4 text-muted-foreground"
                  >
                    Nenhum teste cadastrado.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedTestes.map((teste) => (
                  <TableRow key={teste.id}>
                    <TableCell>
                      {teste.departamentos.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {teste.departamentos.map((d) => (
                            <Badge key={d.departamento.id} variant="secondary">
                              {d.departamento.nome}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-orange-100 text-orange-800 border-0"
                        >
                          Individual
                        </Badge>
                      )}
                    </TableCell>

                    <TableCell>
                      {new Intl.DateTimeFormat("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }).format(new Date(teste.criadoEm))}
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 border-0 flex items-center gap-1 w-fit"
                      >
                        <Mail className="h-3 w-3" />
                        {teste.canal}
                      </Badge>
                    </TableCell>

                    <TableCell>{getTesteStatusBadge(teste)}</TableCell>

                    <TableCell>
                      <div className="flex flex-col gap-1 w-fit">
                        {teste.caiuNoTeste ? (
                          <Badge variant="destructive" className="w-fit">
                            Caiu no teste
                          </Badge>
                        ) : (
                          <Badge variant={"default"} className="w-fit">
                            {teste.reportouPhishing
                              ? "Reportou"
                              : "Ainda não reportou"}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      <NovoTesteDialog
        open={isNovoTesteOpen}
        onOpenChange={(open) => {
          setIsNovoTesteOpen(open);
          if (!open) {
            fetchTestes();
          }
        }}
      />
    </div>
  );
}

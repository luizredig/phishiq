/* eslint-disable @typescript-eslint/no-unused-vars */
import { Edit, Plus, Search, X } from "lucide-react";
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
import { useApi } from "../hooks/use-api";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { CampanhaDialog } from "../components/campanhas/campanha-dialog";
import { InativarCampanhaDialog } from "../components/campanhas/inativar-campanha-dialog";
import { socket } from "../lib/socket";
import { Switch } from "../components/ui/switch";

interface Campanha {
  id: string;
  titulo: string;
  descricao: string | null;
  status: "INICIADA" | "EM_ANDAMENTO" | "FINALIZADA";
  ativo: boolean;
  criadoEm: string;
}

type Status = "TODOS" | "INICIADA" | "EM_ANDAMENTO" | "FINALIZADA";

interface Filtros {
  status: Status;
}

export default function GerenciarCampanhas() {
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");
  const [includeInactive, setIncludeInactive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtros, setFiltros] = useState<Filtros>({
    status: "TODOS",
  });
  const [campanhaDialogOpen, setCampanhaDialogOpen] = useState(false);
  const [inativarDialogOpen, setInativarDialogOpen] = useState(false);
  const [selectedCampanha, setSelectedCampanha] = useState<Campanha | null>(
    null
  );
  const itemsPerPage = 5;

  const { get, loading: apiLoading, put } = useApi();

  useEffect(() => {
    fetchCampanhas();
  }, [includeInactive]);

  useEffect(() => {
    socket.on("campanhaCreated", (campanha: Campanha) => {
      setCampanhas((prev) => [...prev, campanha]);
    });

    socket.on("campanhaUpdated", (campanha: Campanha) => {
      setCampanhas((prev) =>
        prev.map((c) => (c.id === campanha.id ? campanha : c))
      );
    });

    socket.on("campanhaStatusUpdated", (campanha: Campanha) => {
      setCampanhas((prev) =>
        prev.map((c) => (c.id === campanha.id ? campanha : c))
      );
    });

    return () => {
      socket.off("campanhaCreated");
      socket.off("campanhaUpdated");
      socket.off("campanhaStatusUpdated");
    };
  }, []);

  async function fetchCampanhas() {
    setLoading(true);
    try {
      const response = await get<Campanha[]>(
        `/campanhas?includeInactive=${includeInactive}`
      );
      if (response) {
        setCampanhas(response);
      }
    } catch (error) {
      console.error("Error fetching campanhas:", error);
    } finally {
      setLoading(false);
    }
  }

  const filteredCampanhas = campanhas.filter((campanha) => {
    // Filtro de busca por título
    if (busca) {
      const termoBusca = busca.toLowerCase();
      if (!campanha.titulo.toLowerCase().includes(termoBusca)) {
        return false;
      }
    }

    // Filtro por status
    if (filtros.status !== "TODOS" && campanha.status !== filtros.status) {
      return false;
    }

    return true;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredCampanhas.length / itemsPerPage);
  const paginatedCampanhas = filteredCampanhas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function getCampanhaStatusBadge(campanha: Campanha) {
    const statusColors = {
      INICIADA: "bg-blue-100 text-primary",
      EM_ANDAMENTO: "bg-yellow-100 text-yellow-800",
      FINALIZADA: "bg-green-100 text-green-800",
    };

    return (
      <Badge
        variant="secondary"
        className={`${statusColors[campanha.status]} border-0 w-fit`}
      >
        {campanha.status}
      </Badge>
    );
  }

  function limparFiltros() {
    setFiltros({
      status: "TODOS",
    });
  }

  function handleEditCampanha(campanha: Campanha) {
    setSelectedCampanha(campanha);
    setCampanhaDialogOpen(true);
  }

  async function handleToggleStatus(id: string, ativo: boolean) {
    try {
      const response = await put<Campanha>(`/campanhas/${id}/status`, {
        ativo,
      });

      if (response) {
        setCampanhas((prev) =>
          prev.map((campanha) =>
            campanha.id === id ? { ...campanha, ativo } : campanha
          )
        );
      }
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  }

  return (
    <div className="w-full py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciar campanhas</h1>
        <Button onClick={() => setCampanhaDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Nova campanha
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
          <div className="flex flex-col md:flex-row justify-between flex-1 w-full gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-10 truncate w-full"
                placeholder="Buscar por título"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="space-y-2 w-full md:w-[200px]">
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
                  <SelectItem value="INICIADA">Iniciada</SelectItem>
                  <SelectItem value="EM_ANDAMENTO">Em andamento</SelectItem>
                  <SelectItem value="FINALIZADA">Finalizada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {filtros.status !== "TODOS" && (
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

        <div className="flex items-center gap-2 justify-end">
          <label className="text-sm" htmlFor="mostrar-inativos">
            Mostrar inativos
          </label>
          <Switch
            id="mostrar-inativos"
            checked={includeInactive}
            onCheckedChange={setIncludeInactive}
          />
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
                <TableHead>Título</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Ativo</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedCampanhas.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-4 text-muted-foreground"
                  >
                    Nenhuma campanha cadastrada.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedCampanhas.map((campanha) => (
                  <TableRow key={campanha.id}>
                    <TableCell>{campanha.titulo}</TableCell>
                    <TableCell>{campanha.descricao}</TableCell>
                    <TableCell>{getCampanhaStatusBadge(campanha)}</TableCell>
                    <TableCell className="text-center">
                      <Switch
                        checked={campanha.ativo}
                        onCheckedChange={(checked) =>
                          handleToggleStatus(campanha.id, checked)
                        }
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex flex-row justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditCampanha(campanha)}
                          title="Editar"
                          className="text-xs sm:text-sm"
                        >
                          <Edit className="h-4 w-4 text-primary" />
                        </Button>
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

      <CampanhaDialog
        open={campanhaDialogOpen}
        onOpenChange={(open) => {
          setCampanhaDialogOpen(open);
          if (!open) {
            setSelectedCampanha(null);
            fetchCampanhas();
          }
        }}
        campanha={selectedCampanha || undefined}
      />

      {selectedCampanha && (
        <InativarCampanhaDialog
          open={inativarDialogOpen}
          onOpenChange={setInativarDialogOpen}
          campanha={selectedCampanha}
        />
      )}
    </div>
  );
}

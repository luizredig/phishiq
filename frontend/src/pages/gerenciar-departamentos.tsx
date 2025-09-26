/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadgeCheck, Edit, Plus, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";

import LoadingSpinner from "../components/layout/loading-spinner";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ConfirmDialog } from "../components/ui/confirm-dialog";
import { Input } from "../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { Switch } from "../components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { DepartamentoDialog } from "../components/departments/departamento-dialog";
import { useApi } from "../hooks/use-api";

interface Usuario {
  id: string;
  nome: string;
  email: string;
}

interface Departamento {
  id: string;
  nome: string;
  ativo: boolean;
  criadoEm: string;
  usuarios: {
    usuario: Usuario;
  }[];
}

export default function GerenciarDepartamentos() {
  const [departments, setDepartamentos] = useState<Departamento[]>([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");
  const [isNovoDepartamentoOpen, setIsNovoDepartamentoOpen] = useState(false);
  const [departamentoParaEditar, setDepartamentoParaEditar] = useState<
    Departamento | undefined
  >(undefined);
  const [departamentoParaExcluir, setDepartamentoParaExcluir] = useState<
    string | null
  >(null);
  const [includeInactive, setIncludeInactive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { get, put, delete: deleteRequest, loading: apiLoading } = useApi();

  useEffect(() => {
    fetchDepartamentos();
  }, [includeInactive]);

  async function fetchDepartamentos() {
    setLoading(true);
    try {
      const response = await get<Departamento[]>(
        `/departments?includeInactive=${includeInactive}`
      );
      if (response) {
        setDepartamentos(response);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleStatus(id: string, ativo: boolean) {
    try {
      const response = await put<Departamento>(`/departments/${id}/status`, {
        ativo,
      });

      if (response) {
        setDepartamentos((prev) =>
          prev?.map((departamento) =>
            departamento.id === id ? { ...departamento, ativo } : departamento
          )
        );
      }
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  }

  function handleEditar(departamento: Departamento) {
    setDepartamentoParaEditar(departamento);
    setIsNovoDepartamentoOpen(true);
  }

  async function handleExcluir() {
    if (!departamentoParaExcluir) return;

    try {
      const response = await deleteRequest<{ success: boolean }>(
        `/departments/${departamentoParaExcluir}`
      );

      if (response) {
        setDepartamentos((prev) =>
          prev?.filter(
            (departamento) => departamento.id !== departamentoParaExcluir
          )
        );
      }
    } catch (error) {
      console.error("Error deleting departamento:", error);
    } finally {
      setDepartamentoParaExcluir(null);
    }
  }

  const filteredDepartamentos = departments?.filter((departamento) => {
    if (!busca) return true;
    const termoBusca = busca.toLowerCase();
    return (
      departamento?.nome.toLowerCase().includes(termoBusca) ||
      departamento?.usuarios?.some(
        (u) =>
          u.user.nome.toLowerCase().includes(termoBusca) ||
          u.user.email.toLowerCase().includes(termoBusca)
      )
    );
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredDepartamentos.length / itemsPerPage);
  const paginatedDepartamentos = filteredDepartamentos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function getStatusBadge(departamento: Departamento) {
    if (!departamento.ativo) {
      return (
        <Badge
          variant="outline"
          className="flex items-center gap-1 text-red-500 border-red-200"
        >
          <X className="h-3 w-3" />
          Inativo
        </Badge>
      );
    }

    return (
      <Badge
        variant="outline"
        className="flex items-center gap-1 text-green-500 border-green-200"
      >
        <BadgeCheck className="h-3 w-3" />
        Ativo
      </Badge>
    );
  }

  return (
    <div className="w-full py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciar departments</h1>
        <Button onClick={() => setIsNovoDepartamentoOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo departamento
        </Button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10 truncate w-full"
            placeholder="Buscar por nome ou usuário"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 justify-end my-4">
        <label className="text-sm" htmlFor="mostrar-inativos">
          Mostrar inativos
        </label>
        <Switch
          id="mostrar-inativos"
          checked={includeInactive}
          onCheckedChange={setIncludeInactive}
        />
      </div>

      {loading || apiLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="border rounded-md overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead className="text-center">Qtde. de Usuários</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Ativo</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedDepartamentos.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-4 text-muted-foreground"
                  >
                    Nenhum departamento cadastrado.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedDepartamentos?.map((departamento) => (
                  <TableRow key={departamento.id}>
                    <TableCell className="font-medium">
                      {departamento.nome}
                    </TableCell>

                    <TableCell>
                      <div className="flex justify-center items-center">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <User className="h-3 w-3" />
                          {departamento.usuarios.length}
                        </Badge>
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <div className="flex justify-center items-center">
                        {getStatusBadge(departamento)}
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <Switch
                        checked={departamento.ativo}
                        onCheckedChange={(checked) =>
                          handleToggleStatus(departamento.id, checked)
                        }
                      />
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex flex-row justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditar(departamento)}
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

              {Array.from({ length: totalPages }, (_, i) => i + 1)?.map(
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

      <DepartamentoDialog
        open={isNovoDepartamentoOpen}
        onOpenChange={(open) => {
          setIsNovoDepartamentoOpen(open);
          if (!open) {
            setDepartamentoParaEditar(undefined);
            fetchDepartamentos();
          }
        }}
        departamentoParaEditar={departamentoParaEditar}
      />

      <ConfirmDialog
        open={!!departamentoParaExcluir}
        onOpenChange={() => setDepartamentoParaExcluir(null)}
        title="Excluir Departamento"
        description="Tem certeza que deseja excluir este departamento? Esta ação não pode ser desfeita."
        confirmText="Sim, excluir"
        cancelText="Não, cancelar"
        onConfirm={handleExcluir}
      />
    </div>
  );
}

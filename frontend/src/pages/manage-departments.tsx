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
import { DepartmentDialog } from "../components/departments/department-dialog";
import { useApi } from "../hooks/use-api";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Department {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  pseudonyms: {
    pseudonym: {
      user: User;
    };
  }[];
}

interface DepartmentsResponse {
  items: Department[];
  total: number;
}

export default function ManageDepartments() {
  const [departments, setDepartamentos] = useState<Department[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");
  const [isNovoDepartamentoOpen, setIsNovoDepartamentoOpen] = useState(false);
  const [departamentoParaEditar, setDepartamentoParaEditar] = useState<
    Department | undefined
  >(undefined);
  const [departamentoParaExcluir, setDepartamentoParaExcluir] = useState<
    string | null
  >(null);
  const [includeInactive, setIncludeInactive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { get, put, delete: deleteRequest, loading: apiLoading } = useApi();

  // confirmação de edição será feita dentro do DepartmentDialog ao salvar
  const [confirmToggle, setConfirmToggle] = useState<{
    id: string;
    next: boolean;
  } | null>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [includeInactive]);

  useEffect(() => {
    fetchDepartamentos();
  }, [includeInactive, currentPage]);

  async function fetchDepartamentos() {
    setLoading(true);
    try {
      const response = await get<DepartmentsResponse>(
        `/departments?includeInactive=${includeInactive}&page=${currentPage}&pageSize=${itemsPerPage}`
      );
      if (response) {
        setDepartamentos(response.items);
        setTotal(response.total);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleStatus(id: string, is_active: boolean) {
    try {
      const response = await put<Department>(`/departments/${id}/status`, {
        is_active,
      });

      if (response) {
        setDepartamentos((prev) =>
          prev?.map((departamento) =>
            departamento.id === id
              ? { ...departamento, is_active }
              : departamento
          )
        );
      }
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  }

  function handleEditar(departamento: Department) {
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

  const filteredDepartamentos = departments?.filter((department) => {
    if (!busca) return true;
    const termoBusca = busca.toLowerCase();

    return (
      department?.name.toLowerCase().includes(termoBusca) ||
      department?.pseudonyms?.some(
        (p) =>
          p.pseudonym.user.name.toLowerCase().includes(termoBusca) ||
          p.pseudonym.user.email.toLowerCase().includes(termoBusca)
      )
    );
  });

  const totalPages = Math.ceil(
    (busca ? filteredDepartamentos.length : total) / itemsPerPage
  );
  const paginatedDepartamentos = filteredDepartamentos;

  function getStatusBadge(departamento: Department) {
    if (!departamento.is_active) {
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
        <h1 className="text-2xl font-bold">Gerenciar departamentos</h1>
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
                paginatedDepartamentos?.map((department) => (
                  <TableRow key={department.id}>
                    <TableCell className="font-medium">
                      {department.name}
                    </TableCell>

                    <TableCell>
                      <div className="flex justify-center items-center">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <User className="h-3 w-3" />
                          {department.pseudonyms?.length || 0}
                        </Badge>
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <div className="flex justify-center items-center">
                        {getStatusBadge(department)}
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <Switch
                        checked={department.is_active}
                        onCheckedChange={(checked) =>
                          setConfirmToggle({ id: department.id, next: checked })
                        }
                      />
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex flex-row justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditar(department)}
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

      <DepartmentDialog
        open={isNovoDepartamentoOpen}
        onOpenChange={(open) => {
          setIsNovoDepartamentoOpen(open);
          if (!open) {
            setDepartamentoParaEditar(undefined);
            fetchDepartamentos();
          }
        }}
        department={departamentoParaEditar}
      />

      <ConfirmDialog
        open={!!departamentoParaExcluir}
        onOpenChange={(open) => {
          if (!open) setDepartamentoParaExcluir(null);
        }}
        title="Excluir Departamento"
        description="Tem certeza que deseja excluir este departamento? Esta ação não pode ser desfeita."
        confirmText="Sim, excluir"
        cancelText="Não, cancelar"
        onConfirm={handleExcluir}
      />

      {/* confirmação de edição movida para o DepartmentDialog */}

      {/* Confirmar ativar/inativar */}
      <ConfirmDialog
        open={!!confirmToggle}
        onOpenChange={(open) => {
          if (!open) setConfirmToggle(null);
        }}
        title={
          confirmToggle?.next ? "Ativar departamento" : "Inativar departamento"
        }
        description={
          confirmToggle?.next
            ? "Tem certeza que deseja ativar este departamento?"
            : "Tem certeza que deseja inativar este departamento?"
        }
        confirmText={confirmToggle?.next ? "Ativar" : "Inativar"}
        onConfirm={async () => {
          if (confirmToggle)
            await handleToggleStatus(confirmToggle.id, confirmToggle.next);
          setConfirmToggle(null);
        }}
      />
    </div>
  );
}

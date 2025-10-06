/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadgeCheck,
  Building2,
  Edit,
  Plus,
  Search,
  Trash,
  X,
} from "lucide-react";
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
import { UsuarioDialog } from "../components/users/user-dialog";
import { useApi } from "../hooks/use-api";

interface Usuario {
  id: string;
  nome: string;
  sobrenome: string | null;
  email: string;
  cargo: "ADMIN" | "FUNCIONARIO";
  is_active: boolean;
  criadoEm: string;
  departments: {
    departamento: {
      id: string;
      nome: string;
    };
  }[];
}

export default function ManageUsers() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");
  const [isNovoUsuarioOpen, setIsNovoUsuarioOpen] = useState(false);
  const [usuarioParaEditar, setUsuarioParaEditar] = useState<
    Usuario | undefined
  >(undefined);

  const [includeInactive, setIncludeInactive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { get, put, loading: apiLoading } = useApi();

  useEffect(() => {
    fetchUsuarios();
  }, [includeInactive]);

  async function fetchUsuarios() {
    setLoading(true);
    try {
      const response = await get<Usuario[]>(
        `/users?includeInactive=${includeInactive}`
      );
      if (response) {
        setUsuarios(response);
      }
    } catch (error) {
      console.error("Error fetching usuarios:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleStatus(id: string, is_active: boolean) {
    try {
      const response = await put<Usuario>(`/users/${id}/status`, {
        is_active,
      });

      if (response) {
        setUsuarios((prev) =>
          prev?.map((usuario) =>
            usuario.id === id ? { ...usuario, is_active } : usuario
          )
        );
      }
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  }

  function handleEditar(usuario: Usuario) {
    setUsuarioParaEditar(usuario);
    setIsNovoUsuarioOpen(true);
  }

  const filteredUsuarios = usuarios?.filter((usuario) => {
    if (!busca) return true;
    const termoBusca = busca.toLowerCase();
    return (
      usuario.nome.toLowerCase().includes(termoBusca) ||
      usuario.email.toLowerCase().includes(termoBusca) ||
      (usuario.sobrenome &&
        usuario.sobrenome.toLowerCase().includes(termoBusca)) ||
      usuario.departments?.some((d) =>
        d.department.nome.toLowerCase().includes(termoBusca)
      )
    );
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredUsuarios.length / itemsPerPage);
  const paginatedUsuarios = filteredUsuarios.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function getStatusBadge(usuario: Usuario) {
    if (!usuario.is_active) {
      return (
        <Badge
          variant="outline"
          className="flex items-center gap-1 text-red-500 border-red-200 w-fit"
        >
          <X className="h-3 w-3" />
          Inativo
        </Badge>
      );
    }

    return (
      <Badge
        variant="outline"
        className="flex items-center gap-1 text-green-500 border-green-200 w-fit"
      >
        <BadgeCheck className="h-3 w-3" />
        Ativo
      </Badge>
    );
  }

  return (
    <div className="w-full py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciar usuários</h1>
        <Button onClick={() => setIsNovoUsuarioOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo usuário
        </Button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10 truncate w-full"
            placeholder="Buscar por nome, email ou departamento"
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
                <TableHead>Email</TableHead>
                <TableHead className="text-center">
                  Qtde. de Departamentos
                </TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Ativo</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedUsuarios.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-4 text-muted-foreground"
                  >
                    Nenhum usuário cadastrado.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedUsuarios?.map((usuario) => (
                  <TableRow key={usuario.id}>
                    <TableCell className="font-medium">
                      {usuario.nome} {usuario.sobrenome}
                    </TableCell>

                    <TableCell>{usuario.email}</TableCell>

                    <TableCell>
                      <div className="flex justify-center items-center">
                        {usuario.departments.length > 0 ? (
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            <Building2 className="h-3 w-3" />
                            {usuario.departments.length}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            Sem departamento.
                          </span>
                        )}
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <div className="flex justify-center items-center">
                        {getStatusBadge(usuario)}
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <Switch
                        checked={usuario.is_active}
                        onCheckedChange={(checked) =>
                          handleToggleStatus(usuario.id, checked)
                        }
                      />
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex flex-row justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditar(usuario)}
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

      <UsuarioDialog
        open={isNovoUsuarioOpen}
        onOpenChange={(open) => {
          setIsNovoUsuarioOpen(open);
          if (!open) {
            setUsuarioParaEditar(undefined);
            fetchUsuarios();
          }
        }}
        usuarioParaEditar={usuarioParaEditar}
      />
    </div>
  );
}

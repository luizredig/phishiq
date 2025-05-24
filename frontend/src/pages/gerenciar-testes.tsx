/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadgeCheck, Edit, Plus, Search, Trash, X, Mail } from "lucide-react";
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
import { NovoTesteDialog } from "../components/testes/novo-teste-dialog";
import { useApi } from "../hooks/use-api";
import { useToast } from "../hooks/use-toast";

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

export default function GerenciarTestes() {
  const [testes, setTestes] = useState<Teste[]>([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");
  const [isNovoTesteOpen, setIsNovoTesteOpen] = useState(false);
  const [testeParaEditar, setTesteParaEditar] = useState<Teste | undefined>(
    undefined
  );
  const [testeParaExcluir, setTesteParaExcluir] = useState<string | null>(null);
  const [includeInactive, setIncludeInactive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { toast } = useToast();
  const { get, put, delete: deleteRequest, loading: apiLoading } = useApi();

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

  async function handleToggleStatus(id: string, ativo: boolean) {
    try {
      const response = await put<Teste>(`/testes/${id}/status`, { ativo });

      if (response) {
        setTestes((prev) =>
          prev.map((teste) => (teste.id === id ? { ...teste, ativo } : teste))
        );

        toast({
          title: "Sucesso!",
          description: `Teste ${ativo ? "ativado" : "desativado"} com sucesso.`,
        });
      }
    } catch (error) {
      toast({
        title: "Erro!",
        description: "Não foi possível alterar o status do teste.",
        variant: "error",
      });
    }
  }

  function handleEditar(teste: Teste) {
    setTesteParaEditar(teste);
    setIsNovoTesteOpen(true);
  }

  async function handleExcluir() {
    if (!testeParaExcluir) return;

    try {
      const response = await deleteRequest<{ success: boolean }>(
        `/testes/${testeParaExcluir}`
      );

      if (response) {
        setTestes((prev) =>
          prev.filter((teste) => teste.id !== testeParaExcluir)
        );

        toast({
          title: "Sucesso!",
          description: "Teste excluído com sucesso.",
        });
      }
    } catch (error) {
      toast({
        title: "Erro!",
        description: "Não foi possível excluir o teste.",
        variant: "error",
      });
    } finally {
      setTesteParaExcluir(null);
    }
  }

  const filteredTestes = testes.filter((teste) => {
    if (!busca) return true;
    const termoBusca = busca.toLowerCase();
    return teste.departamentos.some((d) =>
      d.departamento.nome.toLowerCase().includes(termoBusca)
    );
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredTestes.length / itemsPerPage);
  const paginatedTestes = filteredTestes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function getStatusBadge(teste: Teste) {
    if (!teste.ativo) {
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
        className={`${statusColors[teste.status]} border-0`}
      >
        {teste.status}
      </Badge>
    );
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
        <div className="flex justify-center items-center h-full">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="border rounded-md overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Departamentos</TableHead>
                <TableHead>Canal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Resultado</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Ativo</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedTestes.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-4 text-muted-foreground"
                  >
                    Nenhum teste cadastrado.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedTestes.map((teste) => (
                  <TableRow key={teste.id}>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {teste.departamentos.map((d) => (
                          <Badge key={d.departamento.id} variant="secondary">
                            {d.departamento.nome}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Mail className="h-3 w-3" />
                        {teste.canal}
                      </Badge>
                    </TableCell>

                    <TableCell>{getTesteStatusBadge(teste)}</TableCell>

                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <Badge
                          variant={
                            teste.caiuNoTeste ? "destructive" : "secondary"
                          }
                        >
                          {teste.caiuNoTeste ? "Caiu no teste" : "Não caiu"}
                        </Badge>
                        <Badge
                          variant={
                            teste.reportouPhishing ? "default" : "secondary"
                          }
                        >
                          {teste.reportouPhishing ? "Reportou" : "Não reportou"}
                        </Badge>
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <div className="flex justify-center items-center">
                        {getStatusBadge(teste)}
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <Switch
                        checked={teste.ativo}
                        onCheckedChange={(checked) =>
                          handleToggleStatus(teste.id, checked)
                        }
                      />
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex flex-row justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditar(teste)}
                          title="Editar"
                          className="text-xs sm:text-sm"
                        >
                          <Edit className="h-4 w-4 text-primary" />
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setTesteParaExcluir(teste.id)}
                          title="Excluir"
                          className="text-red-500 hover:text-red-700 text-xs sm:text-sm"
                        >
                          <Trash className="h-4 w-4" />
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

      <NovoTesteDialog
        open={isNovoTesteOpen}
        onOpenChange={(open) => {
          setIsNovoTesteOpen(open);
          if (!open) {
            setTesteParaEditar(undefined);
            fetchTestes();
          }
        }}
        testeParaEditar={testeParaEditar}
      />

      <ConfirmDialog
        open={!!testeParaExcluir}
        onOpenChange={() => setTesteParaExcluir(null)}
        title="Excluir Teste"
        description="Tem certeza que deseja excluir este teste? Esta ação não pode ser desfeita."
        confirmText="Sim, excluir"
        cancelText="Não, cancelar"
        onConfirm={handleExcluir}
      />
    </div>
  );
}

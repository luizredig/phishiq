import { useEffect, useState } from "react";
import { useApi } from "../hooks/use-api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { AlertCircle, CheckCircle2, XCircle, Send } from "lucide-react";
import LoadingSpinner from "../components/layout/loading-spinner";

interface DashboardStats {
  totalTestes: number;
  testesSucesso: number;
  testesFalha: number;
  campanhasAtivas: number;
  testesPorDepartamento: {
    departamento: string;
    total: number;
    sucesso: number;
    falha: number;
  }[];
  usuariosMaisFalhas: {
    id: string;
    nome: string;
    email: string;
    falhas: number;
  }[];
  departamentosMaisFalhas: {
    id: string;
    nome: string;
    falhas: number;
  }[];
}

const COLORS = ["#22c55e", "#ef4444", "#f59e0b"];
const SUCCESS_COLORS = ["#22c55e", "#ef4444"]; // Verde para sucesso, Vermelho para falha

export function Dashboard() {
  const { get, loading } = useApi();
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      const response = await get<DashboardStats>("/dashboard/stats");
      if (response) {
        setStats(response);
      }
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  }

  if (loading || !stats) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const pieData = stats.testesPorDepartamento.map((dept) => ({
    name: dept.departamento,
    value: dept.total,
    sucesso: dept.sucesso,
    falha: dept.falha,
  }));

  const overallPieData = [
    {
      name: "Bem Sucedidos",
      value: stats.testesSucesso,
    },
    {
      name: "Mal Sucedidos",
      value: stats.testesFalha,
    },
  ];

  return (
    <div className="p-6 space-y-6 w-full">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de testes
            </CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTestes}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Testes bem sucedidos
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.testesSucesso}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Testes mal sucedidos
            </CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.testesFalha}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Campanhas ativas
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.campanhasAtivas}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Taxa de sucesso geral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={overallPieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {overallPieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={SUCCESS_COLORS[index % SUCCESS_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Testes por departamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Usuários que mais falharam</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.usuariosMaisFalhas.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground">
                Nenhum usuário encontrado.
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Falhas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.usuariosMaisFalhas.map((usuario) => (
                    <TableRow key={usuario.id}>
                      <TableCell>{usuario.nome}</TableCell>
                      <TableCell>{usuario.email}</TableCell>
                      <TableCell className="text-right">
                        {usuario.falhas}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Departamentos que mais falharam</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.departamentosMaisFalhas.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground">
                Nenhum departamento encontrado.
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Departamento</TableHead>
                    <TableHead className="text-right">Falhas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.departamentosMaisFalhas.map((departamento) => (
                    <TableRow key={departamento.id}>
                      <TableCell>{departamento.nome}</TableCell>
                      <TableCell className="text-right">
                        {departamento.falhas}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

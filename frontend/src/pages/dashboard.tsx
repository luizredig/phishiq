import {
  Annoyed,
  CheckCircle2,
  Download,
  Frown,
  Laugh,
  Send,
  Smile,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoadingSpinner from "../components/layout/loading-spinner";
import { Button } from "../components/ui/button";
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
import { useApi } from "../hooks/use-api";

interface DashboardStats {
  totalTestes: number;
  testesSucesso: number;
  testesFalha: number;
  testesPorDepartamento: {
    departamento: string;
    falhas: number;
  }[];
  usuariosMaisFalhas: {
    id: string;
    nome: string;
    email: string;
    falhas: number;
  }[];
  departmentsMaisFalhas: {
    id: string;
    nome: string;
    falhas: number;
  }[];
}

const SUCCESS_COLORS = ["#22c55e", "#ef4444"]; // Verde para sucesso, Vermelho para falha

function PDFHeader() {
  return (
    <div className="flex items-center justify-between mb-6 pb-4 border-b">
      <div className="flex items-center gap-2">
        <h1 className="text-primary text-2xl font-bold">PhishIQ</h1>
      </div>
      <div className="text-sm text-muted-foreground">
        {new Date().toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
}

function DashboardContent({
  stats,
}: // meterInfo,
{
  stats: DashboardStats;
  meterInfo: any;
}) {
  // const Icon = meterInfo.icon;

  const overallPieData = [
    {
      name: "Sucesso",
      value: stats.testesSucesso,
    },
    {
      name: "Falha",
      value: stats.testesFalha,
    },
  ];

  const barData = stats.testesPorDepartamento?.map((dept) => ({
    name: dept.departamento,
    falhas: dept.falhas,
  }));

  return (
    <div className="space-y-6">
      {/* <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className={`h-8 w-8 ${meterInfo.color}`} />
            <span>Medidor de segurança</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={`text-lg ${meterInfo.color.replace("stroke-", "text-")}`}
          >
            {meterInfo.message}
          </p>
        </CardContent>
      </Card> */}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de testes
            </CardTitle>
            <Send className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {stats.totalTestes}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              N° de testes sem falha
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              {stats.testesSucesso}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              N° de testes com falha
            </CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              {stats.testesFalha}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Taxa de sucesso geral</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.testesSucesso === 0 && stats.testesFalha === 0 ? (
              <div className="text-center py-4 text-muted-foreground">
                Nenhum teste realizado ainda.
              </div>
            ) : (
              <div className="h-[350px]">
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
                      {overallPieData?.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={SUCCESS_COLORS[index % SUCCESS_COLORS?.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Falhas por departamento</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.testesPorDepartamento?.length === 0 ||
            stats.testesPorDepartamento?.every((dept) => dept.falhas === 0) ? (
              <div className="text-center py-4 text-muted-foreground">
                Nenhuma falha registrada por departamento ainda.
              </div>
            ) : (
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      angle={-45}
                      textAnchor="end"
                      height={70}
                      interval={0}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="falhas" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Usuários que mais falharam</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.usuariosMaisFalhas?.length === 0 ? (
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
                  {stats.usuariosMaisFalhas?.map((usuario) => (
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
            {stats.departmentsMaisFalhas?.length === 0 ? (
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
                  {stats.departmentsMaisFalhas?.map((departamento) => (
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

export function Dashboard() {
  const { get, loading } = useApi();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [showPdf, setShowPdf] = useState(false);
  const { toPDF, targetRef } = usePDF({
    filename: "dashboard-phishiq.pdf",
    page: {
      orientation: "l",
    },
    method: "save",
    resolution: 2,
    canvas: {
      useCORS: true,
      logging: true,
    },
  });

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

  const getMeterInfo = () => {
    if (!stats) {
      return {
        icon: Smile,
        color: "stroke-gray-500",
        message: "Você ainda não fez nenhuma simulação.",
      };
    }

    const { testesSucesso, testesFalha } = stats;
    const total = testesSucesso + testesFalha;

    if (total === 0) {
      return {
        icon: Smile,
        color: "stroke-gray-500",
        message: "Você ainda não fez nenhuma simulação.",
      };
    }

    const diferenca = testesSucesso - testesFalha;
    const percentualDiferenca = Math.abs(diferenca) / total;

    if (percentualDiferenca < 0.2) {
      return {
        icon: Annoyed,
        color: "stroke-yellow-500",
        message: "Cuidado! Você está quase lá.",
      };
    }

    if (diferenca > 0) {
      return {
        icon: Laugh,
        color: "stroke-green-500",
        message: "Excelente! Continue assim.",
      };
    }

    return {
      icon: Frown,
      color: "stroke-red-500",
      message: "Atenção! Você precisa melhorar.",
    };
  };

  if (loading || !stats) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <LoadingSpinner />
      </div>
    );
  }

  const meterInfo = getMeterInfo();

  const handleExport = async () => {
    setShowPdf(true);
    // Pequeno delay para garantir que o conteúdo esteja visível
    setTimeout(() => {
      toPDF();
      setShowPdf(false);
    }, 100);
  };

  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={handleExport} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Exportar PDF
        </Button>
      </div>

      {/* Screen View */}
      <DashboardContent stats={stats} meterInfo={meterInfo} />

      {/* PDF View */}
      <div
        ref={targetRef}
        style={{
          display: showPdf ? "block" : "none",
          width: "100%",
          height: "100vh",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <PDFHeader />
        <div className="mt-4">
          <DashboardContent stats={stats} meterInfo={meterInfo} />
        </div>
      </div>
    </div>
  );
}

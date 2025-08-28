import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  AlertTriangle,
  BrainCircuit,
  Download,
  Lock,
  Mail,
  Shield,
  Smartphone,
  User,
  Wifi,
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

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

const materials = [
  {
    id: 1,
    title: "O que é phishing?",
    icon: AlertTriangle,
    content: `Phishing é uma técnica de engenharia social onde atacantes se passam por entidades confiáveis para roubar informações sensíveis como senhas, dados bancários e informações pessoais.

Os atacantes geralmente se comunicam por email, mensagens de texto ou redes sociais, criando uma sensação de urgência ou oferecendo algo muito bom para ser verdade.`,
  },
  {
    id: 2,
    title: "Tipos de phishing",
    icon: BrainCircuit,
    content: `1. Email Phishing: O tipo mais comum, usando emails falsos
2. Spear Phishing: Ataques direcionados a pessoas específicas
3. Whaling: Ataques focados em executivos de alto nível
4. Smishing: Phishing via mensagens SMS
5. Vishing: Phishing por chamadas de voz
6. Pharming: Redirecionamento para sites falsos`,
  },
  {
    id: 3,
    title: "Como identificar?",
    icon: Shield,
    content: `• Endereços de email suspeitos
• Erros gramaticais e ortográficos
• Solicitações urgentes de ação
• Links suspeitos (passe o mouse para ver o destino real)
• Anexos inesperados
• Solicitações de informações pessoais
• Ofertas muito boas para serem verdadeiras
• Remetentes desconhecidos`,
  },
  {
    id: 4,
    title: "O que fazer?",
    icon: Lock,
    content: `1. Não clique em links suspeitos
2. Verifique o remetente cuidadosamente
3. Não abra anexos inesperados
4. Nunca compartilhe senhas ou dados sensíveis
5. Use autenticação de dois fatores
6. Mantenha seu software atualizado
7. Use um gerenciador de senhas
8. Reporte emails suspeitos ao departamento de TI`,
  },
  {
    id: 5,
    title: "Boas práticas",
    icon: User,
    content: `• Use senhas fortes e únicas
• Ative autenticação de dois fatores
• Mantenha seus dispositivos atualizados
• Faça backup regular dos seus dados
• Use VPN em redes públicas
• Verifique regularmente suas contas
• Eduque-se sobre novas ameaças
• Mantenha um antivírus atualizado`,
  },
  {
    id: 6,
    title: "Dispositivos móveis",
    icon: Smartphone,
    iconImg: "/icons/smartphone.png",
    content: `• Instale apps apenas de lojas oficiais
• Mantenha o sistema operacional atualizado
• Use autenticação biométrica quando possível
• Evite redes Wi-Fi públicas
• Não salve senhas no navegador
• Use apps de segurança confiáveis
• Ative a localização apenas quando necessário
• Faça backup regular dos dados`,
  },
  {
    id: 7,
    title: "Emails seguros",
    icon: Mail,
    iconImg: "/icons/mail.png",
    content: `• Verifique o endereço do remetente
• Desconfie de emails não solicitados
• Não responda a emails suspeitos
• Use filtros de spam
• Mantenha seu email profissional separado
• Não compartilhe seu email em sites suspeitos
• Use assinaturas digitais quando possível
• Configure regras de encaminhamento com cuidado`,
  },
  {
    id: 8,
    title: "Redes Wi-Fi",
    icon: Wifi,
    iconImg: "/icons/wifi.png",
    content: `• Evite redes públicas quando possível
• Use VPN em redes públicas
• Desative compartilhamento de arquivos
• Use HTTPS sempre que possível
• Não acesse dados sensíveis em redes públicas
• Mantenha o firewall ativado
• Desative a conexão automática
• Verifique a segurança da rede antes de conectar`,
  },
];

export default function Materiais() {
  const [selectedMaterial, setSelectedMaterial] = useState<number | null>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleExport = async (materialId: number) => {
    setSelectedMaterial(materialId);

    // Aguarda renderização do conteúdo
    setTimeout(async () => {
      if (!pdfRef.current) return;

      const canvas = await html2canvas(pdfRef.current, {
        useCORS: true,
        backgroundColor: "#ffffff",
        scale: 2,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("material-de-apoio-phishiq.pdf");

      setSelectedMaterial(null);
    }, 200);
  };

  return (
    <div className="space-y-8 w-full h-full overflow-y-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Materiais</h1>
      </div>

      {/* Visualização em tela */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {materials?.map((material) => (
          <Card key={material.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <material.icon className="h-5 w-5 text-primary" />
                {material.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleExport(material.id)}
                className="w-full flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Baixar PDF
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Área oculta para captura PDF */}
      <div
        ref={pdfRef}
        style={{
          position: "absolute",
          left: "-9999px",
          width: "794px", // ~210mm
          minHeight: "1122px", // ~297mm
          padding: "20px",
          boxSizing: "border-box",
          backgroundColor: "#fff",
        }}
      >
        <PDFHeader />
        {selectedMaterial !== null && (
          <div className="mt-8">
            {(() => {
              const material = materials.find((m) => m.id === selectedMaterial);
              if (!material) return null;

              return (
                <Card className="border-none shadow-none">
                  <CardHeader className="px-0">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <material.icon className="h-8 w-8 text-primary" />
                      {material.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <CardDescription className="whitespace-pre-line text-lg leading-relaxed">
                      {material.content}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

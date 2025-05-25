import { Gamepad2, BrainCircuit } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  return (
    <div className="p-6 space-y-8 w-full h-full overflow-y-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          Bem-vindo ao <span className="text-primary">PhishIQ</span>
        </h1>
        <p className="text-muted-foreground">
          Sua plataforma de conscientização e treinamento contra phishing.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full min-h-0">
        <Card className="hover:shadow-lg transition-shadow flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-primary" />
              Quiz interativo
            </CardTitle>
            <CardDescription>
              Teste seus conhecimentos sobre phishing de forma divertida.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1" />
          <CardContent>
            <Button className="w-full" disabled>
              Em breve
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              Treinamentos e materiais educativos
            </CardTitle>
            <CardDescription>
              Materiais educativos sobre segurança.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1" />
          <CardContent>
            <Button className="w-full" disabled>
              Em breve
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { z } from "zod";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const emailSchema = z.string().trim().toLowerCase().email("E-mail inválido");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setEmailError(parsed.error.errors[0]?.message ?? "E-mail inválido");
      return;
    }
    const normalizedEmail = parsed.data;
    setEmail(normalizedEmail);

    const ok = await login(normalizedEmail, password);
    if (ok) navigate("/dashboard");
  }

  return (
    <div className="mx-auto grid min-h-dvh w-full max-w-md place-items-center p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Acesse sua conta para continuar</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.toLowerCase());
                if (emailError) setEmailError(null);
              }}
              onBlur={() => setEmail((prev) => prev.trim())}
            />
            {emailError && <p className="text-sm text-red-600">{emailError}</p>}
            <Input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full" disabled={loading} type="submit">
              {loading ? "Entrando..." : "Entrar"}
            </Button>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <p className="text-sm text-muted-foreground">
              Não tem conta?{" "}
              <Link to="/signup" className="text-primary underline">
                Criar conta
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

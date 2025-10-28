import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useApi } from "../hooks/use-api";
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

export default function SignupPage() {
  const navigate = useNavigate();
  const { signup, loading, error } = useAuth();
  const api = useApi();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  const EmailSchema = z.string().trim().toLowerCase().email("E-mail inválido");
  const passwordSchema = z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(
      /[^A-Za-z0-9]/,
      "A senha deve conter pelo menos um caractere especial"
    );

  function toTitleCaseName(value: string): string {
    const collapsed = value.trim().replace(/\s+/g, " ");
    if (!collapsed) return "";
    return collapsed
      .split(" ")
      .map((part) =>
        part
          .split("-")
          .map((sub) => {
            const lower = sub.toLocaleLowerCase("pt-BR");
            return lower.charAt(0).toLocaleUpperCase("pt-BR") + lower.slice(1);
          })
          .join("-")
      )
      .join(" ");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const normalizedName = toTitleCaseName(name);
    setName(normalizedName);
    const parsed = EmailSchema.safeParse(email);
    if (!parsed.success) {
      setEmailError(parsed.error.errors[0]?.message ?? "E-mail inválido");
      return;
    }
    const normalizedEmail = parsed.data;
    setEmail(normalizedEmail);

    const pwd = passwordSchema.safeParse(password);
    if (!pwd.success) {
      setPasswordError(pwd.error.errors[0]?.message ?? "Senha inválida");
      return;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("As senhas não coincidem");
      return;
    }

    const ok = await signup({
      name: normalizedName,
      email: normalizedEmail,
      password,
    });
    if (ok) {
      try {
        await api.get("/cookies/consents");
      } catch {}
      navigate("/dashboard");
    }
  }

  return (
    <div className="mx-auto grid min-h-dvh w-full max-w-md place-items-center p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Criar conta</CardTitle>
          <CardDescription>Preencha os campos para começar</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setName((prev) => toTitleCaseName(prev))}
            />
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
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError(null);
              }}
            />
            {passwordError && (
              <p className="text-sm text-red-600">{passwordError}</p>
            )}
            <Input
              placeholder="Confirmar senha"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (confirmPasswordError) setConfirmPasswordError(null);
              }}
            />
            {confirmPasswordError && (
              <p className="text-sm text-red-600">{confirmPasswordError}</p>
            )}
            <Button className="w-full" disabled={loading} type="submit">
              {loading ? "Criando..." : "Criar conta"}
            </Button>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <p className="text-sm text-muted-foreground">
              Já tem conta?{" "}
              <Link to="/login" className="text-primary underline">
                Entrar
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

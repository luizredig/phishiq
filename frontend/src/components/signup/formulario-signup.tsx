"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../layout/loading-spinner";
import { api } from "../../lib/axios";

const signupSchema = z
  .object({
    email: z
      .string()
      .nonempty("Por favor, insira seu email.")
      .email("Por favor, insira um email válido."),
    companyName: z
      .string()
      .nonempty("Por favor, insira o nome da sua empresa."),
    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres.")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
      .regex(/[0-9]/, "A senha deve conter pelo menos um número.")
      .regex(
        /[^A-Za-z0-9]/,
        "A senha deve conter pelo menos um caractere especial."
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

type FormularioSignupSchema = z.infer<typeof signupSchema>;

export default function FormularioSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false,
    passwordsMatch: false,
  });

  const form = useForm<FormularioSignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: location.state?.email || "",
      companyName: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  useEffect(() => {
    setPasswordValidation({
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[^A-Za-z0-9]/.test(password),
      passwordsMatch:
        password === confirmPassword && confirmPassword.length > 0,
    });
  }, [password, confirmPassword]);

  const onSubmit = async (data: FormularioSignupSchema) => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post("/keycloak/register", {
        email: data.email,
        companyName: data.companyName,
        password: data.password,
      });

      sessionStorage.setItem("token", response.data.data.token);
      sessionStorage.setItem("realm", response.data.data.realm);
      sessionStorage.setItem("userId", response.data.data.userId);

      navigate("/inicio");
    } catch (err) {
      console.error("Erro no cadastro:", err);
      setError(
        (err as any).response?.data?.message ||
          "Ocorreu um erro ao registrar. Por favor, tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const ValidationItem = ({
    isValid,
    text,
  }: {
    isValid: boolean;
    text: string;
  }) => (
    <li className="flex items-center gap-2">
      {isValid ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <X className="h-4 w-4 text-gray-400" />
      )}
      <span className={isValid ? "text-green-500" : "text-gray-500"}>
        {text}
      </span>
    </li>
  );

  return (
    <div className="flex min-h-screen flex-col-reverse justify-center px-5 md:flex-row lg:px-40">
      <div className="p-6 rounded-lg flex w-full items-center justify-center md:w-2/3 md:p-16">
        <div className="w-full max-w-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2 text-left">
                <h2 className="text-2xl font-semibold text-foreground">
                  Cadastre sua empresa
                </h2>
                <p className="text-sm text-gray-500">
                  Preencha os dados abaixo para começar a utilizar nossa
                  plataforma
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Email da empresa
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Digite seu email"
                            autoComplete="email"
                            {...field}
                            className="h-12 rounded-lg border"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Nome da empresa
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Nome da sua empresa"
                            autoComplete="organization"
                            {...field}
                            className="h-12 rounded-lg border"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Senha</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Mínimo de 8 caracteres"
                            autoComplete="new-password"
                            {...field}
                            className="h-12 rounded-lg border pr-10"
                          />

                          <button
                            type="button"
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Confirme a senha
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Digite a senha novamente"
                            autoComplete="new-password"
                            {...field}
                            className="h-12 rounded-lg border pr-10"
                          />

                          <button
                            type="button"
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="text-sm space-y-2">
                <h3 className="font-medium">Requisitos de senha:</h3>
                <ul className="space-y-1.5">
                  <ValidationItem
                    isValid={passwordValidation.minLength}
                    text="Mínimo de 8 caracteres"
                  />
                  <ValidationItem
                    isValid={passwordValidation.hasUppercase}
                    text="Pelo menos uma letra maiúscula"
                  />
                  <ValidationItem
                    isValid={passwordValidation.hasLowercase}
                    text="Pelo menos uma letra minúscula"
                  />
                  <ValidationItem
                    isValid={passwordValidation.hasNumber}
                    text="Pelo menos um número"
                  />
                  <ValidationItem
                    isValid={passwordValidation.hasSpecial}
                    text="Pelo menos um caractere especial"
                  />
                  <ValidationItem
                    isValid={passwordValidation.passwordsMatch}
                    text="Senhas correspondem"
                  />
                </ul>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="bg-primary w-full rounded-lg py-3 font-medium text-white hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? <LoadingSpinner /> : "Finalizar Cadastro"}
                </Button>

                <p className="text-sm text-center text-gray-600">
                  Já tem uma conta?{" "}
                  <a href="/login" className="text-primary hover:underline">
                    Faça login
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

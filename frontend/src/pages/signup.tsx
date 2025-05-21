"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { useState } from "react";

import { Link } from "react-router-dom";
import LoadingSpinner from "../components/layout/loading-spinner";

const signupSchema = z
  .object({
    name: z.string().nonempty("Por favor, insira seu nome."),
    email: z
      .string()
      .nonempty("Por favor, insira seu email.")
      .email("Por favor, insira um email válido."),
    password: z
      .string()
      .nonempty("Por favor, insira sua senha.")
      .min(8, "A senha deve ter pelo menos 8 caracteres."),
    confirmPassword: z.string().nonempty("Por favor, confirme sua senha."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

type SignupFormSchema = z.infer<typeof signupSchema>;

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const form = useForm<SignupFormSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormSchema) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:1421/keycloak/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        window.location.href = `http://localhost:8080/realms/phishiq/protocol/openid-connect/auth?client_id=phishiq-cli&redirect_uri=http://localhost:1413/callback&response_type=code&scope=openid%20profile%20email&state=${encodeURIComponent(
          from
        )}`;
      } else {
        const error = await response.json();
        console.error("Registration error:", error);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 md:flex-row lg:px-40">
      <div className="rounded-lg p-6 flex w-full items-center justify-center md:w-1/2 md:p-16">
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2 text-left">
                <h2 className="text-foreground text-lg font-semibold">
                  Criar nova conta
                </h2>
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Nome da empresa
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Digite seu nome"
                          {...field}
                          className="h-12 rounded-lg border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                          id="email"
                          type="email"
                          placeholder="Digite seu email"
                          {...field}
                          className="h-12 rounded-lg border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Senha</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Digite sua senha"
                          {...field}
                          className="h-12 rounded-lg border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Confirmar Senha
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirme sua senha"
                          {...field}
                          className="h-12 rounded-lg border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-primary w-full rounded-lg py-3 font-medium text-white hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? <LoadingSpinner /> : "Cadastrar"}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <p>
              Já tem uma conta?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

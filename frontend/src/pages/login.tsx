/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useLocation } from "react-router-dom";

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

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Por favor, insira seu email.")
    .email("Por favor, insira um email válido."),
});

type LoginFormSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:1421/keycloak/email-exists",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        }
      );

      const { exists } = await response.json();

      if (exists) {
        window.location.href = `http://localhost:8080/realms/phishiq/protocol/openid-connect/auth?client_id=phishiq-cli&redirect_uri=http://localhost:1413/callback&response_type=code&scope=openid%20profile%20email&state=${encodeURIComponent(
          from
        )}&login_hint=${encodeURIComponent(data.email)}`;
      } else {
        navigate("/signup", { state: { email: data.email } });
      }
    } catch (error) {
      console.error("Error checking email:", error);
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
                  Acesse sua conta
                </h2>
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="text"
                          placeholder="Digite seu email"
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
                  {loading ? <LoadingSpinner /> : "Entrar"}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <p>
              Não tem uma conta?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

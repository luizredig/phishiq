/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
import { useNavigate } from "react-router-dom";
import { emailExists } from "../api/usuarios/exists";

import { Link } from "react-router-dom";
import LoadingSpinner from "../components/layout/loading-spinner";

// Função para gerar código de desafio PKCE
function generateCodeVerifier() {
  const array = new Uint8Array(32);
  window.crypto.getRandomValues(array);
  return Array.from(array, (byte) =>
    ("0" + (byte & 0xff).toString(16)).slice(-2)
  ).join("");
}

// Função para codificar em base64-url
function base64UrlEncode(str: string) {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// Função para criar um code challenge a partir do code verifier
async function generateCodeChallenge(codeVerifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return base64UrlEncode(String.fromCharCode(...new Uint8Array(digest)));
}

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

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      setLoading(true);
      const response = await emailExists(data.email);

      if (response.exists) {
        // Gerar e armazenar PKCE code verifier
        const codeVerifier = generateCodeVerifier();
        localStorage.setItem("code_verifier", codeVerifier);

        // Gerar code challenge
        const codeChallenge = await generateCodeChallenge(codeVerifier);

        // Armazenar informações no sessionStorage
        sessionStorage.setItem("realm", response.realm);
        sessionStorage.setItem("clientId", response.clientId);
        sessionStorage.setItem("login_email", data.email);

        // Construir URL do Keycloak com suporte PKCE
        const baseUrl = import.meta.env.VITE_KEYCLOAK_URL;
        const redirectUri = `${window.location.origin}/callback`;
        const state = Math.random().toString(36).substring(2);

        const url = new URL(
          `${baseUrl}/realms/${response.realm}/protocol/openid-connect/auth`
        );
        url.searchParams.append("client_id", response.clientId);
        url.searchParams.append("redirect_uri", redirectUri);
        url.searchParams.append("response_type", "code");
        url.searchParams.append("scope", "openid profile email");
        url.searchParams.append("state", state);
        url.searchParams.append("code_challenge", codeChallenge);
        url.searchParams.append("code_challenge_method", "S256");
        url.searchParams.append("login_hint", data.email);

        // Redirecionar para o Keycloak
        window.location.replace(url.toString());
      } else {
        navigate("/signup", { state: { email: data.email } });
      }
    } catch (error) {
      console.error(error);
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

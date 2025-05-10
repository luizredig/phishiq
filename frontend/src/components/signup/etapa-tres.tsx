"use client";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface EtapaTresProps {
  email?: string;
  companyName?: string;
  password: string;
  confirmPassword: string;
  updateFormData: (field: string, value: string) => void;
  handleBack: () => void;
}

const passwordSchema = z
  .object({
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

type PasswordFormSchema = z.infer<typeof passwordSchema>;

export default function EtapaTres({
  email,
  companyName,
  password,
  confirmPassword,
  updateFormData,
  handleBack,
}: EtapaTresProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<PasswordFormSchema>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password,
      confirmPassword,
    },
  });

  const onSubmit = async (data: PasswordFormSchema) => {
    updateFormData("password", data.password);
    updateFormData("confirmPassword", data.confirmPassword);

    if (!email || !companyName) {
      toast.error("Dados incompletos", {
        description: "Email e nome da empresa são obrigatórios.",
      });
      return;
    }

    try {
      setLoading(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2 text-left">
          <h2 className="text-foreground font-semibold">
            Escolha uma senha segura para sua conta
          </h2>
        </div>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo de 8 caracteres"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormData("password", e.target.value);
                      }}
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
                  Confirme a senha
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Digite a senha novamente"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormData("confirmPassword", e.target.value);
                      }}
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
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={handleBack}
              variant="outline"
              className="flex-1 rounded-lg border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Voltar
            </Button>

            <Button
              type="submit"
              className="bg-primary flex-1 rounded-lg py-3 font-medium text-white hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Concluir"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

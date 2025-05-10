"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { getLoginUrl, getRegisterUrl } from "../handlers/redirect-urls";
import { emailExists } from "../api/usuarios/exists";

const emailSchema = z.object({
  email: z.string().email({ message: "Digite um e-mail válido." }),
});

type EmailFormData = z.infer<typeof emailSchema>;

export default function TelaLogin() {
  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: EmailFormData) => {
    const email = data.email.toLowerCase();

    const { realm, exists } = await emailExists(email);

    if (exists) {
      sessionStorage.setItem("realm", realm);
      window.location.href = getLoginUrl(realm, email);
    } else {
      window.location.href = getRegisterUrl(email);
    }
  };

  return (
    <div className="h-screen flex w-full justify-center items-center px-5">
      <div
        className={cn(
          "flex flex-col gap-6 w-full h-full max-w-4xl max-h-[500px] justify-center items-center"
        )}
      >
        <Card className="overflow-hidden h-full justify-center items-center w-full max-w-xl">
          <CardContent className="grid p-0 h-full w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="p-6 h-full justify-center items-center flex w-full"
              >
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold select-none">
                      Boas-vindas!
                    </h1>
                    <p className="text-balance text-muted-foreground select-none">
                      Informe seu email para continuar
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="select-none">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite seu email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="select-none" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full select-none"
                    disabled={!form.formState.isValid}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

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

interface EtapaDoisProps {
  companyName: string;
  updateFormData: (field: string, value: string) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const companySchema = z.object({
  companyName: z.string().nonempty("Por favor, insira o nome da sua empresa."),
});

type CompanyFormSchema = z.infer<typeof companySchema>;

export default function EtapaDois({
  companyName,
  updateFormData,
  handleNext,
  handleBack,
}: EtapaDoisProps) {
  const form = useForm<CompanyFormSchema>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      companyName,
    },
  });

  const onSubmit = (data: CompanyFormSchema) => {
    updateFormData("companyName", data.companyName);
    handleNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2 text-left">
          <h2 className="text-foreground font-semibold">
            Como sua empresa é conhecida?
          </h2>
        </div>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Nome da empresa</FormLabel>

                <FormControl>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Nome da sua empresa"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      updateFormData("companyName", e.target.value);
                    }}
                    className="h-12 rounded-lg border"
                  />
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
            >
              Avançar
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
  criarDepartamento,
  atualizarDepartamento,
} from '@/server/departamento/actions'
import type { Departamento } from '@/types/departamento'
import { useDepartamentosContext } from './context-departamentos'
import { capitalize } from '@/helpers/capitalize-string'
import { useUsuariosContext } from '../usuario/context-usuarios'
import { SelectLocalStorage } from '../selects/select-local-storage'

const departamentoFormSchema = z.object({
  nome: z
    .string()
    .min(2, {
      message: 'Nome é obrigatório e precisa ter ao menos 2 caracteres.',
    })
    .transform((val) => capitalize(val)),
  usuarios: z.array(z.string()),
})
type DepartamentoFormValues = z.infer<typeof departamentoFormSchema>

interface DepartamentoFormProps {
  initialData?: Departamento
}

export type DepartamentoUpdatePayload = {
  id: string
  nome: string
}

export function DepartamentoForm({ initialData }: DepartamentoFormProps = {}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isEditing = !!initialData
  const { refreshDepartamentos } = useDepartamentosContext()
  const { usuarios } = useUsuariosContext()

  const defaultValues: Partial<DepartamentoFormValues> = {
    nome: initialData?.nome || '',
    usuarios: initialData?.usuarios || [],
  }

  const form = useForm<DepartamentoFormValues>({
    resolver: zodResolver(departamentoFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit(data: DepartamentoFormValues) {
    setIsSubmitting(true)

    const payload = {
      ...data,
      id: initialData?.id,
    }

    try {
      if (isEditing && initialData?.id) {
        const payload = {
          ...data,
          id: initialData.id,
        }

        await atualizarDepartamento(payload)
      } else {
        await criarDepartamento(payload)
      }

      await refreshDepartamentos()
      router.push('/departamentos')
    } catch (error) {
      console.error('Erro ao salvar departamento:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-destructive text-sm">* campos obrigatórios</span>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nome<span className="text-destructive m-0 p-0">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nome do departamento" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="usuarios"
            render={({ field }) => (
              <SelectLocalStorage
                contextOptions={usuarios.map((usuarios) => ({
                  label: `${usuarios.nome} ${usuarios.sobrenome || ''}`,
                  value: usuarios.id,
                }))}
                storageKey="usuarios"
                field={field}
                label="Usuários"
                placeholder="Atribua usuários ao departamento"
              />
            )}
          />

          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={!form.formState.isValid || isSubmitting}
            >
              {isEditing ? 'Atualizar' : 'Cadastrar departamento'}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/departamentos')}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

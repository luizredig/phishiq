'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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

import { capitalize } from '@/helpers/capitalize-string'
import {
  atualizarUsuario,
  buscarEmailEmRealm,
  criarUsuario,
} from '@/server/usuario/actions'
import type { Usuario } from '@/types/usuario'
import { useUsuariosContext } from './usuarios-context'
import { useDepartamentosContext } from '../departamento/departamentos-context'
import { SelectLocalStorage } from '../selects/select-local-storage'

const userFormSchema = z.object({
  nome: z
    .string()
    .min(2, {
      message: 'Nome é obrigatório e precisa ter ao menos 2 caracteres.',
    })
    .transform((val) => capitalize(val)),
  sobrenome: z
    .string()
    .optional()
    .transform((val) => (val ? capitalize(val) : undefined)),
  email: z.string().email({ message: 'Digite um e-mail válido.' }),
  departamentos: z
    .array(z.string())
    .min(1, { message: 'Selecione ao menos um departamento.' }),
})

type UserFormValues = z.infer<typeof userFormSchema>

interface UserFormProps {
  initialData?: Usuario
}

export type UsuarioUpdatePayload = {
  id: string
  nome: string
  sobrenome?: string
  email: string
  realm: string
}

export function UserForm({ initialData }: UserFormProps = {}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isEditing = !!initialData
  const { refreshUsuarios } = useUsuariosContext()
  const { departments } = useDepartamentosContext()

  const defaultValues: Partial<UserFormValues> = {
    nome: initialData?.nome || '',
    sobrenome: initialData?.sobrenome || '',
    email: initialData?.email || '',
    departamentos: initialData?.departamentos || [],
  }

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit(data: UserFormValues) {
    setIsSubmitting(true)

    const realm = sessionStorage.getItem('realm')
    if (!realm) {
      console.error('Realm não encontrado no sessionStorage')
      setIsSubmitting(false)
      return
    }

    const payload = {
      ...data,
      realm,
      id: initialData?.id,
    }

    try {
      if (!isEditing) {
        const emailExists = await buscarEmailEmRealm(realm, data.email)

        if (emailExists) {
          form.setError('email', {
            type: 'manual',
            message: 'Já existe um usuário cadastrado com esse e-mail.',
          })
          setIsSubmitting(false)
          return
        }
      }

      if (isEditing && initialData?.id) {
        const payload = {
          ...data,
          id: initialData.id,
          realm,
        }

        await atualizarUsuario(payload)
      } else {
        await criarUsuario(payload)
      }

      await refreshUsuarios()
      router.push('/users')
    } catch (error) {
      console.error('Erro ao salvar usuário:', error)
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
                  <Input placeholder="Nome do usuário" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sobrenome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input placeholder="Sobrenome do usuário" {...field} />
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
                <FormLabel>
                  Email<span className="text-destructive m-0 p-0">*</span>
                </FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email do usuário"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="departamentos"
            render={({ field }) => (
              <div className="flex flex-row-reverse justify-end">
                <span className="text-destructive m-0 p-0">*</span>

                <SelectLocalStorage
                  contextOptions={departments.map((dep) => ({
                    label: dep.nome,
                    value: dep.id,
                  }))}
                  storageKey="departamentos"
                  field={field}
                  label="Departamentos"
                  placeholder="Selecione os departamentos"
                />
              </div>
            )}
          />

          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={!form.formState.isValid || isSubmitting}
            >
              {isEditing ? 'Atualizar' : 'Cadastrar usuário'}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/users')}
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

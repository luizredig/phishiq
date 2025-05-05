'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useState } from 'react'
import api from '@/lib/axios'
import Link from 'next/link'

const loginSchema = z.object({
  email: z
    .string()
    .nonempty('Por favor, insira seu email.')
    .email('Por favor, insira um email válido.'),
})

type LoginFormSchema = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      setLoading(true)

      const res = await api.post('/keycloak/login', {
        email: data.email,
      })

      const { statusCode, realm } = res.data

      if (statusCode === 200 && realm) {
        sessionStorage.setItem('realm', realm)
        sessionStorage.setItem('clientId', `${realm}-client`)

        const keycloakUrl = process.env.NEXT_PUBLIC_KEYCLOAK_URL || ''
        const redirectUri = `${window.location.origin}/dashboard`

        const loginUrl = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/auth?client_id=${realm}-client&response_type=code&scope=openid&redirect_uri=${encodeURIComponent(redirectUri)}`

        window.location.href = loginUrl
      }

      if (statusCode === 404) {
        toast.error('Email não cadastrado.')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 md:flex-row lg:px-40">
      <div className="bg-background flex w-full items-center justify-center md:w-1/2 md:p-16">
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
                  {loading ? 'Enviando...' : 'Entrar'}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <p>
              Não tem uma conta?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

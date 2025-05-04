'use client'

import type React from 'react'
import { useState } from 'react'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { buscarEmail } from '@/server/usuario/actions'

interface EtapaUmProps {
  email: string
  updateFormData: (field: string, value: string) => void
  handleNext: () => void
}

const emailSchema = z.object({
  email: z
    .string()
    .nonempty('Por favor, insira seu email.')
    .email('Por favor, insira um email válido.'),
})

export default function EtapaUm({
  email,
  updateFormData,
  handleNext,
}: EtapaUmProps) {
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = emailSchema.safeParse({ email })

    if (!result.success) {
      const errorMessage = result.error.format().email?._errors[0] || ''
      setError(errorMessage)
      return
    }

    try {
      const emailExists = await buscarEmail(email)
      if (emailExists) {
        setError('Email já cadastrado. Use outro email.')
        return
      }

      setError('')
      handleNext()
    } catch (err) {
      console.error(err)
      setError('Erro ao verificar email. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2 text-left">
        <h2 className="text-foreground font-semibold">
          Vamos criar a sua conta!
        </h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">
            Email da empresa
          </Label>

          <Input
            id="email"
            type="text"
            placeholder="seu.nome@empresa.com.br"
            value={email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className={`h-12 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'}`}
          />

          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>

        <Button
          type="submit"
          className="bg-primary w-full rounded-lg py-3 font-medium text-white hover:bg-blue-700"
        >
          Avançar
        </Button>
      </div>
    </form>
  )
}

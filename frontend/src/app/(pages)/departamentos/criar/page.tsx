import { DepartamentoForm } from '@/components/departamento/formulario-departamento'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadastrar departamento | PhishIQ',
  description: 'Crie um novo departamento',
}

export default function CreateUserPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Cadastrar departamento
        </h1>

        <div className="w-full max-w-2xl">
          <DepartamentoForm />
        </div>
      </div>
    </div>
  )
}

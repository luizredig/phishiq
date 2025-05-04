import type { Metadata } from 'next'

import { UserForm } from '@/components/usuario/formulario-usuario'

export const metadata: Metadata = {
  title: 'Cadastrar usuário | PhishIQ',
  description: 'Crie um novo usuário no sistema',
}

export default function CreateUserPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Cadastrar usuário</h1>

        <div className="w-full max-w-2xl">
          <UserForm />
        </div>
      </div>
    </div>
  )
}

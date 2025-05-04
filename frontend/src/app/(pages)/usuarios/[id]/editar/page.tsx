'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import { UserForm } from '@/components/usuario/formulario-usuario'
import { Skeleton } from '@/components/ui/skeleton'
import { getUsuarioById } from '@/server/usuario/actions'
import type { Usuario } from '@/types/usuario'

export default function EditUserPage() {
  const params = useParams()
  const router = useRouter()
  const [user, setUser] = useState<Usuario | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = params.id as string

    const fetchUser = async () => {
      try {
        const userData = await getUsuarioById(id)
        setUser(userData)
      } catch (error) {
        console.error('Failed to fetch user:', error)
        router.push('/usuarios')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-start gap-6">
          <Skeleton className="h-10 w-64" />
          <div className="w-full max-w-2xl space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Editar usuário</h1>
        <div className="w-full max-w-2xl">
          {user && <UserForm initialData={user} />}
        </div>
      </div>
    </div>
  )
}

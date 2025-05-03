'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { DepartamentoForm } from '@/components/departamento/departamento-form'
import { Skeleton } from '@/components/ui/skeleton'
import { getDepartamentoById } from '@/server/departamento/actions'
import { Departamento } from '@/types/departamento'

export default function EditDepartamentoPage() {
  const params = useParams()
  const router = useRouter()
  const [department, setDepartment] = useState<Departamento | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = params.id as string

    const fetchDepartment = async () => {
      try {
        const departamentoData = await getDepartamentoById(id)
        setDepartment(departamentoData)
      } catch (error) {
        console.error('Failed to fetch department:', error)
        router.push('/departments')
      } finally {
        setLoading(false)
      }
    }

    fetchDepartment()
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
          {department && <DepartamentoForm initialData={department} />}
        </div>
      </div>
    </div>
  )
}

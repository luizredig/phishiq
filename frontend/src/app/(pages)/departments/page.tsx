'use client'

import Link from 'next/link'
import { PlusCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { withAdminProtection } from '@/lib/with-admin-protection'
import { DepartamentoTable } from '@/components/departamento/departamento-table'

function DepartmentsPage() {
  return (
    <div className="container mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-primary text-3xl font-bold tracking-tight">
          Departamentos
        </h1>

        <Link href="/departments/create">
          <Button>
            <PlusCircle className="h-4 w-4" />
            Cadastrar
          </Button>
        </Link>
      </div>

      <DepartamentoTable />
    </div>
  )
}

export default withAdminProtection(DepartmentsPage)

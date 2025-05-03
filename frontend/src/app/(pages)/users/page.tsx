'use client'

import Link from 'next/link'
import { PlusCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { UserTable } from '@/components/usuario/user-table'
import { withAdminProtection } from '@/lib/with-admin-protection'

function UsersPage() {
  return (
    <div className="container mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-primary text-3xl font-bold tracking-tight">
          Usuários
        </h1>

        <Link href="/users/create">
          <Button>
            <PlusCircle className="h-4 w-4" />
            Cadastrar
          </Button>
        </Link>
      </div>

      <UserTable />
    </div>
  )
}

export default withAdminProtection(UsersPage)

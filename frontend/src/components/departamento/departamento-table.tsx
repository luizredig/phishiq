'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Edit, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import type { Departamento } from '@/types/departamento'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { ToggleStatusDepartamentoDialog } from './toggle-status-departamento-dialog'
import { useDepartamentosContext } from './departamentos-context'

export function DepartamentoTable() {
  const { departments, loading } = useDepartamentosContext()

  const [selectedDepartment, setSelectedDepartment] =
    useState<Departamento | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activateMode, setActivateMode] = useState<boolean>(false)

  const openToggleDialog = (department: Departamento, activate: boolean) => {
    setSelectedDepartment(department)
    setActivateMode(activate)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedDepartment(null)
  }

  if (loading) {
    return <DepartmentTableSkeleton />
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>

              <TableHead className="hidden sm:table-cell">Status</TableHead>

              <TableHead className="pl-3 text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {departments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Nenhum departamento cadastrado ainda.
                </TableCell>
              </TableRow>
            ) : (
              departments.map((department) => (
                <TableRow key={department.id}>
                  <TableCell className="font-medium">
                    {department.nome}
                  </TableCell>

                  <TableCell className="hidden sm:table-cell">
                    <Badge variant={department.ativo ? 'default' : 'secondary'}>
                      {department.ativo ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/departments/${department.id}/edit`}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Edit className="text-primary h-4 w-4" />

                                <span className="sr-only">Editar</span>
                              </Button>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p>Editar usuário</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                openToggleDialog(department, !department.ativo)
                              }
                            >
                              {department.ativo ? (
                                <>
                                  <XIcon className="text-destructive h-4 w-4" />
                                  <span className="sr-only">Inativar</span>
                                </>
                              ) : (
                                <>
                                  <Check className="h-4 w-4 text-green-500" />
                                  <span className="sr-only">Ativar</span>
                                </>
                              )}
                            </Button>
                          </TooltipTrigger>

                          <TooltipContent>
                            <p>
                              {department.ativo
                                ? 'Inativar usuário'
                                : 'Ativar usuário'}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <ToggleStatusDepartamentoDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        department={selectedDepartment}
        onClose={closeDialog}
        activate={activateMode}
      />
    </>
  )
}

function DepartmentTableSkeleton() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>

            <TableHead className="hidden md:table-cell">Status</TableHead>

            <TableHead className="pr-3 text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-4 w-[150px]" />
              </TableCell>

              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-4 w-[80px]" />
              </TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Skeleton className="h-8 w-8 rounded-md" />

                  <Skeleton className="h-8 w-8 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

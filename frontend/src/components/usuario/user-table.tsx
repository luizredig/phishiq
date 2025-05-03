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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { ToggleUserStatusDialog } from '@/components/usuario/toggle-status-usuario-dialog'
import type { Usuario } from '@/types/usuario'
import { useUsuariosContext } from './usuarios-context'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export function UserTable() {
  const { usuarios: users, loading } = useUsuariosContext()

  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activateMode, setActivateMode] = useState<boolean>(false)

  const openToggleDialog = (user: Usuario, activate: boolean) => {
    setSelectedUser(user)
    setActivateMode(activate)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedUser(null)
  }

  if (loading) {
    return <UserTableSkeleton />
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]"></TableHead>

              <TableHead>Nome</TableHead>

              <TableHead className="hidden md:table-cell">Email</TableHead>

              <TableHead className="hidden sm:table-cell">Status</TableHead>

              <TableHead className="pl-3 text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Nenhum usuário cadastrado ainda.
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={''} alt={user.nome} />

                      <AvatarFallback>
                        {user.nome.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>

                  <TableCell className="font-medium">{user.nome}</TableCell>

                  <TableCell className="hidden md:table-cell">
                    {user.email}
                  </TableCell>

                  <TableCell className="hidden sm:table-cell">
                    <Badge variant={user.ativo ? 'default' : 'secondary'}>
                      {user.ativo ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/users/${user.id}/edit`}>
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
                                openToggleDialog(user, !user.ativo)
                              }
                            >
                              {user.ativo ? (
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
                              {user.ativo
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

      <ToggleUserStatusDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        user={selectedUser}
        onClose={closeDialog}
        activate={activateMode}
      />
    </>
  )
}

function UserTableSkeleton() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]"></TableHead>

            <TableHead>Nome</TableHead>

            <TableHead className="hidden md:table-cell">Email</TableHead>

            <TableHead className="pr-3 text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-10 w-10 rounded-full" />
              </TableCell>

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

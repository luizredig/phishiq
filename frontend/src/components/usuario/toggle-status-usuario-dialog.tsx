'use client'

import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { toggleUsuarioStatus } from '@/server/usuario/actions'
import type { Usuario } from '@/types/usuario'
import { useUsuariosContext } from './usuarios-context'

interface ToggleUserStatusDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: Usuario | null
  onClose: () => void
  activate: boolean
}

export function ToggleUserStatusDialog({
  open,
  onOpenChange,
  user,
  onClose,
  activate,
}: ToggleUserStatusDialogProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const { refreshUsers } = useUsuariosContext()

  const handleToggle = async () => {
    if (!user) return

    setIsProcessing(true)

    try {
      await toggleUsuarioStatus(user.id, activate)
      await refreshUsers()
      onClose()
    } catch (error) {
      console.error(
        `Erro ao ${activate ? 'ativar' : 'inativar'} usuário:`,
        error,
      )
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {activate
              ? 'Deseja reativar este usuário?'
              : 'Você tem certeza que deseja inativar este usuário?'}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {activate
              ? 'O usuário voltará a ter acesso à plataforma.'
              : 'Você poderá reativá-lo depois. Deseja prosseguir com a inativação?'}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isProcessing}>
            Cancelar
          </AlertDialogCancel>

          <AlertDialogAction onClick={handleToggle} disabled={isProcessing}>
            {isProcessing
              ? activate
                ? 'Reativando...'
                : 'Inativando...'
              : activate
                ? 'Reativar'
                : 'Inativar'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

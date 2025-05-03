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
import { toggleDepartamentoStatus } from '@/server/departamento/actions'
import type { Departamento } from '@/types/departamento'
import { useDepartamentosContext } from './departamentos-context'

interface ToggleStatusDepartamentoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  department: Departamento | null
  onClose: () => void
  activate: boolean
}

export function ToggleStatusDepartamentoDialog({
  open,
  onOpenChange,
  department,
  onClose,
  activate,
}: ToggleStatusDepartamentoDialogProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const { refreshDepartamentos: refreshDepartments } = useDepartamentosContext()

  const handleToggle = async () => {
    if (!department) return

    setIsProcessing(true)

    try {
      await toggleDepartamentoStatus(department.id, activate)
      await refreshDepartments()
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

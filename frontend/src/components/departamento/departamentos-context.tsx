'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'
import type { Departamento } from '@/types/departamento'
import { getDepartamentos } from '@/server/departamento/actions'

interface DepartamentoContextType {
  departments: Departamento[]
  loading: boolean
  refreshDepartamentos: () => Promise<void>
}

const DepartamentosContext = createContext<DepartamentoContextType | undefined>(
  undefined,
)

export const DepartamentoProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [departamentos, setDepartamentos] = useState<Departamento[]>([])
  const [loading, setLoading] = useState(true)

  const refreshDepartamentos = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getDepartamentos()
      setDepartamentos(data)
      localStorage.setItem('departamentos', JSON.stringify(data))
    } catch (error) {
      console.error('Erro ao buscar departamentos da API:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const carregarDepartamentosLocalStorage = async () => {
      try {
        const cachedData = localStorage.getItem('departamentos')

        if (cachedData) {
          const parsedData = JSON.parse(cachedData)

          if (Array.isArray(parsedData)) {
            setDepartamentos(parsedData)
            setLoading(false)
          } else {
            await refreshDepartamentos()
          }
        } else {
          await refreshDepartamentos()
        }
      } catch (error) {
        console.error('Erro ao carregar departamentos do localStorage:', error)
        await refreshDepartamentos()
      }
    }

    carregarDepartamentosLocalStorage()
  }, [refreshDepartamentos])

  return (
    <DepartamentosContext.Provider
      value={{ departments: departamentos, loading, refreshDepartamentos }}
    >
      {children}
    </DepartamentosContext.Provider>
  )
}

export const useDepartamentosContext = () => {
  const context = useContext(DepartamentosContext)
  if (!context) {
    throw new Error(
      'useDepartamentosContext deve ser usado dentro de DepartamentosProvider',
    )
  }
  return context
}

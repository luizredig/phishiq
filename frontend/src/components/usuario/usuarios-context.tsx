'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { Usuario } from '@/types/usuario'
import { getUsuarios } from '@/server/usuario/actions'

interface UsuariosContextType {
  usuarios: Usuario[]
  loading: boolean
  refreshUsuarios: () => Promise<void>
}

const UsuariosContext = createContext<UsuariosContextType | undefined>(
  undefined,
)

export const UsuariosProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(true)

  const refreshUsuarios = async () => {
    setLoading(true)
    try {
      const data = await getUsuarios()
      setUsuarios(data)
      localStorage.setItem('usuarios', JSON.stringify(data))
    } catch (err) {
      console.error('Erro ao buscar usuários:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const carregarUsuariosLocalStorage = () => {
      try {
        const cachedData = localStorage.getItem('usuarios')

        if (cachedData) {
          const parsedData: Usuario[] = JSON.parse(cachedData)
          setUsuarios(parsedData)
          setLoading(false)
        } else {
          refreshUsuarios()
        }
      } catch (error) {
        console.error('Erro ao carregar usuários do localStorage:', error)
        refreshUsuarios()
      }
    }

    carregarUsuariosLocalStorage()
  }, [])

  return (
    <UsuariosContext.Provider
      value={{ usuarios: usuarios, loading, refreshUsuarios: refreshUsuarios }}
    >
      {children}
    </UsuariosContext.Provider>
  )
}

export const useUsuariosContext = () => {
  const context = useContext(UsuariosContext)
  if (!context) {
    throw new Error(
      'useUsuariosContext deve ser usado dentro de UsuariosProvider',
    )
  }
  return context
}

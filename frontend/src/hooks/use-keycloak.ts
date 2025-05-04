import { useContext } from 'react'
import { AuthContext } from '@/contexts/auth-provider'

export function useKeycloak() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useKeycloak deve ser usado dentro de <AuthProvider>')
  }
  return context
}

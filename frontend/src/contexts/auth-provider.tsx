'use client'

import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react'
import Keycloak from 'keycloak-js'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  keycloak: Keycloak | null
  initialized: boolean
  authenticated: boolean
  token: string | null
  usuario: {
    nome: string
    email: string
    cargos: string[]
  } | null
  realm: string | null
  isAdmin: boolean
}

export const AuthContext = createContext<AuthContextType>({
  keycloak: null,
  initialized: false,
  authenticated: false,
  token: null,
  usuario: null,
  realm: null,
  isAdmin: false,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null)
  const [initialized, setInitialized] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [usuario, setUsuario] = useState<{
    nome: string
    email: string
    cargos: string[]
  } | null>(null)
  const [realm, setRealm] = useState<string | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const storedRealm = sessionStorage.getItem('realm') || ''
    const clientId = sessionStorage.getItem('clientId') || ''

    if (!storedRealm || !clientId) {
      router.push('/login')
      return
    }

    const keycloakInstance = new Keycloak({
      url: process.env.NEXT_PUBLIC_KEYCLOAK_URL || '',
      realm: storedRealm,
      clientId,
    })

    keycloakInstance
      .init({
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      })
      .then((authenticated) => {
        setKeycloak(keycloakInstance)
        setAuthenticated(authenticated)
        setRealm(storedRealm)

        if (authenticated && keycloakInstance.tokenParsed) {
          const tokenParsed = keycloakInstance.tokenParsed as any
          const cargos = tokenParsed?.realm_access?.roles || []

          setToken(keycloakInstance.token || null)
          setUsuario({
            nome: tokenParsed?.given_name || tokenParsed?.name || 'Usuário',
            email: tokenParsed?.email || tokenParsed?.preferred_username || '',
            cargos,
          })
          setIsAdmin(cargos.includes('ADMIN'))
        } else {
          setToken(null)
          setUsuario(null)
        }
      })
      .catch((err) => {
        console.error('Erro ao inicializar Keycloak:', err)
      })
      .finally(() => {
        setInitialized(true)
      })
  }, [router])

  return (
    <AuthContext.Provider
      value={{
        keycloak,
        initialized,
        authenticated,
        token,
        usuario,
        realm,
        isAdmin,
      }}
    >
      <AuthGuard>{children}</AuthGuard>
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export function AuthGuard({ children }: { children: ReactNode }) {
  return <>{children}</>
}

import { DepartamentosProvider } from '@/components/departamento/context-departamentos'
import { UsuariosProvider } from '@/components/usuario/context-usuarios'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <UsuariosProvider>
      <DepartamentosProvider>{children}</DepartamentosProvider>
    </UsuariosProvider>
  )
}

export default Layout

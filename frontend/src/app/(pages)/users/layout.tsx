import { DepartamentoProvider } from '@/components/departamento/departamentos-context'
import { UsuariosProvider } from '@/components/usuario/usuarios-context'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <UsuariosProvider>
      <DepartamentoProvider>{children}</DepartamentoProvider>
    </UsuariosProvider>
  )
}

export default Layout

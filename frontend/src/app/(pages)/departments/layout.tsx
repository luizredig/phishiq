import { DepartamentoProvider } from '@/components/departamento/departamentos-context'
import { UsuariosProvider } from '@/components/usuario/usuarios-context'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <DepartamentoProvider>
      <UsuariosProvider>{children}</UsuariosProvider>
    </DepartamentoProvider>
  )
}

export default Layout

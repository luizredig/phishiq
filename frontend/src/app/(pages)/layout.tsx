'use client'

import { ReactNode } from 'react'
import { AuthProvider } from '@/contexts/auth-provider'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { UserDropdown } from '@/components/usuario/usuario-dropdown'
import { useKeycloak } from '@/hooks/use-keycloak'
import { logoutFromKeycloak } from '@/server/keycloak/actions'

export default function RealmLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <RealmLayoutContent>{children}</RealmLayoutContent>
    </AuthProvider>
  )
}

function RealmLayoutContent({ children }: { children: ReactNode }) {
  const { usuario } = useKeycloak()

  const handleEditProfile = () => {
    console.log('Edit profile clicked')
  }

  const handleSettings = () => {
    console.log('Settings clicked')
  }

  const handleLogout = async () => {
    const realm = sessionStorage.getItem('realm')

    if (!realm || !usuario?.email) {
      console.error('Realm ou email não encontrado')
      return
    }

    try {
      await logoutFromKeycloak(realm, usuario.email)
      sessionStorage.clear()
      window.location.href = '/login'
    } catch (error) {
      console.error('Erro ao deslogar:', error)
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex w-full flex-1 flex-col overflow-hidden">
        <div className="flex h-16 max-h-16 items-center justify-between border-b p-4">
          <div className="flex h-full items-center">
            <SidebarTrigger />
          </div>

          {usuario && (
            <UserDropdown
              user={usuario}
              variant="default"
              onEditProfile={handleEditProfile}
              onSettings={handleSettings}
              onLogout={handleLogout}
            />
          )}
        </div>

        <div className="flex flex-1 p-4">{children}</div>
      </div>
    </SidebarProvider>
  )
}

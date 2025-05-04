'use client'

import LoadingSpinner from '@/components/layout/loading-spinner'
import { useAuth } from '@/contexts/auth-provider'
import { redirect } from 'next/navigation'
import React from 'react'

interface Options {
  onlyAdmin?: boolean
}

export function withAuthProtection(options?: Options) {
  return function <P extends object>(Component: React.ComponentType<P>) {
    return function ProtectedPage(props: P) {
      const { initialized, authenticated, isAdmin } = useAuth()

      if (!initialized) {
        return (
          <div className="flex h-full flex-1 items-center justify-center">
            <LoadingSpinner />
          </div>
        )
      }

      if (!authenticated) {
        redirect('/login')
      }

      if (options?.onlyAdmin && !isAdmin) {
        redirect('/unauthorized')
      }

      return <Component {...props} />
    }
  }
}

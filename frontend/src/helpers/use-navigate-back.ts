'use client'

import { useRouter } from 'next/navigation'

export function useNavigateBack() {
  const router = useRouter()

  function handleBack() {
    router.back()
  }

  return { handleBack }
}

'use client'

import { Button } from '@/components/ui/button'
import { useNavigateBack } from '@/helpers/use-navigate-back'

export default function NotFound() {
  const { handleBack } = useNavigateBack()

  return (
    <div className="bg-background">
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground mt-4 text-lg font-semibold">
          A página que você está procurando não existe.
        </p>

        <Button onClick={handleBack}> Voltar</Button>
      </div>
    </div>
  )
}

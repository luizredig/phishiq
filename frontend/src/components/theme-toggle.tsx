'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size={'icon'}
      variant={'outline'}
    >
      {theme === 'light' ? (
        <MoonIcon className="text-muted-foreground h-5 w-5" />
      ) : (
        <SunIcon className="text-muted-foreground h-5 w-5" />
      )}
    </Button>
  )
}

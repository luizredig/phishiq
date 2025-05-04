import Link from 'next/link'
import { ThemeToggle } from '../theme-toggle'
import { Button } from '../ui/button'

const LandingPageHeader = () => {
  return (
    <header className="bg-background sticky top-0 z-40 flex w-full justify-center border-b px-5 lg:px-40">
      <div className="container flex h-16 w-full items-center justify-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/home" className="flex items-center space-x-2">
            <span className="text-primary inline-block text-2xl font-bold">
              PhishIQ
            </span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            <Link
              href="#beneficios"
              className="text-muted-foreground hover:text-foreground flex items-center text-sm font-medium transition-colors"
            >
              Benefícios
            </Link>

            <Link
              href="#como-funciona"
              className="text-muted-foreground hover:text-foreground flex items-center text-sm font-medium transition-colors"
            >
              Como Funciona
            </Link>

            <Link
              href="#precos"
              className="text-muted-foreground hover:text-foreground flex items-center text-sm font-medium transition-colors"
            >
              Preços
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />

            <Link href="/login" className="hidden md:flex">
              <Button variant={'outline'}>Entrar</Button>
            </Link>

            <Link href="/signup" className="hidden md:flex">
              <Button variant={'default'}>Cadastrar-se</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default LandingPageHeader

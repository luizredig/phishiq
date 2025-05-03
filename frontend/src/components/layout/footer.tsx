import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background flex w-full justify-center border-t px-5 lg:px-40">
      <div className="container flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:justify-between lg:py-16">
        <div className="flex flex-col gap-4 lg:w-1/3">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-primary inline-block text-2xl font-bold">
              PhishIQ
            </span>
          </Link>

          <p className="text-muted-foreground">Never hoked again.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Produto</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="#beneficios"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Benefícios
                </Link>
              </li>

              <li>
                <Link
                  href="#como-funciona"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Como Funciona
                </Link>
              </li>

              <li>
                <Link
                  href="#precos"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Empresa</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Sobre Nós
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Termos de Serviço
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between md:py-6">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} PhishIQ. Todos os direitos
          reservados.
        </p>

        <div className="flex gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>

            <span className="sr-only">Facebook</span>
          </Link>

          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />

              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>

            <span className="sr-only">Instagram</span>
          </Link>

          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>

            <span className="sr-only">Twitter</span>
          </Link>

          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />

              <rect width="4" height="12" x="2" y="9" />

              <circle cx="4" cy="4" r="2" />
            </svg>

            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

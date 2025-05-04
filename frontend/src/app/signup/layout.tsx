import Link from 'next/link'

export const metadata = {
  title: 'SignUp | PhishIQ',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1">
      <header className="bg-background absolute top-0 z-40 flex w-full justify-center border-b px-5 lg:px-40">
        <div className="container flex h-16 w-full items-center justify-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/home" className="flex items-center space-x-2">
              <span className="text-primary inline-block text-2xl font-bold">
                PhishIQ
              </span>
            </Link>
          </div>
        </div>
      </header>

      {children}
    </div>
  )
}

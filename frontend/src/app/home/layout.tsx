import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

export const metadata = {
  title: 'Home | PhishIQ',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1">
      <Header />

      {children}

      <Footer />
    </div>
  )
}

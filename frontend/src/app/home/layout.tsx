import LandingPageFooter from '@/components/landing-page/landing-page-footer'
import LandingPageHeader from '@/components/landing-page/landing-page-header'

export const metadata = {
  title: 'Home | PhishIQ',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1">
      <LandingPageHeader />

      {children}

      <LandingPageFooter />
    </div>
  )
}

'use client'
import ChartPanel from '@/components/dashboard/chart-panel'

import { withAuthProtection } from '@/lib/with-auth-protection'

function Dashboard() {
  return <main className='w-dvw h-full flex' id='main-panel'>
    <ChartPanel />
  </main>
}
export default withAuthProtection({ onlyAdmin: false })(Dashboard)

'use client'

import { withAuthProtection } from '@/lib/with-auth-protection'

function Dashboard() {
  return <div></div>
}
export default withAuthProtection({ onlyAdmin: false })(Dashboard)

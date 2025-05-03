import { withAuthProtection } from './with-auth-protection'

export const withAdminProtection = withAuthProtection({ onlyAdmin: true })

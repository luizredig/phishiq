import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_PATHS = ['/dashboard']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtected = PROTECTED_PATHS.some((p) => pathname.includes(p))

  if (isProtected) {
    const hasToken = request.cookies.get('kc-access-token')
    
    if (!hasToken) {
      return NextResponse.redirect(new URL(`/login`, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}

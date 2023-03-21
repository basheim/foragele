import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import Cookies from 'js-cookie';
import { getNewToken, isTokenValid } from '../lib/auth-api';

export async function middleware(request: NextRequest) {
  const maybeSession = Cookies.get('X-AUTH-TOKEN');
  if (maybeSession) {
    const tokenIsValid = await isTokenValid();
    if (!tokenIsValid) {
      const refresh = Cookies.get('X-AUTH-REFRESH');
      const username = Cookies.get('X-AUTH-USERNAME');
      try {
        const newToken = await getNewToken(refresh, username);
        Cookies.set('X-AUTH-TOKEN', newToken);
      } catch {
        return NextResponse.redirect('/login');
      }
    }
  } else {
    return NextResponse.redirect('/login');
  }
}

export const config = {
  matcher: '/auth/:path*',
}

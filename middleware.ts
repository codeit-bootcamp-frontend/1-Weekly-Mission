import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('accessToken')) {
      return NextResponse.redirect(new URL('/folder', req.url));
    }
  }
}

export const config = {
  matcher: ['/signin', '/signup'],
};

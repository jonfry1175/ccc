import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });
  
  // Refresh session if expired - required for Server Components
  const { data: { session } } = await supabase.auth.getSession();

  // Check if the request is for an admin route
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  const isAdminLoginRoute = req.nextUrl.pathname === '/admin/login';

  // If accessing admin routes (except login) without a session, redirect to login
  if (isAdminRoute && !isAdminLoginRoute && !session) {
    const redirectUrl = new URL('/admin/login', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // If already logged in and trying to access login page, redirect to dashboard
  if (isAdminLoginRoute && session) {
    const redirectUrl = new URL('/admin/dashboard', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ['/admin/:path*'],
}; 
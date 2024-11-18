import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
    const { pathname } = request.nextUrl;
    const isLoggedIn = request.cookies.get('token'); // Check for an authentication cookie

    // Skip middleware on login page or other public routes
    if (pathname === '/login' || pathname.startsWith('/api')) {
        return NextResponse.next();
    }

    // Redirect to login if not authenticated
    if (!isLoggedIn) {
        // Use NextResponse.redirect instead of rewrite to avoid loop issues
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Continue with the request if authenticated
    return NextResponse.next();
}

// Configuring routes to apply the middleware
export const config = {
    matcher: ['/auth/:path*'], // Apply to specific protected routes
};

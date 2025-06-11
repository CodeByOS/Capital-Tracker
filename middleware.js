import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)?', '/account(.*)?', '/transactions(.*)?'

])
export default clerkMiddleware(async (auth, req) => {
  const authResult = await auth();
  const { userId, redirectToSignIn } = authResult;

  // If the user is not authenticated and trying to access a protected route, redirect to sign-in
  if(!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
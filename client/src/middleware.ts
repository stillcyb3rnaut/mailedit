import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  const { nextUrl } = req;
  const isAuthenticated = !!req.nextauth.token; // Check if user is authenticated

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/onboarding", req.url)); // Redirect to onboarding if not logged in
  }

  // If authenticated but accessing an unknown route, redirect to /dashboard
  const allowedRoutes = ["/dashboard", "/profile", "/settings"]; // Define valid authenticated routes
  if (!allowedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}, {
  pages: {
    signIn: "/onboarding", // Default login redirection
  },
});

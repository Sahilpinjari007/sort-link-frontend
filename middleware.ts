import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  const authRoutes = [
    "/auth/sign-up",
    "/auth/sign-in",
    "/auth/verify-otp",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/app/dashboard", request.url));
  }

  return NextResponse.next();
}


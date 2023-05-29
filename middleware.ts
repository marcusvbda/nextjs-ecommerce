import { withAuth } from "next-auth/middleware";
import { isPublicRoute } from "@/libs/routeMatcher";
import { NextResponse } from "next/server";

const internalRoutesToSkip = [
  "/_next",
  "/_vercel",
  "/_static",
  "/_error",
  "/_middleware",
  "/favicon.ico",
];

const publicRoutes = ["/login", "/api/vibbra/authenticate"];

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token, req } = params;
        const { pathname } = req.nextUrl;
        if (
          internalRoutesToSkip.some((x) => pathname.startsWith(x)) ||
          isPublicRoute(pathname, publicRoutes)
        ) {
          return true;
        }
        return !!token;
      },
    },
  }
);

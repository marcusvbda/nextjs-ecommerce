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

const publicRoutes = ["/"];

export default withAuth(
  function middleware(req) {
    // return NextResponse.next();
    // if (
    //   req.nextUrl.pathname === "/admin-dashboard" &&
    //   req.nextauth.token?.role !== "admin"
    // ) {
    //   return new NextResponse("You are not authorized!");
    // }
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

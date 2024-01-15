import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const NOT_REQUIRED_AUTH = ["/signin", "/signup"];

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("accessToken");
  if (!jwt && request.nextUrl.pathname.startsWith("/folders")) {
    return NextResponse.redirect(new URL(`/signin`, request.url));
  }
  if (jwt && NOT_REQUIRED_AUTH.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(`/folders`, request.url));
  }
  return NextResponse.next();
}

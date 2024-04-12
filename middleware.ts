import { getCookie } from "@/utils/cookie";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookieUserId = getCookie("user_id");
  const cookieUserRole = getCookie("user_role");
  // login route
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (cookieUserId) {
      console.log("cookie existed");
      return NextResponse.rewrite(new URL("/", request.url));
    }
    return NextResponse.next();
  }
  // manage route
  if (request.nextUrl.pathname.startsWith("/manage")) {
    if (cookieUserId && cookieUserRole) {
      if (cookieUserRole.value !== "Teacher") {
        console.log("role rejected");
        return NextResponse.rewrite(new URL("/", request.url));
      }
      return NextResponse.next();
    }
    console.log("cookie missing");
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

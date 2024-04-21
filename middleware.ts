import { getCookie } from "@/utils/cookie";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookieUserId = getCookie("user_id");
  const cookieUserRole = getCookie("user_role");
  // login route
  if (request.nextUrl.pathname === "/login") {
    if (cookieUserId) {
      console.log("cookie existed, can't access login page");
      return NextResponse.rewrite(new URL("/", request.url));
    }
    return NextResponse.next();
  }
  // manage route
  if (request.nextUrl.pathname === "/manage") {
    if (cookieUserId && cookieUserRole) {
      if (cookieUserRole.value !== "Teacher") {
        console.log("role rejected, can't enter manage page");
        return NextResponse.rewrite(new URL("/unauthorized", request.url));
      }
      return NextResponse.next();
    }
    console.log("cookie missing, can't access manage page");
    return NextResponse.rewrite(new URL("/unauthorized", request.url));
  }
}

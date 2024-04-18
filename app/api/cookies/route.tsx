import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const cookieObject = cookieStore.getAll();
  if (cookieObject) {
    return NextResponse.json({
      cookie: cookieObject,
    });
  } else {
    return NextResponse.json({
      cookie: null,
    });
  }
}

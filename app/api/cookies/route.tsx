import { BaseResponse, Cookie } from "@/utils/response";
import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "@/utils/cookie";

export async function GET(req: NextRequest) {
  const responseFormat: BaseResponse = {
    status: 0,
    message: "",
    data: null,
  };

  try {
    const userId = getCookie("user_id");
    const userRole = getCookie("user_role");

    if (!userId || !userRole) {
      responseFormat.status = 500;
      responseFormat.message = "Missing Cookie Attribute";
    } else {
      const cookie: Cookie = {
        Role: userRole.value,
        UserId: userId.value,
      };
      responseFormat.status = 200;
      responseFormat.message = "Success";
      responseFormat.data = cookie;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    responseFormat.status = 500;
    responseFormat.message = "Internal Server Error";
  }

  return NextResponse.json(responseFormat);
}

import { BaseResponse, LoginResponse } from "@/utils/response";
import { NextRequest, NextResponse } from "next/server";
import { createCookie, deleteCookie, getCookie } from "@/utils/cookie";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const responseJson: BaseResponse = {
    status: 0,
    message: "",
    data: null,
  };

  try {
    const response = await fetch("http://localhost:3001/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const json: LoginResponse = await response.json();
      responseJson.status = 200;
      responseJson.message = "Success";
      responseJson.data = json;
      createCookie("user_id", json.UserId);
      createCookie("user_role", json.Role);
    } else {
      responseJson.status = response.status;
      responseJson.message = "Invalid Username or Password";
    }
  } catch (error) {
    console.error("Error occurred:", error);
    responseJson.status = 500;
    responseJson.message = "Internal Server Error";
  }

  return NextResponse.json(responseJson);
}

export async function DELETE() {
  const responseJson: BaseResponse = {
    status: 0,
    message: "",
    data: null,
  };
  const cookieUserId = getCookie("user_id");
  const cookieUserRole = getCookie("user_role");

  if (cookieUserId && cookieUserRole) {
    deleteCookie(cookieUserId.name);
    deleteCookie(cookieUserRole.name);
    responseJson.status = 200;
    responseJson.message = "Log out successfully";
  }
  return NextResponse.json(responseJson);
}

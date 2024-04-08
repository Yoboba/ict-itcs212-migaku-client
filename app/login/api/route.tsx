import { BaseResponse, LoginResponse } from "@/utils/response";
import { NextRequest, NextResponse } from "next/server";
import { createCookie } from "@/utils/cookie";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const responseFormat: BaseResponse = {
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
      responseFormat.status = 200;
      responseFormat.message = "Success";
      responseFormat.data = json;

      createCookie("user_id", json.UserId);
    } else {
      responseFormat.status = response.status;
      responseFormat.message = "Invalid Username or Password";
    }
  } catch (error) {
    console.error("Error occurred:", error);
    responseFormat.status = 500;
    responseFormat.message = "Internal Server Error";
  }

  return NextResponse.json(responseFormat);
}

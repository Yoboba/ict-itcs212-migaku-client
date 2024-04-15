import { getCookie } from "@/utils/cookie";
import { BaseResponse } from "@/utils/response";
import console from "console";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const responseJson: BaseResponse = {
    status: 0,
    message: "",
    data: null,
  };
  const courseId = request.nextUrl.searchParams.get("courseId");
  const searchKey = request.nextUrl.searchParams.get("searchKey");
  const courseCat = request.nextUrl.searchParams.get("courseCat");
  const teacherName = request.nextUrl.searchParams.get("teacherName");

  console.log("--------fetch course--------");
  console.log("courseId = " + courseId);
  console.log("searchKey = " + searchKey);
  console.log("courseCat = " + courseCat);
  console.log("teacherName = " + teacherName);

  const cookieUserId = getCookie("user_id");
  console.log("user_id = " + cookieUserId?.value);

  const response = await fetch(
    `http://localhost:3001/api/course?courseId=${courseId}&searchKey=&courseCat=${courseCat}&teacherName=`,
    {
      method: "GET",
      headers: {
        Authorization: `${cookieUserId?.value}`,
      },
    }
  );
  const data = await response.json();

  if (response.ok) {
    responseJson.status = 200;
    responseJson.message = "get course successfully";
    responseJson.data = data;
  } else {
    responseJson.status = 500;
    responseJson.message = "get course failed";
    responseJson.data = data;
  }
  return NextResponse.json(responseJson);
}

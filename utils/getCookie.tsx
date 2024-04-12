import { BaseResponse, Cookie } from "./response";

const axios = require("axios").default;
export default async function getCookies() {
  const emptyCookies: Cookie = {
    Role: "",
    UserId: "",
  };

  try {
    const getCookieResponse: BaseResponse = await axios.get("/api/cookies");
    if (getCookieResponse.status === 200) {
      const cookies: Cookie = getCookieResponse.data.data;
      return cookies;
    } else {
      return emptyCookies;
    }
  } catch (error) {
    console.log(error);
    return emptyCookies;
  }
}

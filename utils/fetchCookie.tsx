export default async function fetchCookie() {
  const axios = require("axios").default;
  const response = await axios.get("http://localhost:3000/api/cookies");
  const data = response.data;
  const userId = data?.cookie[0]?.value;
  const userRole = data?.cookie[1]?.value;

  if (data.cookie.length === 0 || userRole !== "Teacher") {
    return {
      userRole: "",
      userId: "",
    };
  } else {
    return {
      userRole,
      userId,
    };
  }
}

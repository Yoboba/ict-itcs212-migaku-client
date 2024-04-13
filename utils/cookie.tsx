import { cookies } from "next/headers";

export function createCookie(cookieName: string, userId: string) {
  const now = new Date();
  const expirationTime = new Date(now.getTime() + 5 * 60 * 1000); // <- 10 seconds from now
  cookies().set({
    name: cookieName,
    value: userId,
    httpOnly: true,
    expires: expirationTime,
  });
}
export function getCookie(cookieName: string) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(cookieName);
  if (cookie) {
    return cookie;
  } else {
    return null;
  }
}

export function deleteCookie(cookieName: string) {
  cookies().delete(cookieName);
}

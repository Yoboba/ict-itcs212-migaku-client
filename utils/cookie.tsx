import { cookies } from "next/headers";

export function createCookie(cookieName: string, value: string) {
  const now = new Date();
  const expirationTime = new Date(now.getTime() + 15 * 60 * 1000); // <- 15 min from now
  cookies().set({
    name: cookieName,
    value,
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

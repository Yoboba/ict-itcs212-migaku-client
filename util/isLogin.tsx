import getCookie from "./getCookie";

export default function isLogin()
{
    const cookieMap = getCookie();
    if (cookieMap === undefined || cookieMap['UserId'] === undefined)
        return false;
    else
        return true;
}
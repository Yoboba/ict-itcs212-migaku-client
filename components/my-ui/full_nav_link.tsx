/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import { Button } from "../ui/button";
import UseCookie from "@/hooks/use_cookie";

export default function FullNavLink() {
  const cookie = UseCookie("UserId");
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <Link href={"/browse"} className="text-c0 hover:underline">
        Search
      </Link>
      <Link href={"/team"} className="text-c0 hover:underline">
        About Us
      </Link>
      {/* TODO : testing this nacbar state */}
      {cookie?.value ? (
        <div>{cookie.value}</div>
      ) : (
        <div className="flex items-center gap-8">
          <Link href={"/login"} className="text-c0 hover:underline">
            Log in
          </Link>
          <Button variant="default">Sign Up</Button>
        </div>
      )}
    </div>
  );
}

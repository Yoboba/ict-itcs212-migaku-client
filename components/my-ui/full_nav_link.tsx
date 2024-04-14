/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import { Button } from "../ui/button";
import { getCookie } from "@/utils/cookie";

export default function FullNavLink() {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <Link href={"/browse"} className="text-c0 hover:underline">
        Search
      </Link>
      <Link href={"/team"} className="text-c0 hover:underline">
        About Us
      </Link>
      {getCookie("user_id") ? (
        getCookie("user_role")?.value === "Teacher" ? (
          <div className="flex items-center gap-8">
            <Link href="/manage">
              <Button variant="default">Manage</Button>
            </Link>
            <Button variant="default">Log Out</Button>
          </div>
        ) : (
          <Button variant="default">Log Out</Button>
        )
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

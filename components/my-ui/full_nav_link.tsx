/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import { Button } from "../ui/button";
import { getCookie } from "@/utils/cookie";
import { LogOutButton } from "./log_out_button";

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
        getCookie("user_role") ? (
          <div className="flex items-center gap-8">
            <Button variant="default">Manage</Button>
            <LogOutButton />
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

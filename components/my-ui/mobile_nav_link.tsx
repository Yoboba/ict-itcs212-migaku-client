/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
// import { CookieResponse } from "@/utils/response";

export default function MobileNavLink() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center lg:hidden">
      <Button
        variant="link"
        onClick={() => setIsOpen(!isOpen)}
        className=" translate-x-2 px-2"
      >
        {isOpen ? <IconX size={30} /> : <IconMenu2 size={30} />}
      </Button>
      {isOpen && <DropDownNavLink />}
    </div>
  );
}

function DropDownNavLink() {
  return (
    <div className="absolute left-0 top-16 flex h-fit w-full flex-col items-center justify-center gap-4 bg-white p-5">
      <Link href={"/browse"} className="text-c0 hover:underline">
        Search
      </Link>
      <Link href={"/team"} className="text-c0 hover:underline">
        About Us
      </Link>
      <Link href={"/login"} className="text-c0 hover:underline">
        Log in
      </Link>
      <Button variant="default" className="w-fit">
        Sign Up
      </Button>
      <Link href="/manage">
        <Button variant="default" className="w-fit">
          Manage
        </Button>
      </Link>
      <Button variant="default" className="w-fit">
        Log Out
      </Button>
    </div>
  );
}

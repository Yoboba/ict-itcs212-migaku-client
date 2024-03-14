import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import SearchBar from "./search_bar";

export default function NavBar() {
    return (
        <nav className="top-0 fixed z-50 w-full h-16 px-8 py-4 bg-white flex justify-between drop-shadow-xl">
            <div className="flex items-center gap-8">
                <Image src="/assets/logo.svg" alt={"Migaku Logo"} width={35} height={35} className=" -translate-x-1 -translate-y-[2px]"/>
                <SearchBar/>
            </div>
            <div className="flex items-center gap-8">
                <Link href={""} className="text-c0 hover:underline">Search</Link>
                <Link href={""} className="text-c0 hover:underline">About Us</Link>
                <Link href={""} className="text-c0 hover:underline">Log in</Link>
                <Button variant="default">Sign Up</Button>
            </div>
        </nav>
    )
}
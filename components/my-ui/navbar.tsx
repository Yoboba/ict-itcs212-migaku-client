/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import Image from "next/image";
import SearchBar from "./search_bar";
import FullNavLink from "./full_nav_link";
import MobileNavLink from "./mobile_nav_link";

export default function NavBar() {
    return (
        <nav className="fixed top-0 z-50 flex h-16 w-full justify-between bg-white px-8 py-4 drop-shadow-xl">
            <div className="flex items-center gap-8">
                <Image src="/assets/logo.svg" alt={"Migaku Logo"} width={35} height={35} className=" -translate-x-1 -translate-y-[2px]"/>
                <SearchBar/>
            </div>
            {/* if screen width < 640px then display MobileNavLink */}
            <FullNavLink/>
            <MobileNavLink/>
        </nav>
    )
}
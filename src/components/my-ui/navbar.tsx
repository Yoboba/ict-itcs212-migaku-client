import Image from "next/image";
import SearchBar from "./search_bar";
import FullNavLink from "./full_nav_link";
import MobileNavLink from "./mobile_nav_link";

export default function NavBar() {
    return (
        <nav className="top-0 fixed z-50 w-full h-16 px-8 py-4 bg-white flex justify-between drop-shadow-xl">
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
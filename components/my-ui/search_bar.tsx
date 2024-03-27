/* eslint-disable tailwindcss/no-custom-classname */
import { IconSearch } from "@tabler/icons-react";
import { Input } from "../ui/input";

export default function SearchBar() {
    return (
        <div className="relative hidden h-8 w-[300px] sm:flex">
            <Input type="text" placeholder="What do you want to learn ?" className="border-c0 absolute h-8 w-full rounded-full text-xs focus-visible:ring-slate-200"/>
            <IconSearch className="text-c0 absolute right-2 top-1 translate-y-px" size={20}/>
        </div>
    )
}

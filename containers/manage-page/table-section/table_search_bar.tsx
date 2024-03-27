/* eslint-disable tailwindcss/no-custom-classname */
import { IconSearch } from "@tabler/icons-react";
import { Input } from "../../../components/ui/input";

export default function TableSearchBar() {
    return (
        <div className="relative h-full w-[250px] md:w-[300px]">
            <Input type="text" placeholder="Search" className="size-full rounded-md border-slate-300 text-sm focus-visible:ring-slate-200"/>
            <IconSearch className="text-c0 absolute right-2 top-1 translate-y-[3px]" size={20}/>
        </div>
    )
}

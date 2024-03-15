import { IconSearch } from "@tabler/icons-react";
import { Input } from "../ui/input";

export default function TableSearchBar() {
    return (
        <div className="relative w-[250px] md:w-[300px] h-full">
            <Input type="text" placeholder="Search" className="focus-visible:ring-slate-200 rounded-md h-full w-full border-slate-300 text-sm"/>
            <IconSearch className="absolute top-1 right-2 translate-y-[3px] text-c0" size={20}/>
        </div>
    )
}

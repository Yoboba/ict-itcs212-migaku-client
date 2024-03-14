import { IconSearch } from "@tabler/icons-react";
import { Input } from "../ui/input";

export default function SearchBar() {
    return (
        <div className="relative w-[300px] h-8">
            <Input type="text" placeholder="What do you want to learn ?" className="focus-visible:ring-slate-200 rounded-full h-8 w-full absolute border-c0 text-xs"/>
            <IconSearch className="absolute top-1 right-2 translate-y-[1px] text-c0" size={20}/>
        </div>
    )
}

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"

interface ProfileProps {
    name: string;
    role: string;
    avatar: string;
}

export default function Profile(props:ProfileProps) {
    return (
        <div className="flex items-center gap-3">
            <Avatar className=" size-16">
                <AvatarImage src={props.avatar} />
                <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
                <h3 className=" text-lg">{props.name}</h3>
                <p className=" text-sm font-normal">{props.role}</p>
            </div>
        </div>
    )
}
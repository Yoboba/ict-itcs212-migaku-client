import Link from "next/link";
import { Button } from "../ui/button";

export default function FullNavLink() {
    return (
        <div className="hidden lg:flex items-center gap-8">
            <Link href={""} className="text-c0 hover:underline">Search</Link>
            <Link href={""} className="text-c0 hover:underline">About Us</Link>
            <Link href={""} className="text-c0 hover:underline">Log in</Link>
            <Button variant="default">Sign Up</Button>
        </div>
    )
}
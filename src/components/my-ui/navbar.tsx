import { Button } from "../ui/button"

export default function NavBar() {
    return (
        <nav className="top-0 sticky w-full h-16 px-8 py-4 bg-white flex justify-between drop-shadow-xl">
            <div className="flex items-center gap-8">
                <p>Logo</p>
                <p>SeachBar</p>
            </div>
            <div className="flex items-center gap-8">
                <p>links</p>
                <Button variant="default">Sign Up</Button>
            </div>
        </nav>
    )
}
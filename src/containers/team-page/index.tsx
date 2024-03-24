import { mockUser } from "./mock"
import NameCard from "./name_card"


export default function TeamPage() {
    return (
        <div className = "flex flex-wrap gap-10 justify-center">{mockUser.map((user, index) => (
            <NameCard
                key={index}
                user={user}
            />
        ))}</div>

    )
}
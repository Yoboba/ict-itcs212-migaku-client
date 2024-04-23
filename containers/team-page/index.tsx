import { mockUser } from "./mock";
import NameCard from "./name_card";

export default function TeamPage() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {mockUser.map((user, index) => (
        <NameCard key={index} user={user} />
      ))}
    </div>
  );
}

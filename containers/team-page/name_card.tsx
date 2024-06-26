import Image from "next/image";

type NameCardProps = {
  user: {
    Name: string;
    Role: string;
    Intro: string;
    ImgSrc: string;
  };
};

export default function NameCard({ user }: NameCardProps) {
  return (
    <main className="bg-white rounded-lg overflow-hidden shadow-xl h-fit w-[350px]">
      <Image
        src={user.ImgSrc || "/images/Default.png"}
        alt={"Profile Image"}
        height={350}
        width={400}
        className=" h-[250px] w-[400px] sm:h-[250px] w-[400px] object-cover"
      />
      <div className="flex flex-col m-5 gap-y-1">
        <p className="text-xl">{user.Name || "-"} </p>
        <p className="text-gray-600">{user.Role || "-"}</p>
        <p className="text-gray-400">{user.Intro || "-"}</p>
      </div>
      <div className="flex gap-5 m-5">
        <button className="flex items-center justify-center">
          <img className="w-5 h-5" src="/images/IG.png" />
        </button>
        <button className="flex items-center justify-center">
          <img className="w-5 h-5" src="/images/FB.png" />
        </button>
        <button className="flex items-center justify-center">
          <img className="w-5 h-5" src="/images/X.png" />
        </button>
      </div>
    </main>
  );
}

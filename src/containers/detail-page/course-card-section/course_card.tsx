/* eslint-disable tailwindcss/no-custom-classname */
import Profile from "@/components/my-ui/profile"
import StarRating from "@/components/my-ui/star_rating"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AddToFavorite from "./add_to_favorite"

export default function CourseCard() {
    return (
        <main className="flex gap-10 rounded-xl bg-white p-10 drop-shadow-xl">
            <Image src={"/images/snow_miku.jpg"} alt={"Course Image"} height={350} width={350} className=" rounded-xl"/>
            <div className="flex flex-col justify-between gap-10">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-5">
                        <h1 className=" text-5xl font-bold">Course Name</h1>
                        <p className=" text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                    </div>
                    <AddToFavorite/>
                </div>
                <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                        <h2 className=" text-xl font-semibold">Instructor</h2>
                        <Profile name={"Thanachot Onlamoon"} role={"CTO at NOT FOR CHARITY,.Co.Ltd"} avatar={"https://github.com/shadcn.png"}/>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className=" flex gap-2">
                            <p className=" text-c7 text-xl">4.0</p>
                            <StarRating rating={4}/>
                        </div>
                        <h1 className=" text-3xl">1234.56 THB</h1>
                        <Button className=" bg-c0 hover:bg-c6 h-20 w-60 text-2xl  font-semibold" size="lg">Enroll Now</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
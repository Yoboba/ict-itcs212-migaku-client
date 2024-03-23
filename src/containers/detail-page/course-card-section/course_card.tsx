/* eslint-disable tailwindcss/no-custom-classname */
import Profile from "@/components/my-ui/profile"
import StarRating from "@/components/my-ui/star_rating"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AddToFavorite from "./add_to_favorite"

export default function CourseCard() {
    return (
        <main className="flex flex-col items-center justify-center gap-5 rounded-xl bg-white p-10 drop-shadow-xl sm:gap-10 md:flex-col lg:flex-row ">
            <Image src={"/images/snow_miku.jpg"} alt={"Course Image"} height={350} width={350} className=" size-[200px] rounded-xl sm:size-[350px]"/>
            <div className="flex flex-col items-center justify-between gap-10 sm:items-start">
                <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-start">
                    <div className="flex flex-col">
                        <h1 className=" text-3xl font-bold sm:text-5xl">Course Name</h1>
                        <p className="hidden sm:flex sm:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                    </div>
                    <AddToFavorite/>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:items-end sm:gap-0">
                    <div className="flex flex-col items-center gap-2 sm:items-start">
                        <h2 className=" text-xl font-semibold">Instructor</h2>
                        <Profile name={"Thanachot Onlamoon"} role={"CTO at NOT FOR CHARITY,.Co.Ltd"} avatar={"https://github.com/shadcn.png"}/>
                    </div>
                    <div className="flex flex-col items-center  gap-2">
                        <div className=" flex gap-2">
                            <p className=" text-c7 text-sm sm:text-xl">4.0</p>
                            <StarRating rating={4}/>
                        </div>
                        <h1 className=" text-xl sm:text-3xl">1234.56 THB</h1>
                        <Button className=" bg-c0 hover:bg-c6 w-30 h-10 text-lg font-semibold sm:h-20 sm:w-60  sm:text-2xl" size="lg">Enroll Now</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
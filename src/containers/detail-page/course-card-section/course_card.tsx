import Profile from "@/components/my-ui/profile"
import StarRating from "@/components/my-ui/star_rating"
import { Button } from "@/components/ui/button"
import { IconStar } from "@tabler/icons-react"
import Image from "next/image"
import AddToFavorite from "./add_to_favorite"

export default function CourseCard() {
    return (
        <main className="flex bg-white rounded-xl p-10 gap-10 drop-shadow-xl">
            <Image src={"/images/snow_miku.jpg"} alt={"Course Image"} height={350} width={350} className=" rounded-xl"/>
            <div className="flex flex-col gap-10 justify-between">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-5">
                        <h1 className=" text-5xl font-bold">Course Name</h1>
                        <p className=" text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <AddToFavorite/>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                        <h2 className=" text-xl font-semibold">Instructor</h2>
                        <Profile name={"Thanachot Onlamoon"} role={"CTO at NOT FOR CHARITY,.Co.Ltd"} avatar={"https://github.com/shadcn.png"}/>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <div className=" flex gap-2">
                            <p className=" text-c7 text-xl">4.0</p>
                            <StarRating rating={4}/>
                        </div>
                        <h1 className=" text-3xl">1234.56 THB</h1>
                        <Button className=" text-2xl font-semibold h-20 w-60 bg-c0  hover:bg-c6" size="lg">Enroll Now</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
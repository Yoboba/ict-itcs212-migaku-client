import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContentSection() {
    return (
        <main className="relative w-full xl:w-4/6 h-screen flex flex-col items-start justify-start px-10 py-24 sm:px-20 sm:py-28 gap-8 overflow-hidden">
            <div className=" text-4xl sm:text-7xl font-semibold leading-tight  sm:leading-snug">
                <h1><span className=" text-c1">Empower</span> yourself</h1>
                <h1>Expand <span className=" text-c2">knowledge</span></h1>
                <h1><span className=" text-c3">Expand</span> horizons</h1>
            </div>
            <div className="text-md sm:text-2xl leading-tight sm:leading-relaxed">
                <p>Delve into <b>boundless</b> knowledge with our <br/>course-based platform.</p>
            </div>
            <div className="text-md sm:text-2xl leading-tight sm:leading-relaxed">
                <p>A <b>dynamic</b> learning experience awaits you</p> 
            </div>
            <div className="flex flex-row gap-4">
                <Button variant="default"  className=" bg-c4 text-sm sm:text-md font-semibold hover:bg-red-400">See More</Button>
                <Button variant="default" className=" text-sm sm:text-md font-semibold">Sign-Up</Button>
            </div>
            <Image src="/assets/Ellipse_orange.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 left-0 translate-y-40 -z-50"/>
            <Image src="/assets/Ellipse_yellow.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 left-80 translate-y-16 -z-50"/>
            <Image src="/assets/Ellipse_purple.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 right-[-100px] -z-50"/>
        </main>
    )
}
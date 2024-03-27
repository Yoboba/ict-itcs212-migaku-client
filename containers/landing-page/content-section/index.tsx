/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContentSection() {
    return (
        <main className="relative flex h-screen w-full flex-col items-start justify-start gap-8 overflow-hidden px-10 py-24 sm:px-20 sm:py-28 xl:w-4/6">
            <div className=" text-4xl font-semibold leading-tight sm:text-7xl  sm:leading-snug">
                <h1><span className=" text-c1">Empower</span> yourself</h1>
                <h1>Expand <span className=" text-c2">knowledge</span></h1>
                <h1><span className=" text-c3">Expand</span> horizons</h1>
            </div>
            <div className="text-md leading-tight sm:text-2xl sm:leading-relaxed">
                <p>Delve into <b>boundless</b> knowledge with our <br/>course-based platform.</p>
            </div>
            <div className="text-md leading-tight sm:text-2xl sm:leading-relaxed">
                <p>A <b>dynamic</b> learning experience awaits you</p> 
            </div>
            <div className="flex flex-row gap-4">
                <Button variant="default"  className=" bg-c4 sm:text-md text-sm font-semibold hover:bg-red-400">See More</Button>
                <Button variant="default" className=" sm:text-md text-sm font-semibold">Sign-Up</Button>
            </div>
            <Image src="/assets/Ellipse_orange.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 left-0 -z-50 translate-y-40"/>
            <Image src="/assets/Ellipse_yellow.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 left-80 -z-50 translate-y-16"/>
            <Image src="/assets/Ellipse_purple.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 right-[-100px] -z-50"/>
        </main>
    )
}
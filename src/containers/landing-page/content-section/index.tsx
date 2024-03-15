import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContentSection() {
    return (
        <main className="w-4/6 relative  h-screen flex flex-col items-start justify-start px-20 py-28 gap-8 overflow-hidden">
            <div className=" text-7xl font-semibold leading-snug">
                <h1><span className=" text-c1">Empower</span> yourself</h1>
                <h1>Expand <span className=" text-c2">knowledge</span></h1>
                <h1><span className=" text-c3">Expand</span> horizons</h1>
            </div>
            <div className=" text-2xl leading-relaxed">
                <p>Delve into <b>boundless</b> knowledge with our <br/>course-based platform.</p>
            </div>
            <div className=" text-2xl leading-relaxed">
                <p>A <b>dynamic</b> learning experience awaits you</p> 
            </div>
            <div className="flex gap-4">
                <Button variant="default" className=" bg-c4 text-md font-semibold hover:bg-red-400">See More</Button>
                <Button variant="default" className=" text-md font-semibold">Sign-Up</Button>
            </div>
            <Image src="/assets/Ellipse_orange.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 left-0 translate-y-40"/>
            <Image src="/assets/Ellipse_yellow.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 left-80 translate-y-16"/>
            <Image src="/assets/Ellipse_purple.svg" alt={"Orange Ellipse"} width={300} height={300} className=" absolute bottom-0 right-[-100px]"/>
        </main>
    )
}
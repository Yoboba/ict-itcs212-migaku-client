/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image"

export default function SideImageSection() {
    return (
        <main className="bg-c5 hidden h-screen w-2/6 flex-col items-center justify-center gap-28 overflow-hidden py-28 xl:flex">
            <Image src="/images/landing_page_pic.svg" alt={"Landing Page Pic"} width={1601} height={1195} className=" -translate-x-14"/>
            <div className=" flex w-[600px] flex-col gap-4">
                <div className="h-[15px] w-full rotate-12 rounded-full bg-white"/>
                <div className="h-[15px] w-full rotate-12 rounded-full bg-white"/>
                <div className="h-[15px] w-full rotate-12 rounded-full bg-white"/>
            </div>
        </main>
    )
}
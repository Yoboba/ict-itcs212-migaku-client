import Image from "next/image"

export default function SideImageSection() {
    return (
        <main className=" w-2/6 h-screen flex flex-col items-start justify-center gap-28 bg-c5 py-28">
            <Image src="/images/landing_page_pic.svg" alt={"Landing Page Pic"} width={1601} height={1195} className=" -translate-x-14"/>
            <div className=" flex flex-col gap-4 w-[1000px]">
                <div className="h-[15px] w-full bg-white rotate-12 -translate-x-5"/>
                <div className="h-[15px] w-full bg-white rotate-12 -translate-x-5"/>
                <div className="h-[15px] w-full bg-white rotate-12 -translate-x-5"/>
            </div>
        </main>
    )
}
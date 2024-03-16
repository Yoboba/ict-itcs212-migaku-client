import Image from "next/image"

export default function SideImageSection() {
    return (
        <main className="w-2/6 h-screen hidden xl:flex flex-col items-center justify-center gap-28 bg-c5 py-28 overflow-hidden">
            <Image src="/images/landing_page_pic.svg" alt={"Landing Page Pic"} width={1601} height={1195} className=" -translate-x-14"/>
            <div className=" flex flex-col gap-4 w-[600px]">
                <div className="h-[15px] w-full bg-white rotate-12 rounded-full"/>
                <div className="h-[15px] w-full bg-white rotate-12 rounded-full"/>
                <div className="h-[15px] w-full bg-white rotate-12 rounded-full"/>
            </div>
        </main>
    )
}
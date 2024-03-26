import YouShallNotPass from "@/containers/Login-Page/Login";
import Brighthen from "@/containers/Login-Page/BrightenYourFuture";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex justify-center items-center">

            <div className="grid grid-cols-12 w-1/2 mt-14 bg-amber-400">
                <div className=" h-screen w-full col-span-6 flex justify-center items-center">
                    <div className=" flex w-full items-center flex-col gap-4">
                        <div className="h-[10px] rotate-90 rounded-full bg-white" />
                        <Brighthen />
                    </div>
                </div>
            </div>
            <div className="w-1/2 col-span-6 flex justify-center items-center">
                    <YouShallNotPass />
                </div>
        </div>
    )
}
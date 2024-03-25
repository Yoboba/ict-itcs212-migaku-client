import YouShallNotPass from "@/containers/Login-Page/Login";
import MyFutureIsAVoid from "@/containers/Login-Page/BrightenYourFuture";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="grid grid-cols-12 w-full mt-14">
                <div className="col-span-6 flex justify-center items-center">
                    <MyFutureIsAVoid/>
                </div>
                <div className="col-span-6 flex justify-center items-center">
                    <YouShallNotPass/>
                </div>
            </div>
        </div>
    )
}
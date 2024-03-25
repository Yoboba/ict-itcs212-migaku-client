import { Button } from "@/components/ui/button";

export default function YouShallNotPass() {
  return (
      <div className="">
        <div className=" text-xl sm:text-3xl font-semibold leading-tight sm:leading-snug pb-4">
            <h1>Log in to your account</h1>
        </div>
        <form>
          <div>
            <label className="block text-gray-700 text-m mb-2" htmlFor="username">
              Email
            </label>
            <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          </div>
          <div>
            <label className="block text-gray-700 text-m mb-2 mt-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
            <p className="text-gray-400 text-sm text-right cursor-pointer hover:text-black">Forgot Password?</p>
          </div>
          <div className="my-4 flex justify-center">
            <Button className="w-[50%] text-center" type="button">
              Log in
            </Button>
          </div>
          <div className="my-2 flex justify-center gap-2">
            <div className="border-b-2 border-gray-400 w-[45%] mb-2"></div>
            <p>or</p>
            <div className="border-b-2 border-gray-400 w-[45%] mb-2"></div>
          </div>
          {/* <div className="mt-4">
            <Button className="w-[100%] text-center" type="button">
              Sign up
            </Button>
          </div> */}
          {/* <div className="my-4">
            <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
          </div>
          <div className="mt-4">
            <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
          </div> */}
          <div className="flex justify-center gap-2">
            <p className="text-gray-400 text-sm">New to us?</p>
            <p className="text-gray-400 cursor-pointer hover:text-black text-sm">Sign up</p>
          </div>
        </form>
    </div>
  )
}

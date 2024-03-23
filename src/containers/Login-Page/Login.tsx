export default function YouShallNotPass() {
  return (
    <main className="relative w-full xl:w-full h-screen top-0 right-0 flex flex-col items-start justify-start px-10 py-24 sm:px-20 sm:py-28 gap-8 overflow-hidden">
    <div className="w-5/12 self-end">
    <div className=" text-xl sm:text-3xl font-semibold leading-tight sm:leading-snug pb-4">
                <h1>Log in to your account</h1>
            </div>
    <form className="bg-blue-100 rounded px-0 pt-0 pb-8 mb-4 focus:outline-none">
      <div className="mb-4">
        <label className="block text-gray-700 text-m mb-2" htmlFor="username">
          Email
        </label>
        <input className="shadow appearance-none border rounded-lg w-96 h-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-m mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded-lg w-96 h-8 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
        <p className="text-gray-400 text-sm text-left">Forgot Password?</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-black text-white py-2 px-4  w-40 h-10 rounded-lg focus:outline-none focus:shadow-outline text-center content-center self-center place-self-center" type="button">
          Log in
        </button>
      </div>
      <div className=" text-xs sm:text-xs font-semibold leading-tight sm:leading-snug py-6">
                <h1>————————————————or————————————————</h1>
            </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-m mb-2" htmlFor="username" >
        </label>
        <input className="shadow appearance-none border rounded-lg w-64 h-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
      </div>
      <div className="mb-6">
        <input className="shadow appearance-none border rounded-lg w-64 h-8 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
        <p className="text-gray-400 text-sm">New to us?</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-black text-white py-2 px-4  w-40 h-10 rounded-lg focus:outline-none focus:shadow-outline text-center items-center" type="button">
        Sign up
        </button>
      </div>
      
    </form>
  </div>
  </main>
  )
}

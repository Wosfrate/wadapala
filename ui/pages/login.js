function login() {
  // return <div className="pt-24 xsm:pt-24 xl:pt-36 pb-5">helloooooooooo</div>;
  return (
    <div className="pt-24 xsm:pt-24 xl:pt-36 pb-5 flex justify-center items-center">
      <div class="w-full max-w-md p-6 max-w-">
        <form class="bg-white shadow-md rounded px-6 py-6 mb-4 align-middle">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div class="flex flex-col">
            <div class="flex items-center justify-between xsm:flex-row flex-col">
              <button class="bg-myBlue hover:bg-blue-700 text-white font-bold pt-2 pb-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Log In
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-myBlue hover:text-blue-800 p-2" href="#">
                Forgot Password?
              </a>
            </div>
            <div class="flex justify-center">
              <div class="mt-4 text-xs">Dont't you have and account?<span class="p-2 text-myBlue font-bold">Sign Up</span></div>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default login;

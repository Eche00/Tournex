import React, { useState } from "react";
import { Link } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
function Signup() {
  const [loading, setLoading] = useState(false);

  return (
    <div
      className=" sm:flex sm:items-center sm:justify-center h-auto sm:h-[100vh] sm:bg-gray-200 overflow-hidden overscroll-none"
      style={{ height: "calc(var(--vh) * 100)" }}>
      {/* mobile container   */}
      <main className=" relative flex sm:flex-col sm:gap-[30px] sm:shadow-sm  sm:bg-gray-100 bg-white sm:rounded-2xl  items-end sm:h-fit h-screen overflow-scroll  sm:w-[700px] w-full">
        {/* exit page */}
        <Link
          to="/"
          className="absolute top-2 left-2 text-white z-50 bg-[#1e222b] rounded-full p-2 flex items-center justify-center">
          <CloseIcon fontSize="medium" />
        </Link>
        {/* logo  */}
        <img
          className="w-full h-[300px]  border-none object-cover sm:object-contain sm:relative absolute top-0 z-0 sm:mt-[50px]"
          src="/logo.webp"
          alt="logo"
        />
        {/* subcontainer  */}
        <div className=" bg-blue-700 shadow-2xl shadow-black w-full  z-50  sm:h-fit h-[60vh] rounded-t-[50px] sm:pb-[20px] pb-5 overflow-scroll">
          <h1 className=" text-center text-white font-bold font-serif my-[30px] text-[20px]">
            Sign Up
          </h1>
          {/* form container  */}
          <form className="w-[80%] mx-auto md:w-[40%]">
            <div className=" flex flex-col gap-[5px] my-5 font-bold">
              <p className=" text-white">UserName:</p>
              <input
                className=" bg-transparent border-2 border-white w-full rounded-[10px] px-5 py-2 outline-none text-white"
                type="text"
                name="username"
              />
            </div>
            <div className=" flex flex-col gap-[5px] my-5 font-bold">
              <p className=" text-white">Email:</p>
              <input
                className=" bg-transparent border-2 border-white w-full rounded-[10px] px-5 py-2 outline-none text-white"
                type="text"
                name="email"
              />
            </div>
            <div className=" flex flex-col gap-[5px] my-5 font-bold">
              <p className="text-white">Password:</p>
              <input
                className=" bg-transparent border-2 border-white w-full rounded-[10px] px-5 py-2 outline-none text-white"
                type="password"
              />
            </div>
            <div className=" w-full flex items-center justify-center flex-col">
              <button className="bg-[#1e222b] px-[35px] py-[10px] text-[12px] font-bold text-white rounded-[10px] my-[10px] cursor-pointer">
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#1e222b]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            <p className="text-sm font-bold text-center">
              Have an account ?{" "}
              <Link to="/signin" className=" underline text-[#1e222b]">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signup;

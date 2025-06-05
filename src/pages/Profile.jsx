import React, { useState } from "react";
import { Link } from "react-router";

function Profile() {
  const [user, setUser] = useState(false);
  return (
    <div className=" w-full h-[100vh] ">
      <main className="w-full h-[100vh] flex flex-col sm:items-start items-center  gap-[20px]">
        <section className="">
          <img
            src="/logotest.JPG"
            alt="avatar"
            className="w-[200px] h-[200px] rounded-full object-cover border-[5px] border-gray-400"
          />
        </section>
        <section className=" flex flex-col  rounded-4xl w-full">
          {!user ? (
            <div className="flex flex-col bg-gray-300  rounded-t-[60px]  rounded-b-[40px] gap-[20px]">
              <div className="bg-blue-600  rounded-[30px] text-white flex flex-col gap-[8px] p-5">
                <p className=" text-[14px] font-bold">@username</p>
                <p className=" text-[14px] font-[400]">test@gmail.com</p>
              </div>
              <div className=" flex flex-row items-center justify-center gap-[10px] pb-[20px]">
                <button
                  to="/"
                  className=" flex items-center justify-center w-[130px] border-[0.8px] border-gray-500 text-gray-500 hover:bg-blue-600 hover:border-none hover:text-white  text-[12px] font-bold py-[8px] rounded-[10px] cursor-pointer  transition-all duration-300 whitespace-nowrap">
                  Create Tournament
                </button>
                <button
                  to="/"
                  className=" flex items-center justify-center w-[130px] bg-blue-600 py-[8px] text-white text-[12px] font-bold  rounded-[10px] cursor-pointer  transition-all duration-300 whitespace-nowrap border-transparent">
                  My Tournaments
                </button>
              </div>
            </div>
          ) : (
            <div className=" flex items-center justify-center gap-[20px] p-[20px] ">
              <Link
                to="/signin"
                className=" flex items-center justify-center w-[100px] border-[0.8px] border-gray-500 text-gray-500 hover:bg-blue-600 hover:border-none hover:text-white  text-[14px] font-bold py-[8px] rounded-[10px] cursor-pointer hover:scale-105 transition-all duration-300">
                Login
              </Link>
              <Link
                to="/signup"
                className=" flex items-center justify-center w-[100px] bg-blue-600 py-[8px] text-white text-[14px] font-bold  rounded-[10px] cursor-pointer hover:scale-105 transition-all duration-300">
                SignUp
              </Link>
            </div>
          )}
        </section>
        <section>My Tournaments</section>
      </main>
    </div>
  );
}

export default Profile;

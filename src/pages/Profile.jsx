import { Settings, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router";

function Profile() {
  const [user, setUser] = useState(false);
  const [user2, setUser2] = useState(false);
  const [setting, setSetting] = useState(false);
  return (
    <div className=" w-full h-[100vh] ">
      <main className="w-full h-[100vh] flex flex-col sm:items-start items-center  gap-[20px]">
        <section className="sm:w-5xl sm:mx-auto w-full flex sm:items-center sm:justify-start justify-center">
          <img
            src="/logotest.JPG"
            alt="avatar"
            className="w-[200px] h-[200px] rounded-full object-cover border-[5px] border-gray-400"
          />
        </section>
        <section className="sm:w-5xl sm:mx-auto w-full flex flex-col  rounded-4xl">
          {user ? (
            <div className="flex flex-col bg-gray-300  rounded-t-[60px]  rounded-b-[40px] gap-[20px]">
              <div className="bg-blue-600  rounded-[30px] text-white flex flex-col gap-[8px] p-5">
                <p className=" text-[14px] font-bold">@username</p>
                <p className=" text-[14px] font-[400]">test@gmail.com</p>
              </div>
              <div className=" flex flex-row items-center justify-center gap-[10px] pb-[20px] border-b border-white">
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
              <p
                className=" flex items-center justify-between gap-[10px] pb-[20px] px-[20px] cursor-pointer"
                onClick={() => setSetting(!setting)}>
                <Settings />
                <span> {setting ? <ArrowDropUp /> : <ArrowDropDown />}</span>
              </p>
              {setting && (
                <div className=" flex items-center justify-center gap-[10px] pb-[20px] px-[20px]">
                  <button className="w-[130px] bg-[#1e222b] py-[8px] text-white  rounded-[10px] cursor-pointer">
                    Logout
                  </button>
                  <button className="w-[130px] bg-red-700 py-[8px] text-white  rounded-[10px] cursor-pointer">
                    Delete Acount
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-blue-600  rounded-[30px] text-white flex flex-col gap-[8px] p-5">
              <div className=" flex items-center justify-center gap-[20px] p-[20px]   ">
                <Link
                  to="/signin"
                  className=" flex items-center justify-center w-[100px] border-[0.8px] border-gray-300 text-gray-300 hover:bg-blue-600 hover:border-none hover:text-white  text-[14px] font-bold py-[8px] rounded-[10px] cursor-pointer hover:scale-105 transition-all duration-300">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className=" flex items-center justify-center w-[100px] bg-black py-[8px] text-white text-[14px] font-bold  rounded-[10px] cursor-pointer hover:scale-105 transition-all duration-300">
                  SignUp
                </Link>
              </div>
            </div>
          )}
        </section>
        <section>My Tournaments</section>
      </main>
    </div>
  );
}

export default Profile;

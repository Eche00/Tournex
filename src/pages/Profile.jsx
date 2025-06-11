import { Settings, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../redux/theme/themeSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LocationOn from "@mui/icons-material/LocationOn";
import Profilebottom from "./Profilebottom";

function Profile() {
  const [user, setUser] = useState(false);
  const [about, setAbout] = useState(true);
  const [setting, setSetting] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  // handle setting toggle
  const settingToggle = (e) => {
    if (e.target.id === "about") {
      setAbout(true);
      setSetting(false);
    } else if (e.target.id === "setting") {
      setAbout(false);
      setSetting(true);
    }
  };
  return (
    <div className=" w-full sm:h-[100vh] h-full overflow-scroll sm:pb-0 pb-[100px]">
      {/* container  */}
      <main className="  flex lg:flex-row flex-col gap-[20px]  w-full sm:p-[20px]  ">
        {/* subcontainer  */}
        <section className=" flex flex-col items-center  justify-center gap-[20px]  dark:sm:border-2 dark:border-gray-700  sm:shadow-2xl   sm:rounded-2xl sm:p-10 p-5 lg:w-[30%] h-fit">
          {/* avatar */}
          <div className="py-[20px] border-b-2 dark:border-gray-700 border-gray-300 sm:shadow-b-2xl flex flex-col sm:items-start  items-center justify-center    w-full">
            {" "}
            <img
              src="/avatar.webp"
              alt="avatar"
              className="w-[150px] h-[150px] rounded-[20px] object-cover border-[5px] border-gray-400"
            />
          </div>
          {/* user info  */}
          <div className="sm:hidden flex sm:flex-row  items-baseline justify-between w-full">
            <h1 className=" text-start dark:text-white text-black font-bold font-serif  text-[20px]">
              @John_Doe
              <br />
              <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
                Call of duty
              </span>
            </h1>
            <p className=" flex items-baseline text-blue-600  bg-blue-600/20 px-[10px] py-[8px] rounded-[10px] text-sm font-extrabold">
              <LocationOn fontSize="small" /> Nigeria
            </p>
          </div>
          {/* bio  */}
          <p className=" sm:hidden block bg-gray-100 dark:bg-black border-2 border-gray-300 dark:border-gray-700 dark:text-white text-black  p-[20px] rounded-xl my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eligendi eaque eius quo distinctio, at commodi, quibusdam quae
            mollitia laborum natus dolorum. Facilis eius sed soluta placeat.
            Tempore, numquam et.
          </p>
          {/* theme toggle  */}
          <div className=" flex items-center bg-gray-300 dark:bg-black  rounded-[10px] w-full">
            <button
              onClick={() => dispatch(setTheme("light"))}
              className={
                theme === "light"
                  ? "flex-1  bg-blue-600 cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
                  : "flex-1  bg-transparent cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
              }>
              <LightModeIcon />
            </button>
            <button
              onClick={() => dispatch(setTheme("dark"))}
              className={
                theme === "dark"
                  ? "flex-1  bg-blue-600 cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
                  : "flex-1  bg-transparent cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
              }>
              <DarkModeIcon />
            </button>
          </div>
        </section>

        {/* subcontainer 2  */}
        <section className=" flex-1 dark:sm:border-2 dark:border-gray-700  sm:shadow-2xl   sm:rounded-2xl sm:p-10 p-5 ">
          {/* username/location  */}
          <div className="sm:flex hidden sm:flex-row  items-baseline justify-between">
            <h1 className=" text-start dark:text-white text-black font-bold font-serif  text-[20px]">
              @John_Doe <br />
              <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
                Call of duty
              </span>
            </h1>
            <p className=" flex items-baseline text-blue-600  bg-blue-600/20 px-[10px] py-[8px] rounded-[10px] text-sm font-extrabold">
              <LocationOn fontSize="small" /> Nigeria
            </p>
          </div>
          {/* bio  */}
          <p className="hidden sm:block bg-gray-100 dark:bg-black border-2 border-gray-300 dark:border-gray-700 dark:text-white text-black  p-[20px] rounded-xl my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eligendi eaque eius quo distinctio, at commodi, quibusdam quae
            mollitia laborum natus dolorum. Facilis eius sed soluta placeat.
            Tempore, numquam et.
          </p>
          {/* bottom navigation section  */}
          <div className="pt-[10px] sm:mt-20 border-b-2 dark:border-gray-700 border-gray-300 sm:shadow-b-2xl    w-full flex items-center sm:justify-start justify-between gap-[20px]">
            <button
              className={`w-[120px] text-center font-bold   text-[16px] m-0 leading-1 py-5 ${
                about
                  ? "border-b-3 text-blue-600 border-blue-600 "
                  : "dark:text-white text-black"
              }  transition-all duration-200 cursor-pointer`}
              onClick={settingToggle}
              id="about">
              About
            </button>
            <button
              className={`w-[120px] text-center font-bold   text-[16px] m-0 leading-1 py-5 ${
                setting
                  ? "border-b-3 text-blue-600 border-blue-600 "
                  : "dark:text-white text-black"
              }  transition-all duration-200 cursor-pointer`}
              onClick={settingToggle}
              id="setting">
              Settings
            </button>
          </div>
          {/* bottom section  */}
          <div className=" my-5 w-full">
            <Profilebottom about={about} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;

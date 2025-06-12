import React, { useState } from "react";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WcIcon from "@mui/icons-material/Wc";
function Profilebottom({ about }) {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(false);
  const [gender, setGender] = useState(false);
  const [sign, setSign] = useState(false);
  const [formData, setFormData] = useState({
    sign: "Select sign",
    gender: "Select gender",
    category: "Select category",
  });

  // zodiac sign list
  const zodiacSigns = [
    { sign: "Aquarius", dates: "January 20 - February 18" },
    { sign: "Pisces", dates: "February 19 - March 20" },
    { sign: "Aries", dates: "March 21 - April 19" },
    { sign: "Taurus", dates: "April 20 - May 20" },
    { sign: "Gemini", dates: "May 21 - June 20" },
    { sign: "Cancer", dates: "June 21 - July 22" },
    { sign: "Leo", dates: "July 23 - August 22" },
    { sign: "Virgo", dates: "August 23 - September 22" },
    { sign: "Libra", dates: "September 23 - October 22" },
    { sign: "Scorpio", dates: "October 23 - November 21" },
    { sign: "Sagittarius", dates: "November 22 - December 21" },
    { sign: "Capricorn", dates: "December 22 - January 19" },
  ];
  // categories
  const categories = [
    { name: "name 1" },
    { name: "name 2" },
    { name: "name 3" },
  ];
  return (
    <div>
      {about ? (
        <div className="flex flex-col gap-[10px]">
          <p className=" flex items-center gap-[5px] text-blue-600  bg-blue-600/20 px-[10px] py-[8px] rounded-[10px] text-[16px] font-extrabold my-2">
            <RecentActorsIcon fontSize="small" /> Contact info
          </p>
          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Email:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              johndoe@example.com
            </span>
          </p>
          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Phone:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              +234 700 0000 000
            </span>
          </p>

          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Addres:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              No 01 johndoe lane,Nigeria
            </span>
          </p>
          <p className=" flex items-center gap-[5px] text-blue-600  bg-blue-600/20 px-[10px] py-[8px] rounded-[10px] text-[16px] font-extrabold my-2">
            <ContactSupportIcon fontSize="small" /> Other info
          </p>

          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Sign:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              Gemini
            </span>
          </p>
          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Gender:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              Male
            </span>
          </p>
        </div>
      ) : (
        <div className="w-full  mb-[100px]">
          <form className="w-full">
            {/* avatar */}
            <div className="py-[20px] border-b-2 dark:border-gray-700 border-gray-300 sm:shadow-b-2xl flex lg:flex-row flex-col items-start  gap-[10px]    w-full">
              {" "}
              <img
                src="/avatar.webp"
                alt="avatar"
                className="w-[150px] h-[150px] rounded-[20px] object-cover border-[5px] border-gray-400"
              />
              {/* follos  */}
            </div>

            {/* name/ email section  */}
            <section className="flex  sm:flex-row flex-col items-center gap-[10px] ">
              <div className=" flex flex-1 flex-col gap-[5px] my-5  w-full">
                <p className=" dark:text-gray-500 text-black">Name:</p>
                <div className="flex items-center gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700">
                  <span className=" dark:text-gray-500 text-black border-r border-black  dark:border-gray-500 pr-2">
                    <AlternateEmailIcon fontSize="" />
                  </span>
                  <input
                    className="  outline-none dark:text-white  text-black flex-1 placeholder:text-gray-500 "
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className=" flex flex-1  flex-col gap-[5px] my-5   w-full">
                <p className=" dark:text-gray-500 text-black">Email:</p>
                <div className="flex items-center gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700">
                  <span className=" dark:text-gray-500 text-black border-r border-black  dark:border-gray-500 pr-2">
                    <EmailIcon fontSize="" />
                  </span>
                  <input
                    className="  outline-none dark:text-white  text-black flex-1 placeholder:text-gray-500 "
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </section>

            {/* bio  */}
            <div className=" flex flex-col gap-[5px] my-5 ">
              <p className=" dark:text-gray-500 text-black">Bio:</p>
              <div className="flex items-center gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700">
                <textarea
                  className="  outline-none dark:text-white  text-black flex-1 placeholder:text-gray-500  "
                  type="text"
                  name="name"
                  rows="5"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            {/* category  */}
            <section className=" flex flex-1 flex-col gap-[5px] my-5  w-full relative">
              <p className=" dark:text-gray-500 text-black ">Category</p>
              <div
                className="flex items-center justify-between gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700 z-50"
                type="button">
                <p className="flex items-center gap-2 text-gray-500 ">
                  <span className=" dark:text-gray-500 text-black border-r border-black  dark:border-gray-500 pr-2">
                    <ControlPointDuplicateIcon fontSize="" />
                  </span>{" "}
                  {formData.category}
                </p>
                <span
                  className=" dark:text-gray-500 text-black cursor-pointer"
                  onClick={() => setCategory(!category)}>
                  {" "}
                  {category ? (
                    <KeyboardArrowUpIcon fontSize="medium" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="medium" />
                  )}
                </span>
                {category && (
                  <div
                    className=" absolute  -left-[1px] -right-[1px] top-[70px]  bg-[#FFFFFF] dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full  dark:text-gray-500  text-gray-700 text-[12px] font-[500]  rounded-b-[10px]  p-3  h-[170px] overflow-scroll"
                    onClick={() => setCategory(!category)}>
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        value={category.name}
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-blue-600/20 hover:text-black dark:hover:text-white cursor-pointer w-full rounded-[10px]"
                        onClick={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }>
                        <span>
                          <AccessibilityIcon />
                        </span>
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* country/ Address section  */}
            <section className="flex flex-col  sm:flex-row items-center gap-[10px]">
              <div className=" flex flex-col  gap-[5px] my-5 flex-1  w-full">
                <p className=" dark:text-gray-500 text-black">Country:</p>
                <div className="flex items-center gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700">
                  <span className=" dark:text-gray-500 text-black border-r border-black  dark:border-gray-500 pr-2">
                    <PublicIcon fontSize="" />
                  </span>
                  <input
                    className="  outline-none dark:text-white  text-black flex-1 placeholder:text-gray-500 "
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-[5px] my-5 flex-1  w-full">
                <p className=" dark:text-gray-500 text-black">Address:</p>
                <div className="flex items-center gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700">
                  <span className=" dark:text-gray-500 text-black border-r border-black  dark:border-gray-500 pr-2">
                    <HomeIcon fontSize="" />
                  </span>
                  <input
                    className="  outline-none dark:text-white  text-black flex-1 placeholder:text-gray-500 "
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </section>
            <div className=" flex flex-col gap-[5px] my-5 ">
              <p className=" dark:text-gray-500 text-black">Phone:</p>
              <div className="flex items-center gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700">
                <span className=" dark:text-gray-500 text-black border-r border-black  dark:border-gray-500 pr-2">
                  <LocalPhoneIcon fontSize="" />
                </span>
                <input
                  className="  outline-none dark:text-white  text-black flex-1 placeholder:text-gray-500 "
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            {/* sign/ gender section  */}
            <section className="flex  sm:flex-row flex-col items-center gap-[10px]">
              {/* Sign  */}
              <section className=" flex flex-1 flex-col gap-[5px] my-5  w-full relative">
                <p className=" dark:text-gray-500 text-black">Select sign</p>
                <div
                  className="flex items-center justify-between gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700 z-50"
                  type="button">
                  <p className="flex items-center gap-2 text-gray-500 ">
                    <span className=" dark:text-gray-500 text-black border-r border-black  dark:border-gray-500 pr-2">
                      <AccessibilityIcon fontSize="" />
                    </span>{" "}
                    {formData.sign}
                  </p>
                  <span
                    className=" dark:text-gray-500 text-black cursor-pointer"
                    onClick={() => setSign(!sign)}>
                    {" "}
                    {sign ? (
                      <KeyboardArrowUpIcon fontSize="medium" />
                    ) : (
                      <KeyboardArrowDownIcon fontSize="medium" />
                    )}
                  </span>
                  {sign && (
                    <div
                      className=" absolute  -left-[1px] -right-[1px] top-[70px]  bg-[#FFFFFF] dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full  dark:text-gray-500  text-gray-700 text-[12px] font-[500]  rounded-b-[10px]  p-3  h-[170px] overflow-scroll"
                      onClick={() => setSign(!sign)}>
                      {zodiacSigns.map((zsign) => (
                        <button
                          key={zsign}
                          value={zsign.sign}
                          type="button"
                          className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-blue-600/20 hover:text-black dark:hover:text-white cursor-pointer w-full rounded-[10px]"
                          onClick={(e) =>
                            setFormData({ ...formData, sign: e.target.value })
                          }>
                          {`${zsign.sign} - ${zsign.dates}`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </section>
              {/* Gender  */}
              <section className=" flex flex-1 flex-col gap-[5px] my-5  w-full relative">
                <p className=" dark:text-gray-500 text-black">Select Gender</p>
                <div
                  className="flex items-center justify-between gap-2 bg-transparent dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full px-3 py-4 rounded-[10px]  dark:text-white  text-gray-700"
                  type="button">
                  <p className="flex items-center gap-2 text-gray-500 ">
                    <span className=" dark:text-gray-500 text-black border-r border-black  dark:border-gray-500 pr-2">
                      <WcIcon fontSize="" />
                    </span>{" "}
                    {formData.gender}
                  </p>

                  <span
                    className=" dark:text-gray-500 text-black cursor-pointer"
                    onClick={() => setGender(!gender)}>
                    {" "}
                    {gender ? (
                      <KeyboardArrowUpIcon fontSize="medium" />
                    ) : (
                      <KeyboardArrowDownIcon fontSize="medium" />
                    )}
                  </span>
                  {gender && (
                    <div
                      className=" absolute  -left-[1px] -right-[1px] top-[70px]  bg-[#FFFFFF] dark:bg-black border-1 border-gray-300 dark:border-gray-700  w-full  dark:text-gray-500  text-gray-700 text-[12px] font-[500]  rounded-b-[10px] overflow-hidden p-3 "
                      onClick={() => setGender(!gender)}>
                      <button
                        value="
                      Male
                      "
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-blue-600/20 hover:text-black dark:hover:text-white cursor-pointer w-full rounded-[10px]"
                        onClick={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }>
                        <span></span> Male
                      </button>
                      <button
                        value="
                      Female
                      "
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-blue-600/20 hover:text-black dark:hover:text-white cursor-pointer w-full rounded-[10px]"
                        onClick={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }>
                        <span></span> Female
                      </button>
                      <button
                        value="
                      Other
                      "
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-blue-600/20 hover:text-black dark:hover:text-white cursor-pointer w-full rounded-[10px]"
                        onClick={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }>
                        <span></span> Other
                      </button>
                    </div>
                  )}
                </div>
              </section>
            </section>
            <div className="  flex items-center gap-[10px] ">
              <span className="flex-1 bg-gray-300 dark:bg-gray-700 h-[0.2px] "></span>
              <span className=" text-gray-400 dark:text-gray-700">
                {" "}
                <KeyboardArrowDownIcon />
              </span>
              <span className="flex-1 bg-gray-300 dark:bg-gray-700 h-[0.2px] "></span>
            </div>

            <div className=" w-full flex items-center justify-center flex-col">
              <button className="bg-blue-600 w-full py-[10px] text-[12px] font-bold text-white rounded-[10px] my-[10px] cursor-pointer">
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
                    <span className="sr-only">Updateing...</span>
                  </div>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profilebottom;

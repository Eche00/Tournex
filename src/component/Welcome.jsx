import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme,toggleTheme } from "../redux/theme/themeSlice";

function Welcome({ setHome }) {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className=" overflow-hidden"
      style={{ height: "calc(var(--vh) * 100)" }}>
      <div className=" text-black bg-white dark:bg-[#1F1F1F] h-screen relative overflow-hidden overscroll-none">
        {" "}
        <div className=" flex items-center justify-center gap-[15px] flex-col h-full">
          {/* image section  */}
          <section className=" flex gap-[10px] items-baseline">
            {/* logo  */}
            <img
              className="w-[100px] h-[100px] rounded-full border-2 border-blue-600"
              src="/logo.webp"
              alt="logo"
            />
            {/* trophy logo  */}
            <img
              className="w-[80px] h-[80px] rounded-full border-2 border-blue-600"
              src="/trophy.webp"
              alt="trophy logo"
            />
            {/* game logo  */}
            <img
              className="w-[60px] h-[60px] rounded-full border-2 border-blue-600"
              src="/pad.webp"
              alt="game logo"
            />
          </section>
          {/* write up  */}
          <h1 className="text-[16px] font-[400">
            <span
              className="text-[26px] font-bold  font-sans text-white dark:text-[#1F1F1F] leading-1 tracking-widest"
              style={{
                WebkitTextStroke: "2px  #2563eb",
              }}>
              Tournex
            </span>
          </h1>
          {/* button  */}
          <button
            className="bg-blue-600 px-[25px] py-[10px] text-[16px] font-bold text-white rounded-[10px] my-[10px] cursor-pointer"
            onClick={() => setHome(false)}>
            Explore
          </button>

          <section className=" flex gap-10">
            <button
              className=" text-white bg-blue-600"
              onClick={() => dispatch(toggleTheme())}>
              on
            </button>
          </section>
        </div>
        {/* bg animation design */}
        <span className="w-[200px] h-[200px] bg-blue-600 rounded-full absolute top-[-50px] left-[-50px]"></span>
        <span className="w-[200px] h-[200px] bg-blue-600 rounded-full absolute bottom-[-50px] right-[-50px]"></span>
      </div>
    </div>
  );
}

export default Welcome;

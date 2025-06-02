import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="shadow-b-black shadow-2xl  fixed top-0 left-0 w-full bg-white z-50">
      <div className=" flex items-center justify-between py-[10px] sm:px-[50px] px-[10px] ">
        {/* logo */}
        <section>
          <img
            src=""
            alt="//"
            className="w-[50px] h-[50px] object-cover bg-gray-300 rounded-full"
          />
        </section>

        {/* auth  */}
        <section className="sm:flex items-center gap-[16px] hidden">
          <Link className=" flex items-center justify-center w-[100px] border-[0.8px] border-gray-500 text-gray-500 hover:bg-blue-600 hover:border-none hover:text-white  text-[14px] font-bold py-[8px] rounded-[10px] cursor-pointer hover:scale-105 transition-all duration-300">
            Login
          </Link>
          <Link className=" flex items-center justify-center w-[100px] bg-blue-600 py-[8px] text-white text-[14px] font-bold  rounded-[10px] cursor-pointer hover:scale-105 transition-all duration-300">
            SignUp
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Header;

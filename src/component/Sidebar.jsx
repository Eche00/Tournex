import React from "react";
import { NavLink, useLocation } from "react-router";
import HouseIcon from "@mui/icons-material/House";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

function Sidebar() {
  return (
    <div className=" w-[300px] h-[100vh] bg-blue-600">
      <nav className=" flex flex-col   text-[14px] px-[20px] py-[10px] gap-[5px]">
        {/* logo */}
        <section className=" flex items-center gap-[4px]  py-[26px]">
          <img
            src=""
            alt="//"
            className="w-[48px] h-[48px] object-cover bg-white rounded-full"
          />
          <h1 className=" text-[24px] font-[600] text-white">UNN Sports Hub</h1>
        </section>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95 "
          }>
          {" "}
          <HouseIcon /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <NewspaperIcon /> <span>News</span>
        </NavLink>

        <NavLink
          to="/matches"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <EmojiEventsIcon /> <span>Matches</span>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <FindReplaceIcon /> <span>Search</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <ManageAccountsIcon /> <span>Profile</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;

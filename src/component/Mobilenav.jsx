import React from "react";
import { NavLink, useLocation } from "react-router";
import HouseIcon from "@mui/icons-material/House";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

function Mobilenav() {
  const location = useLocation();
  return (
    <div className=" w-[90%] mx-auto shadow-black shadow-2xl rounded-[20px] bg-white">
      <nav className=" h-[55px] py-[10px] px-[20px] flex items-center justify-between w-full   text-[12px] ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <HouseIcon /> {location.pathname === "/" && <span>Home</span>}
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <NewspaperIcon /> {location.pathname === "/news" && <span>News</span>}
        </NavLink>

        <NavLink
          to="/matches"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <EmojiEventsIcon />{" "}
          {location.pathname === "/matches" && <span>Matches</span>}
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <FindReplaceIcon />{" "}
          {location.pathname === "/search" && <span>Search</span>}
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <ManageAccountsIcon />{" "}
          {location.pathname === "/profile" && <span>Profile</span>}
        </NavLink>
      </nav>
    </div>
  );
}

export default Mobilenav;

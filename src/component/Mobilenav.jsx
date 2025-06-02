import React from "react";
import { NavLink } from "react-router";
import HouseIcon from "@mui/icons-material/House";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

function Mobilenav() {
  return (
    <div className=" w-[90%] mx-auto shadow-black shadow-2xl rounded-[20px]">
      <nav className=" py-[10px] px-[20px] flex items-center justify-between w-full ibm-plex-serif-regular  text-[12px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center justify-center text-blue-600  font-extrabold"
              : "flex flex-col items-center justify-center text-gray-400    font-bold "
          }>
          {" "}
          <HouseIcon /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center justify-center text-blue-600  font-extrabold"
              : "flex flex-col items-center justify-center text-gray-400    font-bold "
          }>
          {" "}
          <NewspaperIcon /> <span>News</span>
        </NavLink>
        <NavLink
          to="/matches"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center justify-center text-blue-600  font-extrabold"
              : "flex flex-col items-center justify-center text-gray-400    font-bold "
          }>
          {" "}
          <EmojiEventsIcon /> <span>Matches</span>
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center justify-center text-blue-600  font-extrabold"
              : "flex flex-col items-center justify-center text-gray-400    font-bold "
          }>
          {" "}
          <FindReplaceIcon /> <span>Search</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center justify-center text-blue-600  font-extrabold"
              : "flex flex-col items-center justify-center text-gray-400    font-bold "
          }>
          {" "}
          <ManageAccountsIcon /> <span>Account</span>
        </NavLink>
      </nav>
      <style jsx>{`
        .ibm-plex-serif-regular {
          font-family: "IBM Plex Serif", serif;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
    </div>
  );
}

export default Mobilenav;

import React from "react";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

function Profilebottom({ about }) {
  return (
    <div>
      {about ? (
        <div className="flex flex-col gap-[10px]">
          <p className=" flex items-center gap-[5px] text-blue-600  bg-blue-600/20 px-[10px] py-[8px] rounded-[10px] text-[16px] font-extrabold my-2">
            <RecentActorsIcon fontSize="small" /> Contact info
          </p>
          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Phone:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              +234 700 0000 000
            </span>
          </p>
          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Phone:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              +234 700 0000 000
            </span>
          </p>
          <p className=" flex items-center gap-[5px] text-blue-600  bg-blue-600/20 px-[10px] py-[8px] rounded-[10px] text-[16px] font-extrabold my-2">
            <ContactSupportIcon fontSize="small" /> Other info
          </p>
          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Phone:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              +234 700 0000 000
            </span>
          </p>
          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Phone:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              +234 700 0000 000
            </span>
          </p>
          <p className=" flex items-baseline gap-[20px] dark:text-white text-black font-bold  text-[16px]">
            Phone:{" "}
            <span className="  text-blue-600  rounded-[10px] text-sm font-extrabold">
              +234 700 0000 000
            </span>
          </p>
        </div>
      ) : (
        <div>setting</div>
      )}
    </div>
  );
}

export default Profilebottom;

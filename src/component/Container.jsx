import React from "react";
import { Outlet } from "react-router";
import Mobilenav from "./Mobilenav";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Container() {
  return (
    <div className="h-[100vh] relative sm:h-full ">
      {/* header  */}
      <Header />

      {/* outlet for pages and sidebar  */}
      <section className=" w-full flex mt-[65px] relative">
        <div className="hidden sm:flex fixed top-[65px] left-0">
          <Sidebar />
        </div>
        <div className="ml-0 sm:ml-[300px] flex-1 p-5">
          <Outlet />
        </div>
      </section>
      {/* mobile navigation  */}
      <section className="  fixed sm:hidden flex bottom-[10px] w-full">
        <Mobilenav />
      </section>
    </div>
  );
}

export default Container;

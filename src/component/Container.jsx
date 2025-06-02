import React from "react";
import { Outlet } from "react-router";
import Mobilenav from "./Mobilenav";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Container() {
  return (
    <div className="h-[100vh] relative sm:h-full ">
      <Header />

      <section className=" w-full flex mt-[65px] relative">
        <div className="hidden sm:flex fixed top-[65px] left-0">
          <Sidebar />
        </div>
        <div className="ml-0 sm:ml-[300px]">
          <Outlet />
        </div>
      </section>
      <section className="  fixed sm:hidden flex bottom-[10px] w-full">
        <Mobilenav />
      </section>
    </div>
  );
}

export default Container;

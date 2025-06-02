import React from "react";
import { Outlet } from "react-router";
import Mobilenav from "./Mobilenav";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Container() {
  return (
    <div className="h-[100vh] relative sm:h-full ">
      <Header />

      <section className=" w-full flex">
        <div className="hidden sm:flex bottom-0 bg-black">
          <Sidebar />
        </div>
        <Outlet />
      </section>
      <section className="  fixed sm:hidden flex bottom-[10px] w-full">
        <Mobilenav />
      </section>
    </div>
  );
}

export default Container;

import React from "react";

function Welcome({ setHome }) {
  return (
    <div>
      <div className=" text-black bg-white h-[100vh] relative overflow-hidden">
        {" "}
        <div className=" flex items-center justify-center gap-[15px] flex-col h-full">
          {/* image section  */}
          <section className=" flex gap-[10px] items-baseline">
            {/* logo  */}
            <img
              className="w-[100px] h-[100px] rounded-full border-2 border-blue-600"
              src="/logotest.JPG"
              alt="logo"
            />
            {/* unn logo  */}
            <img
              className="w-[80px] h-[80px] rounded-full border-2 border-blue-600"
              src="/"
              alt=""
            />
            {/* football logo  */}
            <img
              className="w-[60px] h-[60px] rounded-full border-2 border-blue-600"
              src="/"
              alt=""
            />
          </section>
          {/* write up  */}
          <h1 className="text-[16px] font-[400">
            Welcome to{" "}
            <span className="text-[20px] font-bold font-serif">
              Chiomy's bakery
            </span>
          </h1>
          {/* button  */}
          <button
            className="bg-blue-600 px-[25px] py-[10px] text-[16px] font-bold text-white rounded-[10px] my-[10px] cursor-pointer"
            onClick={() => setHome(false)}>
            Explore
          </button>
        </div>
        {/* bg animation design */}
        <span className="w-[200px] h-[200px] bg-blue-600 rounded-full absolute top-[-50px] left-[-50px]"></span>
        <span className="w-[200px] h-[200px] bg-blue-600 rounded-full absolute bottom-[-50px] right-[-50px]"></span>
      </div>
    </div>
  );
}

export default Welcome;

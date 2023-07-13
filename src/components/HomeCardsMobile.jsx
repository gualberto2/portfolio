import React from "react";
import { RxDoubleArrowDown, RxDoubleArrowRight } from "react-icons/rx";

const HomeCardsMobile = () => {
  return (
    <section className="mt-16">
      <div>
        <div className="grid grid-cols-2 grid-rows-3">
          <div className="bg-gradient-to-r from-[#88A0BF] to-[#7D9ABF] hover:from-[#7A95B8] hover:to-[#7A95B8] transition duration-150 ease-in-out transform p-12 md:p-0 md:text-center md:py-12 rounded-3xl m-2 col-start-1 col-end-3 row-start-1 row-end-2 md:row-start-1 md:row-end-2 cursor-pointer z-20">
            <h2 className="text-xl text-inherit font-normal uppercase">Card</h2>
            <h1 className="text-4xl text-inherit font-medium uppercase">Uno</h1>
            <RxDoubleArrowDown className="absolute inline-block md:hidden bottom-8 right-10 bounceEffect text-2xl icon-animation transition duration-200 ease-in-out" />
            <RxDoubleArrowRight className="absolute hidden md:inline-block slideEffect bottom-8 right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
          </div>
          {/* <div className="bg-white transition duration-150 ease-in-out transform p-12 md:p-0 md:text-center md:py-12 rounded-3xl m-2 col-start-1 col-end-3 row-start-1 row-end-2 md:col-start-2 md:col-end-7  md:row-start-1 md:row-end-2 cursor-pointer z-10">
            <h2 className="text-xl text-inherit font-normal uppercase">Card</h2>
            <h1 className="text-4xl text-inherit font-medium uppercase">Uno</h1>
          </div> */}
          <div className="bg-gradient-to-r from-[#A7C7C4] to-[#9FC6C2] hover:from-[#B4CFCD] hover:to-[#B4CFCD] p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform cursor-pointer  col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3 z-20">
            <h2 className="text-xl font-normal uppercase">Card</h2>
            <h1 className="text-4xl font-medium uppercase">dos</h1>
            <div className="arrow-container">
              <RxDoubleArrowDown className="absolute inline-block md:hidden bottom-8 right-10 text-2xl bounceEffect icon-animation transition duration-200 ease-in-out" />
              <RxDoubleArrowRight className="absolute hidden md:inline-block slideEffect right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
            </div>
            <img src="" alt="" />
          </div>
          {/* <div className="bg-white p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform cursor-pointer col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-3 md:col-end-6 md:row-start-2 md:row-end-3 z-10 text-center">
            <h2 className="text-xl font-normal uppercase">Card</h2>
            <h1 className="text-4xl font-medium uppercase">dos</h1>
            <img src="" alt="" />
          </div> */}
          <div className="bg-gradient-to-r from-[#B676BC] to-[#B87FBD] hover:from-[#B478BA]  hover:to-[#B478BA] p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform cursor-pointer   col-start-1 col-end-3 row-start-3 row-end-4 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4">
            <h2 className="text-xl font-normal uppercase">View my</h2>
            <h1 className="text-4xl font-medium uppercase">tres</h1>
            <div className="arrow-container">
              <RxDoubleArrowDown className="absolute inline-block md:hidden bottom-8 right-10 text-2xl bounceEffect icon-animation transition duration-200 ease-in-out" />
              <RxDoubleArrowRight className="absolute hidden md:inline-block slideEffect bottom-8 right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCardsMobile;

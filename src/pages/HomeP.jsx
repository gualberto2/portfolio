import { FaAngellist } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import React from "react";

const Home = () => {
  //
  //
  //
  return (
    <body className="px-2">
      <section className="max-w-[95%] mx-auto">
        <section className="grid grid-rows-2 grid-cols-1  ">
          <div className=" flex flex-col pt-20 gap-8">
            <h1 className=" flex flex-col text-center text-5xl md:text-6xl font-semibold tracking-tighter">
              <span>Hi. I'm Elijah. </span>
              <span>A Developer.</span>
            </h1>
            <h2 className="text-center flex flex-col tracking-widest">
              <span>
                Developing for efficiency, engagement, accessibility and
                optimization.
              </span>
              <span>
                {" "}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Performance and Scalability are priorities on my radar.",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Learning new syntax everyday!",
                    1000,
                    "Driving others to acquire the same love for code",
                    1000,
                  ]}
                  wrapper="span"
                  speed={60}
                  className="text-2xl"
                  repeat={Infinity}
                />
              </span>
            </h2>
          </div>
          <div>
            <div className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-5">
              {/* Main card //// */}
              <div className=" bg-gradient-to-r from-[#C2B575] to-[#C5B667] hover:from-[#B8AF7A] hover:to-[#B8AF7A] transition duration-150 ease-in-out transform p-12 rounded-3xl m-2 col-start-1 col-end-3 row-start-1 row-end-3 md:col-span-2 md:row-span-2  cursor-pointer card">
                <h2 className="text-xl text-inherit font-normal uppercase">
                  My Biggest
                </h2>
                <h1 className="text-4xl text-inherit font-medium uppercase">
                  Project
                </h1>
                <BiCodeBlock className="absolute bottom-8 right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
              </div>
              {/* Sub card 2 */}
              <div className="bg-gradient-to-r from-[#A7C7C4] to-[#9FC6C2] hover:from-[#B4CFCD] hover:to-[#B4CFCD] p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform cursor-pointer  card col-start-1 col-end-3 row-start-3 row-end-4">
                <h2 className="text-xl font-normal uppercase">View my</h2>
                <h1 className="text-4xl font-medium uppercase">Work</h1>
                <div className="arrow-container">
                  <BsBoxArrowInRight className="absolute bottom-8 right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
                </div>
                <img src="" alt="" />
              </div>
              {/* Sub card 3 */}
              <div className="bg-[#60AB86] hover:bg-[#6CB28F] bg-gradient-to-r p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform  cursor-pointer card col-start-1 col-end-3 row-start-4 row-end-5">
                <h2 className="text-xl font-normal uppercase">All</h2>
                <h1 className="text-4xl font-medium uppercase">About me</h1>
                <FaAngellist className="absolute bottom-8 icon-animation right-10 text-2xl  transition duration-200 ease-in-out" />
                <img src="" alt="" />
              </div>
              {/* SUb card 4 */}
              <div className="bg-[#695958] hover:bg-[#7A6766] p-12 rounded-3xl m-2 md:col-start-3 md:col-end-5 mdrow-start-2 md:row-end-3 transition duration-150 ease-in-out transform  cursor-pointer card col-start-1 col-end-3 row-start-5 row-end-6">
                <h2 className="text-xl font-normal uppercase text-white">
                  Get in
                </h2>
                <h1 className="text-4xl font-medium uppercase text-white">
                  Contact
                </h1>
                <FaRegPaperPlane className="text-white absolute bottom-8 icon-animation right-10 text-2xl  transition duration-200 ease-in-out" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center my-4">
          <MdOutlineKeyboardArrowDown className="text-3xl text-center " />
        </div>
        <section className="mt-16">
          <div className="grid grid-cols-6 grid-rows-3">
            <div className="bg-gradient-to-r from-[#88A0BF] to-[#7D9ABF] hover:from-[#7A95B8] hover:to-[#7A95B8] p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform  cursor-pointer card  col-start-3 col-end-5 row-start-1 row-end-2">
              <h2 className="text-xl font-normal uppercase text-white">
                Get in
              </h2>
              <h1 className="text-4xl font-medium uppercase text-white">
                Contact
              </h1>
              <FaRegPaperPlane className="text-white absolute bottom-8 icon-animation right-10 text-2xl  transition duration-200 ease-in-out" />
            </div>
            <div className="bg-gradient-to-r from-[#88A0BF] to-[#7D9ABF] hover:from-[#7A95B8] hover:to-[#7A95B8] p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform  cursor-pointer card  col-start-3 col-end-5 row-start-2 row-end-3">
              <h2 className="text-xl font-normal uppercase text-white">
                Get in
              </h2>
              <h1 className="text-4xl font-medium uppercase text-white">
                Contact
              </h1>
              <FaRegPaperPlane className="text-white absolute bottom-8 icon-animation right-10 text-2xl  transition duration-200 ease-in-out" />
            </div>
            <div className="bg-gradient-to-r from-[#88A0BF] to-[#7D9ABF] hover:from-[#7A95B8] hover:to-[#7A95B8] p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform  cursor-pointer card  col-start-3 col-end-5 row-start-3 row-end-4">
              <h2 className="text-xl font-normal uppercase text-white">
                Get in
              </h2>
              <h1 className="text-4xl font-medium uppercase text-white">
                Contact
              </h1>
              <FaRegPaperPlane className="text-white absolute bottom-8 icon-animation right-10 text-2xl  transition duration-200 ease-in-out" />
            </div>
          </div>
        </section>
      </section>
    </body>
  );
};

export default Home;

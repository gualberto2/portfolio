import { FaAngellist, FaRust } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import {
  BiCodeBlock,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoMongodb,
} from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { DiRubyRough } from "react-icons/di";
import { SiStrapi } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxDoubleArrowDown } from "react-icons/rx";
import React, { useState } from "react";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };
  return (
    <body className="px-2 max-w-[95%] mx-auto 2xl:max-w-6xl">
      <section className="">
        <section className="">
          <div className="py-20">
            <h1 className=" flex flex-col text-center text-5xl md:text-6xl font-semibold tracking-tighter mb-8">
              <span>Hi. I'm Elijah. </span>
              <span>A Developer.</span>
            </h1>
            <h2 className="text-center flex flex-col tracking-widest text-lg">
              <span clas>
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
                    "Experience collaborating with other developers and clients",
                  ]}
                  wrapper="span"
                  speed={60}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-2 grid-rows-5 md:grid-cols-4 md:grid-rows-2 ">
              {/* Main card //// */}
              <div className=" bg-gradient-to-r from-[#C2B575] to-[#C5B667] hover:from-[#B8AF7A] hover:to-[#B8AF7A] transition duration-150 ease-in-out transform p-12 rounded-3xl m-2 col-start-1 col-end-3 row-start-1 row-end-3 md:col-start-1 md:col-end-3  md:row-start-1 md:row-end-3 cursor-pointer card">
                <h2 className="text-xl text-inherit font-normal uppercase">
                  My Biggest
                </h2>
                <h1 className="text-4xl text-inherit font-medium uppercase">
                  Project
                </h1>
                <BiCodeBlock className="absolute bottom-8 right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
              </div>
              {/* Sub card 2 */}
              <div className="bg-gradient-to-r from-[#A7C7C4] to-[#9FC6C2] hover:from-[#B4CFCD] hover:to-[#B4CFCD] p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform cursor-pointer  card col-start-1 col-end-3 row-start-3 row-end-4 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">
                <h2 className="text-xl font-normal uppercase">View my</h2>
                <h1 className="text-4xl font-medium uppercase">Work</h1>
                <div className="arrow-container">
                  <BsBoxArrowInRight className="absolute bottom-8 right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
                </div>
                <img src="" alt="" />
              </div>
              {/* Sub card 3 */}
              <div className="bg-[#60AB86] hover:bg-[#6CB28F] bg-gradient-to-r p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform  cursor-pointer card col-start-1 col-end-3 row-start-4 row-end-5 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2">
                <h2 className="text-xl font-normal uppercase">All About</h2>
                <h1 className="text-4xl font-medium uppercase">me</h1>
                <FaAngellist className="absolute bottom-8 icon-animation right-10 text-2xl  transition duration-200 ease-in-out" />
                <img src="" alt="" />
              </div>
              {/* SUb card 4 */}
              <div className="bg-[#695958] hover:bg-[#7A6766] p-12 rounded-3xl m-2 md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3 transition duration-150 ease-in-out transform  cursor-pointer card col-start-1 col-end-3 row-start-5 row-end-6">
                <h2 className="text-xl font-normal uppercase text-white">
                  Get in
                </h2>
                <h1 className="text-4xl font-medium uppercase text-white">
                  Contact
                </h1>
                <FaRegPaperPlane className="text-white absolute bottom-8 icon-animation right-10 text-xl  transition duration-200 ease-in-out" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center my-4">
          <MdOutlineKeyboardArrowDown className="text-3xl text-center bounceEffect" />
        </div>
        {/* <div className="hidden md:inline-block">
          <HomeCardsLarge />
        </div>
        <div className="inline-block w-full md:hidden">
          <HomeCardsMobile />
        </div> */}
      </section>
      <section className="my-12 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 justify-center items-center gap-4 md:gap-6">
        {/* <div className="text-center bg-gradient-to-r from-[#88A0BF] to-[#7D9ABF] hover:from-[#7A95B8] hover:to-[#7A95B8] p-12 rounded-3xl transition ease-in-out duration-200 hover:shadow-md">
          <h3 className="text-2xl mb-2 font-semibold">Front-End</h3>
          <div className="flex flex-row text-5xl justify-center mb-3">
            <BiLogoReact />
            <BiLogoJavascript />
            <BiLogoTailwindCss />
          </div>
          <div className="border-t border-black px-8 pt-1">
            <p
              className={`tracking-widest text-lg ${
                showMore ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              Experienced in high demand Front-End languages including HTML,
              CSS, JS, React and Next. Highly adaptable and flexible with
              learning and utilizing newer and older languages
            </p>
            {!showMore && (
              <button
                className="text-black hover:underline mt-2"
                onClick={handleShowMore}
              >
                Show More
              </button>
            )}
          </div>
        </div> */}
        {/* ... */}
      </section>
      <section className="my-12 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 justify-center items-center gap-4 md:gap-6">
        <div className=" text-center bg-gradient-to-r from-[#88A0BF] to-[#7D9ABF] hover:from-[#7A95B8] hover:to-[#7A95B8] p-12 rounded-3xl transition ease-in-out duration-200 hover:shadow-md">
          <h3 className="text-2xl mb-2 font-semibold">Front-End</h3>
          <div className="flex flex-row text-5xl justify-center mb-3">
            <BiLogoReact />
            <BiLogoJavascript />
            <BiLogoTailwindCss />
          </div>
          <div className="border-t  border-black px-8 pt-1">
            <p className="tracking-widest text-lg ">
              Experienced in high demand Front-End languages including HTML,
              CSS, JS, React and Next. Highly adaptable and flexible with
              learning and utilizing newer and older languages
            </p>
          </div>
        </div>
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-[#AAA1CE] to-[#A399CC] hover:from-[#9789CD]  hover:to-[#9789CD] transition ease-in-out duration-200 hover:shadow-md">
          <h3 className="text-2xl mb-2 font-semibold">Back-End</h3>
          <div className="flex flex-row text-5xl justify-center mb-3">
            <SiStrapi />
            <BiLogoMongodb />
          </div>
          <div className="border-t border-black px-8 pt-1">
            <p className="tracking-widest text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              officia. Accusantium, harum!
            </p>
          </div>
        </div>
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-[#B09396] to-[#B8999C] hover:from-[#A9898C] hover:to-[#A9898C] transition ease-in-out duration-200 hover:shadow-md">
          <h3 className="text-2xl mb-2 font-semibold">OOP</h3>
          <div className="flex flex-row text-5xl justify-center mb-3">
            <DiRubyRough />
            <FaRust />
          </div>
          <div className="border-t  border-black px-8 pt-1">
            <p className="tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              officia. Accusantium, harum!
            </p>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Home;

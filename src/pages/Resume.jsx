import React from "react";

const Resume = () => {
  return (
    <section className="px-2 max-w-[95%] mx-auto 2xl:max-w-6xl h-screen">
      <h1 className="pt-20 flex flex-col text-center text-5xl md:text-6xl font-semibold tracking-tighter mb-4">
        Resume
      </h1>
      <h2 className="text-center text-xl font-normal  mb-3">
        Feel free to download my resume.
      </h2>
      <div className="my-12 w-full flex flex-col justify-center items-center">
        <h3 className="font-light text-gray-500">Updated: 7.24.23</h3>
        <button className="bg-[#A99AA2] hover:bg-[#A1919A] p-4 w-[50%] rounded-3xl cursor-pointer text-white font-medium transition duration-150 ease-in-out">
          Click To Download
        </button>
      </div>
      <div className="md:grid md:grid-cols-8 px-4 md:px-0">
        <p className="col-start-3 col-end-7 text-2xl font-normal mb-3">
          Although I do consider this website to be my resume, a resume still
          functions as this site in an easily digestible format. You can find
          all of my contact information, work history and socials all in one.
        </p>
      </div>
    </section>
  );
};

export default Resume;

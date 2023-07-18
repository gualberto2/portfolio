import React from "react";

const About = () => {
  return (
    <section className="px-2 max-w-[95%] mx-auto 2xl:max-w-6xl py-20">
      <h1 className="text-center text-5xl md:text-6xl font-semibold tracking-tighter mb-16">
        I'm Elijah
      </h1>
      <div className="flex flex-col md:flex-row md:px-20 items-center mb-20">
        <div className="relative flex justify-center mb-4 rounded-xl gap-12">
          <img
            src="https://avatars.githubusercontent.com/u/103850410?v=4"
            alt="Sean Halpin"
            className="w-[700px] h-[400px] object-cover rounded-3xl md:rounded-full border-4 border-white shadow-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2  bg-white">
            {/* Spotify widget or any other content you want at the bottom */}
            <p className="text-center text-sm text-gray-600">Spotify Widget</p>
          </div>
        </div>
        <div className="flex flex-col sm:px-16">
          <h2 className="text-4xl font-semibold tracking-tighter mb-8 mr-8">
            I'm a Full-stack Software Developer working on the West Coast of the
            United States.
          </h2>
          <h3 className="text-2xl font-normal  mb-3">
            For over 1 year, I've worked in various areas of Full-stack
            development, including front-end and back-end development, design,
            marketing, and UI/UX, while learning Ruby and Rails with Node.JS.
            I'm proud to have worn many hats.
          </h3>
          <h3 className="text-2xl font-normal ">
            My focus goes into learning new syntax and freelance work producing
            web apps for small business owners.
          </h3>
        </div>
      </div>
      <div className="grid md:grid-cols-10 grid-rows-4 gap-y-4 mb-20">
        <div className="bg-green-900 rounded-full py-4 px-10 text-white flex flex-row-reverse items-center justify-between md:col-start-7 md:col-end-11">
          <div>
            <h2>Portfolio</h2>
            <h3>Design / Dev</h3>
          </div>
          <h4>~2 weeks</h4>
        </div>
        <div className="bg-green-900 rounded-full py-4 px-10 text-white flex flex-row-reverse items-center justify-between md:col-start-4 md:col-end-11 row-start-2 row-end-3">
          <div>
            <h2>Ocomni</h2>
            <h3>Lead Dev</h3>
          </div>
          <h4>~3 months</h4>
        </div>

        <div className="bg-green-900 rounded-full py-4 px-10 text-white flex flex-row-reverse items-center justify-between md:col-start-3 md:col-end-7 row-start-3 row-end-4">
          <div>
            <h2>Realtor Clone</h2>
            <h3>Design / Dev</h3>
          </div>
          <h4>~2 Months</h4>
        </div>
        <div className="bg-green-900 rounded-full py-4 px-10 text-white flex flex-row-reverse items-center justify-between md:col-start-1 md:col-end-4 row-start-4 row-end-5">
          <div>
            <h2>6 Grados</h2>
            <h3>Design / Dev</h3>
          </div>
          <h4>~3 Weeks</h4>
        </div>
      </div>
      <div className="grid-cols-12 grid mb-4">
        <h2 className="col-start-5 col-end-12 text-4xl font-semibold tracking-tighter">
          Let's collaborate if you're committed to accessibility and providing
          code for all.
        </h2>
      </div>
      <div className="grid-cols-12 grid ">
        <h2 className="col-start-5 col-end-12 text-xl font-normal tracking-widest">
          My goal with my work is to make it as accessible as possible.
          Providing services to all allows for market expansion and improved
          usability throughout each project. I believe in providing all humans
          education in the world of tech. A lot of my work will include
          documentation that is easy to digest and understand and hopefully will
          spark someone to gain interest in the world of coding.
        </h2>
      </div>
    </section>
  );
};

export default About;

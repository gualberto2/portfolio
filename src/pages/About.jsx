import React from "react";

const About = () => {
  return (
    <section className="px-2 max-w-[95%] mx-auto 2xl:max-w-6xl py-20 min-h-screen">
      <h1 className="text-center text-5xl md:text-6xl font-semibold tracking-tighter mb-16">
        I'm Elijah
      </h1>
      <div className="flex flex-col md:flex-row md:px-20 items-center mb-20">
        <div className="relative flex justify-center  rounded-xl mb-8 gap-12">
          <img
            src="https://avatars.githubusercontent.com/u/103850410?v=4"
            alt="Sean Halpin"
            className="w-[1200px] h-[400px] object-cover half-round  shadow-lg"
          />
          <div className=" absolute bottom-0 left-0 right-0 px-4 py-2  bg-white">
            {/* Spotify widget or any other content you want at the bottom */}
            <p className="text-center text-sm text-gray-600">Github PFP</p>
          </div>
        </div>
        <div className="flex flex-col sm:px-16">
          <h2 className="text-4xl font-semibold tracking-tighter mb-8 mr-8">
            I'm a Full-stack Software Developer working on the West Coast of the
            United States.
          </h2>
          <h3 className="text-2xl font-normal  mb-3">
            For over 2 years, I've specialized in Full-stack development with a
            focus on Front-end, dedicated to continuous integration and
            deploying innovative solutions. My expertise in modern technologies
            and collaborative approach make me an ideal candidate for teams
            aiming for top-tier product delivery.
          </h3>
          <h3 className="text-2xl font-normal ">
            I continuously master new programming techniques and develop custom
            web apps for small businesses, demonstrating my ability to deliver
            targeted, effective solutions.
          </h3>
        </div>
      </div>
      <h4 className="text-center font-light text-lg text-gray-500 mb-2">
        Some of my work experience
      </h4>
      <div className="grid md:grid-cols-10 grid-rows-4 gap-y-4 mb-20">
        <div className="bg-green-900 rounded-full py-4 px-10 text-white flex flex-row-reverse items-center justify-between md:col-start-7 md:col-end-11">
          <div>
            <h2 className="text-lg font-medium">Aug 2023~</h2>
            <h3 className="text-lg font-medium">Dev</h3>
          </div>
          <h4 className="font-semibold text-xl">Atria</h4>
        </div>{" "}
        <div className="bg-green-900 rounded-full py-4 px-10 text-white flex flex-row-reverse items-center justify-between md:col-start-3 md:col-end-7 row-start-3 row-end-4">
          <div>
            <h2 className="text-lg font-medium">July 2023</h2>
            <h3 className="text-lg font-medium">Dev / DevOps</h3>
          </div>
          <h4 className="font-semibold text-xl">Ecommerce + Dash</h4>
        </div>
        <div className="bg-green-900 rounded-full py-4 px-10 text-white flex flex-row-reverse items-center justify-between md:col-start-4 md:col-end-11 row-start-2 row-end-3 ">
          <div>
            <h2 className="text-lg font-medium">Oct 2022~</h2>
            <h3 className="text-lg font-medium">Dev</h3>
          </div>
          <h4 className="font-semibold text-xl">Ocomni</h4>
        </div>
        <div className="bg-green-900 rounded-full py-4 px-10 text-white flex flex-row-reverse items-center justify-between md:col-start-1 md:col-end-4 row-start-4 row-end-5">
          <div>
            <h2 className="text-lg font-medium">June 2022</h2>
            <h3 className="text-lg font-medium">Front-end Dev</h3>
          </div>
          <h4 className="font-semibold text-xl">WDS Hub</h4>
        </div>
      </div>
      <div className="md:grid-cols-12 grid mb-4 ">
        <h2 className="col-start-5 col-end-12 text-4xl font-semibold tracking-tighter">
          Let's collaborate if you're committed to accessibility and providing
          code for all.
        </h2>
      </div>
      <div className="md:grid-cols-12 grid px-2 md:px-0 mb-16">
        <h2 className="col-start-5 col-end-12 text-xl font-normal tracking-widest">
          My goal is to make my work as accessible as possible. Providing
          services to all allows for market expansion and improved usability
          throughout each project. I believe in providing all humans education
          in the world of tech. A lot of my work will include documentation that
          is easy to digest and understand and hopefully will spark someone to
          gain interest in the world of coding. I do my best to make it
          open-source.
        </h2>
      </div>
      <div className="grid md:grid-cols-8 md:grid-rows-2 md:mx-16 grid-cols-2 grid-rows-8 bg-[#E0E0E0] rounded-3xl py-6 px-5 md:p-8 gap-8">
        <div className="md:col-start-1 md:col-end-5 col-start-1 col-end-3 ">
          <p className="opacity-30  text-2xl mb-4 font-semibold">[0]</p>
          <h2 className="text-2xl font-semibold tracking-tighter mb-2">
            Problem
          </h2>
          <h3 className="text-md font-normal tracking-widest">
            Upon encountering a client's issue, I diligently strive to
            comprehend its nuances and intricacies. I actively seek their
            perspectives and suggestions, aiming to develop a strategy that not
            only resolves the current problem efficiently but also stands
            resilient against future challenges.
          </h3>
        </div>
        <div className="md:col-start-5 md:col-end-9 col-start-1 col-end-3">
          <p className="opacity-30 text-2xl mb-4 font-semibold">[1]</p>
          <h2 className="text-2xl font-semibold tracking-tighter mb-2">
            Collaborate
          </h2>
          <h3 className="text-md font-normal tracking-widest">
            In solving problems, I prioritize collaboration, seeking insights
            from experienced professionals in the relevant field. By
            understanding common challenges and alternative strategies they
            would have employed, I integrate their expertise into my approach.
            This enables me to apply proven best practices and innovative
            solutions, ensuring robust and adaptable outcomes.
          </h3>
        </div>
        <div className="md:col-start-1 md:col-end-5 col-start-1 col-end-3">
          <p className="opacity-30 text-2xl mb-4 font-semibold">[2]</p>
          <h2 className="text-2xl font-semibold tracking-tighter mb-2">
            DevOps + Project Management
          </h2>
          <h3 className="text-md font-normal tracking-widest">
            In DevOps and Project Management, I boost development efficiency by
            selecting versatile programming languages suited for specific
            features, directed by clear conceptual mind boards. Ensuring
            seamless integration with any system and straightforward adaptation
            to new technologies and client requests.
          </h3>
        </div>
        <div className="md:col-start-5 md:col-end-9 col-start-1 col-end-3">
          {" "}
          <p className="opacity-30 text-2xl mb-4 font-semibold">[3]</p>
          <h2 className="text-2xl font-semibold tracking-tighter mb-2">
            Develop
          </h2>
          <h3 className="text-md font-normal tracking-widest">
            My development philosophy is rooted in efficiency and meticulous
            organization, resulting in solutions that are not only effective but
            also sustainable. Through a blend of strategic planning, innovative
            problem-solving, and continuous improvement, I ensure that every
            project is a step towards greater productivity and success.
          </h3>
        </div>
      </div>
      <div className="py-6 px-5 mt-16 grid auto-rows-auto gap-7">
        <h2 className=" text-xl font-normal tracking-widest">
          Before I stepped into the world of Full-Stack development, I spent my
          entire first year of self-taught development on HTML, CSS, and JS. My
          earliest work consists of developing easy to maintain landing pages
          with simple forms. During one of my freelance trips I met Abdi, who is
          now like brother to me. He recommended that I learn react. From there
          my path took a drastic turn for the better.
        </h2>
        <h2 className="text-xl font-normal tracking-widest">
          It was an easy transition and it opened up dozens of doors for
          oppurtunity. After taking a course, learning its intricacies, and its
          expansive use with libraries and dependancies I was able to streamline
          my work, organize things better, and create codebases I never thought
          I could before. In the process of learning I did a few clones and
          tried my best to replicate them to create my own codebase. This made
          it even easier to to push out projects faster and made me able to
          optimize several projects at once.
        </h2>
        <h2 className="text-xl font-normal tracking-widest">
          After that I found myself work contracted consistently by Ocomni,
          allowing me to land a job with them as they recognized my work as a
          solo dev. Within my time with them I have been able to gain experience
          in other fields of software development, most notably continous,
          devops, project management, and cloud technologies. Still trying to
          get my foot into my back-end oriented development by completing
          CodeCademy courses.
        </h2>

        <h2 className="text-xl font-normal tracking-widest">
          Outside work, I enjoy frequenting the cafe's local to my residence,
          taking in the fresh air of the sea, performing with local bands,
          watching my son grow with my partner, and training with my huskies,
          oaks and vegas.
        </h2>
      </div>
    </section>
  );
};

export default About;

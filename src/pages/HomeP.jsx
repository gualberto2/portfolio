import {
  FaAngellist,
  FaRust,
  FaPeopleCarry,
  FaCss3Alt,
  FaHtml5,
  FaNpm,
} from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import {
  BiCodeBlock,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoGraphql,
  BiLogoGithub,
  BiLogoGit,
} from "react-icons/bi";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { FaRegPaperPlane } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { DiRubyRough } from "react-icons/di";
import { LiaNode } from "react-icons/lia";
import { SiRubyonrails, SiStrapi, SiPostgresql } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Loading from "../components/Loading";
import React, { useState } from "react";
import PopUpMsg from "../components/PopUpMsg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(true);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setShowPopup(false);
  };
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    phone: "",
    txtAr: "",
  });

  const { first, last, phone, txtAr } = formData;

  function onChange(e) {
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataCopy = {
        ...formData,
        timestamp: serverTimestamp(),
      };
      delete formDataCopy.formDEV;
      const docRef = await addDoc(collection(db, "getInTouch"), formData);
      console.log(`Here is the information you submited: ${docRef}`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  if (loading) return <Loading />;

  return (
    <section className="px-2 max-w-[95%] mx-auto 2xl:max-w-6xl">
      {showPopup && <PopUpMsg isOpen={true} closeModal={closeModal} />}

      <section className="mb-16">
        <section className="">
          <div className="pt-20 ">
            <h1 className=" flex flex-col text-center text-5xl md:text-6xl font-semibold tracking-tighter mb-8">
              <span>Hi. I'm Elijah. </span>
              <span>A Developer.</span>
            </h1>
            <h2 className="text-center flex flex-col tracking-widest text-lg">
              <span>
                Developing for efficiency, engagement, accessibility and
                optimization.
              </span>
              <span className="h-[100px]">
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
                    "Experience collaborating with other developers and clients.",
                    1000,
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
              <div
                className=" bg-gradient-to-r from-[#C2B575] to-[#C5B667] hover:from-[#B8AF7A] hover:to-[#B8AF7A] transition duration-150 ease-in-out transform p-12 rounded-3xl m-2 col-start-1 col-end-3 row-start-1 row-end-3 md:col-start-1 md:col-end-3  md:row-start-1 md:row-end-3 cursor-pointer card"
                onClick={() => navigate("/biggest-project")}
              >
                <h2 className="text-xl text-inherit font-normal uppercase">
                  My Biggest
                </h2>
                <h1 className="text-4xl text-inherit font-medium uppercase">
                  Project
                </h1>
                <BiCodeBlock className="absolute bottom-8 right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
              </div>
              {/* Sub card 2 */}
              <div
                className="bg-gradient-to-r from-[#A7C7C4] to-[#9FC6C2] hover:from-[#B4CFCD] hover:to-[#B4CFCD] p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform cursor-pointer  card col-start-1 col-end-3 row-start-3 row-end-4 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2"
                onClick={() => navigate("/projects")}
              >
                <h2 className="text-xl font-normal uppercase">View my</h2>
                <h1 className="text-4xl font-medium uppercase">Work</h1>
                <div className="arrow-container">
                  <BsBoxArrowInRight className="absolute bottom-8 right-10 text-2xl icon-animation transition duration-200 ease-in-out" />
                </div>
                <img src="" alt="" />
              </div>
              {/* Sub card 3 */}
              <div
                className="bg-[#60AB86] hover:bg-[#6CB28F] bg-gradient-to-r p-12 rounded-3xl m-2 transition duration-150 ease-in-out transform  cursor-pointer card col-start-1 col-end-3 row-start-4 row-end-5 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2"
                onClick={() => navigate("/about")}
              >
                <h2 className="text-xl font-normal uppercase">All About</h2>
                <h1 className="text-4xl font-medium uppercase">me</h1>
                <FaAngellist className="absolute bottom-8 icon-animation right-10 text-2xl  transition duration-200 ease-in-out" />
                <img src="" alt="" />
              </div>
              {/* SUb card 4 */}
              <div
                className="bg-[#695958] hover:bg-[#7A6766] p-12 rounded-3xl m-2 md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3 transition duration-150 ease-in-out transform  cursor-pointer card col-start-1 col-end-3 row-start-5 row-end-6"
                onClick={() => navigate("/contact")}
              >
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
      </section>

      <section className="m-2 px-8 py-12 bg-gradient-to-r from-[#88A0BF] to-[#7D9ABF] rounded-3xl grid md:grid-cols-10">
        <div className="md:col-start-2 md:col-end-3 flex flex-col justify-center mb-4">
          <h3 className="text-xl font-normal uppercase ">My</h3>
          <h2 className="text-4xl font-medium uppercase ">Skills</h2>
        </div>

        <div className="md:col-start-5 md:col-end-11 flex flex-wrap justify-center text-6xl gap-8">
          <div className="language-container">
            <BiLogoFirebase
              className="language-icon text-grow-on-hover "
              title="Firebase"
            />
            <div className="language-text">Firebase</div>
          </div>

          <div className="language-container">
            <SiPostgresql
              className="language-icon text-grow-on-hover"
              title="PostgreSQL"
            />
            <div className="language-text">PostgreSQL</div>
          </div>
          <div className="language-container">
            <BiLogoMongodb
              className="language-icon text-grow-on-hover"
              title="MongoDB"
            />
            <div className="language-text">MongoDB</div>
          </div>
          <div className="language-container">
            <FaRust className="language-icon text-grow-on-hover" title="Rust" />
            <div className="language-text">Rust</div>
          </div>

          <div className="language-container">
            <SiRubyonrails
              className="language-icon text-grow-on-hover"
              title="Ruby on Rails"
            />
            <div className="language-text">Ruby on Rails</div>
          </div>
          <div className="language-container">
            <DiRubyRough
              className="language-icon text-grow-on-hover"
              title="Ruby"
            />
            <div className="language-text">Ruby</div>
          </div>

          <div className="language-container">
            <BiLogoGit
              className="language-icon text-grow-on-hover"
              title="Git"
            />
            <div className="language-text">Git</div>
          </div>
          <div className="language-container">
            <SiStrapi
              className="language-icon text-grow-on-hover"
              title="Strapi"
            />
            <div className="language-text">Strapi</div>
          </div>
          <div className="language-container">
            <BiLogoGraphql
              className="language-icon text-grow-on-hover"
              title="GraphQL"
            />
            <div className="language-text">GraphQL</div>
          </div>

          <div className="language-container">
            <BiLogoTailwindCss
              className="language-icon text-grow-on-hover"
              title="Tailwind CSS"
            />
            <div className="language-text">Tailwind CSS</div>
          </div>

          <div className="language-container">
            <LiaNode
              className="language-icon text-grow-on-hover"
              title="Node.js"
            />
            <div className="language-text">Node.js</div>
          </div>

          <div className="language-container">
            <BiLogoGithub
              className="language-icon text-grow-on-hover"
              title="GitHub"
            />
            <div className="language-text">GitHub</div>
          </div>

          <div className="language-container">
            <BiLogoRedux
              className="language-icon text-grow-on-hover"
              title="Redux"
            />
            <div className="language-text">Redux</div>
          </div>

          <div className="language-container">
            <FaNpm className="language-icon text-grow-on-hover" title="npm" />
            <div className="language-text">npm</div>
          </div>

          <div className="language-container">
            <FaHtml5
              className="language-icon text-grow-on-hover"
              title="HTML5"
            />
            <div className="language-text">HTML5</div>
          </div>
          <div className="language-container">
            <FaCss3Alt
              className="language-icon text-grow-on-hover"
              title="CSS3"
            />
            <div className="language-text">CSS3</div>
          </div>
          <div className="language-container">
            <BiLogoReact
              className="language-icon text-grow-on-hover"
              title="React"
            />
            <div className="language-text">React</div>
          </div>
          <div className="language-container">
            <BiLogoJavascript
              className="language-icon text-grow-on-hover"
              title="JavaScript"
            />
            <div className="language-text">JavaScript</div>
          </div>
        </div>
      </section>

      <section className="lg:mx-[15%] my-16 bg-gradient-to-r from-[#C26697] to-[#C2709C] transition duration-150 ease-in-out p-8 rounded-2xl">
        <div className="mb-8">
          <h2 className="text-xl font-normal uppercase">Lets work</h2>
          <h3 className="text-4xl text-inherit font-medium uppercase ">
            Together
          </h3>{" "}
        </div>

        <form className="" onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 md:grid-rows-3 grid-rows-7 grid-cols-1 justify-center items-center gap-x-2 gap-y-6">
            <input
              type="text"
              id="first"
              onChange={onChange}
              value={first}
              placeholder="first"
              className="md:col-start-1 md:col-end-2 md:row-start-0 md:row-end-1 px-6 md:mx-8 py-3 transition duration-150 ease-in-out  rounded-xl bg-[#C87EA6] hover:bg-[#B87A9B] placeholder-white"
            />
            <input
              type="text"
              id="last"
              onChange={onChange}
              value={last}
              placeholder="last"
              className="md:col-start-2 md:col-end-3 md:row-start-0 md:row-end-1 px-6 md:mx-8 py-3 transition duration-150 ease-in-out  rounded-xl bg-[#C87EA6] hover:bg-[#B87A9B] placeholder-white"
            />

            <input
              type="tel"
              placeholder="phone"
              onChange={onChange}
              value={phone}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              id="phone"
              className="md:row-start-1 md:row-end-2 md:col-span-2 px-6 md:mx-8 py-3 transition duration-150 ease-in-out  rounded-xl bg-[#C87EA6] hover:bg-[#B87A9B] placeholder-white"
            />
            <input
              type="textarea"
              placeholder="Short Message (Minimum 15 words)"
              id="txtAr"
              onChange={onChange}
              value={txtAr}
              min={15}
              max={500}
              rows="1"
              className="md:row-start-2 md:row-end-3 md:col-span-2 px-6 md:mx-8 py-3 transition duration-150 ease-in-out  rounded-xl bg-[#C87EA6] hover:bg-[#B87A9B] placeholder-white row-start-4 row-end-6 "
            />
            <button
              className="md:row-start-3 md:row-end-4 md:col-span-2 row-start-6 row-end-7 px-8 py-3 transition duration-150 ease-in-out  rounded-2xl mx-[20%] text-white  bg-black flex flex-row items-center justify-center"
              type="submit"
            >
              <FaPeopleCarry className="text-2xl text-center transition duration-200 ease-in-out" />
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Home;

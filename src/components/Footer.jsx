import React from "react";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  // const CLIENT_ID = "ced6aca9c9dc448799fc5a7159f99665";
  // const CLIENT_SECRET = "afe87a2459df441ab4fc5a4d68018e5c";

  // useEffect(() => {
  //   //API access tokens
  //   var authParameters = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       body:
  //         "grant_type=client_credentials&client_id=" +
  //         CLIENT_ID +
  //         "&client_secret" +
  //         CLIENT_SECRET,
  //     },
  //   };
  //   fetch("https://accounts.spotify.com/api/token", authParameters)
  //     .then((result) => result.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <footer className="px-2 max-w-[95%] mx-auto 2xl:max-w-6xl md:grid md:grid-cols-8 mt-auto py-20 gap-6">
      <div className="md:col-start-1 md:col-end-5 mb-8 md:mb-0 bg-green-800 p-6 mx-4 rounded-3xl relative">
        <h2 className="text-xl font-medium text-white">Spotify</h2>
        <h3 className="text-xl font-medium text-white mb-2">On Repeat</h3>
        <FaSpotify className="absolute top-7 right-11 text-5xl text-white" />
        <div>
          <p className="text-md font-medium text-white whitespace-nowrap bg-green-900 rounded-2xl p-3 mb-1">
            dynamic song names here
          </p>
        </div>
        <h4 className="text-white font-light cursor-pointer hover:text-gray-300 transition duration-150 ease-in">
          Listen with me :D
        </h4>
      </div>
      <section className="flex flex-row gap-8 px-12 md:col-start-5 md:col-end-8 justify-center align-center">
        <div className="flex flex-col">
          <h3 className="font-medium text-2xl mb-2 whitespace-nowrap">
            Other Places
          </h3>
          <div>
            <ul className="flex flex-col gap-8">
              <a
                className="cursor-pointer text-lg hover:text-green-900 transition duration-200 ease-in-out"
                href="https://github.com/gualberto2"
              >
                Github
              </a>
              <a
                className="cursor-pointer text-lg hover:text-green-900 transition duration-200 ease-in-out"
                href="https://www.ocomni.com/blog"
              >
                Posts
              </a>
              <a
                className="cursor-pointer text-lg hover:text-green-900 transition duration-200 ease-in-out "
                href="https://www.linkedin.com/in/elijah-wilson-47490b240/"
              >
                LinkedIn
              </a>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-2xl mb-2">Contact</h3>
          <div className="flex flex-col">
            <ul>
              <li className="cursor-pointer text-lg hover:text-green-900 transition duration-200 ease-in-out">
                Message
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

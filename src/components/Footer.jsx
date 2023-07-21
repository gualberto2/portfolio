import React, { useEffect } from "react";

const Footer = () => {
  const CLIENT_ID = "ced6aca9c9dc448799fc5a7159f99665";
  const CLIENT_SECRET = "afe87a2459df441ab4fc5a4d68018e5c";

  useEffect(() => {
    //API access tokens
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        body:
          "grant_type=client_credentials&client_id=" +
          CLIENT_ID +
          "&client_secret" +
          CLIENT_SECRET,
      },
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <footer className="px-2 max-w-[95%] mx-auto 2xl:max-w-6xl md:grid md:grid-cols-8 mt-auto py-20 ">
      <div className="md:col-start-2 md:col-end-4 mb-8 md:mb-0">
        {/* on repeat spotify api thingy here */}
        <div className="bg-green-100 rounded-3xl p-4 md:col-start-2 md:col-end-5">
          <h3>Spotify</h3>
          <h4>On Repeat</h4>
          {}
        </div>
        <p className="cursor-pointer flex flex-row justify-between px-4 ">
          <span>C 2023 Elijah</span>
          <span className="cursor-pointer text-lg hover:text-green-900 transition duration-200 ease-in-out">
            Colophon
          </span>
        </p>
      </div>
      <section className="flex flex-row gap-8 px-12 md:col-start-5 md:col-end-8 justify-center align-center">
        <div className="flex flex-col">
          <h3 className="font-medium text-2xl mb-2">Elsewhere</h3>
          <div>
            <ul className="flex flex-col gap-8">
              <li className="cursor-pointer text-lg hover:text-green-900 transition duration-200 ease-in-out">
                Github
              </li>
              <li className="cursor-pointer text-lg hover:text-green-900 transition duration-200 ease-in-out">
                Posts
              </li>
              <li className="cursor-pointer text-lg hover:text-green-900 transition duration-200 ease-in-out">
                LinkedIn
              </li>
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

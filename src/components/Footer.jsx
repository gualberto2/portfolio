import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-8 mt-auto py-20">
      <div className="md:col-start-2 md:col-end-4">
        {/* on repeat spotify api thingy here */}
        <p className="cursor-pointer">
          <span>Elijah</span>
          <span className="cursor-pointer">Colophon</span>
        </p>
      </div>
      <section className="flex flex-row gap-8 px-12 md:col-start-5 md:col-end-8">
        <div className="flex flex-col">
          <h3 className="font-medium text-2xl mb-2">Elsewhere</h3>
          <div>
            <ul className="flex flex-col gap-2">
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

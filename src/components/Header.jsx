import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-center">
      <div
        className=" mt-2 py-4 rounded-2xl px-12 sticky w-full flex justify-between  max-w-xl items-center"
        id="navbar"
      >
        <p
          className="font-medium text-center col-start-1 col-end-2 text-md md:text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <p
          className="font-medium col-start-2 col-end-3 text-md md:text-xl cursor-pointer text-center"
          onClick={() => navigate("/resume")}
        >
          Resume
        </p>
        <p
          className="font-medium col-start-3 col-end-4 text-md md:text-xl cursor-pointer text-center"
          onClick={() => navigate("/about")}
        >
          About
        </p>
        <p
          className="font-medium col-start-4 col-end-5 text-md md:text-xl cursor-pointer text-center"
          onClick={() => navigate("/projects")}
        >
          Projects
        </p>
      </div>
    </nav>
  );
};

export default Header;

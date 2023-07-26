import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className=" mt-2 pt-6 sticky">
      <ul className="grid grid-cols-4 md:flex md:justify-between md:mx-16 items-center">
        <li
          className="font-medium text-center col-start-1 col-end-2 text-md md:text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="font-medium col-start-2 col-end-3 text-md md:text-xl cursor-pointer text-center"
          onClick={() => navigate("/resume")}
        >
          Resume
        </li>
        <li
          className="font-medium col-start-3 col-end-4 text-md md:text-xl cursor-pointer text-center"
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className="font-medium col-start-4 col-end-5 text-md md:text-xl cursor-pointer text-center"
          onClick={() => navigate("/work")}
        >
          Projects
        </li>
      </ul>
    </nav>
  );
};

export default Header;

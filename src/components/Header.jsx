import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col md:flex-row justify-center items-center mt-2 pt-6 sticky">
      <ul className="flex flex-row items-center gap-10 md:mr-4">
        <li
          className="font-medium text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span>Home</span>{" "}
          <span className="border px-2 border-black font-normal">/</span>
        </li>
        <li
          className="font-medium text-xl cursor-pointer"
          onClick={() => navigate("/resume")}
        >
          Resume
        </li>
        <li
          className="font-medium text-xl cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className="font-medium text-xl cursor-pointer"
          onClick={() => navigate("/work")}
        >
          Work
        </li>
      </ul>
    </nav>
  );
};

export default Header;

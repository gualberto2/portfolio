import React from "react";

const Header = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-center items-center mt-2 pt-6 sticky">
      <ul className="flex flex-row items-center gap-10 md:mr-4">
        <li className="font-medium text-xl cursor-pointer">
          Home <span className="border px-2 border-black font-normal">/</span>
        </li>
        <li className="font-medium text-xl cursor-pointer">About</li>
        <li className="font-medium text-xl cursor-pointer">Work</li>
      </ul>
    </nav>
  );
};

export default Header;

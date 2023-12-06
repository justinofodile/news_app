import React from "react";
import { ClockCircleTwoTone } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const ourLink = [
    "/",
    "Business",
    "Sports",
    "Technology",
    "Education",
    "Travel",
  ];
  return (
    <nav className="shadow">
      <div className="flex items-center justify-between gap-4 max-w-5xl mx-auto">
        <div className="flex gap-5 items-center">
          <ClockCircleTwoTone />
          <h3 className="text-blue-500">JayNews</h3>
        </div>
        <div className="gap-6 flex">
          {ourLink.map((item) => (
            <NavLink
              className="text-gray-400 hover:text-blue-800 font-semibold mr-2"
              to={item}
            >
              {item === "/" ? "Home" : item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import { ClockCircleTwoTone, MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const ourLink = [
    "/",
    "Business",
    "Sports",
    "Technology",
    "Education",
    "Travel",
  ];
  return (
    <nav className="shadow sticky bg-white w-full top-0 left-0 z-10">
      <div className="flex items-center justify-between gap-4 max-w-5xl mx-auto px-4">
        <div className="flex gap-5 items-center">
          <ClockCircleTwoTone />
          <h3 className="text-blue-500">JayNews</h3>
        </div>
        <div className="gap-6  hidden md:flex">
          {ourLink.map((item) => (
            <NavLink
              className="text-gray-400 hover:text-blue-800 font-semibold mr-2"
              to={item}
            >
              {item === "/" ? "Home" : item}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <MenuOutlined onClick={() => setToggleMenu(!toggleMenu)} />
        </div>
        {toggleMenu && (
          <div className="z-10 flex flex-col md:hidden absolute top-14 right-2 space-y-6 text-right shadow-lg pl-7 pr-3 py-5">
            {ourLink.map((item) => (
              <NavLink
                className="text-gray-400 hover:text-blue-800 font-semibold mr-2"
                to={item}
              >
                {item === "/" ? "Home" : item}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

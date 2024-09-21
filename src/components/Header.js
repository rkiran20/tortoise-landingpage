import React, { useState } from "react";
import tortoiseLogo from "../img/Horizontal-Logo---Tortoise.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { animate, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="sticky top-0 shadow-md px-4 sm:px-6 lg:px-12 xl:px-16 z-99 2xl:px-24 bg-softBeige ">
      <header className="z-[10] relative  h-16 flex justify-between">
        <div className="h-16 flex items-center ">
          <img src={tortoiseLogo} alt="compony logo" className="w-32"></img>
        </div>
        <div className="flex gap-8">
          <div
            className="h-16 flex items-center cursor-pointer"
            onClick={handleDarkMode}
          >
            {" "}
            <FontAwesomeIcon
              icon={darkMode ? faLightbulb : faMoon}
              className="h-6"
            />
          </div>
          <div
            className="flex h-16 items-center cursor-pointer block lg:hidden"
            onClick={handleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="h-6" />
          </div>
          <ul className="flex flex-row items-center cursor-pointer hidden lg:flex gap-8 ">
            <li>Home</li>
            <li>Savings Calculator</li>
            <li>
              <motion.button className="bg-green-700 text-white font-bold text=xl px-6 py-3 rounded-[2rem]">
                Contact Us
              </motion.button>
            </li>
          </ul>
        </div>
      </header>
      <motion.ul
        className="absolute w-full top-16 left-0 flex flex-col bg-softBeige z-[0] block lg:hidden"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.5 }}
      >
        <li className=" w-fit self-center content-center py-4">Home</li>
        <li className=" w-fit self-center content-center py-4 ">
          Savings Calculator
        </li>
        <li className=" w-fit self-center content-center py-4 ">
          <motion.button className="bg-green-700 text-white font-bold text=xl px-6 py-3 rounded-[2rem]">
            Contact Us
          </motion.button>
        </li>
      </motion.ul>
    </div>
  );
};

export default Header;

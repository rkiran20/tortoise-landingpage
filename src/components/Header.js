import React, { useState } from "react";
import tortoiseLogo from "../img/Horizontal-Logo---Tortoise.svg";
import darkmodeLogo from "../img/Dark-mode-Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    setIsMenuOpen(false);
  };
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="sticky top-0  transition-colors duration-500  shadow-md px-4 py-2 sm:px-6 lg:px-12 xl:px-16 z-99 2xl:px-24 bg-softBeige z-[1000] dark:bg-mainBlack ">
      <header className="z-[100] relative  h-16 flex justify-between">
        <div className="h-16 flex items-center cursor-pointer dark:color ">
          <img
            src={darkMode ? darkmodeLogo : tortoiseLogo}
            alt="compony logo"
            className="w-32"
          ></img>
        </div>
        <div className="flex gap-8">
          <div
            className="h-16 flex items-center cursor-pointer"
            onClick={handleDarkMode}
          >
            {" "}
            <FontAwesomeIcon
              icon={darkMode ? faLightbulb : faMoon}
              className="h-6 dark:text-greyy"
              style={{ color: darkMode ? "yellow" : "Black" }}
            />
          </div>
          <div
            className="flex h-16 items-center cursor-pointer block lg:hidden"
            onClick={handleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="h-6" />
          </div>
          <ul className="flex flex-row items-center cursor-pointer hidden lg:flex gap-8 ">
            <li className="hover:text-brown transition-colors duration-300 hover:underline hover:decoration-brown dark:text-greyy dark:hover:text-green-500 underline-offset-4 ">
              Home
            </li>
            <li className="hover:text-brown transition-colors duration-300 hover:underline hover:decoration-brown dark:text-greyy dark:hover:text-green-500 underline-offset-4 ">
              Savings Calculator
            </li>
            <li>
              <motion.button
                className="bg-green-700 text-white border-2 border-transparent font-bold text=xl px-6 py-3  rounded-[2rem]"
                whileHover={{
                  backgroundColor: "#faf4ea",
                  color: "#15803d",
                  borderColor: "#15803d",
                }}
                transition={{ duration: 0.3 }}
              >
                Contact Us
              </motion.button>
            </li>
          </ul>
        </div>
      </header>
      <motion.ul
        className="absolute w-full top-24 left-0 flex flex-col bg-softBeige z-[0] block lg:hidden dark:bg-mainBlack"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -30 }}
        transition={{ duration: 0.3 }}
      >
        <li
          onClick={handleClick}
          className=" w-fit self-center content-center py-4 cursor-pointer hover:text-brown transition-colors duration-300 hover:underline hover:decoration-brown dark:text-greyy dark:hover:text-green-500 underline-offset-4 "
        >
          Home
        </li>
        <li
          onClick={handleClick}
          className=" w-fit self-center content-center py-4 cursor-pointer hover:text-brown transition-colors duration-300 hover:underline hover:decoration-brown dark:text-greyy dark:hover:text-green-500 underline-offset-4 "
        >
          Savings Calculator
        </li>
        <li
          onClick={handleClick}
          className=" w-fit self-center content-center py-4 cursor-pointer "
        >
          <motion.button
            className="bg-green-700 text-white border-2 border-transparent font-bold text=xl px-6 py-3  rounded-[2rem]"
            whileHover={{
              backgroundColor: "#faf4ea",
              color: "#15803d",
              borderColor: "#15803d",
            }}
            transition={{ duration: 0.3 }}
          >
            Contact Us
          </motion.button>
        </li>
      </motion.ul>
    </div>
  );
};

export default Header;

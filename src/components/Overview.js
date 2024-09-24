import React, { useState } from "react";
import { overview } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScroll from "./useScroll";
import { easeIn, easeOut } from "framer-motion";
import { motion } from "framer-motion";

const Overview = () => {
  const [element, controls] = useScroll();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const leftToRight = {
    hidden: {
      opacity: 0,
      x: -300,
      transition: {
        duration: 0.7,
        easeOut,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        easeOut,
      },
    },
  };
  const none = {
    hidden: { opacity: 0, y: -150, transition: { duration: 0.5, easeIn } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, easeIn } },
  };
  const animationVariant = isMobile ? none : leftToRight;
  return (
    <div className="p-4 my-8 px-4 sm:px-6 overflow-hidden lg:px-12 xl:px-16 2xl:px-24 flex flex-col md:flex-row gap-4 ">
      <div className="flex-3 relative z-[1]">
        <img
          src="https://www.tortoise.pro/images/Group-42919.png"
          alt="logo"
          className="object-cover overflow-hidden"
        ></img>
      </div>
      <motion.div
        variants={animationVariant}
        ref={element}
        animate={controls}
        initial="hidden"
        className="flex flex-col relative z-[0] gap-2 lg:pt-2 xl:pt-12   flex-4 items-center md:items-start"
      >
        <h2 className="text-2xl dark:text-lightGrey ">Who is tortoise For?</h2>
        <h1 className="text-2xl text-center md:text-start dark:text-greyy md:pb-4 font-bold text-black-700 py-1">
          Empowering visionary leaders to promote employee{" "}
          <span className="text-green-600 dark:text-lightGreen">
            {" "}
            well-being
          </span>
        </h1>
        <p className="text-center dark:text-lightGrey md:text-start text-sm xs:text-base md:text-lg">
          tortoise is tailored for forward-thinking leaders who understand the
          importance of employee well-being and satisfaction. Specifically:
        </p>
        <ul className="">
          {overview.map((point) => (
            <li key={point.id} className="flex items-center gap-2">
              <div className="p-1 m-1 bg-white dark:bg-darkGrey rounded-[50%]">
                <FontAwesomeIcon
                  icon={point.icon}
                  className="text-green-500 dark:text-lightGreen"
                />{" "}
              </div>
              <h1 className="md:text-start text-sm xs:text-base md:text-lg dark:text-lightGrey">
                {point.text}{" "}
              </h1>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Overview;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { awardsPoints } from "../Data";
import useScroll from "./useScroll";
import { easeInOut } from "framer-motion";
import { motion } from "framer-motion";

const Awards = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const scrollReveal = {
    hidden: { opacity: 0, y: 50, transition: { duration: 0.5, easeInOut } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, easeInOut } },
  };
  const scrollLeft = {
    hidden: { opacity: 0, x: 50, transition: 0.5, easeInOut },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        easeInOut,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  const scrollRight = {
    hidden: { opacity: 0, x: -50, transition: 0.2 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        easeInOut,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-12 xl:px-16 py-16 ">
      <motion.div
        className="flex items-center justify-center py-2 md:py-4 lg:py-6"
        variants={scrollReveal}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <FontAwesomeIcon
          icon={faShield}
          className="text-green-600 dark:text-lightGreen h-10 px-2 md:px-4 lg:px-6"
        />
        <h2 className="font-bold text-grey-800 dark:text-greyy text-2xl md:text-large-font">
          SAFE AND SECURE
        </h2>
      </motion.div>
      <motion.h1
        className="font-bold pb-2 md:pb-4 lg:pb-6 text-black dark:text-greyy text-2xl xs:text-large-font md:text-larger-font  flex justify-center text-center"
        variants={scrollReveal}
        initial="hidden"
        animate={controls2}
        ref={element2}
      >
        {" "}
        Completely security complaint
      </motion.h1>
      <motion.p
        variants={scrollReveal}
        ref={element1}
        initial="hidden"
        animate={controls1}
        className="text-lg text-center dark:text-lightGrey"
      >
        Fortifying trust: Rigorously compliant with ISO 27001 and SOC 2
        standards to safeguard your valuable data.
      </motion.p>
      <div className="flex gap-8 md:gap-12 lg:gap-16 xl:gap-24 justify-center my-4">
        <motion.img
          variants={scrollRight}
          initial="hidden"
          animate={controls3}
          ref={element3}
          src="https://www.tortoise.pro/images/image-removebg-preview-9.png"
          alt="awardLogo1"
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
        ></motion.img>
        <motion.img
          variants={scrollLeft}
          initial="hidden"
          animate={controls3}
          ref={element3}
          src="https://www.tortoise.pro/images/image-removebg-preview-10.png"
          alt="awardLogo2"
          className="w-[100px] h-[100px]  md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] "
        ></motion.img>
      </div>
      <ul className="fit mx-auto">
        {awardsPoints.map((point) => (
          <li key={point.id} className="flex gap-2 py-1 ">
            <FontAwesomeIcon
              icon={point.icon}
              className="text-green-600 dark:text-lightGreen mt-2"
            />
            <p className=" text-base md:text-xl lg:text-2xl dark:text-lightGrey ">
              {point.text}{" "}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Awards;

import React, { useState } from "react";
import { services } from "../Data";
import CollapseCard from "./CollapseCard";
import useScroll from "./useScroll";
import { easeIn, easeOut } from "framer-motion";
import { motion } from "framer-motion";

const Services = () => {
  const [element, controls] = useScroll();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const rightToLeft = {
    hidden: {
      opacity: 0,
      x: 300,
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
  const animationVariant = isMobile ? none : rightToLeft;
  return (
    <div className="flex flex flex-col-reverse overflow-hidden px-4 pb-8 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 md:flex-row md:justify-between gap-4">
      <motion.div
        variants={animationVariant}
        ref={element}
        animate={controls}
        initial="hidden"
        className="relative flex flex-col gap-2 py-6 flex-4 2xl:mt-8 xl:mt-6 lg:mt-4 "
      >
        <h2 className="text-2xl fit mx-auto md:mx-0  dark:text-lightGrey">
          WHY TORTOISE?
        </h2>
        <h1 className="text-2xl md:pb-4 font-bold dark:text-greyy text-black-700 py-1 text-center md:text-start ">
          Flexi benefits that keep your employees{" "}
          <span className="text-green-600 dark:text-lightGreen">happy</span>{" "}
        </h1>
        <p className="text-center md:text-start dark:text-lightGrey text-sm xs:text-base md:text-lg">
          Your employees can access a world of flexible benefits where they
          achieve more by getting
        </p>
        <ul>
          {services.map((point) => (
            <CollapseCard
              key={point.id}
              icon={point.icon}
              heading={point.text}
              paragraph={point.paragraph}
            />
          ))}
        </ul>
      </motion.div>
      <div className="relative overflw-hidden w-100% flex-3">
        <img
          src="https://www.tortoise.pro/images/Group-42917-p-500.png"
          alt="work-logo"
          className="object-cover overflow-hidden"
        ></img>
      </div>
    </div>
  );
};

export default Services;

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useScroll from "./useScroll";
import { easeIn, motion } from "framer-motion";

const OfferCard = ({ icon, heading, description, points, index }) => {
  const [element, controls] = useScroll();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1010px)").matches
  );

  const reveal = {
    hidden: {
      x: index === 0 ? 250 : -250,
      transition: { duration: 0.5, easeIn },
    },
    visible: { x: 0, transition: { duration: 0.5, easeIn } },
  };
  const none = {
    hidden: { opacity: 0, x: index === 0 ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, easeIn } },
  };
  const animationVariant = isMobile ? none : reveal;
  return (
    <motion.div
      variants={animationVariant}
      ref={element}
      animate={controls}
      initial="hidden"
      className="py-8 max-w-[480px] transition-colors duration-500 px-8 shadow-lg relative  rounded-3xl bg-white dark:bg-darkGrey mt-8"
      style={{ zIndex: index === 0 ? "0" : "1" }}
    >
      <div className="flex gap-4 items-center">
        <div className="p-2 rounded-[50%] bg-blue-100">
          <FontAwesomeIcon icon={icon} className="h-6 w-6" />
        </div>
        <h1 className="font-bold text-2xl dark:text-greyy">{heading}</h1>
      </div>
      <h1 className="font-bold my-2 text-[1.2rem] dark:text-greyy">
        {description}
      </h1>
      <ul>
        {points.map((point, index) => (
          <li key={index} className="flex gap-2">
            <FontAwesomeIcon
              icon={faCheck}
              className="mt-1 h-4 md:h-5 text-green-600 dark:text-lightGreen"
            />
            <p className="text-[0.8rem] text-sm xs:text-base md:text-lg dark:text-lightGrey">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default OfferCard;

import React from "react";
import { easeIn, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScroll from "./useScroll";

const BenefitsCard = ({ data, index }) => {
  const [element, controls] = useScroll();
  const cardAnim = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      transition: {
        duration: 0.7,
        easeIn,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        easeIn,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      key={data.id}
      className="mx-4 px-4 transition-colors duration-500 rounded-3xl py-8 shadow-softGray bg-lightBrown dark:bg-darkGrey flex flex-col gap-4 max-w-[480px]"
      variants={cardAnim}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <div className="flex gap-4">
        <img
          src={data.headerLogo}
          alt="logo"
          className="rounded-[50%] overflow-hidden"
        ></img>{" "}
        <div className="font-bold text-[1.3rem] dark:text-greyy flex items-center ">
          {data.heading}{" "}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="flex dark:text-lightGrey">{data.bodyParagraph}</p>
        <ul className="flex flex-col ">
          {data.paraPoints.map((points, index) => (
            <li key={index} className="flex gap-4 items-center py-1 ">
              <FontAwesomeIcon
                icon={points.icon}
                className="text-green-400 dark:text-lightGreen"
              />
              <p className="dark:text-lightGrey">{points.paragraph}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default BenefitsCard;

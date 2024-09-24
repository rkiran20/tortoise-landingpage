import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const CollapseCard = ({ icon, heading, paragraph }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // const paraAnim = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };

  return (
    <li className="m-4 pb-2 border-b-2 border-black dark:border-greyy  ">
      <div
        className="flex cursor-pointer justify-between items-center  z-10 "
        onClick={handleCollapse}
      >
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-[50%]  bg-yellow-500 dark:bg-gray-600">
            <FontAwesomeIcon icon={icon} className="dark:text-yellow-400" />
          </div>
          <h1 className="font-bold text-lg dark:text-greyy">{heading} </h1>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faAngleDown} className="h-6 dark:text-greyy" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="z-1"
            initial={{ height: 0, y: -25, opacity: 0 }}
            animate={{ height: "auto", y: 0, opacity: 1 }}
            exit={{ height: 0, opacity: 0, y: -25 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="ml-4 pl-6 pt-2 text-sm xs:text-base md:text-lg dark:text-lightGrey">
              {paragraph}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default CollapseCard;

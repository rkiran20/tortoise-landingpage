import React from "react";
import { impactData } from "../Data";
import { easeIn, motion } from "framer-motion";
import useScroll from "./useScroll";

const Impact = () => {
  const [element, controls] = useScroll();
  const titleVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, easeIn } },
  };
  const divAnimation = {
    hidden: { opacity: 0, x: -50, transition: { duration: 0.5 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, easeIn, staggerChildren: 1 },
    },
  };
  return (
    <motion.div
      className="bg-softBeige dark:bg-mainBlack py-8 mt-8 flex flex-col gap-4 md:gap-8  items-center"
      variants={divAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h1 className="text-3xl dark:text-greyy font-bold xs:text-large-font md:text-larger-font">
        Our Impact
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 lg:gap-32 ">
        {impactData.map((data) => {
          return (
            <div key={data.id} className="flex flex-col  items-center pt-6">
              <div className="overflow-hidden">
                <motion.h1
                  className="text-green-700 dark:text-lightGreen fit font-bold text-2xl "
                  variants={titleVariant}
                  initial="hidden"
                  animate={controls}
                  ref={element}
                >
                  {data.number}+
                </motion.h1>
              </div>
              <p className="text-xl dark:text-lightGrey">{data.text} </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Impact;

import React from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import useScroll from "./useScroll";

const GetStarted = () => {
  const [element, controls] = useScroll();
  const titleVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, easeIn } },
  };
  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2, easeOut } },
  };
  const imgVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, easeOut },
    },
  };
  return (
    <motion.div
      className=" dark:bg-mainBlack  transition-colors duration-500 p-4 pt-12 sm:px-6  flex flex-col md:flex-row gap-1 bg-softBeige lg:px-12 xl:px-16 2xl:px-24  "
      initial="hidden"
      animate={controls}
      ref={element}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
          },
        },
        hidden: { transition: { duration: 500, easeOut } },
      }}
    >
      <motion.div className="md:pt-4 flex-4">
        <motion.div className="overflow-hidden">
          <motion.h1
            className="text-2xl xs:text-large-font md:text-larger-font md:pb-4   lg:pt-12 xl:pt-24 font-bold dark:text-greyy text-black-700 py-1 "
            variants={titleVariant}
          >
            Upgrade your team
          </motion.h1>
        </motion.div>
        <motion.div className="overflow-hidden">
          <motion.h1
            className="text-2xl xs:text-large-font md:text-larger-font md:pb-4 xs:my-1 font-bold dark:text-greyy text-black-700 py-1 "
            variants={titleVariant}
          >
            with the tech they want
          </motion.h1>
        </motion.div>
        <motion.div className="overflow-hidden">
          <motion.span
            className="text-2xl dark:text-lightGreen xs:text-large-font md:text-larger-font md:pb-4 xs:my-1 font-bold text-green-700 block py-1"
            variants={titleVariant}
          >
            with flexi benefits
          </motion.span>
        </motion.div>
        <motion.p
          className="text-sm xs:text-base md:text-lg xs:my-1 dark:text-lightGrey "
          // style={{ textIndent: "1rem" }}
          variants={fadeVariant}
        >
          Empower your workforce beyond boundaries. A happy workplace begins
          with empowered choices.
        </motion.p>
        <motion.div className="flex flex-row gap-2  my-4">
          <motion.button
            className="bg-green-700 border-2 border-transparent text-white font-bold text-lg px-6 py-3 rounded-[2rem]"
            variants={fadeVariant}
            whileHover={{
              backgroundColor: "#faf4ea",
              color: "#15803d",
              borderColor: "#15803d",
            }}
            transition={{ duration: 0.3 }}
            // initial="hidden"
            // animate="visible"
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-green-700 border-2 border-transparent text-white font-bold text-lg px-6 py-3 rounded-[2rem]"
            variants={fadeVariant}
            whileHover={{
              backgroundColor: "#faf4ea",
              color: "#15803d",
              borderColor: "#15803d",
            }}
            transition={{ duration: 0.3 }}
            // initial="hidden"
            // animate="visible"
          >
            Listen Demo
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div className="mx-auto min-w-[30vh] overflow-hidden flex-3">
        <motion.img
          src="https://www.tortoise.pro/images/Group-42920-1-p-500.png"
          alt="image"
          className="object-cover overflow-hidden"
          variants={imgVariant}
        ></motion.img>
      </motion.div>
    </motion.div>
  );
};

export default GetStarted;

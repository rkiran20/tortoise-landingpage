import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="flex flex-col mx-4 transition-colors duration-500  px-8 md:flex-row py-4 sm:py-4 md:py-12 mt-12 -mb-32 z-[10] relative rounded-2xl  sm:mx-6 gap-1 xs:gap-4 bg-lightBlue dark:bg-greyyishBlue lg:mx-12 xl:mx-16 2xl:mx-24">
      <div className="md:w-[60%]">
        <h1 className=" dark:text-greyy text-2xl leading-normal fit mx-auto px-3 xs:text-large-font md:text-larger-font md:pb-4   lg:pt-4 xl:pt-8 font-bold text-black-700 py-2 ">
          Schedule{" "}
          <span className="text-green-700 dark:text-lightGreen">a demo</span>{" "}
          with us today to learn more{" "}
        </h1>
        <p className="text-sm py-2 px-3 fit dark:text-lightGrey  xs:text-base md:text-lg xs:my-1">
          Enter your work mail and click on the button to schedule a demo. We
          will get back in touch with you as soon as possible
        </p>
        <div className="flex  flex-col gap-4 items-center py-4 xs:flex-row xs:gap-0">
          <input
            placeholder="Enter your work email ID"
            className="w-[90%] p-4 rounded-2xl xs:rounded-l-full xs:w-[70%]  sm:h-auto dark:text-greyy dark:bg-mainBlack "
          />
          <motion.button
            className=" w-[90%] p-4 rounded-2xl border-2 border-transparent xs:rounded-r-full xs:w-[200px] bg-green-600  text-white font-bold "
            whileHover={{
              backgroundColor: "#faf4ea",
              color: "#15803d",
              borderColor: "#15803d",
            }}
            transition={{ duration: 0.3 }}
          >
            Schedule a demo
          </motion.button>
        </div>
      </div>
      <div className="overflow-hidden flex md:w-[40%] justify-center ">
        <img
          src="https://www.tortoise.pro/images/Group-42918.png"
          alt="schedule-meeting"
          className="object-cover w-[90%] overflow-hidden"
        ></img>
      </div>
    </div>
  );
};

export default ContactUs;

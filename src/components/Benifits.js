import React from "react";
import { benefitsData } from "../Data";
import { easeIn } from "framer-motion";
import { motion } from "framer-motion";
import useScroll from "./useScroll";
import BenefitsCard from "./BenefitsCard";

const Benifits = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const scrollReveal = {
    hidden: { opacity: 0, transition: { duration: 1, easeIn } },
    visible: { opacity: 1, transition: { duration: 1, easeIn } },
  };

  return (
    <div className="mb-4 mt-24 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 ">
      <div className="flex flex-col justify-center items-center py-4 gap-5 ">
        <motion.p
          className="font-bold xs:text-base md:text-lg dark:text-greyy"
          variants={scrollReveal}
          ref={element1}
          initial="hidden"
          animate={controls1}
        >
          DO MORE WITH TORTOISE
        </motion.p>
        <motion.h1
          variants={scrollReveal}
          initial="hidden"
          animate={controls2}
          ref={element2}
          className="font-bold dark:text-greyy text-2xl xs:text-large-font md:text-larger-font text-center"
        >
          All-in-one benefit management{" "}
          <motion.span className="inline-block dark:text-lightGreen text-green-700 text-2xl xs:text-large-font md:text-larger-font">
            service
          </motion.span>
        </motion.h1>
        <motion.p
          variants={scrollReveal}
          initial="hidden"
          animate={controls3}
          ref={element3}
          className="flex text-center dark:text-lightGrey font-bold xs:text-base md:text-lg"
        >
          Unlock access to a range of top-tier benefits that help attract and
          retain talent with all the tools and integrations necessary.
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-4 overflow-hidden">
        {benefitsData.map((data, index) => (
          <BenefitsCard key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Benifits;

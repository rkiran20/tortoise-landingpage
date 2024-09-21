import React from "react";
import { impactData } from "../Data";
import { easeIn, motion } from "framer-motion";

const Impact = () => {
  const titleVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, easeIn } },
  };
  return (
    <div className="bg-softBeige py-8 mt-8 flex flex-col gap-4 md:gap-8  items-center">
      <h1 className="text-3xl font-bold xs:text-large-font md:text-larger-font">
        Our Impact
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 lg:gap-32 ">
        {impactData.map((data) => {
          return (
            <div key={data.id} className="flex flex-col  items-center pt-6">
              <div className="overflow-hidden">
                <motion.h1
                  className="text-green-700 fit font-bold text-2xl"
                  variants={titleVariant}
                  initial="hidden"
                  animate="visible"
                >
                  {data.number}+
                </motion.h1>
              </div>
              <p className="text-xl">{data.text} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Impact;

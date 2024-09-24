import React, { useState } from "react";
import ReviewsCard from "./ReviewsCard";
import { testimonialsData } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const handleLeftBtn = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };
  const handleRightBtn = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="overflow-hidden px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
      <h1 className="font-bold text-2xl dark:text-greyy xs:text-large-font md:text-larger-font text-center pb-4 md:pb-8 lg:pb-12 xl:pb-12 ">
        TESTIMONIALS
      </h1>
      <div className="overflow-hidden">
        <div
          className="flex overflow-hidden mx-1 transition-transform duration-300 ease-in-out "
          style={{
            transform: `translateX(calc(-${index}*358px))`,
            width: `${testimonialsData.length * 100}%`,
          }}
        >
          {testimonialsData.map((data) => (
            <ReviewsCard data={data} key={data.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-between px-8">
        <div
          onClick={handleLeftBtn}
          className="bg-white dark:bg-darkGrey cursor-pointer w-12 h-12 rounded-[50%] flex items-center justify-center"
        >
          {" "}
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="h-8 dark:text-greyy"
          />{" "}
        </div>
        <div
          onClick={handleRightBtn}
          className="bg-white cursor-pointer dark:bg-darkGrey w-12 h-12 rounded-[50%] flex items-center justify-center"
        >
          {" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-8 dark:text-greyy"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

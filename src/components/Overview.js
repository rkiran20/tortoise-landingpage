import React from "react";
import { overview } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Overview = () => {
  return (
    <div className="p-4 my-8 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 flex flex-col md:flex-row gap-4 ">
      <div className="flex-3 ">
        <img
          src="https://www.tortoise.pro/images/Group-42919.png"
          alt="logo"
          className="object-cover overflow-hidden"
        ></img>
      </div>
      <div className="flex flex-col gap-2 lg:pt-2 xl:pt-12   flex-4 items-center md:items-start">
        <h2 className="text-2xl ">Who is tortoise For?</h2>
        <h1 className="text-2xl text-center md:text-start md:pb-4 font-bold text-black-700 py-1">
          Empowering visionary leaders to promote employee{" "}
          <span className="text-green-600"> well-being</span>
        </h1>
        <p className="text-center md:text-start text-sm xs:text-base md:text-lg">
          tortoise is tailored for forward-thinking leaders who understand the
          importance of employee well-being and satisfaction. Specifically:
        </p>
        <ul className="">
          {overview.map((point) => (
            <li key={point.id} className="flex items-center gap-2">
              <div className="p-1 m-1 bg-white rounded-[50%]">
                <FontAwesomeIcon icon={point.icon} className="text-green-500" />{" "}
              </div>
              <h1 className="md:text-start text-sm xs:text-base md:text-lg">
                {point.text}{" "}
              </h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;

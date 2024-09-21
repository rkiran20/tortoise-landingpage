import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { awardsPoints } from "../Data";

const Awards = () => {
  return (
    <div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-12 xl:px-16 py-16">
      <div className="flex items-center justify-center py-2 md:py-4 lg:py-6">
        <FontAwesomeIcon
          icon={faShield}
          className="text-green-600 h-10 px-2 md:px-4 lg:px-6"
        />
        <h2 className="font-bold text-grey-800 text-2xl md:text-large-font">
          SAFE AND SECURE
        </h2>
      </div>
      <h1 className="font-bold pb-2 md:pb-4 lg:pb-6 text-black text-2xl xs:text-large-font md:text-larger-font  flex justify-center text-center">
        {" "}
        Completely security complaint
      </h1>
      <p className="text-lg text-center">
        Fortifying trust: Rigorously compliant with ISO 27001 and SOC 2
        standards to safeguard your valuable data.
      </p>
      <div className="flex gap-8 md:gap-12 lg:gap-16 xl:gap-24 justify-center my-4">
        <img
          src="https://www.tortoise.pro/images/image-removebg-preview-9.png"
          alt="awardLogo1"
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
        ></img>
        <img
          src="https://www.tortoise.pro/images/image-removebg-preview-10.png"
          alt="awardLogo2"
          className="w-[100px] h-[100px]  md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] "
        ></img>
      </div>
      <ul className="fit mx-auto">
        {awardsPoints.map((point) => (
          <li key={point.id} className="flex gap-2 py-1 ">
            <FontAwesomeIcon
              icon={point.icon}
              className="text-green-600 mt-2"
            />
            <p className=" text-base md:text-xl lg:text-2xl ">{point.text} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;

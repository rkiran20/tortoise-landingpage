import React from "react";
import { benefitsData } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Benifits = () => {
  return (
    <div className="mb-4 mt-8 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
      <div className="flex flex-col justify-center items-center py-4 gap-5">
        <p className="font-bold xs:text-base md:text-lg">
          DO MORE WITH TORTOISE
        </p>
        <h1 className="font-bold text-2xl xs:text-large-font md:text-larger-font text-center">
          All-in-one benefit management{" "}
          <span className="inline-block text-green-700 text-2xl xs:text-large-font md:text-larger-font">
            service
          </span>
        </h1>
        <p className="flex text-center font-bold xs:text-base md:text-lg">
          Unlock access to a range of top-tier benefits that help attract and
          retain talent with all the tools and integrations necessary.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {benefitsData.map((data) => (
          <div
            key={data.id}
            className="mx-4 px-4 rounded-3xl py-4 shadow-softGray bg-lightBrown flex flex-col gap-4 max-w-[480px]"
          >
            <div className="flex gap-4">
              <img
                src={data.headerLogo}
                alt="logo"
                className="rounded-[50%] overflow-hidden"
              ></img>{" "}
              <div className="font-bold text-[1.3rem] flex items-center ">
                {data.heading}{" "}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex ">{data.bodyParagraph}</p>
              <ul className="flex flex-col ">
                {data.paraPoints.map((points, index) => (
                  <li key={index} className="flex gap-4 items-center py-1 ">
                    <FontAwesomeIcon
                      icon={points.icon}
                      className="text-green-400"
                    />
                    <p>{points.paragraph}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;

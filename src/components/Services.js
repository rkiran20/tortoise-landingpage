import React from "react";
import { services } from "../Data";
import CollapseCard from "./CollapseCard";

const Services = () => {
  return (
    <div className="flex flex-col px-4 pb-8 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 md:flex-row md:justify-between gap-4">
      <div className="flex flex-col gap-2 py-6 flex-4 2xl:mt-8 xl:mt-6 lg:mt-4 ">
        <h2 className="text-2xl fit mx-auto md:mx-0 ">WHY TORTOISE?</h2>
        <h1 className="text-2xl md:pb-4 font-bold text-black-700 py-1 text-center md:text-start ">
          Flexi benefits that keep your employees{" "}
          <span className="text-green-600">happy</span>{" "}
        </h1>
        <p className="text-center md:text-start text-sm xs:text-base md:text-lg">
          Your employees can access a world of flexible benefits where they
          achieve more by getting
        </p>
        <ul>
          {services.map((point) => (
            <CollapseCard
              key={point.id}
              icon={point.icon}
              heading={point.text}
              paragraph={point.paragraph}
            />
          ))}
        </ul>
      </div>
      <div className="overflw-hidden w-100% flex-3">
        <img
          src="https://www.tortoise.pro/images/Group-42917-p-500.png"
          alt="work-logo"
          className="object-cover overflow-hidden"
        ></img>
      </div>
    </div>
  );
};

export default Services;

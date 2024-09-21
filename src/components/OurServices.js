import React from "react";
import { offerData } from "../Data";
import OfferCard from "./OfferCard";

const OurServices = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-center">WHAT WE OFFER?</h2>
      <div className="max-w-[500px] mx-auto">
        <h1 className="font-bold text-2xl  md:text-3xl text-center">
          Device management harmony tailored solutions for{" "}
          <span className="text-green-500 pr-2">empolyes</span>
          and <span className="text-green-500">empolyes</span>{" "}
        </h1>
      </div>
      <div className="py-4 flex flex-wrap lg:gap-4 xl:gap-12 justify-center">
        {offerData.map((data) => (
          <OfferCard
            key={data.id}
            icon={data.icon}
            heading={data.Header}
            description={data.Description}
            points={data.points}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;

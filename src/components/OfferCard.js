import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OfferCard = ({ icon, heading, description, points }) => {
  return (
    <div className="py-4 max-w-[480px] px-4 shadow-lg">
      <div className="flex gap-4 items-center">
        <div className="p-2 rounded-[50%] bg-blue-100">
          <FontAwesomeIcon icon={icon} className="h-6 w-6" />
        </div>
        <h1 className="font-bold text-2xl">{heading}</h1>
      </div>
      <h1 className="font-bold text-[1.2rem]">{description}</h1>
      <ul>
        {points.map((point) => (
          <li className="flex gap-2">
            <FontAwesomeIcon
              icon={faCheck}
              className="mt-1 h-4 md:h-5 text-green-600"
            />
            <p className="text-[0.8rem] text-sm xs:text-base md:text-lg">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferCard;

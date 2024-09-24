import React from "react";
import { myClientsData } from "../Data";

const Clients = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-4  px-4 py-4 sm:py-4 md:py-12 my-12 rounded-3xl  sm:mx-6 gap-1 xs:gap-4 bg-green-700 lg:mx-12 xl:mx-16 2xl:mx-24">
      <div>
        <h1 className="text-white font-bold px-8 text-2xl dark:text-greyy ">
          Our Clients
        </h1>
      </div>
      <div className="flex justify-between gap-4 xs:gap-16  sm:gap-24 md:gap-8 lg:gap-16 lg:px-6 xl:px-16 ">
        {myClientsData.map((image) => (
          <div key={image.id} className="items-center py-4">
            <img
              src={image.imageUrl}
              alt="clients-photo"
              className="w-[70px]  sm:w-[70px] sm:h-[30px] lg:w-[120px] md:w-[100px]   "
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

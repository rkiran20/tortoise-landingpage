import React from "react";

const ReviewsCard = ({ data }) => {
  return (
    <div className="m-4 mt-8 p-4 bg-white dark:bg-darkGrey transition-colors duration-500 rounded-3xl min-w-[300px] max-w-[400px]">
      <img
        src={data.imageUrl}
        alt="client logo"
        className="rounded-[50%] overflow-hidden w-[50px] mx-auto -mt-10  "
      ></img>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-1xl py-2 dark:text-greyy ">
          {data.heading}{" "}
        </h1>
        <p className="text-center dark:text-lightGrey">{data.paragraph} </p>
        <h2 className="font-bold text-lg dark:text-greyy">{data.name} </h2>
        <p className="text-lg dark:text-lightGrey">{data.position} </p>
      </div>
    </div>
  );
};

export default ReviewsCard;

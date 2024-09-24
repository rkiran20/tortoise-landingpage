import React from "react";

const Footer = () => {
  return (
    <div className="h-[40vh] bg-green-700 dark:bg-lightGreen relative">
      <p className="absolute bottom-2 left:[30%] sm:left-[40%] p-2  ">
        &copy; 2024{" "}
        <span className="px-[2px] text-yellow-600 font-bold dark:text-brown-800 ">
          tortoise
        </span>
        . All rights reserved
      </p>
    </div>
  );
};

export default Footer;

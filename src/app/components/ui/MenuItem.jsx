import React from "react";

const MenuItem = ({ menuItemCustomClass = "" }) => {
  const baseClass =
    "block w-8 h-0.5 bg-gray-800 dark:bg-white dark:text-black bg-black text-white duration-300 ease-in-out";
  return <span className={`${baseClass} ${menuItemCustomClass}`}></span>;
};

export default MenuItem;

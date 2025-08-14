import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProfessionalCard = ({ link, path, projectName }) => {
  return (
    <Link
      href={link}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
      rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 md:hover:scale-120 w-full 
      max-w-sm mx-5 hover:cursor-pointer md:flex-shrink-1 md:w-1/3 md:max-w-xs"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-2xl font-sans text-black dark:text-white">
          {projectName}
        </h1>

        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={path}
            width={300}
            height={300}
            alt={projectName}
            className="rounded-lg transition-transform duration-300 w-auto h-auto border-gray-300 dark:border-black border-1"
          />
        </div>

        {/* <Link
          href={link}
          className="w-2/4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-4xl transition-colors duration-200 inline-block text-center text-md"
        >
          Visit {projectName}
        </Link> */}
      </div>
    </Link>
  );
};

export default ProfessionalCard;

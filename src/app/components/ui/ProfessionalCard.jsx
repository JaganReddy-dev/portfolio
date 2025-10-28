import Image from "next/image";
import Link from "next/link";

const ProfessionalCard = ({ link, src, projectName }) => {
  return (
    <Link
      href={link}
      trackify-button={projectName}
      trackify-navigate={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
      rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 md:hover:scale-115 w-full 
      max-w-sm mx-5 hover:cursor-pointer md:flex-shrink-1 md:w-1/3 md:max-w-xs"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-2xl font-sans text-black dark:text-white">
          {projectName}
        </h1>

        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={src}
            width={300}
            height={300}
            alt={projectName}
            className="rounded-lg transition-transform duration-300 w-auto h-auto border-gray-300 dark:border-black border-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProfessionalCard;

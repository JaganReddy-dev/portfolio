import Image from "next/image"
import Link from "next/link"

const ConnectCard = ({ link, src, socialName, description }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      trackify-button={socialName}
      trackify-navigate={link}
      className="
        group relative w-full max-w-sm mx-4
        rounded-2xl border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={src}
          alt={socialName}
          fill
          sizes="100%"
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {socialName}
        </h3>

        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
        )}

        <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
          Visit {socialName}
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  )
}

export default ConnectCard

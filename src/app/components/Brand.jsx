import Link from "next/link"

const Brand = () => {
  return (
    <Link
      href="/"
      className="fixed top-4 left-4 md:top-6 md:left-6 z-40 inline-flex items-center rounded-full border border-gray-200 bg-white/70 text-gray-900 dark:border-white/10 dark:bg-black/40 dark:text-white px-4 py-2 text-sm font-semibold backdrop-blur-md transition-colors hover:border-gray-300 dark:hover:border-white/20"
    >
      Jagan Reddy
    </Link>
  )
}

export default Brand

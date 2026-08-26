import Link from "next/link"

const Brand = () => {
  return (
    <Link
      href="/"
      className="fixed top-4 left-4 md:top-6 md:left-6 z-40 inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white/20"
    >
      Jagan Reddy
    </Link>
  )
}

export default Brand

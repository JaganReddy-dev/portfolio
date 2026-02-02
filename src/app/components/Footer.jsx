const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="max-w-full mx-auto px-6 py-2">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white tracking-wide">
              Jagan Reddy
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Building thoughtful web experiences.
            </p>
          </div>

          {/* Center */}
          <div className="text-center text-sm text-gray-400">
            Made with{" "}
            <span className="text-indigo-400 font-medium">Next.js</span>,{" "}
            <span className="text-indigo-400 font-medium">React</span> &{" "}
            <span className="text-indigo-400 font-medium">Tailwind CSS</span>
          </div>

          {/* Right */}
          <div className="text-center md:text-right text-sm text-gray-500">
            © {currentYear} · All rights reserved
          </div>
        </div>
      </div>

      {/* Subtle glow line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
    </footer>
  )
}

export default Footer

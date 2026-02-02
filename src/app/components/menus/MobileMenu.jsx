const MobileMenu = ({ links, isMenuOpen, onLinkClick }) => {
  return (
    <section
      className={`
        fixed inset-0 z-20 bg-black/80 backdrop-blur-md
        transition-opacity duration-300
        ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <ul className="flex flex-col items-center justify-center h-full gap-10">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => onLinkClick(e, link.href)}
              className="
                text-2xl font-semibold text-white
                hover:text-blue-400 transition-colors
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MobileMenu

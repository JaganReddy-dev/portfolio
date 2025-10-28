const MobileMenu = ({ links, isMenuOpen, isScrolled, onLinkClick }) => {
  return (
    <section
      className={`fixed top-12 border-collapse border-t-0 right-0 w-full shadow-2xl md:w-1/4 h-full z-30 backdrop-filter backdrop-blur-sm bg-white text-black dark:bg-white/60 dark:text-black transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } ${
        isMenuOpen && isScrolled ? "md:translate-x-0" : "md:translate-x-full"
      }`}
      aria-label="Menu Options"
    >
      <ul className={`flex flex-col items-center justify-center h-full gap-8 `}>
        {links.map((link) => (
          <li key={link.href} trackify-button={link.label}>
            <a
              href={link.href}
              onClick={(e) => onLinkClick(e, link.href)}
              className="text-2xl font-serif hover:text-cyan-950 hover:text-3xl duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MobileMenu;

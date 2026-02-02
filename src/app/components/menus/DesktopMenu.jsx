const DesktopMenu = ({ links, onLinkClick }) => {
  return (
    <ul className="hidden md:flex gap-8 text-sm font-medium">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={(e) => onLinkClick(e, link.href)}
            className="
              relative text-gray-300 hover:text-white
              transition-colors duration-200
              after:absolute after:left-0 after:-bottom-1
              after:h-px after:w-0 after:bg-blue-400
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default DesktopMenu

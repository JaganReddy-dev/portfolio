const DesktopMenu = ({ links, textColorClass, onLinkClick }) => {
  return (
    <ul className="hidden md:flex gap-8">
      {links.map((link) => (
        <li key={link.href} trackify-button={link.label}>
          <a
            href={link.href}
            onClick={(e) => onLinkClick(e, link.href)}
            className={`hover:text-blue-400 cursor-pointer transition-colors duration-200 ${
              textColorClass ?? ""
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;

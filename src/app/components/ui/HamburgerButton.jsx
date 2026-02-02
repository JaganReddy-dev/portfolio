import MenuItem from "./MenuItem"

const HamburgerButton = ({ isMenuOpen, onMenuClick }) => {
  return (
    <button
      onClick={onMenuClick}
      aria-label="Toggle Menu"
      className="relative z-30 flex flex-col gap-1.5"
    >
      <MenuItem className={isMenuOpen ? "rotate-45 translate-y-2" : ""} />
      <MenuItem className={isMenuOpen ? "opacity-0" : ""} />
      <MenuItem className={isMenuOpen ? "-rotate-45 -translate-y-2" : ""} />
    </button>
  )
}

export default HamburgerButton

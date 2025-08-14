import React from "react";
import MenuItem from "./MenuItem";

const HamburgerButton = ({ isMenuOpen, onMenuClick }) => {
  return (
    <button
      onClick={onMenuClick}
      aria-label="Toggle-Menu"
      className="flex flex-col gap-2 z-30 hover:cursor-pointer"
    >
      <MenuItem
        menuItemCustomClass={`h-0.5 w-8 transition-transform 
        ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}
        `}
      />
      <MenuItem
        menuItemCustomClass={`h-0.5 w-8 transition-opacity
      ${isMenuOpen ? "opacity-0" : "opacity-100"}
      `}
      />
      <MenuItem
        menuItemCustomClass={`h-0.5 w-8 transition-transform
      ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}
      `}
      />
    </button>
  );
};

export default HamburgerButton;

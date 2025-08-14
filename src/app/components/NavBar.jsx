"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DesktopMenu from "./menus/DesktopMenu";
import MobileMenu from "./menus/MobileMenu";
import HamburgerButton from "./ui/HamburgerButton";

const navLinks = [
  { href: "#socials", label: "Socials" },
  { href: "#contact", label: "Contact Me" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const headerClass = "sticky top-0 w-full z-30 transition-all duration-300 ";

  return (
    <>
      <header className={headerClass}>
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between p-4 h-12 backdrop-filter backdrop-blur-sm bg-white shadow-2xl dark:bg-white/80 border-white-0 dark:border-b-0"
        >
          <Link href="/" className={`z-30 text-2xl font-bold text-black`}>
            Jagan Reddy
          </Link>
          <div className="flex items-center">
            <section className={isScrolled ? "hidden" : "block"}>
              <DesktopMenu
                links={navLinks}
                textColorClass={"text-black dark:text-black"}
                onLinkClick={handleSmoothScroll}
              />
            </section>
            <section className={`block ${isScrolled ? "block" : "md:hidden"}`}>
              <HamburgerButton
                onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
                isMenuOpen={isMenuOpen}
              />
            </section>
          </div>
        </nav>
      </header>
      <MobileMenu
        links={navLinks}
        isMenuOpen={isMenuOpen}
        isScrolled={isScrolled}
        onLinkClick={handleSmoothScroll}
      />
    </>
  );
};

export default NavBar;

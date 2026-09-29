"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import DesktopMenu from "./menus/DsektopMenu"
import MobileMenu from "./menus/MobileMenu"
import HamburgerButton from "./HamburgerButton"

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#articles", label: "Articles" },
  { href: "#projects", label: "Projects" },
  { href: "#connect", label: "Connect" },
  { href: "#contact", label: "Contact" },
]

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const element = document.getElementById(href.replace("#", ""))
    if (!element) return

    const offset = 80
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    })

    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`
          fixed top-0 w-full z-30 transition-all
          ${isScrolled ? "bg-white/80 dark:bg-black/70 backdrop-blur-md shadow-sm dark:shadow-none" : "bg-transparent"}
        `}
      >
        <nav className="max-w-full mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-gray-900 dark:text-white">
            Jagan Reddy
          </Link>

          <div className="flex items-center gap-6">
            {!isScrolled && (
              <DesktopMenu links={navLinks} onLinkClick={handleSmoothScroll} />
            )}
            {/* Phones always get the hamburger (the inline links are
                hidden below md); tablets only once scrolled. */}
            <div className={isScrolled ? "flex" : "flex md:hidden"}>
              <HamburgerButton
                isMenuOpen={isMenuOpen}
                onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        links={navLinks}
        isMenuOpen={isMenuOpen}
        onLinkClick={handleSmoothScroll}
      />
    </>
  )
}

export default NavBar

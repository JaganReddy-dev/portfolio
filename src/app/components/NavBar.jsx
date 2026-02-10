"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import DesktopMenu from "./menus/DesktopMenu"
import MobileMenu from "./menus/MobileMenu"
import HamburgerButton from "./ui/HamburgerButton"

const navLinks = [
  { href: "#experience", label: "Experience" },
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
          ${isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"}
        `}
      >
        <nav className="max-w-full mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-white">
            Jagan Reddy
          </Link>

          <div className="flex items-center gap-6">
            {/* Show DesktopMenu only when not scrolled */}
            {!isScrolled && (
              <DesktopMenu links={navLinks} onLinkClick={handleSmoothScroll} />
            )}

            {/* Show HamburgerButton only when scrolled */}
            {isScrolled && (
              <HamburgerButton
                isMenuOpen={isMenuOpen}
                onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
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

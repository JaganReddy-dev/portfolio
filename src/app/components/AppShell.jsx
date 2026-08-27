"use client"

import Brand from "./Brand"
import LineSidebar from "./ui/reactbits/LineSidebar"
import useActiveSection from "../hooks/useActiveSection"
import NavBar from "./NavBar"

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "experience", label: "Experience" },
  { id: "articles", label: "Articles" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
  { id: "contact", label: "Contact" },
]

const SECTION_IDS = SECTIONS.map((s) => s.id)
const SECTION_LABELS = SECTIONS.map((s) => s.label)

const AppShell = ({ children, footer }) => {
  const { activeIndex, scrollToSection } = useActiveSection(SECTION_IDS)

  return (
    <>
      <div className="lg:hidden">
        <NavBar />
      </div>
      <div className="hidden lg:block">
        <Brand />
      </div>
      <div className="flex">
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-0 flex h-screen items-center pl-10">
            <LineSidebar
              items={SECTION_LABELS}
              activeIndex={activeIndex}
              onItemClick={scrollToSection}
              accentColor="#818cf8"
              textColor="#9ca3af"
              markerColor="#4b5563"
              fontSize={0.95}
              markerLength={32}
              itemGap={18}
            />
          </div>
        </aside>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
      {footer}
    </>
  )
}

export default AppShell

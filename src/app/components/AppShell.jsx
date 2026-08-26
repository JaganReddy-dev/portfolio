"use client"

import Brand from "./Brand"
import LineSidebar from "./ui/reactbits/LineSidebar"
import useActiveSection from "../hooks/useActiveSection"

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

const AppShell = ({ children }) => {
  const { activeIndex, scrollToSection } = useActiveSection(SECTION_IDS)

  return (
    <>
      <Brand />

      {/*
        Root cause of the old "section list overlaps content" bug: the
        sidebar was `position: fixed` with no matching reserved space, so it
        floated on top of whatever happened to be underneath at that
        viewport width. Here the sidebar lives in a real flex column
        (`aside`) that the main content column can never render under —
        no overlap is possible regardless of viewport size, without resorting
        to opacity tricks.
      */}
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

        <main className="flex-1 min-w-0">
          {/* Smaller screens get a sticky horizontal strip instead of the
              hover-driven vertical sidebar — same active-section data, an
              interaction model that actually works on touch. */}
          <nav
            aria-label="Section navigation"
            className="lg:hidden sticky top-0 z-20 flex gap-2 overflow-x-auto border-b border-white/5 bg-black/60 px-4 py-3 backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {SECTIONS.map((section, index) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(index)}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeIndex === index
                    ? "bg-indigo-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          {children}
        </main>
      </div>
    </>
  )
}

export default AppShell

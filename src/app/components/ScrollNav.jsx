"use client"

import LineSidebar from "./ui/reactbits/LineSidebar"

const sections = [
  { label: "Hero", id: "hero" },
  { label: "Experience", id: "experience" },
  { label: "Articles", id: "articles" },
  { label: "Projects", id: "projects" },
  { label: "Connect", id: "connect" },
  { label: "Contact", id: "contact" },
]

const ScrollNav = () => {
  const handleItemClick = (index) => {
    const target = document.getElementById(sections[index].id)
    if (!target) return
    const offset = 80
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth",
    })
  }

  return (
    <div className="scroll-nav" aria-label="Section navigation">
      <LineSidebar
        items={sections.map((s) => s.label)}
        accentColor="#818cf8"
        textColor="#9ca3af"
        markerColor="#4b5563"
        fontSize={0.95}
        markerLength={36}
        itemGap={18}
        onItemClick={handleItemClick}
      />
    </div>
  )
}

export default ScrollNav

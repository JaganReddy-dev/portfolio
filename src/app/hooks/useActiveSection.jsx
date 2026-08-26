"use client"

import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Tracks which section is "current" as the user scrolls, using a single
 * IntersectionObserver rather than a scroll listener. Only a thin band near
 * the vertical center of the viewport counts as "visible" (via rootMargin),
 * so at most one section is ever intersecting at a time — this is what
 * prevents the active index from flickering between neighbours at section
 * boundaries.
 */
const useActiveSection = (ids) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const idsRef = useRef(ids)
  idsRef.current = ids

  useEffect(() => {
    const elements = idsRef.current
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (!visible.length) return
        // If more than one section grazes the band, prefer whichever is
        // closest to the top of the viewport (the one the user is reading).
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        const idx = idsRef.current.indexOf(topMost.target.id)
        if (idx !== -1) setActiveIndex(idx)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.length])

  const scrollToSection = useCallback((index) => {
    const id = idsRef.current[index]
    const el = id && document.getElementById(id)
    if (!el) return
    const offset = 80
    window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" })
  }, [])

  return { activeIndex, scrollToSection }
}

export default useActiveSection

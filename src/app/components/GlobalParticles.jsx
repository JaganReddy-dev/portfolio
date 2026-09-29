"use client"

import { useEffect, useState } from "react"
import Particles from "./ui/reactbits/Particles"
import usePrefersDark from "../hooks/usePrefersDark"

const GlobalParticles = () => {
  const [reducedMotion, setReducedMotion] = useState(false)
  const prefersDark = usePrefersDark()

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = (e) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <div
      aria-hidden="true"
      // Bumped from opacity-60 -> opacity-85 (and the particle props below)
      // so the effect reads as a deliberate atmospheric layer across every
      // section, not just something faintly noticeable behind the Hero.
      className="fixed inset-0 -z-10 opacity-85"
      // pointer-events-none is the load-bearing fix here: this single canvas
      // sits behind the entire scrolling page, so it must never intercept
      // clicks, hover, drag, or text selection meant for the content above it.
      style={{ pointerEvents: "none" }}
    >
      <Particles
        // Particles only reads its colors on mount, so remount on theme change
        key={prefersDark ? "dark" : "light"}
        particleCount={reducedMotion ? 0 : 190}
        particleSpread={15}
        speed={0.1}
        particleColors={
          prefersDark
            ? ["#6366f1", "#818cf8", "#ffffff"]
            : ["#4f46e5", "#6366f1", "#94a3b8"]
        }
        // Hover-reactivity listens on window (not this container) so the
        // drift effect still works even though the container itself has
        // pointer-events: none.
        moveParticlesOnHover={!reducedMotion}
        listenOnWindow
        particleHoverFactor={1.2}
        alphaParticles
        particleBaseSize={115}
        sizeRandomness={1.1}
        disableRotation={reducedMotion}
      />
    </div>
  )
}

export default GlobalParticles

"use client"

import { useEffect, useState } from "react"
import Particles from "./ui/reactbits/Particles"

const GlobalParticles = () => {
  const [reducedMotion, setReducedMotion] = useState(false)

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
        particleCount={reducedMotion ? 0 : 190}
        particleSpread={15}
        speed={0.1}
        particleColors={["#6366f1", "#818cf8", "#ffffff"]}
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

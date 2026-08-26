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
      className="fixed inset-0 -z-10 opacity-60"
      // pointer-events-none is the load-bearing fix here: this single canvas
      // sits behind the entire scrolling page, so it must never intercept
      // clicks, hover, drag, or text selection meant for the content above it.
      style={{ pointerEvents: "none" }}
    >
      <Particles
        particleCount={reducedMotion ? 0 : 130}
        particleSpread={13}
        speed={0.07}
        particleColors={["#6366f1", "#818cf8", "#ffffff"]}
        // Hover-reactivity listens on window (not this container) so the
        // drift effect still works even though the container itself has
        // pointer-events: none.
        moveParticlesOnHover={!reducedMotion}
        listenOnWindow
        particleHoverFactor={1.1}
        alphaParticles
        particleBaseSize={85}
        sizeRandomness={1}
        disableRotation={reducedMotion}
      />
    </div>
  )
}

export default GlobalParticles

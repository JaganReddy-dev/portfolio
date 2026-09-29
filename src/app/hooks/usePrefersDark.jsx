"use client"

import { useEffect, useState } from "react"

// Canvas/WebGL components (particles, ParticleText, sidebar) take colors as
// props, so they can't use Tailwind's `dark:` variants. This tracks the OS
// color scheme so they can pick a palette. Defaults to dark to match SSR.
const usePrefersDark = () => {
  const [prefersDark, setPrefersDark] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    setPrefersDark(mq.matches)
    const onChange = (e) => setPrefersDark(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return prefersDark
}

export default usePrefersDark

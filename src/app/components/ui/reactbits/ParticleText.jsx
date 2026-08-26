"use client"
import { useEffect, useRef } from "react"
const hexToRgb = (hex) => {
  const clean = hex.replace("#", "").trim()
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

const mixRgb = (from, to, amount) => ({
  r: Math.round(from.r + (to.r - from.r) * amount),
  g: Math.round(from.g + (to.g - from.g) * amount),
  b: Math.round(from.b + (to.b - from.b) * amount),
})

const rgbToCss = (rgb) => `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

const resolveFontSize = (value, container, fontWeight, fontFamily) => {
  if (typeof value === "number") return value

  const probe = document.createElement("span")
  probe.textContent = "M"
  probe.style.position = "absolute"
  probe.style.visibility = "hidden"
  probe.style.pointerEvents = "none"
  probe.style.fontSize = value
  probe.style.fontWeight = String(fontWeight)
  probe.style.fontFamily = fontFamily
  container.appendChild(probe)
  const size = parseFloat(window.getComputedStyle(probe).fontSize) || 96
  probe.remove()
  return size
}

const waitForFonts = async (font) => {
  if (!("fonts" in document)) return

  try {
    await document.fonts.load(font)
  } catch {}

  await document.fonts.ready
}

// Greedy word-wrap for a single paragraph (no manual breaks inside it):
// breaks into lines that each fit within maxWidth at the given font. Long
// single words that still don't fit are kept as their own line (no hard
// hyphenation).
const wrapParagraph = (ctx, text, maxWidth) => {
  const words = String(text || " ")
    .split(/\s+/)
    .filter(Boolean)
  if (words.length === 0) return [" "]

  const lines = []
  let current = ""

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word
    if (current && ctx.measureText(candidate).width > maxWidth) {
      lines.push(current)
      current = word
    } else {
      current = candidate
    }
  }
  if (current) lines.push(current)
  return lines
}

// Splits on any manual "\n" the caller put in `text` first (so the caller
// can force an exact line count / break point), then greedy-wraps each
// resulting paragraph independently to fit maxWidth.
const wrapText = (ctx, font, text, maxWidth) => {
  ctx.font = font
  const paragraphs = String(text || " ").split("\n")
  return paragraphs.flatMap((paragraph) =>
    wrapParagraph(ctx, paragraph, maxWidth),
  )
}

// Finds the largest font size (within [minSize, maxSize]) whose wrapped
// text block fits within maxWidth x maxHeight. Width is respected exactly
// via wrapping; height is respected by bisecting on font size, since more
// lines appear as size grows.
const fitFontSize = ({
  ctx,
  text,
  fontWeight,
  fontFamily,
  maxWidth,
  maxHeight,
  minSize,
  maxSize,
  lineHeightRatio,
}) => {
  let lo = minSize
  let hi = maxSize
  let best = {
    size: minSize,
    lines: wrapText(
      ctx,
      `${fontWeight} ${minSize}px ${fontFamily}`,
      text,
      maxWidth,
    ),
  }

  for (let i = 0; i < 24; i += 1) {
    const mid = (lo + hi) / 2
    const font = `${fontWeight} ${mid}px ${fontFamily}`
    const lines = wrapText(ctx, font, text, maxWidth)
    const blockHeight = lines.length * mid * lineHeightRatio

    if (blockHeight <= maxHeight) {
      best = { size: mid, lines }
      lo = mid
    } else {
      hi = mid
    }
  }

  return best
}

const ParticleText = ({
  text = "React Bits",
  particleSize = 2,
  density = 3,
  color = "#ffffff",
  highlightColor = "#8b5cf6",
  scatter = 180,
  gatherDuration = 1600,
  stagger = 420,
  pointerRepel = 40,
  repelRadius = 120,
  idleDrift = 0.7,
  trigger = "mount",
  fontSize = "clamp(2rem, 5vw, 4rem)",
  fontWeight = 800,
  fontFamily = "inherit",
  glow = true,
  fillHeight = 0.9,
  fillWidth = 0.98,
  lineHeightRatio = 1.15,
  minFontSize = 18,
  maxFontSize = 900,
  className = "",
  style,
}) => {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return undefined

    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return undefined

    const ctx = canvas.getContext("2d")
    if (!ctx) return undefined

    let particles = []
    let animationFrame = null
    let resizeFrame = null
    let buildId = 0
    let gathering = false
    let gatherStart = 0
    let reducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    let width = 0
    let height = 0
    let dpr = 1

    const pointer = {
      active: false,
      x: 0,
      y: 0,
      smoothX: 0,
      smoothY: 0,
    }

    const startGather = (fromScatter = true) => {
      if (!particles.length) return

      const now = performance.now()
      const spread = reducedMotion ? 0 : scatter

      particles.forEach((particle) => {
        if (fromScatter) {
          const angle = particle.seed * Math.PI * 2
          const distance = spread * (0.35 + particle.depth * 0.75)
          particle.x =
            particle.targetX +
            Math.cos(angle) * distance +
            (particle.depth - 0.5) * spread * 0.55
          particle.y =
            particle.targetY +
            Math.sin(angle) * distance +
            (particle.seed - 0.5) * spread * 0.55
        }

        particle.startX = particle.x
        particle.startY = particle.y
        particle.delay = reducedMotion ? 0 : particle.seed * stagger
      })

      gatherStart = now
      gathering = true
    }

    const drawParticle = (particle) => {
      const size = particle.size
      ctx.fillStyle = particle.color

      if (size <= 2.1) {
        ctx.fillRect(particle.x - size / 2, particle.y - size / 2, size, size)
        return
      }

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, size / 2, 0, Math.PI * 2)
      ctx.fill()
    }

    const render = (now) => {
      ctx.clearRect(0, 0, width, height)

      if (glow && !reducedMotion) {
        ctx.shadowBlur = particleSize * 3
        ctx.shadowColor = highlightColor
      } else {
        ctx.shadowBlur = 0
      }

      pointer.smoothX += (pointer.x - pointer.smoothX) * 0.18
      pointer.smoothY += (pointer.y - pointer.smoothY) * 0.18

      let complete = true

      particles.forEach((particle) => {
        let baseX = particle.targetX
        let baseY = particle.targetY
        let progress = 1

        if (gathering) {
          const local =
            (now - gatherStart - particle.delay) /
            Math.max(1, reducedMotion ? 1 : gatherDuration)
          progress = clamp(local, 0, 1)
          const eased = easeOutCubic(progress)
          baseX = particle.startX + (particle.targetX - particle.startX) * eased
          baseY = particle.startY + (particle.targetY - particle.startY) * eased
          if (progress < 1) complete = false
        } else if (!reducedMotion && idleDrift > 0) {
          const driftTime = now * 0.001
          baseX +=
            Math.sin(driftTime * 0.9 + particle.seed * 10) *
            idleDrift *
            particle.depth
          baseY +=
            Math.cos(driftTime * 0.75 + particle.depth * 10) *
            idleDrift *
            particle.depth
        }

        if (
          pointer.active &&
          !reducedMotion &&
          pointerRepel > 0 &&
          repelRadius > 0
        ) {
          const dx = baseX - pointer.smoothX
          const dy = baseY - pointer.smoothY
          const distance = Math.hypot(dx, dy)
          if (distance > 0 && distance < repelRadius) {
            const force = Math.pow(1 - distance / repelRadius, 2) * pointerRepel
            baseX += (dx / distance) * force
            baseY += (dy / distance) * force
          }
        }

        const follow = reducedMotion ? 1 : 0.22
        particle.x += (baseX - particle.x) * follow
        particle.y += (baseY - particle.y) * follow

        ctx.globalAlpha = clamp(0.35 + progress * 0.65, 0, 1)
        drawParticle(particle)
      })

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      if (gathering && complete) {
        gathering = false
      }

      animationFrame = window.requestAnimationFrame(render)
    }

    const ensureRenderLoop = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(render)
      }
    }

    const sampleText = async () => {
      const currentBuild = ++buildId
      const rect = container.getBoundingClientRect()
      width = Math.floor(rect.width)
      height = Math.floor(rect.height)

      if (width <= 0 || height <= 0) return

      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const computed = window.getComputedStyle(container)
      const resolvedFamily =
        fontFamily === "inherit"
          ? computed.fontFamily || "sans-serif"
          : fontFamily

      // fontSize prop now only seeds the starting guess / upper bound;
      // the real size is fit against the container's width AND height.
      const seedSize = resolveFontSize(
        fontSize,
        container,
        fontWeight,
        resolvedFamily,
      )
      const maxTextWidth = Math.max(20, width * fillWidth)
      const maxTextHeight = Math.max(20, height * fillHeight)
      const upperBound = clamp(
        Math.max(seedSize * 2.2, maxTextHeight * 1.4),
        minFontSize + 1,
        maxFontSize,
      )

      const offscreen = document.createElement("canvas")
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true })
      if (!offCtx) return

      const content = String(text || " ")

      // Preload a representative font weight before measuring, so wrap
      // decisions use correct glyph metrics.
      await waitForFonts(`${fontWeight} ${seedSize}px ${resolvedFamily}`)
      if (currentBuild !== buildId) return

      const fit = fitFontSize({
        ctx: offCtx,
        text: content,
        fontWeight,
        fontFamily: resolvedFamily,
        maxWidth: maxTextWidth,
        maxHeight: maxTextHeight,
        minSize: minFontSize,
        maxSize: upperBound,
        lineHeightRatio,
      })

      let resolvedSize = fit.size
      let lines = fit.lines
      let font = `${fontWeight} ${resolvedSize}px ${resolvedFamily}`
      await waitForFonts(font)
      if (currentBuild !== buildId) return
      offCtx.font = font

      const lineHeight = resolvedSize * lineHeightRatio
      let maxLineWidth = 0
      const lineMetrics = lines.map((line) => {
        const m = offCtx.measureText(line)
        maxLineWidth = Math.max(maxLineWidth, m.width)
        return m
      })

      const ascent = Math.ceil(resolvedSize * 0.78)
      const descent = Math.ceil(resolvedSize * 0.22)
      const padding = Math.max(8, Math.ceil(resolvedSize * 0.08))
      const blockWidth = Math.max(1, Math.ceil(maxLineWidth))
      const blockHeight = Math.max(1, Math.ceil(lines.length * lineHeight))

      offscreen.width = blockWidth + padding * 2
      offscreen.height = blockHeight + padding * 2
      offCtx.clearRect(0, 0, offscreen.width, offscreen.height)
      offCtx.font = font
      offCtx.textAlign = "center"
      offCtx.textBaseline = "alphabetic"
      offCtx.fillStyle = "#ffffff"

      lines.forEach((line, index) => {
        const baselineY =
          padding +
          index * lineHeight +
          (lineHeight - lineHeight) / 2 +
          ascent +
          (lineHeight - (ascent + descent)) / 2
        offCtx.fillText(line, offscreen.width / 2, baselineY)
      })

      const imageData = offCtx.getImageData(
        0,
        0,
        offscreen.width,
        offscreen.height,
      )
      const targets = []
      const step = Math.max(2, Math.floor(density))

      for (let y = 0; y < offscreen.height; y += step) {
        for (let x = 0; x < offscreen.width; x += step) {
          const alpha = imageData.data[(y * offscreen.width + x) * 4 + 3]
          if (alpha > 40) {
            targets.push({
              x: width / 2 - offscreen.width / 2 + x,
              y: height / 2 - offscreen.height / 2 + y,
              alpha: alpha / 255,
            })
          }
        }
      }

      const maxParticles = Math.max(
        900,
        Math.min(5200, Math.floor((width * height) / 90)),
      )
      const stride = Math.max(1, Math.ceil(targets.length / maxParticles))
      const baseRgb = hexToRgb(color)
      const highlightRgb = hexToRgb(highlightColor)
      const selected = targets.filter((_, index) => index % stride === 0)

      particles = selected.map((target, index) => {
        const seed = ((index * 9301 + 49297) % 233280) / 233280
        const depth = 0.45 + (((index * 233 + 97) % 1000) / 1000) * 0.9
        const blend =
          baseRgb && highlightRgb
            ? clamp(target.x / Math.max(1, width) + (seed - 0.5) * 0.35, 0, 1)
            : 0
        const particleColor =
          baseRgb && highlightRgb
            ? rgbToCss(mixRgb(baseRgb, highlightRgb, blend))
            : color
        const angle = seed * Math.PI * 2
        const distance = (reducedMotion ? 0 : scatter) * (0.35 + depth * 0.75)
        const startX =
          target.x + Math.cos(angle) * distance + (seed - 0.5) * scatter * 0.45
        const startY =
          target.y + Math.sin(angle) * distance + (depth - 0.9) * scatter * 0.45

        return {
          x: reducedMotion ? target.x : startX,
          y: reducedMotion ? target.y : startY,
          startX,
          startY,
          targetX: target.x,
          targetY: target.y,
          size: Math.max(0.6, particleSize * (0.75 + target.alpha * 0.45)),
          color: particleColor,
          seed,
          depth,
          delay: seed * stagger,
        }
      })

      pointer.x = width / 2
      pointer.y = height / 2
      pointer.smoothX = pointer.x
      pointer.smoothY = pointer.y

      if (reducedMotion) {
        particles.forEach((particle) => {
          particle.x = particle.targetX
          particle.y = particle.targetY
          particle.startX = particle.targetX
          particle.startY = particle.targetY
          particle.delay = 0
        })
        gathering = false
      } else {
        startGather(false)
      }

      ensureRenderLoop()
    }

    const queueSample = () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(sampleText)
    }

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }

    const handlePointerLeave = () => {
      pointer.active = false
    }

    const handlePointerEnter = (event) => {
      handlePointerMove(event)
      if (trigger === "hover") startGather(true)
    }

    const handleClick = () => {
      if (trigger === "click") startGather(true)
    }

    const reduceMotionQuery = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )
    const handleReduceMotionChange = (event) => {
      reducedMotion = event.matches
      sampleText()
    }

    reduceMotionQuery?.addEventListener("change", handleReduceMotionChange)
    canvas.addEventListener("pointerenter", handlePointerEnter)
    canvas.addEventListener("pointermove", handlePointerMove)
    canvas.addEventListener("pointerleave", handlePointerLeave)
    canvas.addEventListener("click", handleClick)

    const resizeObserver = new ResizeObserver(queueSample)
    resizeObserver.observe(container)
    sampleText()

    return () => {
      buildId += 1
      resizeObserver.disconnect()
      reduceMotionQuery?.removeEventListener("change", handleReduceMotionChange)
      canvas.removeEventListener("pointerenter", handlePointerEnter)
      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerleave", handlePointerLeave)
      canvas.removeEventListener("click", handleClick)

      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame)
    }
  }, [
    text,
    particleSize,
    density,
    color,
    highlightColor,
    scatter,
    gatherDuration,
    stagger,
    pointerRepel,
    repelRadius,
    idleDrift,
    trigger,
    fontSize,
    fontWeight,
    fontFamily,
    glow,
    fillHeight,
    fillWidth,
    lineHeightRatio,
    minFontSize,
    maxFontSize,
  ])

  return (
    <div
      ref={containerRef}
      className={`relative block h-full min-h-60 w-full overflow-hidden touch-none ${className}`}
      style={style}
      aria-label={text}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        aria-hidden="true"
      />
      <span className="sr-only">{text}</span>
    </div>
  )
}

export default ParticleText

import Image from "next/image"
import Typewriter from "./ui/TypeWriter"
import ParticleText from "./ui/reactbits/ParticleText"

const Hero = () => {
  const tech = [
    "React",
    "TypeScript",
    "Next.js",
    "Fastify",
    "FastAPI",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "AWS",
  ]

  return (
    <section
      id="hero"
      className="relative pt-32 pb-12 items-center justify-center overflow-hidden"
    >
      {/* Background particles now live once, globally, in GlobalParticles —
          Hero no longer mounts its own canvas so the effect is continuous
          across the whole page instead of restarting per section. */}

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Profile */}
          <div className="flex flex-col items-center">
            <div className="relative w-44 h-44 rounded-full overflow-hidden border border-gray-700">
              <Image
                src="/Hero.png"
                alt="Profile picture of Jagan Reddy"
                fill
                sizes="100%"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">
              Software Engineer • Web Developer
            </p>
          </div>

          {/* Text */}
          <div className="md:w-3/5 space-y-6 text-center md:text-left">
            {/* Heading formed from gathering particles (ParticleText),
                replacing the old masked-heading reveal entirely. Colors
                tuned to the site's indigo accent so it still reads as part
                of the same theme, and the glow uses that same accent as its
                shadow color for a bit more prominence over the persistent
                particle background. */}
            <div className="h-28 sm:h-32 md:h-36 w-full">
              <h1 className="h-full w-full m-0">
                <ParticleText
                  text="Building scalable, performant web applications"
                  fontSize="clamp(1.6rem, 3.6vw, 3.25rem)"
                  fontWeight={800}
                  fontFamily="inherit"
                  color="#c7d2fe"
                  highlightColor="#6366f1"
                  trigger="mount"
                  density={3}
                  particleSize={2.1}
                  scatter={160}
                  gatherDuration={1400}
                  stagger={360}
                  pointerRepel={36}
                  repelRadius={110}
                  idleDrift={0.5}
                  glow
                />
              </h1>
            </div>

            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I’m <span className="text-white font-medium">Jagan Reddy</span>, a
              software engineer focused on crafting clean, reliable web
              experiences using modern frontend and backend technologies.
            </p>

            <div className="min-h-[2rem] text-indigo-400 font-medium">
              <Typewriter tech={tech} />
            </div>

            <div className="flex gap-4 pt-4 justify-center md:justify-center md:-ml-30">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

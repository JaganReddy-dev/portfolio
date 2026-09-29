"use client"

import Image from "next/image"
import Typewriter from "./ui/TypeWriter"
import ParticleText from "./ui/reactbits/ParticleText"
import usePrefersDark from "../hooks/usePrefersDark"

const Hero = () => {
  const prefersDark = usePrefersDark()
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
        {/* Heading formed from gathering particles (ParticleText),
            replacing the old masked-heading reveal entirely. Full width
            here (not squeezed into the photo/text column below) so it has
            room to render at a readable size. */}
        <div className="h-56 sm:h-64 md:h-80 lg:h-96 w-full mb-8">
          <h1 className="h-full w-full m-0">
            <ParticleText
              text={"Building scalable & \n performant web apps"}
              fillHeight={0.92}
              fillWidth={0.95}
              fontWeight={700}
              fontFamily="inherit"
              color={prefersDark ? "#c7d2fe" : "#312e81"}
              highlightColor="#6366f1"
              trigger="mount"
              density={3}
              particleSize={2}
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Profile */}
          <div className="flex flex-col items-center">
            <div className="relative w-44 h-44 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
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
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
              Software Engineer • Web Developer
            </p>
          </div>

          {/* Text */}
          <div className="md:w-3/5 space-y-6 text-center md:text-left">
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I’m <span className="text-gray-900 dark:text-white font-medium">Jagan Reddy</span>, a
              software engineer focused on crafting clean, reliable web
              experiences using modern frontend and backend technologies.
            </p>

            <div className="min-h-8 text-indigo-600 dark:text-indigo-400 font-medium">
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

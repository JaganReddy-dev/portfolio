import Image from "next/image"
import Typewriter from "./ui/TypeWriter"

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
    <section className="relative pt-32 pb-24 items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/10 to-transparent" />

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
              />
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">
              Software Engineer • Web Developer
            </p>
          </div>

          {/* Text */}
          <div className="md:w-3/5 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Building scalable, performant{" "}
              <span className="text-blue-500">web applications</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I’m <span className="text-white font-medium">Jagan Reddy</span>, a
              software engineer focused on crafting clean, reliable web
              experiences using modern frontend and backend technologies.
            </p>

            <div className="min-h-[2rem] text-blue-400 font-medium">
              <Typewriter tech={tech} />
            </div>

            <div className="flex gap-4 pt-4 justify-center md:justify-center md:-ml-30">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
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

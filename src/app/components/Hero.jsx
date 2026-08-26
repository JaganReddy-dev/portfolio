import Image from "next/image"
import Typewriter from "./ui/TypeWriter"
import Particles from "./ui/reactbits/Particles"
import MaskedHeading from "./ui/reactbits/MaskedHeading"

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
      {/* 10% accent, delivered as a sparse particle field over the 70% dominant background */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <Particles
          particleCount={140}
          particleSpread={12}
          speed={0.08}
          particleColors={["#6366f1", "#818cf8", "#ffffff"]}
          moveParticlesOnHover
          particleHoverFactor={1.4}
          alphaParticles
          particleBaseSize={90}
          sizeRandomness={1}
          disableRotation={false}
        />
      </div>

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
            <MaskedHeading
              text="Building scalable, performant web applications"
              tag="h1"
              src="/Hero.png"
              align="center"
              reveal="rise"
              trigger="view"
              duration={1}
              stagger={0.06}
              textScale={0.09}
              fillScale={1.15}
              parallax={18}
              drift={10}
              className="text-white md:text-left"
              style={{ textAlign: "inherit" }}
            />

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

import projects from "../data/projects.json"
import ProjectCard from "../components/cards/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 px-4">
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-indigo-500" />
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              Projects
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white leading-tight">
            Things I&apos;ve <span className="text-indigo-400">built</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-lg leading-relaxed">
            A collection of backend services and full-stack applications — auth
            systems, URL infrastructure, OAuth integrations, and analytics.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-3">
          {projects.details.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

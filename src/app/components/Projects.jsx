"use client"
import { useState } from "react"
import projects from "../data/projects.json"
import { ProjectTile, ProjectDetail } from "../components/cards/ProjectCard"
import Modal from "./ui/Modal"
import EmptyState from "./ui/states/EmptyState"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  if (!projects?.details?.length) {
    return (
      <section id="projects" className="relative w-full py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <EmptyState
            title="No projects to show yet"
            description="Check back soon — new work is on the way."
            icon="🧰"
          />
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="relative w-full py-12 md:py-20 px-4">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Projects
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight mt-3">
            Things I&apos;ve <span className="text-indigo-600 dark:text-indigo-400">built</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-500 text-sm mt-2 max-w-lg leading-relaxed">
            A collection of backend services and full-stack applications — auth
            systems, URL infrastructure, OAuth integrations, and analytics.
          </p>
        </div>

        <div className="bento-grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(180px,auto)]">
          {projects.details.map((project, idx) => (
            <div
              key={project.id}
              className={
                idx === 0
                  ? "col-span-2 row-span-2"
                  : "col-span-2 md:col-span-1"
              }
            >
              <ProjectTile
                project={project}
                featured={idx === 0}
                onOpen={() => setActiveProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!activeProject} onClose={() => setActiveProject(null)}>
        {activeProject && <ProjectDetail project={activeProject} />}
      </Modal>
    </section>
  )
}

"use client"
import { useState, useRef, useEffect } from "react"

function AnimateHeight({ open, children }) {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight)
  })

  return (
    <div
      style={{
        height: open ? height : 0,
        overflow: "hidden",
        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  )
}

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div
      className="group relative rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-gray-600"
      style={{
        boxShadow: isExpanded
          ? `0 0 0 1px ${project.accentFrom}33, 0 4px 32px ${project.accentFrom}18`
          : "none",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left focus:outline-none hover:cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${project.accentFrom}22, ${project.accentTo}33)`,
            border: `1px solid ${project.accentFrom}44`,
          }}
        >
          {project.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="text-base font-semibold text-gray-100">
              {project.title}
            </h3>
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full border"
              style={{
                color: project.accentFrom,
                background: `${project.accentFrom}12`,
                borderColor: `${project.accentFrom}33`,
              }}
            >
              {project.repoName}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-0.5 truncate">
            {project.summary}
          </p>
        </div>

        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border border-gray-700 bg-gray-800 transition-all duration-300 group-hover:border-gray-600"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition:
              "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 5L7 9L11 5"
              stroke="#9ca3af"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <AnimateHeight open={isExpanded}>
        <div className="px-5 pb-5 pt-0">
          <div
            className="h-px mb-5"
            style={{
              background: `linear-gradient(90deg, ${project.accentFrom}44, transparent)`,
            }}
          />

          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="mb-5">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-gray-400 bg-gray-800 bg-opacity-50 rounded-lg px-3 py-2.5"
                >
                  <svg
                    className="flex-shrink-0 mt-0.5"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="6"
                      fill={project.accentFrom}
                      fillOpacity="0.15"
                      stroke={project.accentFrom}
                      strokeWidth="1.2"
                    />
                    <path
                      d="M4.5 7.2L6.2 8.8L9.5 5.5"
                      stroke={project.accentFrom}
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {project.endpoints.length > 0 && (
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
                API Endpoints
              </h4>
              <div className="rounded-lg overflow-hidden border border-gray-800">
                {project.endpoints.map((ep, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-3 py-2 text-sm ${
                      i !== 0 ? "border-t border-gray-800" : ""
                    }`}
                  >
                    <span
                      className="flex-shrink-0 text-xs font-bold font-mono w-14 text-center py-0.5 rounded"
                      style={{
                        color:
                          ep.method === "GET"
                            ? "#34d399"
                            : ep.method === "POST"
                              ? "#60a5fa"
                              : "#f87171",
                        background:
                          ep.method === "GET"
                            ? "#34d39918"
                            : ep.method === "POST"
                              ? "#60a5fa18"
                              : "#f8717118",
                      }}
                    >
                      {ep.method}
                    </span>
                    <code className="flex-1 text-gray-300 font-mono text-xs truncate">
                      {ep.path}
                    </code>
                    <span className="text-gray-600 text-xs hidden sm:inline">
                      {ep.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-gray-700 text-gray-400 bg-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-200 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </AnimateHeight>
    </div>
  )
}

export default ProjectCard

"use client"

// Compact bento tile shown in the grid. Clicking it opens the full detail
// view (ProjectDetail) in a modal, since expanding tiles inline breaks a
// bento layout's fixed rhythm.
export const ProjectTile = ({ project, featured = false, onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className={`bento-tile group flex flex-col justify-between text-left w-full h-full p-6 hover:cursor-pointer focus:outline-none ${
        featured ? "md:p-8" : ""
      }`}
      style={{
        boxShadow: `0 1px 0 0 ${project.accentFrom}22 inset, var(--tile-shadow, 0 0 #0000)`,
      }}
    >
      <div>
        <div
          className={`inline-flex items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105 ${
            featured ? "w-14 h-14 text-2xl" : "w-11 h-11 text-lg"
          }`}
          style={{
            background: `linear-gradient(135deg, ${project.accentFrom}22, ${project.accentTo}33)`,
            border: `1px solid ${project.accentFrom}44`,
          }}
        >
          {project.icon}
        </div>

        <h3
          className={`font-semibold text-gray-900 dark:text-gray-100 ${featured ? "text-2xl mb-2" : "text-base mb-1"}`}
        >
          {project.title}
        </h3>
        <p
          className={`text-gray-600 dark:text-gray-500 leading-relaxed ${featured ? "text-sm max-w-md" : "text-xs line-clamp-2"}`}
        >
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-5">
        {project.tags.slice(0, featured ? 6 : 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-gray-200 text-gray-600 bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}

// Full detail content rendered inside the Modal when a tile is opened.
export const ProjectDetail = ({ project }) => {
  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-4 mb-5 pr-8">
        <div
          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
          style={{
            background: `linear-gradient(135deg, ${project.accentFrom}22, ${project.accentTo}33)`,
            border: `1px solid ${project.accentFrom}44`,
          }}
        >
          {project.icon}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full border text-[color-mix(in_srgb,var(--accent)_70%,black)] dark:text-(--accent)"
              style={{
                "--accent": project.accentFrom,
                background: `${project.accentFrom}12`,
                borderColor: `${project.accentFrom}33`,
              }}
            >
              {project.repoName}
            </span>
          </div>
        </div>
      </div>

      <div
        className="h-px mb-5"
        style={{
          background: `linear-gradient(90deg, ${project.accentFrom}44, transparent)`,
        }}
      />

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
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
              className="flex items-start gap-2.5 text-sm text-gray-700 bg-gray-50 border border-gray-100 dark:border-transparent dark:text-gray-400 dark:bg-gray-800/50 rounded-lg px-3 py-2.5"
            >
              <svg
                className="shrink-0 mt-0.5"
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
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            {project.endpoints.map((ep, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2 text-sm ${
                  i !== 0 ? "border-t border-gray-200 dark:border-gray-800" : ""
                }`}
              >
                <span
                  className="shrink-0 text-xs font-bold font-mono w-14 text-center py-0.5 rounded"
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
                <code className="flex-1 text-gray-800 dark:text-gray-300 font-mono text-xs truncate">
                  {ep.path}
                </code>
                <span className="text-gray-500 dark:text-gray-600 text-xs hidden sm:inline">
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
              className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-gray-200 text-gray-600 bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  )
}

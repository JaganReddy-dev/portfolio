"use client"

import DepthCarousel from "./ui/reactbits/DepthCarousel"
import LoadingState from "./ui/states/LoadingState"
import EmptyState from "./ui/states/EmptyState"
import ErrorState from "./ui/states/ErrorState"
import useArticles from "../hooks/useArticles"

const TAG_COLORS = ["#6366f1", "#818cf8", "#a5b4fc"]

const ArticleCard = ({ article, isActive }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-full w-full flex-col justify-between p-6 text-left no-underline"
    style={{
      background: "linear-gradient(160deg, rgba(99,102,241,0.12), rgba(5,5,10,0.9) 55%)",
    }}
    tabIndex={isActive ? 0 : -1}
  >
    <div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-indigo-300">
          {article.publication}
        </span>
        {article.featured && (
          <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-medium text-indigo-200">
            Featured
          </span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-white line-clamp-3">
        {article.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-400 line-clamp-4">
        {article.summary}
      </p>
    </div>

    <div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {article.tags?.slice(0, 3).map((tag, i) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
            style={{
              borderColor: `${TAG_COLORS[i % TAG_COLORS.length]}55`,
              color: TAG_COLORS[i % TAG_COLORS.length],
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{article.date}</span>
        <span className="inline-flex items-center gap-1 text-indigo-300">
          Read
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  </a>
)

const Articles = () => {
  const { articles, status, retry } = useArticles()

  return (
    <section id="articles" className="relative py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-3xl md:text-5xl font-semibold text-indigo-400 uppercase tracking-widest">
          Published Articles
        </span>
        <h2 className="text-4xl font-bold text-white leading-tight mt-3 mb-4">
          Recent <span className="text-indigo-400">Articles</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-lg leading-relaxed mb-10">
          A few pieces I&apos;ve written on building secure, well-tested backend
          systems and the frontend tooling around them.
        </p>

        {status === "loading" && <LoadingState label="Loading articles..." />}

        {status === "error" && (
          <ErrorState
            title="Couldn't load articles"
            description="Something went wrong while fetching my published articles."
            onRetry={retry}
          />
        )}

        {status === "empty" && (
          <EmptyState
            title="No articles yet"
            description="Check back soon — new writing is on the way."
            icon="📝"
          />
        )}

        {status === "success" && (
          <div className="h-[420px] md:h-[460px]">
            <DepthCarousel
              items={articles}
              renderItem={(article, i, isActive) => (
                <ArticleCard article={article} isActive={isActive} />
              )}
              cardWidth={300}
              cardHeight={380}
              radius={20}
              tint="#05050f"
              depth={200}
              spread={80}
              tilt={18}
              visibleCards={3}
              falloff={0.22}
              showIndicators
              showControls
              loop={false}
              wheelMode="step"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Articles

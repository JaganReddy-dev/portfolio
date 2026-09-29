const EmptyState = ({
  title = "Nothing here yet",
  description = "Check back soon.",
  icon = "🗂️",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-300 bg-white/60 dark:border-gray-800 dark:bg-gray-900/40 py-16 px-6 text-center ${className}`}
    >
      <span className="text-3xl" aria-hidden="true">
        {icon}
      </span>
      <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-500 max-w-sm">{description}</p>
    </div>
  )
}

export default EmptyState

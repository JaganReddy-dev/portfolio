const ErrorState = ({
  title = "Something went wrong",
  description = "Please try again in a moment.",
  onRetry,
  retryLabel = "Try again",
  className = "",
}) => {
  return (
    <div
      role="alert"
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-950/20 py-16 px-6 text-center ${className}`}
    >
      <span className="text-3xl" aria-hidden="true">
        ⚠️
      </span>
      <h3 className="text-base font-semibold text-red-800 dark:text-red-200">{title}</h3>
      <p className="text-sm text-red-700 dark:text-red-300/70 max-w-sm">{description}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 rounded-xl border border-red-300 bg-red-100 text-red-800 hover:bg-red-200 dark:border-red-800 dark:bg-red-900/40 dark:text-red-100 dark:hover:bg-red-900/70 px-4 py-2 text-sm font-medium transition-colors"
        >
          {retryLabel}
        </button>
      )}
    </div>
  )
}

export default ErrorState

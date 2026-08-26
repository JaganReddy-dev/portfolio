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
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-red-900/50 bg-red-950/20 py-16 px-6 text-center ${className}`}
    >
      <span className="text-3xl" aria-hidden="true">
        ⚠️
      </span>
      <h3 className="text-base font-semibold text-red-200">{title}</h3>
      <p className="text-sm text-red-300/70 max-w-sm">{description}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 rounded-xl border border-red-800 bg-red-900/40 px-4 py-2 text-sm font-medium text-red-100 transition-colors hover:bg-red-900/70"
        >
          {retryLabel}
        </button>
      )}
    </div>
  )
}

export default ErrorState

const LoadingState = ({ label = "Loading...", className = "" }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-3 py-16 text-gray-400 ${className}`}
    >
      <span className="relative flex h-8 w-8">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-30" />
        <span className="relative inline-flex h-8 w-8 rounded-full border-2 border-gray-700 border-t-indigo-400 animate-spin" />
      </span>
      <p className="text-sm">{label}</p>
    </div>
  )
}

export default LoadingState

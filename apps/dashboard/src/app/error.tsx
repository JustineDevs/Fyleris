export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">500</h1>
        <h2 className="text-xl font-medium text-neutral-300 mb-4">Something Went Wrong</h2>
        <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
          An unexpected error occurred. Our team has been notified and we're working to fix it.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2.5 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Try Again
          </button>
          <a
            href="mailto:support@fyrelis.com"
            className="px-6 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Contact Support
          </a>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs text-neutral-600 font-mono">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}

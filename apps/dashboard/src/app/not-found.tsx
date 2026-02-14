export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
          <svg className="w-8 h-8 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">404</h1>
        <h2 className="text-xl font-medium text-neutral-300 mb-4">Page Not Found</h2>
        <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or you don't have access to it.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/dashboard"
            className="px-6 py-2.5 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Back to Dashboard
          </a>
          <a
            href="/orgs"
            className="px-6 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Switch Organization
          </a>
        </div>
      </div>
    </div>
  )
}

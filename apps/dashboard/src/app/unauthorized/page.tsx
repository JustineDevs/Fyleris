export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">403</h1>
        <h2 className="text-xl font-medium text-neutral-300 mb-4">Access Denied</h2>
        <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
          You don't have permission to access this resource. Contact your organization admin if you believe this is an error.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/dashboard"
            className="px-6 py-2.5 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Back to Dashboard
          </a>
          <a
            href="/"
            className="px-6 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  )
}

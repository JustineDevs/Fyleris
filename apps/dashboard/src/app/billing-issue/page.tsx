export default function BillingIssuePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Billing Issue</h1>
        <p className="text-neutral-400 mb-2">
          Your organization subscription is currently <span className="text-yellow-500 font-medium">past due</span>.
        </p>
        <p className="text-neutral-500 text-sm mb-8">
          To prevent service interruption, please update your payment method or contact support.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/billing"
            className="px-6 py-2.5 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Go to Billing
          </a>
          <a
            href="mailto:billing@fyrelis.com"
            className="px-6 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

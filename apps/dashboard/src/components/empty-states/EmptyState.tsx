interface EmptyStateProps {
  title: string
  description: string
  icon?: React.ReactNode
  action?: {
    label: string
    href: string
  }
}

export default function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-neutral-500">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 text-center max-w-sm mb-6">{description}</p>
      {action && (
        <a
          href={action.href}
          className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors"
        >
          {action.label}
        </a>
      )}
    </div>
  )
}

// Pre-built empty states for common scenarios
export function NoOrganizationsEmptyState() {
  return (
    <EmptyState
      title="No Organizations Yet"
      description="Create your first organization to get started with Fyrelis."
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      }
      action={{ label: 'Create Organization', href: '/orgs/new' }}
    />
  )
}

export function NoWorkspacesEmptyState() {
  return (
    <EmptyState
      title="No Workspaces Yet"
      description="Create your first workspace to deploy an AI assistant."
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
      action={{ label: 'Create Workspace', href: '/workspaces/new' }}
    />
  )
}

export function NoChannelsEmptyState() {
  return (
    <EmptyState
      title="No Channels Connected"
      description="Connect a channel (Slack, Discord, etc.) to start receiving messages."
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      }
      action={{ label: 'Add Channel', href: '/channels/new' }}
    />
  )
}

export function NoLogsEmptyState() {
  return (
    <EmptyState
      title="No Logs Yet"
      description="Logs will appear here once your workspace starts processing messages."
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      }
    />
  )
}

export function NoMetricsEmptyState() {
  return (
    <EmptyState
      title="No Metrics Yet"
      description="Metrics will be collected once your workspace is active and receiving traffic."
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      }
    />
  )
}

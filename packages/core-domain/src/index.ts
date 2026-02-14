// Core Domain: Shared TypeScript types for Fyrelis multi-tenant model

// Role definitions within an Organization
export type Role = 'owner' | 'admin' | 'member' | 'viewer'

// User entity
export interface User {
  id: string
  email: string
  name?: string
  createdAt?: Date
  updatedAt?: Date
}

// Organization entity
export interface Org {
  id: string
  name: string
  billingAccountId?: string
  status: 'active' | 'inactive' | 'suspended'
  createdAt?: Date
  updatedAt?: Date
  // Optional roster of memberships (for quick in-memory usage)
  memberships?: OrgMembership[]
}

// Membership relation between User and Org
export interface OrgMembership {
  userId: string
  orgId: string
  role: Role
  joinedAt?: Date
}

// Channel configuration within a workspace
export type ChannelType = 'Slack' | 'Discord' | 'Telegram' | 'WebChat' | 'WhatsApp' | 'Email'

export interface Channel {
  id: string
  workspaceId: string
  type: ChannelType
  name?: string
  connected?: boolean
  config?: Record<string, any>
  createdAt?: Date
  updatedAt?: Date
}

// Node/Agent runtime within a workspace
export type NodeType = 'shared' | 'org_dedicated' | 'workspace_dedicated'
export type Provider = 'Render' | 'Fly' | 'AWS' | 'Railway' | 'Vercel'

export interface Node {
  id: string
  workspaceId: string
  type: NodeType
  provider?: Provider
  region?: string
  status: 'provisioning' | 'healthy' | 'degraded' | 'error'
  url?: string
  createdAt?: Date
  updatedAt?: Date
}

// Workspace within an organization
export interface Workspace {
  id: string
  orgId: string
  name: string
  purpose?: string
  channels?: Channel[]
  securityPolicy?: string
  skills?: string[]
  nodeBound?: NodeType
  region?: string
  createdAt?: Date
  updatedAt?: Date
  lastActivityAt?: Date
}

// Re-exports for easier imports from other packages
export const __brand = Symbol();

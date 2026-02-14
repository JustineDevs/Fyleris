# Fyrelis Project Plan

**Project Name:** Fyrelis  
**Owner/Lead:** Justine Devs  
**Start Date:** 02/14/2026  
**Target Launch:** Q2 2026 (MVP)  
**Status:** Planning

---

## 1. Executive Summary

### Project Vision
Build Fyrelis as a secure home and control plane for AI assistants that operate across Slack, Discord, WhatsApp, Telegram, and WebChat - giving small teams and indie founders a production-ready "Cloud Home" for their agents without touching infra.

### Problem Statement
- **Pain Point 1:** Developers must manually wire and maintain bots, gateways, and webhooks per channel - complex multi-platform integration
- **Pain Point 2:** Self-hosting requires owning all DevOps around long-lived processes, Redis, Postgres, and deployments
- **Pain Point 3:** Security risks from misconfigured tools, DM policies, and sandboxing

### Solution Overview
Fyrelis is a multi-tenant control plane that:
- Provides web dashboard to create workspaces, connect channels, configure security
- Orchestrates node provisioning on PaaS providers (Render/Fly/Railway)
- Exposes TypeScript SDK and HTTP API for programmatic management

### Expected Outcomes (30-60-90 Days)
| Phase | Outcome |
|-------|---------|
| **30 Days** | MVP: Auth + Organizations + Workspaces + basic Dashboard |
| **60 Days** | Node orchestration + 1 channel (Slack) integration |
| **90 Days** | Multi-channel support + Billing + SDK beta |

---

## 2. Monorepo Structure

```
fyrelis/
├── apps/
│   └── dashboard/         # Next.js 14 App Router
├── packages/
│   ├── core-domain/       # Shared types (Org, Workspace, Node, Channel)
│   └── sdk/              # TypeScript SDK
├── infra/
│   ├── vercel/           # Dashboard deployment
│   └── render/           # Node hosting
└── docs/
    └── specification.md
```

---

## 3. Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, React 18, TailwindCSS, shadcn/ui |
| Backend | Next.js API Routes, PostgreSQL |
| Auth | Auth.js/NextAuth |
| Database | PostgreSQL (Supabase) |
| ORM | Drizzle ORM |
| SDK | TypeScript |
| Node Hosting | Render/Fly.io |
| Billing | Stripe |
| Testing | Playwright, Vitest |

---

## 4. Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- [ ] Database schema design (PostgreSQL)
- [ ] Initialize Next.js project with TypeScript
- [ ] Setup TailwindCSS + shadcn/ui
- [ ] Configure ESLint + Prettier + Husky
- [ ] Environment configuration (.env.local)

### Phase 2: Authentication & API (Weeks 3-4)
- [ ] Auth.js setup (credentials + OAuth)
- [ ] Database client layer (Drizzle ORM)
- [ ] API middleware (auth, org/workspace context)
- [ ] Core API endpoints:
  - [ ] /api/auth/*
  - [ ] /api/organizations
  - [ ] /api/workspaces

### Phase 3: Dashboard UI (Weeks 5-7)
- [ ] Dashboard layout + sidebar
- [ ] Organization management
- [ ] Workspace management
- [ ] Node status display

### Phase 4: Node Orchestration (Weeks 8-10)
- [ ] Node provisioning (Render API)
- [ ] Node health monitoring
- [ ] Node restart/redeploy

### Phase 5: Channels & Billing (Weeks 11-12)
- [ ] Channel integration (Slack, Discord, etc.)
- [ ] Stripe billing integration
- [ ] Usage tracking

---

## 5. Git Workflow

### Branch Naming
```
<type>/<description>
```
- `feat/` - New feature
- `fix/` - Bug fix
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Tests
- `chore/` - Maintenance

### Commit Convention
```
<type>[scope]: <description>
```
Examples: `feat(auth): add GitHub OAuth`, `fix(dashboard): resolve loading state`

---

## 6. Key Features & Priorities

| Priority | Feature | Description |
|----------|---------|-------------|
| P0 | Auth | User signup/login with roles |
| P0 | Organizations | Multi-tenant boundaries |
| P0 | Workspaces | AI assistant configurations |
| P1 | Nodes | Runtime instance management |
| P1 | Channels | Slack/Discord integrations |
| P2 | Billing | Stripe subscription |
| P2 | SDK | TypeScript client library |

---

## 7. Security Requirements

- Multi-tenant isolation (org_id, workspace_id on all queries)
- Row-level security (RLS) in PostgreSQL
- Secrets encrypted at rest
- API authentication + authorization
- Input validation with Zod

---

## 8. Testing Strategy

| Type | Tool | Coverage Target |
|------|------|-----------------|
| Unit | Vitest | 70%+ |
| Integration | Vitest | Key flows |
| E2E | Playwright | Critical paths |

---

## 9. Definition of Done

- [ ] All P0 features implemented
- [ ] Code passes linting (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] E2E tests pass for critical flows
- [ ] Documentation updated

---

## 10. Next Steps

1. Initialize Next.js project structure
2. Setup database schema
3. Implement authentication
4. Build core API endpoints
5. Create dashboard UI

---

**Last Updated:** 02/14/2026  
**Next Review:** 02/21/2026

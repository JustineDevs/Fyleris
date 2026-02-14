# Fyrelis

Fyrelis is a multi-tenant control plane and hosting layer for always-on AI assistants that run across messaging channels such as Slack, Discord, WhatsApp, Telegram, and WebChat. It provisions, configures, and monitors per-workspace agent nodes while exposing a unified web dashboard, HTTP API, and TypeScript SDK for managing workspaces, channels, security policies, and usage. 

Fyrelis focuses on:

- Secure isolation across shared, per-org, and per-workspace dedicated nodes  
- Opinionated defaults for channel and tool safety  
- Simple integrations with managed infrastructure providers (e.g., Vercel for UI, Render/Fly for nodes)  
- Stripe-backed subscription and usage-based billing 

---

## Core concepts

- **Organization**  
  Logical tenant grouping multiple workspaces, billing, and members. 

- **Workspace**  
  A single assistant configuration bound to one organization: persona, channels, security posture, skills, and node binding. 

- **Node**  
  Long-lived runtime instance (container/VM) hosting a multi-channel gateway for one or more workspaces. Nodes expose health probes, logs, and metrics, and can be shared, org-dedicated, or workspace-dedicated. 

- **Channel**  
  Configuration for a specific messaging surface (Slack, Discord, WhatsApp, Telegram, WebChat), including credentials, allowlists, and DM policies. 

- **Plans and usage**  
  Starter, Pro, and Agency-style tiers mapped to node placement strategies and limits, backed by subscriptions and usage records. 

---

## Architecture

At a high level: 

- **Control plane (apps/control-plane)**  
  - HTTP API for orgs, workspaces, nodes, channels, plans, and usage  
  - Orchestrates node lifecycle via provider APIs  
  - Enforces auth, RBAC, and tenant scoping (backed by multi-tenant Postgres with optional RLS)  
  - Integrates with Stripe for billing and plan changes  

- **Dashboard (apps/dashboard)**  
  - Web UI for configuring workspaces, channels, security posture, and nodes  
  - Surfaces logs, metrics, and billing state via the control-plane API  

- **Node orchestrator (apps/node-orchestrator)**  
  - Provisions and manages long-lived node processes on worker-friendly hosts  
  - Applies health checks, restarts, draining, and rolling upgrades 

- **Agent nodes**  
  - Host the actual multi-channel assistant runtime (e.g., OpenClaw-compatible gateways)  
  - Consume compiled channel + workspace config from the control plane  
  - Communicate with Redis for queues and rate limiting

- **Persistence & infra**  
  - PostgreSQL as the primary multi-tenant store for orgs, workspaces, nodes, channels, plans, subscriptions, and usage_records  
  - Redis for caching, rate limiting, and background job queues 

---

## Tech stack

- TypeScript, Node.js  
- PostgreSQL (multi-tenant schema with optional RLS)  
- Redis (cache, rate limits, queues)  
- HTTP API with typed endpoints and a TypeScript SDK (`@fyrelis/sdk`)  
- Long-lived nodes running on Render/Fly/AWS or similar 

---

## Getting started (development)

> This is a high-level outline; adapt commands to your package manager and tooling.

1. **Clone and install**

   ```bash
   git clone https://github.com/justinedevs/fyrelis.git
   cd fyrelis
   pnpm install
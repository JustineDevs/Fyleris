# Fyrelis Agent Guidelines

This file provides guidelines for AI agents operating in the Fyrelis codebase.

---

## 1. Project Structure (Monorepo)

```
fyrelis/
  apps/
    dashboard/         # Next.js 14 App Router (this repo)
    control-plane/     # Future: Node/Express API
  packages/
    core-domain/       # Future: shared types (Org, Workspace, Node, Channel)
    sdk/              # Future: TypeScript SDK
  infra/
    vercel/           # Future: deployment configs
    render/           # Future: node hosting
```

---

## 2. Build & Test Commands

```bash
# Development
npm run dev          # Start Next.js dev server (port 3000)

# Build
npm run build        # Next.js production build
npm run start        # Start production server

# Linting & Formatting
npm run lint         # ESLint check
npm run format       # Prettier auto-format

# Testing (configure via package.json)
npm run test         # Run all tests
npm run test:watch  # Run tests in watch mode (if configured)
npm run test <file> # Run single test file

# Husky (pre-commit hooks)
npm run prepare     # Setup husky hooks
```

---

## 3. Code Style Guidelines

### TypeScript Conventions
- Use **interfaces** over types for object shapes
- Avoid enums; use maps/const objects instead
- Use `type` for unions, primitives, and aliases
- Always type function parameters and return values
- Use `strict: true` in tsconfig.json

### Naming Conventions
- **Files**: lowercase with dashes (e.g., `user-service.ts`, `auth-wizard.tsx`)
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Functions**: camelCase with auxiliary verbs (e.g., `isLoading`, `hasError`)
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces**: PascalCase (e.g., `UserProfileProps`)

### Import Order
1. External libraries (React, Next.js, etc.)
2. Internal imports (components, hooks, utils)
3. Relative imports
4. Type imports (always use `import type`)

```typescript
// Good
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserCard } from '@/components/user-card'
import type { User } from '@/types'
```

### UI/Component Guidelines
- Use **shadcn/ui** components when available
- Use **TailwindCSS** for styling with mobile-first approach
- Minimize `'use client'` - prefer Server Components
- Wrap client components in Suspense with fallback
- Keep components small and focused (Single Responsibility)
- Use descriptive class names with Tailwind utilities
- Avoid emojis in UI and code

### Error Handling
- Use try/catch with proper error boundaries
- Return consistent API response structures
- Log errors with context (include org_id/workspace_id)
- Never expose sensitive information in error messages

---

## 4. Git Workflow

### Branch Naming
```
<type>/<description>
```

Types:
- `feat/` - New feature (e.g., `feat/add-oauth-login`)
- `fix/` - Bug fix (e.g., `fix/auth-redirect-loop`)
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding/updating tests
- `chore/` - Maintenance tasks

### Commit Messages (Conventional Commits)
```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

Examples:
```
feat(auth): add GitHub OAuth2 support
fix(dashboard): resolve workspace list loading state
docs: update API documentation
```

### Pull Request Flow
1. Create branch from `main`
2. Make changes and commit
3. Run `npm run lint` and `npm run build`
4. Create PR with description
5. Request review

---

## 5. Database & Security Patterns

### Multi-Tenant Isolation
- Always include `org_id` and `workspace_id` in queries
- Never trust user input - validate with Zod schemas
- Use parameterized queries (no raw SQL with user data)
- Store secrets encrypted at rest

### API Design
- Use RESTful conventions for Next.js API routes
- Validate request bodies with Zod
- Return consistent response formats
- Include proper HTTP status codes (200, 201, 400, 401, 404, 500)

---

## 6. Testing Guidelines

- Write unit tests for utility functions
- Write integration tests for API routes
- Use Playwright for E2E testing
- Follow the AAA pattern: Arrange, Act, Assert
- Use descriptive test names that explain expected behavior

---

## 7. Cursor Rules Integration

This project includes Cursor rules in `.cursor/rules/`. Key points:
- Clean Code Implementation (avoid magic numbers, single responsibility)
- Professional UI layout, positioning, font, and spacing
- Use ESLint, Prettier, and pre-commit hooks
- Production integration testing before merging to main

---

## 8. Key Dependencies

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18, TailwindCSS, shadcn/ui
- **Language**: TypeScript 5.x
- **Testing**: Playwright, Vitest
- **Linting**: ESLint, Prettier

---

## 9. Documentation

- Update relevant docs when making changes
- Add JSDoc comments for public APIs
- Link Design-Brain documents in issue descriptions
- Keep README and specs up to date

---

## 10. Getting Started for New Agents

1. Read `ignore/docs/design-brain/docs/OVERVIEW.md` for project vision
2. Check `ignore/docs/Product Requirements Document.md` for features
3. Review `.cursor/rules/` for coding standards
4. Run `npm install` to setup dependencies
5. Run `npm run dev` to start development server
6. Create a feature branch following Git workflow

---

For questions or clarifications, refer to the Design-Brain in `ignore/docs/design-brain/`.

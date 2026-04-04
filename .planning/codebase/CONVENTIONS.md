# Coding Conventions

**Analysis Date:** 2026-04-03

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `ContactForm.tsx`, `Header.tsx`, `ServicesGrid.tsx`)
- Layout components: `app/layout.tsx`, `components/layout/Header.tsx`
- Page routes: lowercase with hyphens (e.g., `app/blog/[slug]/page.tsx`, `app/services/[service]/page.tsx`)
- Data/utility files: camelCase (e.g., `blog.ts`, `schema.ts`, `utils.ts`)
- API routes: `app/api/[resource]/route.ts` (e.g., `app/api/contact/route.ts`)

**Functions:**
- PascalCase for React components (e.g., `HomePage`, `ContactForm`, `Header`)
- camelCase for regular functions (e.g., `getPostBySlug`, `getServiceBySlug`, `formatCityName`)
- camelCase for utility functions (e.g., `cn`, `escapeHtml`, `isRateLimited`)
- Prefix getters with `get` (e.g., `getRecentPosts`, `getResend`, `getServiceBySlug`)
- Prefix validators/checkers with `is` or `check` (e.g., `isRateLimited`, `blogDirExists`)

**Variables:**
- camelCase for all local and module-level variables (e.g., `formState`, `recentPosts`, `rateLimitMap`)
- UPPERCASE for constants (e.g., `MAX_REQUESTS_PER_WINDOW`, `RATE_LIMIT_WINDOW_MS`, `EMAIL_REGEX`)
- Private module state prefixed with underscore: not used in this codebase
- State hook variables in pattern `[state, setState]` (e.g., `[formState, setFormState]`, `[scrolled, setScrolled]`)

**Types:**
- PascalCase for all type/interface names (e.g., `ButtonProps`, `FormState`, `HeaderProps`, `BlogPost`, `Service`)
- Props interfaces suffixed with `Props` (e.g., `ContactFormProps`, `MarkdownContentProps`)
- Props interfaces defined above component function

## Code Style

**Formatting:**
- No explicit formatter (Prettier) configured — relies on ESLint for style guidance
- 2-space indentation (TypeScript default)
- Semicolons required (no semicolon-optional style detected)
- No trailing commas in type definitions, trailing commas in arrays/objects

**Linting:**
- Tool: ESLint 9 with `eslint-config-next`
- Config: `eslint.config.mjs` (flat config format)
- Applied rules:
  - `eslint-config-next/core-web-vitals` — Core Web Vitals rules
  - `eslint-config-next/typescript` — TypeScript-specific rules
- Ignored: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`
- Run command: `npm run lint` (runs ESLint)

**Directory ignores:**
- `.next/` — Next.js build output
- `out/` — Static export output
- `build/` — Manual build directory (if used)

## Import Organization

**Order:**
1. React imports (e.g., `import { useState } from "react"`)
2. Next.js imports (e.g., `import Image from "next/image"`, `import Link from "next/link"`)
3. Third-party library imports (e.g., `import { Phone, Menu, X } from "lucide-react"`)
4. Internal utility/data imports (e.g., `import { company } from "@/lib/data/company"`)
5. Internal component imports (e.g., `import { Header } from "@/components/layout/Header"`)

**Path Aliases:**
- `@/` → project root (configured in `tsconfig.json`)
- Example: `@/components/ui/Button` resolves to `./components/ui/Button.tsx`
- Used consistently throughout codebase for relative imports

**Example from `Header.tsx`:**
```typescript
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import { company } from "@/lib/data/company";
import { mainNav } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
```

## Error Handling

**Patterns:**
- Try-catch blocks for file system operations (see `lib/blog.ts`):
  ```typescript
  try {
    return fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));
  } catch {
    return [];
  }
  ```
- Graceful fallbacks on error (return empty array `[]`, return `null`, return object with safe defaults)
- No error re-throwing in data loading functions; silent failures preferred for non-critical paths
- Console.error for server-side errors (API route error logging):
  ```typescript
  console.error("RESEND_API_KEY is not configured");
  console.error("Contact form error:", error);
  ```

**API Route Error Handling (`app/api/contact/route.ts`):**
- Validation before processing (check required fields, length limits, format)
- Return structured JSON error responses with HTTP status codes:
  ```typescript
  return NextResponse.json(
    { error: "Name, phone, and message are required." },
    { status: 400 }
  );
  ```
- Wrap in try-catch for unexpected errors:
  ```typescript
  try {
    // main logic
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
  ```

**Validation Pattern:**
- Regex for email validation: `const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;`
- Basic length checks before processing: `if (name.length > 200) { ... }`
- Escape HTML in user inputs: `escapeHtml(String(name))` to prevent injection

## Logging

**Framework:** `console` (native browser/Node.js console)

**Patterns:**
- Server-side only: `console.error()` for warnings/errors in API routes and utility functions
- No info/debug logging in production code
- Example: `console.error("Contact form error:", error);`
- No structured logging (Pino, Winston) configured

## Comments

**When to Comment:**
- Explain **why** not **what** code does
- Mark special sections with comment dividers: `/* ── Rate Limiting ────────────────────────────────────────────── */`
- Document non-obvious logic or business rules
- Document honeypot fields and security measures: `/* Honeypot field — hidden from real users, traps bots */`
- Explain rate limiting behavior: `// Periodically clean up stale entries every 10 minutes`

**JSDoc/TSDoc:**
- Not used in this codebase
- Props interfaces documented via inline comments in `HeaderProps`: `/** true = transparent over hero (homepage). false = solid white (inner pages) */`

## Function Design

**Size:** 
- Components: 50-200 lines typically
- Utility functions: 5-30 lines
- Avoid deeply nested logic; extract to separate functions

**Parameters:**
- Pass objects/props instead of many positional args (e.g., `HeaderProps` object instead of individual `transparent`, `scrolled` params)
- Use destructuring in function signatures (e.g., `{ params }: { params: Promise<{ service: string }> }`)
- Type all parameters explicitly (TypeScript strict mode)

**Return Values:**
- Explicit return types for all functions
- Return early for guard clauses (e.g., `if (!service) return;`)
- For data loading: return empty arrays `[]` or `undefined`, not null
- For async operations: always return `Promise<T>`

**Example from `blog.ts`:**
```typescript
export function getRecentPosts(count: number): BlogPost[] {
  return getAllPosts().slice(0, count);
}
```

## Module Design

**Exports:**
- Named exports for functions (no default exports for functions):
  ```typescript
  export function getServiceBySlug(slug: string): Service | undefined { ... }
  export function getPostBySlug(slug: string): BlogPost | undefined { ... }
  ```
- Default export for React components:
  ```typescript
  export default function HomePage() { ... }
  ```
  or
  ```typescript
  export function ContactForm() { ... }
  ```

**Barrel Files:**
- Not heavily used; each file exports its specific responsibility
- Components imported individually: `import { Header } from "@/components/layout/Header"`
- Data imported directly: `import { services } from "@/lib/data/services"`

**Component Patterns:**
- Functional components with hooks (React 19)
- Props as TypeScript interface
- Use `"use client"` directive for client components (state/events needed)
- Server components by default (no directive needed)
- Component composition over inheritance

**Example Client Component (`ContactForm.tsx`):**
```typescript
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });
  // ...
}
```

**Example Server Component (`page.tsx`):**
```typescript
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
// ...

export default function HomePage() {
  const recentPosts = getRecentPosts(3);
  return (
    <>
      <Header transparent />
      <main id="main-content">
        {/* sections */}
      </main>
      <Footer />
    </>
  );
}
```

## Tailwind CSS Classes

**Style:**
- All styling via Tailwind utility classes (no CSS-in-JS, no CSS modules)
- Responsive breakpoints: `sm:`, `md:`, `lg:` prefixes
- Custom colors: `navy`, `amber`, `emergency` (defined in Tailwind config)
- Common pattern: `className="px-4 sm:px-6 lg:px-8"` for responsive padding
- Utility combination: `"flex items-center gap-2"`, `"rounded-lg border border-gray-300"`

**Class Organization:**
- Layout utilities first: `flex`, `grid`, `gap`, `px`, `py`
- Sizing second: `w-full`, `h-10`, `text-lg`
- Colors third: `bg-white`, `text-gray-900`, `border-gray-200`
- Effects last: `shadow-md`, `rounded-lg`, `transition-all`

## TypeScript Configuration

**Mode:** Strict mode enabled
- `"strict": true`
- `"noEmit": true` — Check types, don't emit JS
- `"isolatedModules": true` — Each file is independent module
- `"jsx": "react-jsx"` — React 17+ JSX transform

**Paths:**
- `"@/*": ["./*"]` — Path alias for root imports

## Special Patterns

**Conditional Rendering:**
- Ternary for simple conditions: `condition ? <Component /> : null`
- Guard clauses for early returns in functions
- Logical AND: `condition && <Component />`
- No switch/case statements in JSX

**Props Spreading:**
- Explicit prop passing preferred
- Spread operator not heavily used

**Utility Function `cn`:**
- Custom classname utility in `lib/utils.ts`
- Combines conditional classes, filters falsy values:
  ```typescript
  export function cn(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(" ");
  }
  ```
- Usage: `className={cn("base-class", condition && "conditional-class")}`

---

*Convention analysis: 2026-04-03*

# Testing Patterns

**Analysis Date:** 2026-04-03

## Test Framework

**Runner:**
- Not detected — No testing framework currently configured
- `package.json` has no devDependencies for Jest, Vitest, Playwright, or Cypress
- No `jest.config.*`, `vitest.config.*`, or test configuration files found

**Assertion Library:**
- Not applicable — Testing not yet implemented

**Run Commands:**
- No test scripts configured in `package.json`
- Only dev/build/lint scripts present:
  ```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
  ```

## Test File Organization

**Location:**
- No test files found in repository
- Expected pattern (if testing were added): co-located with source
  - `components/ContactForm.test.tsx` alongside `components/ContactForm.tsx`
  - `lib/blog.test.ts` alongside `lib/blog.ts`
  - `app/api/contact/route.test.ts` alongside `app/api/contact/route.ts`

**Naming:**
- Recommended: `.test.ts` / `.test.tsx` suffix (not `.spec.ts`)
- Example: `Button.test.tsx`, `Header.test.tsx`, `utils.test.ts`

**Directory Structure (if implemented):**
```
components/
├── ContactForm.tsx
├── ContactForm.test.tsx
├── layout/
│   ├── Header.tsx
│   └── Header.test.tsx
lib/
├── blog.ts
├── blog.test.ts
├── schema.ts
├── schema.test.ts
```

## Test Structure

**Suite Organization (Recommended Pattern for This Codebase):**

Unit tests for utility functions would use this pattern:

```typescript
// lib/utils.test.ts
describe("cn utility", () => {
  it("combines class strings", () => {
    const result = cn("base", "extra", "classes");
    expect(result).toBe("base extra classes");
  });

  it("filters falsy values", () => {
    const result = cn("base", false, undefined, "extra", null);
    expect(result).toBe("base extra");
  });

  it("handles mixed truthy conditions", () => {
    const condition = true;
    const result = cn("base", condition && "conditional");
    expect(result).toBe("base conditional");
  });
});
```

Component tests for client components would use this pattern:

```typescript
// components/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "@/components/ContactForm";

describe("ContactForm", () => {
  beforeEach(() => {
    // Reset mocks before each test
  });

  it("renders form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
  });

  it("submits form with valid data", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "5551234567" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I need a roof inspection" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  it("displays error on submission failure", async () => {
    // Mock fetch to return error
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: "Server error" }),
      })
    );
    
    render(<ContactForm />);
    // ... fill form and submit
    
    await waitFor(() => {
      expect(screen.getByText(/server error/i)).toBeInTheDocument();
    });
  });
});
```

## Mocking

**Framework:** Not yet configured
- Recommended: Jest or Vitest for mocking
- For API testing: Mock `fetch()` or use `jest.mock()`

**Patterns (Recommended):**

Mock fetch for API routes:
```typescript
jest.mock("resend", () => ({
  Resend: jest.fn(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ success: true }),
    },
  })),
}));
```

Mock environment variables:
```typescript
beforeEach(() => {
  process.env.RESEND_API_KEY = "test-key";
});

afterEach(() => {
  delete process.env.RESEND_API_KEY;
});
```

Mock file system for blog loading:
```typescript
jest.mock("fs", () => ({
  existsSync: jest.fn(() => true),
  readdirSync: jest.fn(() => ["post1.md", "post2.mdx"]),
  readFileSync: jest.fn(() => "# Test\n\nContent"),
}));
```

**What to Mock:**
- External APIs (Resend, etc.)
- File system operations (for blog loading)
- Environment variables
- Next.js router/navigation functions

**What NOT to Mock:**
- Core utilities like `cn()` — test them directly
- React hooks (unless testing specific edge cases)
- Schema generation functions — test with real data

## Fixtures and Factories

**Test Data (Recommended Approach):**

Create fixture files for reusable test data:

```typescript
// __fixtures__/blogPost.ts
export const mockBlogPost = {
  slug: "test-post",
  title: "Test Blog Post",
  description: "A test post",
  date: "2026-04-03",
  author: "Brett",
  category: "roofing",
  tags: ["test", "roofing"],
  readingTime: 5,
  content: "# Test Content\n\nThis is test content.",
};

export const mockBlogPosts = [mockBlogPost];
```

Factory for services:
```typescript
// __fixtures__/service.ts
export function createMockService(overrides = {}) {
  return {
    slug: "test-service",
    title: "Test Service",
    shortTitle: "Test",
    description: "A test service",
    icon: "Home",
    metaTitle: "Test | Breeze Roofing",
    metaDescription: "Test service description",
    content: "# Test Service",
    faqs: [],
    ...overrides,
  };
}
```

**Location:**
- `__fixtures__/` directory at project root or test directory
- Or co-located in test files for simple fixtures
- Example: `components/__fixtures__/mockData.ts`

## Coverage

**Requirements:** Not enforced — No coverage config detected

**Recommended Targets (if implementing testing):**
- Utility functions: 100% coverage
- Component rendering: 80%+ coverage
- API routes: 90%+ coverage (including error paths)
- Data loading: 85%+ coverage

**View Coverage (when configured):**
```bash
npm test -- --coverage
npm run test:coverage  # if configured
```

## Test Types

**Unit Tests (Recommended Priority 1):**
- Test individual functions in isolation
- Examples:
  - `lib/utils.ts` — `cn()`, `formatCityName()`, `formatPhoneDisplay()`
  - `lib/blog.ts` — `getRecentPosts()`, `getPostBySlug()`, `getAllPosts()`
  - `lib/schema.ts` — Schema generation functions with mock data
- Scope: Single function or small module
- Approach: No external dependencies, mock file system if needed

**Integration Tests (Priority 2):**
- Test component rendering with real props
- Test API routes with mocked external services
- Examples:
  - `ContactForm` component with form submission
  - `Header` component navigation
  - `app/api/contact/route.ts` with mocked Resend
- Scope: Component + its child components, or route handler + dependencies
- Approach: Mock external APIs, use real internal functions

**E2E Tests (Priority 3 - Not Currently Used):**
- Full user workflows (would require Playwright/Cypress)
- Not recommended for this static marketing site
- If added later: Test critical user paths
  - Form submission end-to-end
  - Navigation and page loading
  - SEO metadata rendering

## Common Patterns

**Async Testing (Recommended):**

For async functions (data loading):
```typescript
it("loads blog posts asynchronously", async () => {
  const posts = await getAllPosts();
  expect(posts).toEqual(expect.arrayContaining([
    expect.objectContaining({ slug: expect.any(String) })
  ]));
});
```

For async React hooks (e.g., `useEffect` in Header):
```typescript
it("updates header on scroll", async () => {
  render(<Header transparent />);
  fireEvent.scroll(window, { y: 50 });
  
  await waitFor(() => {
    expect(screen.getByRole("banner")).toHaveClass("shadow-md");
  });
});
```

**Error Testing (Recommended):**

Test error handling in API route:
```typescript
it("returns 400 for missing required fields", async () => {
  const response = await POST(new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify({ name: "John" }), // missing phone, message
  }));
  
  expect(response.status).toBe(400);
  const data = await response.json();
  expect(data.error).toContain("required");
});
```

Test graceful fallbacks in data loading:
```typescript
it("returns empty array when blog directory missing", () => {
  // Mock fs.existsSync to return false
  jest.spyOn(fs, "existsSync").mockReturnValue(false);
  
  const posts = getAllPosts();
  expect(posts).toEqual([]);
});
```

**Form Testing Pattern (Recommended):**

```typescript
it("validates email format before submission", async () => {
  render(<ContactForm />);
  
  const emailInput = screen.getByLabelText(/email/i);
  fireEvent.change(emailInput, { target: { value: "invalid-email" } });
  
  // Form should still allow submit (email is optional)
  // But if email is provided, it should validate
  fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
  expect(emailInput.value).toBe("valid@example.com");
});
```

## Setup/Teardown

**Recommended Pattern:**

```typescript
describe("ContactForm", () => {
  beforeEach(() => {
    // Clear any previous state
    jest.clearAllMocks();
    
    // Mock fetch globally
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
```

## Next Steps for Implementation

1. **Install testing dependencies:**
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   npm install --save-dev @types/jest
   ```

2. **Create Jest config:** `jest.config.ts`
   ```typescript
   import type { Config } from "jest";

   const config: Config = {
     preset: "ts-jest",
     testEnvironment: "jsdom",
     moduleNameMapper: {
       "^@/(.*)$": "<rootDir>/$1",
     },
     setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
     testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
   };

   export default config;
   ```

3. **Create setup file:** `jest.setup.ts`
   ```typescript
   import "@testing-library/jest-dom";
   ```

4. **Add test script to `package.json`:**
   ```json
   "scripts": {
     "test": "jest",
     "test:watch": "jest --watch",
     "test:coverage": "jest --coverage"
   }
   ```

5. **Start with high-priority utility tests:**
   - `lib/utils.test.ts` — 100% coverage (3 functions)
   - `lib/blog.test.ts` — Test data loading and error handling
   - `lib/schema.test.ts` — Test schema generation with fixtures

---

*Testing analysis: 2026-04-03*

**Status:** No testing framework configured. Recommendations above for implementation priority and patterns based on codebase structure.

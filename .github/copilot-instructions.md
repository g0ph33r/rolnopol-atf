# Copilot Instructions

## Conventional Commits

Use the [Conventional Commits](https://www.conventionalcommits.org/) format for all commit messages:

```
<type>(<scope>): <short summary>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `revert`

**Rules:**

- `scope` is optional
- `summary` must be lowercase, imperative mood, no trailing period
- Use `!` or `BREAKING CHANGE:` footer for breaking changes

## Test Tagging

All tests must include the relevant tags from [TEST_PLAN.md](../TEST_PLAN.md). Apply tags directly in the test title string.

**Available tags:**

| Area            | Tags                                      |
| --------------- | ----------------------------------------- |
| Authentication  | `@auth`, `@register`, `@login`, `@logout` |
| Farm Management | `@farm`, `@fields`, `@animals`, `@staff`  |
| Marketplace     | `@marketplace`, `@offers`, `@purchase`    |
| Financials      | `@financials`, `@transfer`                |
| Access Control  | `@rbac`                                   |
| End-to-End      | `@e2e`                                    |
| Cross-cutting   | `@smoke`, `@negative`                     |

**Rules:**

- Every test must have at least one area tag and one cross-cutting tag (e.g. `@smoke` or `@negative`)
- Use `@smoke` for happy-path critical flows and `@negative` for error/edge cases
- Tag the test title exactly as shown in TEST_PLAN.md for traceability
- When TEST_PLAN.md is updated with new tags or scenarios, update this table accordingly

**Example:**

```ts
test('login with valid credentials sets cookies @auth @login @smoke', async ({ page }) => {
```

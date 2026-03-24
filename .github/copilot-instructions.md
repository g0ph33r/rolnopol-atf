# Copilot Instructions

## Testing

This project uses the [Playwright Test](https://playwright.dev/) framework for automated testing.

When creating or modifying tests, always review `playwright.config.ts` first to understand:

- `baseURL` and other `use` defaults
- configured projects (browsers/devices)
- global timeout and reporter settings

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

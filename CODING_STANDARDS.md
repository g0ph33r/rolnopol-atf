# Coding Standards

## Test Structure

All tests must follow the **Arrange / Act / Assert** pattern with inline comments:

```typescript
// Arrange
// set up data, navigate to page, fill inputs

// Act
// perform the action under test (e.g. click submit)

// Assert
// verify the expected outcome
```

## Page Object Pattern

1. **No assertions in Page Objects.** Never use `expect()` inside a Page Object. All verifications belong in test files only.

2. **Return locators, not results.** Expose locators so tests can assert against them directly.

   ```typescript
   // ✅ Return a locator
   successBanner() {
     return this.page.getByText("Registration successful!");
   }
   ```

3. **Use `getByTestId()` for selectors.** Avoid CSS or XPath selectors.

4. **One class per page.** Each Page Object maps to a single page or major component.

5. **Keep methods focused.** Each method should perform one UI action only. Composite methods that chain multiple page actions as a convenience (e.g. `register()`) are permitted but must be documented with a JSDoc comment explaining they are composite.

## URL Management

All page paths must be declared in `src/pages/urls.ts` and consumed via the `URLS` constant. Never hardcode URL strings directly in Page Object classes or test files.

```typescript
// ✅ Correct
readonly url = URLS.login;

// ❌ Wrong
readonly url = "/login.html";
```

## Code Documentation

Add JSDoc comments to non-obvious architectural elements: abstract base classes, composite action methods, and shared registries. Skip comments that merely restate what the code already expresses.

```typescript
/** Abstract base for all Page Object Model classes. */
export abstract class BasePage { ... }

/** Composite action: fills all fields and submits the form in one call. */
async register(...) { ... }
```

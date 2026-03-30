# Coding Standards

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

5. **Keep methods focused.** Each method should perform one UI action only.

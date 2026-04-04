# rolnopol-atf

End-to-end automated test framework for the **Rolnopol** web application, built with [Playwright](https://playwright.dev/) and TypeScript.  
See [TEST_PLAN.md](TEST_PLAN.md) for full test coverage and [CODING_STANDARDS.md](CODING_STANDARDS.md) for contribution guidelines.

---

## Requirements

- [Node.js](https://nodejs.org/) 18 or later
- A running Rolnopol server at `http://localhost:3000`

---

## Setup

```bash
npm install
npx playwright install
```

---

## Running Tests

| Command | Description |
|---|---|
| `npm test` | Run all tests headlessly |
| `npm run test:headed` | Run with a visible browser |
| `npm run test:debug` | Step-through / debug mode |
| `npm run test:report` | Open the last HTML report |

Filter by tag:

```bash
npx playwright test --grep @smoke
```

---

## Contact

Maintained by [@g0ph33r](https://github.com/g0ph33r). Open an [issue](https://github.com/g0ph33r/rolnopol-atf/issues) or pull request for questions and contributions.

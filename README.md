# rolnopol-atf

Automated test framework (ATF) for the **Rolnopol** web application, built with [Playwright](https://playwright.dev/) and TypeScript.

---

## Table of Contents

- [Project Description](#project-description)
- [System Requirements](#system-requirements)
- [Installation & Setup](#installation--setup)
- [Running Tests](#running-tests)
- [Repository Structure](#repository-structure)
- [Coding Standards](#coding-standards)
- [Contact](#contact)

---

## Project Description

`rolnopol-atf` is an end-to-end automated test suite for the Rolnopol farm-management and marketplace web application. It covers:

- **Smoke tests** – page availability and basic navigation
- **Authentication** – registration, login, and logout flows
- **Farm Management** – fields, animals, and staff CRUD operations
- **Marketplace** – offer creation, purchasing, and cancellation
- **Financials** – balance checks, transfers, and overdraft prevention
- **Access Control** – role-based permission enforcement
- **End-to-End Scenarios** – full user journeys across multiple features

The full test coverage plan is documented in [TEST_PLAN.md](TEST_PLAN.md).

---

## System Requirements

| Requirement | Version |
|---|---|
| [Node.js](https://nodejs.org/) | 18 or later |
| npm | 9 or later (bundled with Node.js) |
| A running Rolnopol server | `http://localhost:3000` |

---

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/g0ph33r/rolnopol-atf.git
   cd rolnopol-atf
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

4. **Start the Rolnopol application** on `http://localhost:3000` (refer to the Rolnopol server repository for setup instructions).

---

## Running Tests

| Command | Description |
|---|---|
| `npm test` | Run all tests headlessly |
| `npm run test:headed` | Run all tests in a visible browser window |
| `npm run test:debug` | Run tests in Playwright debug / step-through mode |
| `npm run test:report` | Open the last HTML test report in a browser |

### Running by tag

Playwright tag filtering lets you target specific test groups defined in [TEST_PLAN.md](TEST_PLAN.md):

```bash
# Smoke tests only
npx playwright test --grep @smoke

# Authentication tests
npx playwright test --grep @auth

# Negative / edge-case tests
npx playwright test --grep @negative
```

---

## Repository Structure

```
rolnopol-atf/
├── src/
│   └── pages/              # Page Object Model classes
│       ├── BasePage.ts     # Abstract base class for all page objects
│       ├── HomePage.ts
│       ├── LoginPage.ts
│       ├── RegisterPage.ts
│       ├── DocsPage.ts
│       ├── ApiDocsPage.ts
│       └── urls.ts         # Centralised URL registry
├── tests/
│   └── smokeTest.spec.ts   # Smoke test suite
├── playwright.config.ts    # Playwright configuration
├── CODING_STANDARDS.md     # Coding conventions for this project
├── TEST_PLAN.md            # Full test coverage plan
├── package.json
└── README.md
```

---

## Coding Standards

All contributors must follow the conventions defined in [CODING_STANDARDS.md](CODING_STANDARDS.md). Key rules:

- Tests follow the **Arrange / Act / Assert** pattern.
- Page Objects expose **locators**, never call `expect()` internally.
- Selectors use `getByTestId()` – no raw CSS or XPath.
- All page URLs are declared in `src/pages/urls.ts`.

---

## Contact

Maintained by [@g0ph33r](https://github.com/g0ph33r).  
For questions or contributions, please open an issue or pull request on [GitHub](https://github.com/g0ph33r/rolnopol-atf).

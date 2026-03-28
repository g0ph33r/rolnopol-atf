import { expect, test } from "@playwright/test";

test(
  "should display Rolnopol in the page title",
  { tag: "@smoke" },
  async ({ page }) => {
    const expectedTitle = /Rolnopol/;

    await page.goto("/");
    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "login page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    const expectedText = "Login";

    const response = await page.goto("/login.html");
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.getByTestId("login-submit-btn")).toContainText(
      expectedText,
    );
  },
);

test(
  "register page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    const expectedText = "Create Your User Account";

    const response = await page.goto("/register.html");
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.getByTestId("register-subtitle")).toContainText(
      expectedText,
    );
  },
);

test(
  "documentation page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    const expectedText = "Documentation";

    const response = await page.goto("/docs.html");
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.getByTestId("docs-header-title-col")).toContainText(
      expectedText,
    );
  },
);

test(
  "swagger page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    const expectedText = "API Explorer";

    const response = await page.goto("/swagger.html");
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.getByTestId("nav-api-explorer")).toContainText(
      expectedText,
    );
  },
);

test(
  "register with valid data should redirect to login page",
  { tag: ["@auth", "@register", "@smoke"] },
  async ({ page }) => {
    const uniqueEmail = `testuser${Date.now()}@example.com`;

    await page.goto("/register.html");

    await page.getByTestId("email-input").fill(uniqueEmail);
    await page.getByTestId("display-name-input").fill("Test User");
    await page.getByTestId("password-input").fill("Test1234");
    await page.getByTestId("register-submit-btn").click();

    await expect(page).toHaveURL(/login\.html/);
  },
);

import { expect, test } from "@playwright/test";
import { RegisterPage } from "../src/pages/RegisterPage";

test(
  "should display Rolnopol in the page title",
  { tag: "@smoke" },
  async ({ page }) => {
    // Arrange
    const expectedTitle = /Rolnopol/;

    // Act
    await page.goto("/");

    // Assert
    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "login page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    // Arrange
    const expectedText = "Login";

    // Act
    const response = await page.goto("/login.html");

    // Assert
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
    // Arrange
    const expectedText = "Create Your User Account";

    // Act
    const response = await page.goto("/register.html");

    // Assert
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
    // Arrange
    const expectedText = "Documentation";

    // Act
    const response = await page.goto("/docs.html");

    // Assert
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
    // Arrange
    const expectedText = "API Explorer";

    // Act
    const response = await page.goto("/swagger.html");

    // Assert
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
    // Arrange
    const registerPage = new RegisterPage(page);
    const uniqueEmail = `testuser${Date.now()}@example.com`;
    await registerPage.goto();

    // Act
    await registerPage.register(uniqueEmail, "Test1234", "Test User");

    // Assert
    await expect(registerPage.successBanner()).toBeVisible();
    await expect(page).toHaveURL(/login\.html/);
  },
);

import { expect, test } from "@playwright/test";
import { ApiDocsPage } from "../src/pages/ApiDocsPage";
import { DocsPage } from "../src/pages/DocsPage";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";
import { RegisterPage } from "../src/pages/RegisterPage";

test(
  "should display Rolnopol in the page title",
  { tag: "@smoke" },
  async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);
    const expectedTitle = /Rolnopol/;

    // Act
    await homePage.goto();

    // Assert
    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "login page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const expectedText = "Login";

    // Act
    const response = await loginPage.goto();

    // Assert
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(loginPage.submitButton()).toContainText(expectedText);
  },
);

test(
  "register page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    // Arrange
    const registerPage = new RegisterPage(page);
    const expectedText = "Create Your User Account";

    // Act
    const response = await registerPage.goto();

    // Assert
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(registerPage.subtitle()).toContainText(expectedText);
  },
);

test(
  "documentation page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    // Arrange
    const docsPage = new DocsPage(page);
    const expectedText = "Documentation";

    // Act
    const response = await docsPage.goto();

    // Assert
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(docsPage.headerTitle()).toContainText(expectedText);
  },
);

test(
  "swagger page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    // Arrange
    const swaggerPage = new ApiDocsPage(page);
    const expectedText = "API Explorer";

    // Act
    const response = await swaggerPage.goto();

    // Assert
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(swaggerPage.apiExplorerNav()).toContainText(expectedText);
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

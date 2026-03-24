import { expect, test } from "@playwright/test";

test(
  "should display Rolnopol in the page title",
  { tag: "@smoke" },
  async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Rolnopol/);
  },
);

test(
  "login page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    const response = await page.goto("/login.html");
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.locator("body")).toBeVisible();
  },
);

test(
  "register page should be visible and loaded",
  { tag: "@smoke" },
  async ({ page }) => {
    const response = await page.goto("/register.html");
    await expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page).toHaveURL(/register\.html/);
    await expect(page.locator("body")).toBeVisible();
  },
);

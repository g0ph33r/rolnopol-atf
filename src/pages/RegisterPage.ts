import { type Page } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/register.html");
  }

  async fillEmail(email: string) {
    await this.page.getByTestId("email-input").fill(email);
  }

  async fillDisplayName(name: string) {
    await this.page.getByTestId("display-name-input").fill(name);
  }

  async fillPassword(password: string) {
    await this.page.getByTestId("password-input").fill(password);
  }

  async submit() {
    await this.page.getByTestId("register-submit-btn").click();
  }

  async register(email: string, password: string, displayName?: string) {
    await this.fillEmail(email);
    if (displayName) {
      await this.fillDisplayName(displayName);
    }
    await this.fillPassword(password);
    await this.submit();
  }

  successBanner() {
    return this.page.getByText("Registration successful!");
  }
}

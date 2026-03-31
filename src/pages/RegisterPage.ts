import { type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { URLS } from "./urls";

export class RegisterPage extends BasePage {
  readonly url = URLS.register;

  constructor(page: Page) {
    super(page);
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

  /** Composite action: fills all required fields and submits the registration form in one call. */
  async register(email: string, password: string, displayName?: string) {
    await this.fillEmail(email);
    if (displayName) {
      await this.fillDisplayName(displayName);
    }
    await this.fillPassword(password);
    await this.submit();
  }

  subtitle() {
    return this.page.getByTestId("register-subtitle");
  }

  successBanner() {
    return this.page.getByText("Registration successful!");
  }
}

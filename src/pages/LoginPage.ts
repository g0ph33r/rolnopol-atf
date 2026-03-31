import { type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly url = "/login.html";

  constructor(page: Page) {
    super(page);
  }

  submitButton() {
    return this.page.getByTestId("login-submit-btn");
  }
}

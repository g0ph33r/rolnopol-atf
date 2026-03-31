import { type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { URLS } from "./urls";

export class LoginPage extends BasePage {
  readonly url = URLS.login;

  constructor(page: Page) {
    super(page);
  }

  submitButton() {
    return this.page.getByTestId("login-submit-btn");
  }
}

import { type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ApiDocsPage extends BasePage {
  readonly url = "/swagger.html";

  constructor(page: Page) {
    super(page);
  }

  apiExplorerNav() {
    return this.page.getByTestId("nav-api-explorer");
  }
}

import { type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { URLS } from "./urls";

export class ApiDocsPage extends BasePage {
  readonly url = URLS.apiDocs;

  constructor(page: Page) {
    super(page);
  }

  apiExplorerNav() {
    return this.page.getByTestId("nav-api-explorer");
  }
}

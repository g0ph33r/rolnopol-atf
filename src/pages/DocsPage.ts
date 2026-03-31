import { type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DocsPage extends BasePage {
  readonly url = "/docs.html";

  constructor(page: Page) {
    super(page);
  }

  headerTitle() {
    return this.page.getByTestId("docs-header-title-col");
  }
}

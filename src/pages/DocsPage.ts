import { type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { URLS } from "./urls";

export class DocsPage extends BasePage {
  readonly url = URLS.docs;

  constructor(page: Page) {
    super(page);
  }

  headerTitle() {
    return this.page.getByTestId("docs-header-title-col");
  }
}

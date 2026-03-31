import { type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { URLS } from "./urls";

export class HomePage extends BasePage {
  readonly url = URLS.home;

  constructor(page: Page) {
    super(page);
  }
}

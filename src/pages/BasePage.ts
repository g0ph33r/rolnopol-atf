import { type Page, type Response } from "@playwright/test";

export abstract class BasePage {
  readonly page: Page;
  abstract readonly url: string;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<Response | null> {
    return this.page.goto(this.url);
  }
}

import { type Page, type Response } from "@playwright/test";

/**
 * Abstract base for all Page Object Model classes.
 * Each subclass declares a `url` that is resolved against `baseURL` at navigation time.
 */
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

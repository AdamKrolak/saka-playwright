import { Locator, Page } from "@playwright/test";

export class FooterElement {
  readonly footerSection: Locator;
  constructor(private page: Page) {
    this.footerSection = this.page.locator("footer");
  }
}

import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly errorMessage: Locator;

  constructor(private page: Page) {
    this.errorMessage = this.page
      .getByRole("region", { name: "Notifications (F8)" })
      .getByRole("status");
  }
}

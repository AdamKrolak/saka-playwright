import { Locator, Page } from "@playwright/test";

export class HomePage {
  //---- Hero Banner-----
  readonly heroBanner: Locator;
  readonly heroBannerText: Locator;
  readonly heroBannerButton: Locator;

  readonly gridBuyACar: Locator;
  readonly gridSellYourCar: Locator;
  readonly gridProductsAndServices: Locator;

  constructor(private page: Page) {
    //---- Hero Banner-----
    this.heroBanner = this.page
      .locator("div")
      .filter({ hasText: "Finland's largest used car" })
      .nth(4);
    this.heroBannerText = this.page.getByRole("heading", {
      name: "Finland's largest used car",
    });
    this.heroBannerButton = this.page
      .getByRole("link", { name: "See all used cars" })
      .nth(1);

    //---- Grid section-----
    this.gridBuyACar = this.page.getByRole("link", {
      name: "All used cars",
      exact: true,
    });
    this.gridSellYourCar = this.page.getByRole("link", {
      name: "Sell your car",
      exact: true,
    });
    this.gridProductsAndServices = this.page.getByRole("link", {
      name: "See all products and services",
    });
  }
}

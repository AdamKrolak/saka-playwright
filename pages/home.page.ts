import { Locator, Page } from "@playwright/test";

export class HomePage {
  //---- Hero Banner-----
  readonly heroBanner: Locator;
  readonly heroBannerText: Locator;
  readonly heroBannerButton: Locator;
  //---- Grid section-----
  readonly gridBuyACar: Locator;
  readonly gridSellYourCar: Locator;
  readonly gridProductsAndServices: Locator;
  //---- Car types sections and sliders-----
  readonly electricCarsHeading: Locator;
  readonly electricCarsSlider: Locator;
  readonly premiumCarsHeading: Locator;
  readonly premiumCarsSlider: Locator;
  readonly familyCarsHeading: Locator;
  readonly familyCarsSlider: Locator;
  readonly recentlyViewedCarsSection: Locator;
  readonly recentlyViewedCarsSlider: Locator;

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

    //---- Car types sections and sliders-----
    this.electricCarsHeading = this.page.getByRole("heading", {
      name: "Electric cars",
    });
    this.electricCarsSlider = this.page
      .locator(".flex.gap-4.md\\:gap-6")
      .first();
    this.premiumCarsHeading = this.page.getByText("Premium carsSee more");
    this.premiumCarsSlider = this.page.locator(
      "div:nth-child(3) > .w-full.grid-cols > div > .overflow-hidden.pb-8 > .flex.gap-4"
    );
    this.familyCarsHeading = this.page.getByRole("heading", {
      name: "Family cars",
    });
    this.familyCarsSlider = this.page.locator(
      "div:nth-child(5) > .w-full.grid-cols > div > .overflow-hidden.pb-8 > .flex.gap-4"
    );
    this.recentlyViewedCarsSection = this.page.getByRole("heading", {
      name: "Recently viewed cars",
    });
    this.recentlyViewedCarsSlider = this.page.locator(
      "div:nth-child(5) > .w-full.grid-cols > div > .overflow-hidden.pb-8 > .flex.gap-4"
    );
  }
}

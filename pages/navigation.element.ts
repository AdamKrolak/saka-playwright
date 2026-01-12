import { Locator, Page } from "@playwright/test";

export class NavigationElement {
  readonly mainNavigation: Locator;
  readonly expandedMenu: Locator;
  readonly usedCarsButton: Locator;
  readonly carBrandsButton: Locator;
  readonly sellYourCarButton: Locator;
  readonly sellYourCarLink: Locator;
  readonly productsAndServicesButton: Locator;
  readonly additionalServicesLink: Locator;
  readonly newsAndCampaignsLink: Locator;
  readonly salesLocationsLink: Locator;
  readonly companyButton: Locator;
  readonly contactUsLink: Locator;
  readonly searchButton: Locator;
  readonly homeLink: Locator;
  readonly mySakaButton: Locator;
  readonly languageSelectionButton: Locator;
  readonly petrolCarsButton: Locator;
  readonly audiSubMenu: Locator;
  readonly audi: Locator;

  constructor(private page: Page) {
    this.mainNavigation = this.page.getByRole("navigation", { name: "Main" });
    this.expandedMenu = this.page.locator(".relative.w-full.p-2");
    this.usedCarsButton = this.page.getByRole("button", { name: "Used Cars" });
    this.carBrandsButton = this.page.getByRole("button", {
      name: "Car Brands",
    });
    this.sellYourCarButton = this.page.getByRole("button", {
      name: "Sell your car",
    });
    this.sellYourCarLink = this.page.getByRole("link", {
      name: "Sell your car",
    });
    this.productsAndServicesButton = this.page.getByRole("button", {
      name: "Products & Services",
    });
    this.additionalServicesLink = this.page.getByRole("link", {
      name: "Additional services for your",
    });
    this.newsAndCampaignsLink = this.page.getByRole("link", {
      name: "News and Campaigns",
    });
    this.salesLocationsLink = this.page.getByRole("link", {
      name: "Sales Locations",
    });
    this.companyButton = this.page.getByRole("button", { name: "Company" });
    this.contactUsLink = this.page
      .getByLabel("Main")
      .getByRole("link", { name: "Contact us" });
    this.searchButton = this.page.locator("#radix-_R_6it6ivb_-trigger-search");
    this.homeLink = this.page.getByRole("link", { name: "Home", exact: true });
    this.mySakaButton = this.page.getByRole("button", { name: "My Saka" });
    this.languageSelectionButton = this.page.getByRole("button", {
      name: "Open language selection",
    });
    this.petrolCarsButton = this.page.getByRole("link", {
      name: "Petrol Cars",
      exact: true,
    });
    this.audi = this.page.getByRole("button", {
      name: "Open submenu for Audi",
    });
    this.audiSubMenu = this.page.getByRole("link", { name: "See all models" });
  }
  this;

  async selectCarBrand(brand: string): Promise<void> {
    await this.carBrandsButton.click();
    await this.page.locator("div").filter({ hasText: brand }).nth(1).click();
  }
}

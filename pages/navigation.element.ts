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
  readonly languageSelectionButtonEn: Locator;
  readonly languageSelectionButtonFi: Locator;
  readonly petrolCarsButton: Locator;
  readonly audiSubMenu: Locator;
  readonly audi: Locator;
  readonly finlandFlag: Locator;
  readonly swedenFlag: Locator;
  readonly logo: Locator;

  constructor(private page: Page) {
    //----Section - Main Navigation-----
    this.mainNavigation = this.page.getByRole("navigation", { name: "Main" });
    this.expandedMenu = this.page.locator(".relative.w-full.p-2");
    this.logo = this.page.getByRole("link", { name: "Saka", exact: true });
    //----Section - Used cars-----
    this.usedCarsButton = this.page.getByRole("button", {
      name: /Used Cars|Vaihtoautot/,
    });
    this.carBrandsButton = this.page.getByRole("button", {
      name: /Car Brands|Automerkit/,
    });
    this.petrolCarsButton = this.page.getByRole("link", {
      name: /Petrol Cars|Bensiiniautot/,
      exact: true,
    });
    this.audi = this.page.getByRole("button", {
      name: /Open submenu for Audi|Avaa alivalikko kohteelle Audi/,
    });
    this.audiSubMenu = this.page.getByRole("link", {
      name: /See all models|Merkin kaikki mallit/,
    });
    //----Section - Sell your car-----
    this.sellYourCarButton = this.page.getByRole("button", {
      name: /Sell your car|Myy autosi/,
    });
    this.sellYourCarLink = this.page.getByRole("link", {
      name: /Sell your car|Myy autosi/,
    });
    //----Section - Products & Services-----
    this.productsAndServicesButton = this.page.getByRole("button", {
      name: /Products & Services|Tuotteet ja palvelut/,
    });
    this.additionalServicesLink = this.page.getByRole("link", {
      name: /Additional services for your|Autoilun lisäpalvelut/,
    });
    //----Section - News and Campaigns-----
    this.newsAndCampaignsLink = this.page.getByRole("link", {
      name: /News and Campaigns|Uutiset ja kampanjat/,
    });
    //----Section - Sales Locations-----
    this.salesLocationsLink = this.page.getByRole("link", {
      name: /Sales Locations|Toimipisteet/,
    });
    //----Section - Company-----
    this.companyButton = this.page.getByRole("button", {
      name: /Company|Yritys/,
    });
    this.contactUsLink = this.page
      .getByLabel("Main")
      .getByRole("link", { name: /Contact us|Yhteydenotto/ });
    //----Section - Search-----
    this.searchButton = this.page.locator("#radix-_R_6it6ivb_-trigger-search");
    //----Section - My Account-----
    this.homeLink = this.page.getByRole("link", {
      name: /Home|Koti/,
      exact: true,
    });
    this.mySakaButton = this.page.getByRole("button", {
      name: /My Saka|Oma Saka/,
    });
    this.languageSelectionButtonEn = this.page.getByRole("button", {
      name: /Open language selection|Avaa kielivalinta/,
    });
    this.languageSelectionButtonFi = this.page.getByRole("button", {
      name: /Avaa kielivalinta|Open language selection/,
    });

    this.finlandFlag = this.page.getByRole("menuitem", {
      name: /Switch to FI FI|Nykyinen kieli: FI/,
    });
    this.swedenFlag = this.page.getByRole("menuitem", {
      name: /Switch to SV SV|Vaihda kieleen SV SV/,
    });
  }
}

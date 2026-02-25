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

  //----Fuel types section-----
  readonly fuelTypesHeading: Locator;
  readonly fuelTypesTitle: Locator;
  readonly electricVehicleLink: Locator;
  readonly hybridLink: Locator;
  readonly petrolLink: Locator;
  readonly dieselLink: Locator;

  //-----Additional services section-----
  readonly additionalServicesHeading: Locator;
  readonly sakaVarma: Locator;
  readonly sakaKasko: Locator;
  readonly rahoitus: Locator;
  readonly kotiintoimitus: Locator;

  constructor(private page: Page) {
    //---- Hero Banner-----
    this.heroBanner = this.page
      .locator("div")
      .filter({
        hasText:
          /Finland's largest used car dealer|Suomen suurin vaihtoautokauppa!/,
      })
      .nth(4);
    this.heroBannerText = this.page.getByRole("heading", {
      name: /Finland's largest used car dealer|Suomen suurin vaihtoautokauppa!/,
    });
    this.heroBannerButton = this.page
      .getByRole("link", { name: /See all used cars|Katso kaikki vaihtoautot/ })
      .nth(1);

    //---- Grid section-----
    this.gridBuyACar = this.page.getByRole("link", {
      name: /All used cars|Kaikki vaihtoautot/,
      exact: true,
    });
    this.gridSellYourCar = this.page.getByRole("link", {
      name: /Sell your car|Myy autosi/,
      exact: true,
    });
    this.gridProductsAndServices = this.page.getByRole("link", {
      name: /See all products and services|Katso kaikki tuotteet ja palvelut/,
    });

    //---- Car types sections and sliders-----
    this.electricCarsHeading = this.page.getByRole("heading", {
      name: /Electric cars|Sähköautot/,
    });
    this.electricCarsSlider = this.page
      .locator(".flex.gap-4.md\\:gap-6")
      .first();
    this.premiumCarsHeading = this.page.getByRole("heading", {
      name: /Premium cars|Premium-autot/,
    });
    this.premiumCarsSlider = this.page.locator(
      "div:nth-child(3) > .w-full.grid-cols > div > .overflow-hidden.pb-8 > .flex.gap-4",
    );
    this.familyCarsHeading = this.page.getByRole("heading", {
      name: /Family cars|Perheautot/,
    });
    this.familyCarsSlider = this.page.locator(
      "div:nth-child(5) > .w-full.grid-cols > div > .overflow-hidden.pb-8 > .flex.gap-4",
    );
    this.recentlyViewedCarsSection = this.page.getByRole("heading", {
      name: /Recently viewed cars|Viimeksi katsellut autot/,
    });
    this.recentlyViewedCarsSlider = this.page.locator(
      "div:nth-child(5) > .w-full.grid-cols > div > .overflow-hidden.pb-8 > .flex.gap-4",
    );

    //----Fuel types section-----
    this.fuelTypesHeading = this.page.getByRole("heading", {
      name: /Explore different fuel types|Tutustu käyttövoimiin/,
    });
    this.fuelTypesTitle = this.page.getByText(
      /Explore different fuel types Electric Hybrid Petrol Diesel|Tutustu käyttövoimiin/,
    );
    this.electricVehicleLink = this.page.getByRole("link", {
      name: /Electric Vehicle Electric|Sähkoauto Sähkö/,
    });
    this.hybridLink = this.page.getByRole("link", {
      name: /Hybrid Hybrid|Hybridi Hybridi/,
    });
    this.petrolLink = this.page.getByRole("link", {
      name: /Petrol Petrol|Bensa Bensa/,
    });
    this.dieselLink = this.page.getByRole("link", {
      name: /Diesel Diesel|Diesel Diesel/,
    });

    //-----Additional services-----
    this.additionalServicesHeading = this.page.getByRole("heading", {
      name: /Our additional services to|Lisää palveluitamme/,
    });
    this.sakaVarma = this.page
      .getByRole("link", { name: /SakaVarma|SakaVarma/ })
      .first();
    this.sakaKasko = this.page
      .getByRole("link", { name: /SakaKasko|SakaKasko/ })
      .first();
    this.rahoitus = this.page.getByRole("link", { name: /Rahoitus|Rahoitus/ });
    this.kotiintoimitus = this.page.getByRole("link", {
      name: /Kotiintoimitus Kotiintoimitus|Kotiintoimitus Kotiintoimitus/,
    });
  }
}

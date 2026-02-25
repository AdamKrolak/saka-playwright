import { Locator, Page } from "@playwright/test";

export class CarListingPage {
  // Vehicle Title
  readonly vehicleTitle: Locator;
  readonly vehicleSubtitle: Locator;

  // Specifications
  readonly powerSpec: Locator;
  readonly mileageSpec: Locator;
  readonly evRangeSpec: Locator;
  readonly batteryCapacitySpec: Locator;

  // Pricing Information
  readonly monthlyPrice: Locator;
  readonly totalPrice: Locator;

  // Image Gallery
  readonly imageGallery: Locator;
  readonly previousSlideButton: Locator;
  readonly nextSlideButton: Locator;

  constructor(private page: Page) {
    // Vehicle Title
    this.vehicleTitle = this.page.getByRole("heading", {
      name: "Volkswagen ID.4",
      level: 1,
    });
    this.vehicleSubtitle = this.page.getByRole("heading", {
      name: "GTX Dual Motor AWD Business, akku 82 kWh",
      level: 2,
    });

    // Specifications
    this.powerSpec = this.page
      .getByText("Power (hp)")
      .locator("..")
      .getByRole("paragraph");
    this.mileageSpec = this.page
      .getByText("Mileage", { exact: true })
      .locator("..")
      .getByRole("paragraph");
    this.evRangeSpec = this.page
      .getByText("EV Range")
      .locator("..")
      .getByRole("paragraph")
      .first();
    this.batteryCapacitySpec = this.page
      .getByText("Battery Capacity")
      .locator("..")
      .getByRole("paragraph")
      .first();

    // Pricing Information
    this.monthlyPrice = this.page
      .locator("div")
      .filter({ hasText: /^from\d+€\/mo$/ });
    this.totalPrice = this.page
      .locator("span")
      .filter({ hasText: /\d+\s*€/ })
      .first();

    // Image Gallery
    this.imageGallery = this.page.locator("section").filter({
      has: this.page.getByRole("button", { name: "Previous slide" }),
    });
    this.previousSlideButton = this.page
      .getByRole("button", {
        name: "Previous slide",
      })
      .first();
    this.nextSlideButton = this.page
      .getByRole("button", {
        name: "Next slide",
      })
      .first();
  }
}

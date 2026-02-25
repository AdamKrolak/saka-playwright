import { test, expect } from "@playwright/test";
import { acceptCookies } from "../../fixture/cookies.fixture";
import { CarListingPage } from "../../pages/carListing.page";

test.describe("Car Listing Page - Volkswagen ID.4", () => {
  let carListingPage: CarListingPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("/en/car/volkswagen-id.4-360905");
    await acceptCookies(page);
    carListingPage = new CarListingPage(page);
  });

  test("Verify car listing page displays correct vehicle information", async ({
    page,
  }) => {
    // Verify vehicle title displays 'Volkswagen ID.4'
    await expect(carListingPage.vehicleTitle).toBeVisible();
    await expect(carListingPage.vehicleTitle).toHaveText("Volkswagen ID.4");

    // Verify vehicle specifications are displayed (Power, Mileage, EV Range, Battery Capacity)
    await expect(carListingPage.powerSpec).toBeVisible();
    await expect(carListingPage.powerSpec).toContainText("hp");

    await expect(carListingPage.mileageSpec).toBeVisible();
    await expect(carListingPage.mileageSpec).toContainText("km");

    await expect(carListingPage.evRangeSpec).toBeVisible();
    await expect(carListingPage.evRangeSpec).toContainText("km");

    await expect(carListingPage.batteryCapacitySpec).toBeVisible();
    await expect(carListingPage.batteryCapacitySpec).toContainText("kWh");

    // Verify pricing information is displayed
    await expect(carListingPage.monthlyPrice).toBeVisible();
    await expect(carListingPage.totalPrice).toBeVisible();

    // Verify image gallery is present with navigation controls
    await expect(carListingPage.imageGallery).toBeVisible();
    await expect(carListingPage.previousSlideButton).toBeVisible();
    await expect(carListingPage.nextSlideButton).toBeVisible();
  });
});

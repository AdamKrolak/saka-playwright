import { test, expect } from "@playwright/test";
import { acceptCookies } from "../../fixture/cookies.fixture";
import { HomePage } from "../../pages/home.page";

test.describe("Home Page test", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    await page.goto("/fi");
    await acceptCookies(page);
    homePage = new HomePage(page);
  });

  test("Verify that hero banner is visible and has correct text and button", async ({
    page,
  }) => {
    await expect(homePage.heroBanner).toBeVisible();
    // await expect(homePage.heroBannerText).toContainText(
    //   /Finland's largest used car dealer| Suomen suurin vaihtoautokauppa!/,
    // );

    await expect(homePage.heroBannerButton).toBeVisible();
    await homePage.heroBannerButton.click();
    await expect(page).toHaveURL(/\/(en\/used-cars|fi\/vaihtoautot)/);
  });

  test("Verify that grid sections are visible", async ({ page }) => {
    await expect(homePage.gridBuyACar).toBeVisible();
    await expect(homePage.gridBuyACar).toHaveAttribute(
      "href",
      /\/(en\/used-cars|fi\/vaihtoautot)/,
    );
    await expect(homePage.gridSellYourCar).toBeVisible();
    await expect(homePage.gridSellYourCar).toHaveAttribute(
      "href",
      /\/(en\/sell-your-car|fi\/myy-autosi)/,
    );
    await expect(homePage.gridProductsAndServices).toBeVisible();
    await expect(homePage.gridProductsAndServices).toHaveAttribute(
      "href",
      /\/(en\/products-and-services|fi\/tuotteet-ja-palvelut)/,
    );
  });

  test("Verify that car types sections and sliders are visible on homepage", async ({
    page,
  }) => {
    await page.pause();
    await page.evaluate(() => window.scrollBy(0, 500));
    await expect(homePage.electricCarsHeading).toBeVisible();

    await expect(homePage.electricCarsSlider).toBeVisible();
    await expect(homePage.premiumCarsHeading).toBeVisible();
    await expect(homePage.premiumCarsSlider).toBeVisible();
    await expect(homePage.familyCarsHeading).toBeVisible();
    await expect(homePage.familyCarsSlider).toBeVisible();
    await expect(homePage.recentlyViewedCarsSection).toBeVisible();
    await expect(homePage.recentlyViewedCarsSlider).toBeVisible();
  });

  test("Verify fuel types section is visible and has correct links", async ({
    page,
  }) => {
    await page.pause();
    await page.evaluate(() => window.scrollBy(0, 600));
    await expect(homePage.fuelTypesHeading).toBeVisible();
    await expect(homePage.fuelTypesTitle).toBeVisible();
    await expect(homePage.electricVehicleLink).toBeVisible();
    await expect(homePage.electricVehicleLink).toHaveAttribute(
      "href",
      /\/(en\/electric-cars|fi\/sahkoautot)/,
    );
    await expect(homePage.hybridLink).toHaveAttribute(
      "href",
      /\/(en\/hybrid-cars|fi\/hybridiautot)/,
    );
    await expect(homePage.petrolLink).toHaveAttribute(
      "href",
      /\/(en\/petrol-cars|fi\/bensa-autot)/,
    );
    await expect(homePage.dieselLink).toHaveAttribute(
      "href",
      /\/(en\/diesel-cars|fi\/dieselautot)/,
    );
  });

  test("Verify additional services section and links", async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 4000));
    await expect(homePage.additionalServicesHeading).toBeVisible();
    await expect(homePage.sakaVarma).toBeVisible();
    await expect(homePage.sakaKasko).toBeVisible();
    await expect(homePage.rahoitus).toBeVisible();
    await expect(homePage.kotiintoimitus).toBeVisible();
  });
});

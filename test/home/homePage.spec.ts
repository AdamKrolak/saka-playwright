import { test, expect } from "@playwright/test";
import { acceptCookies } from "../../fixture/cookies.fixture";
import { HomePage } from "../../pages/home.page";

test.describe("Home Page test", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
    await acceptCookies(page);
    homePage = new HomePage(page);
  });

  test("Verify that hero banner is visible and has correct text and button", async ({
    page,
  }) => {
    await expect(homePage.heroBanner).toBeVisible();
    await expect(homePage.heroBannerText).toHaveText(
      "Finland's largest used car dealer"
    );

    await expect(homePage.heroBannerButton).toBeVisible();
    await homePage.heroBannerButton.click();
    await expect(page).toHaveURL("/en/used-cars");
  });

  test("Verify that grid sections are visible", async ({ page }) => {
    await expect(homePage.gridBuyACar).toBeVisible();
    await expect(homePage.gridBuyACar).toHaveAttribute("href", "/en/used-cars");
    await expect(homePage.gridSellYourCar).toBeVisible();
    await expect(homePage.gridSellYourCar).toHaveAttribute(
      "href",
      "/en/sell-your-car"
    );
    await expect(homePage.gridProductsAndServices).toBeVisible();
    await expect(homePage.gridProductsAndServices).toHaveAttribute(
      "href",
      "/en/products-and-services"
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
});

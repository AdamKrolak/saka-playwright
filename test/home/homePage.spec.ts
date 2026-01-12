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
});

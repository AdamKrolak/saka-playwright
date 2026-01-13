import { test, expect } from "@playwright/test";
import { acceptCookies } from "../../fixture/cookies.fixture";
import { NavigationElement } from "../../pages/navigation.element";

test.describe("Main navigation test", () => {
  let navigationElement: NavigationElement;
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
    await acceptCookies(page);
    navigationElement = new NavigationElement(page);
  });

  test("The user is able to open the main navigation menu and navigate to different sections", async ({
    page,
  }) => {
    //-----First tab - Used cars - Petrol cars-----
    await expect(navigationElement.mainNavigation).toBeVisible();
    await navigationElement.usedCarsButton.hover();
    await expect(navigationElement.expandedMenu).toBeVisible();
    await navigationElement.petrolCarsButton.click();
    await expect(page).toHaveURL("/en/petrol-cars");
    //-----Second tab - Car Brands - Audi-----
    await navigationElement.carBrandsButton.hover();
    await navigationElement.audi.click();
    await navigationElement.audiSubMenu.click();
    await expect(page).toHaveURL("/en/cars/audi");
    //-----Sell your car-----
    await navigationElement.sellYourCarButton.hover();
    await navigationElement.sellYourCarLink.click();
    await expect(page).toHaveURL("/en/sell-your-car");
    //-----Additional services-----
    await navigationElement.productsAndServicesButton.hover();
    await navigationElement.additionalServicesLink.click();
    await expect(page).toHaveURL("/en/products-and-services");
    //-----News and Campaigns-----
    await navigationElement.newsAndCampaignsLink.click();
    await expect(page).toHaveURL("/en/campaigns-and-news");
    //-----Sales Locations-----
    await navigationElement.salesLocationsLink.click();
    await expect(page).toHaveURL("/en/locations");
    //-----Contact us-----
    await navigationElement.companyButton.click();
    await navigationElement.contactUsLink.click();
    await expect(page).toHaveURL("/en/customer-support/contact-request");
  });

  test("The user is able to switch language of the website", async ({
    page,
  }) => {
    await navigationElement.languageSelectionButtonEn.click();
    await navigationElement.finlandFlag.click();
    await expect(page).toHaveURL("/fi");
    await navigationElement.languageSelectionButtonFi.click();
    await navigationElement.swedenFlag.click();
    await expect(page).toHaveURL("/sv");
  });

  test.only("Verify icons and logo are visible in the main navigation", async ({
    page,
  }) => {
    await expect(navigationElement.logo).toBeVisible();
    await expect(navigationElement.searchButton).toBeVisible();
    await expect(navigationElement.homeLink).toBeVisible();
    await expect(navigationElement.mySakaButton).toBeVisible();
  });
});

import { test, expect, devices } from "@playwright/test";

test.describe("Saka.fi - Full Navigation and Language Switch Test", () => {
  test("Open website, accept cookies, open menu, and switch language to English", async ({
    page,
  }) => {
    // Set mobile viewport to see the hamburger menu
    await page.setViewportSize({ width: 375, height: 667 });

    // Step 1: Open saka.fi website (Finnish version)
    await page.goto("https://www.saka.fi/fi");

    // Step 2: Accept all cookies
    await page.getByRole("button", { name: "Allow all" }).click();

    // Verify cookies were accepted by checking the dialog is gone
    await expect(page.locator("#CybotCookiebotDialog")).not.toBeVisible();

    // Step 3: Open the menu (hamburger menu)
    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Verify menu is opened by checking for menu items
    const menuPanel = page.getByRole("menu");
    await expect(menuPanel).toBeVisible();

    // Step 4: Click on Finnish flag to open language selector
    const languageButton = page.getByRole("button", {
      name: "Avaa kielivalinta",
    });
    await expect(languageButton).toBeVisible();
    await languageButton.click();

    // Step 5: Switch to English by clicking EN button
    // The EN option appears in the language dropdown menu as a menuitem
    const englishButton = page.getByRole("menuitem", { name: /EN/ });
    await expect(englishButton).toBeVisible();
    await englishButton.click();

    // Step 6: Verify the language has been switched to English
    await expect(page).toHaveURL(/.*\/en/);

    // Additional verification: Check that page title is in English
    await expect(page).toHaveTitle(/Finland's largest used car dealer/);

    // Verify the hamburger menu button is visible on English page
    const menuButtonEn = page.getByRole("button", {
      name: "Open menu",
    });
    await expect(menuButtonEn).toBeVisible();
  });

  test("Verify all menu sections are visible after opening menu", async ({
    page,
  }) => {
    // Set mobile viewport to see the hamburger menu
    await page.setViewportSize({ width: 375, height: 667 });

    // Open Finnish version
    await page.goto("https://www.saka.fi/fi");

    // Accept cookies
    await page.getByRole("button", { name: "Allow all" }).click();

    // Open menu
    await page.getByRole("button", { name: "Open menu" }).click();

    // Verify menu sections are visible (in Finnish)
    const menuPanel = page.getByRole("menu");
    await expect(menuPanel).toBeVisible();

    // Check for main menu items in Finnish
    await expect(
      page.getByRole("button", { name: "Vaihtoautot" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Automerkit" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Myy autosi" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Tuotteet ja palvelut" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Uutiset ja kampanjat" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Toimipisteet" }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Yritys" })).toBeVisible();
  });

  test("Verify language switcher shows correct options", async ({ page }) => {
    // Set mobile viewport to see the hamburger menu
    await page.setViewportSize({ width: 375, height: 667 });

    // Open Finnish version
    await page.goto("https://www.saka.fi/fi");

    // Accept cookies
    await page.getByRole("button", { name: "Allow all" }).click();

    // Open menu
    await page.getByRole("button", { name: "Open menu" }).click();

    // Click on language selector
    await page.getByRole("button", { name: "Avaa kielivalinta" }).click();

    // Verify EN and SV options are visible
    await expect(page.getByRole("menuitem", { name: /EN/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /SV/ })).toBeVisible();
  });
});

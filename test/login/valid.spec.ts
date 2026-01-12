import { test, expect } from "@playwright/test";
import { userData } from "../../test-data/emailTest.data";
import { acceptCookies } from "../../fixture/cookies.fixture";
import { login } from "../../fixture/login.fixture";
import { LoginPage } from "../../pages/login.page";

test.describe("Login with valid credentials", () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto("/en");
    await acceptCookies(page);
  });
  test("The user is able to login using a valid email and password", async ({
    page,
  }) => {
    // Actions
    await login(page, userData.validEmail, userData.validPassword);
    // Assertion
    await expect(loginPage.errorMessage).not.toBeVisible();
    await expect(page).toHaveURL("/fi/oma-saka");
    await expect(
      page.getByRole("heading", { name: "Hei Adam, tervetuloa OmaSakaan" })
    ).toContainText("Adam");
    await page.getByRole("link", { name: "Petrol Cars", exact: true }).click();
  });
});

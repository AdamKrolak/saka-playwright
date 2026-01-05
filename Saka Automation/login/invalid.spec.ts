import { test, expect } from "@playwright/test";
import { userData } from "../../test-data/emailTest.data";
import { messages } from "../../test-data/messages.data";
import { acceptCookies } from "../../fixture/cookies.fixture";
import { login } from "../../fixture/login.fixture";

test.describe("Login with invalid credentials", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
    await acceptCookies(page);
  });

  test("The user is not able to login using an invalid email", async ({
    page,
  }) => {
    // Actions
    await login(page, userData.invalidEmail, userData.validPassword);
    // Assertion
    await expect(
      page
        .getByRole("region", { name: "Notifications (F8)" })
        .getByRole("status")
    ).toContainText(messages.loginError);
  });

  test("The user is not able to login using an invalid password", async ({
    page,
  }) => {
    // Actions
    await login(page, userData.validEmail, userData.invalidPassword);

    // Assertion
    await expect(
      page
        .getByRole("region", { name: "Notifications (F8)" })
        .getByRole("status")
    ).toContainText(messages.loginError);
  });
});

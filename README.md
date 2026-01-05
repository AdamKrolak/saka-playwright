# saka-playwright

Saka - Playwright Automated Tests 🧪

1. Description
   Saka is a comprehensive suite of automated tests built using Playwright to ensure the quality and reliability of our web applications. This project exists to automate end-to-end testing workflows, reduce manual testing efforts, and catch regressions early in the development cycle.

2. 🚀 Problem it solves:
   Manual testing is time-consuming and prone to human error. Saka automates browser interactions to validate application functionality across multiple browsers and devices, improving test coverage and accelerating release cycles.

3. Type of project: Automation tests
   Key technologies: Playwright, TypeScript, Node.js

4. Features / Scope
   Cross-browser testing (Chromium, Firefox, WebKit)
   Automated UI interaction and validation
   Parallel test execution for faster feedback
   Integration with CI/CD pipelines
   Screenshots on test failures
   Configurable test environments and data inputs
   Support for both desktop and mobile viewport testing

5. Tech Stack
   Playwright Browser automation framework
   Node.js Runtime environment
   TypeScript Test scripting language
   CI/CD tools (e.g., GitHub Actions, Jenkins) Automated test execution
   Allure / Other Reporting tools Test result reporting and visualization

6. Prerequisites
   Node.js (version 14 or higher recommended)
   npm or yarn package manager
   Supported browsers installed (Chromium, Firefox, WebKit) — Playwright can install these automatically
   Access to the application under test (URL, credentials if needed)

7. Installation
   Follow these steps to set up the Saka Playwright test suite locally:
   1️⃣ Create a folder for the project (optional)

mkdir "Playwright Saka"
cd "Playwright Saka"
2️⃣ Clone the repository

git clone https://github.com/AdamKrolak/saka-playwright
cd playwright-saka
3️⃣ Install dependencies

npm install
4️⃣ Install Playwright browsers

npx playwright install

⚠️ IMPORTANT — Add Your Own Test User
After cloning the repository, you must set up your own test user credentials.

export const userData = {
validEmail: "your-email@example.com",
validPassword: "YourPassword123!",
invalidEmail: "invalid@example.com",
invalidPassword: "wrongPass!",
};
⚠️ Do NOT commit real production or personal credentials. Test users only! ✔️

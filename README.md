# 🧪 Playwright + TypeScript: Page Object Model with Fixtures

[![Playwright Tests](https://github.com/archana-kannan/playwright-jest-pom/actions/workflows/playwright.yml/badge.svg)](https://github.com/archana-kannan/playwright-jest-pom/actions/workflows/playwright.yml)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Page Object Model](https://img.shields.io/badge/Pattern-Page%20Object%20Model-6E40C9)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)

A Playwright + TypeScript framework built on the **Page Object Model (POM)**. Page objects are injected into tests through **custom Playwright fixtures**, so specs never construct pages themselves and stay short and readable.

## ✨ Features

- **Page Object Model:** locators and page actions live in `pages/`, not in tests
- **Custom fixtures** (`test.extend`) that inject ready-to-use page objects into each test
- **Cross-browser:** Chromium, Firefox and WebKit
- **CI-aware config:** retries, traces on first retry, `test.only` blocked on CI
- **GitHub Actions matrix** with an HTML report artifact per browser

## 🧩 How the fixtures work

```ts
// fixtures/fixtures.ts: register page objects as fixtures
const testPages = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
export const test = testPages;

// tests/launch.test.ts: the page object is injected, no setup needed
test('has title', async ({ loginPage }) => {
  await loginPage.launchurl('https://playwright.dev/');
});
```

Adding a new page means creating a class in `pages/` and registering it once in `fixtures/fixtures.ts`. After that, every test can use it.

## 📁 Project Structure

```
playwright-jest-pom/
├── .github/workflows/playwright.yml   # CI: browser matrix + report artifacts
├── fixtures/
│   └── fixtures.ts                    # custom test fixtures (page object injection)
├── pages/
│   └── login.page.ts                  # page objects
├── tests/
│   ├── example.spec.ts                # plain Playwright specs
│   └── launch.test.ts                 # specs using POM fixtures
└── playwright.config.ts
```

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
git clone https://github.com/archana-kannan/playwright-jest-pom.git
cd playwright-jest-pom
npm ci
npx playwright install
```

## ▶️ Running Tests

| Command | What it does |
|---------|--------------|
| `npm test` | Run all tests on all browsers |
| `npm run test:chromium` | Run on Chromium only |
| `npm run test:headed` | Run with the browser visible |
| `npm run test:ui` | Interactive UI mode |
| `npm run report` | Open the last HTML report |

## 🔄 Continuous Integration

[`.github/workflows/playwright.yml`](.github/workflows/playwright.yml) runs on push and pull request to `main`, weekly, and on demand, with one job per browser.

## 🗺️ Roadmap

- [ ] Expand page objects with typed `Locator` getters and assertions
- [ ] Base page class for shared navigation and waits
- [ ] Test data fixtures and environment configuration

## 👩‍💻 Author

**Archana Kannan**, AI-Powered Software Quality Engineer
[GitHub](https://github.com/archana-kannan) · [LinkedIn](https://www.linkedin.com/in/archana-kannan-2021)

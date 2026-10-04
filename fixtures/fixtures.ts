import {test as base, Page} from '@playwright/test';

import { LoginPage } from '../pages/login.page';

declare global {
    const page: Page;
    const expect: typeof base.expect;
    const test: typeof base;
}

type pages = {
    loginPage: LoginPage;
};

const basePage = base.extend<{ page: Page }>({
    page: async ({ browser }, use) => {
        await use(await browser.newPage());
    }
});

const testPages = base.extend<pages>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});

export const test = testPages;
export const expect = testPages.expect;
export const page = basePage;
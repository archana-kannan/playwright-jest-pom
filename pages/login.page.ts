import { Page, Locator } from '@playwright/test';

export class LoginPage {
    protected page: Page;
    protected locators: {
        getstarted: string
    };

    constructor(page: Page) {
        this.page = page;

        this.locators = {
            getstarted: "getstarted",
        }
    }
    async launchurl(url: string) {
        await this.page.goto(url);
    }
}

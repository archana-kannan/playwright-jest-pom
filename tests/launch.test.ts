import {test} from '../fixtures/fixtures';

test('has title', async ({ loginPage }) => {

 await loginPage.launchurl('https://playwright.dev/');

});
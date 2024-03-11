import {test, expect} from '@playwright/test';

test.describe ('My Account', async () => {
    test.beforeAll(async ({page}) => {
        await page.goto ('https://practice.sdetunicorns.com/my-account/');
        await page.locator('#username').fill('hanh');
        await page.locator('#password').fill('Hanh290901?');
        await page.locator('[value="Log in"]').click();
        await expect(page.locator('a:has-text("Log out")')).toBeVisible() ;


    })

})
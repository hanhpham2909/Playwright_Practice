import {Page, test, expect} from '@playwright/test';

test.describe ('My Account', async () => {
    let page : Page ;
//     test.beforeAll(async ({browser}) => {
//         page = await browser.newPage();
//         await page.goto ('/my-account');
//         await page.locator('#username').fill('hanh');
//         await page.locator('#password').fill('Hanh290901?');
//         await page.locator('[value="Log in"]').click();
//         await expect(page.locator('p:has-text("Hello ")')).toBeVisible() ;
//    })
   
   test('Confirm access order page successfully after logged in', async ({page}) => {
    await page.goto ('/my-account');
    await page.getByRole('listitem')
                .filter({hasText : "Orders"})
                .click();
    await expect(page).toHaveURL(/.*orders/);
   })   

   test('Confirm access download page successfully after logged in', async ({page}) => {
    await page.goto ('/my-account');
    await page.getByRole('listitem')
                .filter({hasText : "Downloads"})
                .click();
    await expect(page).toHaveURL(/.*downloads/);
})
   
})

    test.describe('Not Log In account', async () => {
        test.use({storageState : 'NotLoggedInState.json'});
        
        test('verify login and register is visible', async ({page }) => {
            await page.goto('/my-account');
            await expect(page.getByRole('button',{name : "Log in"})).toBeVisible();
            await expect(page.getByRole('button',{name : "Register"})).toBeVisible();
        })
    });



import { test, expect } from "@playwright/test";
import { defineConfig } from "@playwright/test";
test.describe('Home',() => {
    test('Open Homepage and verify Title ', async ({ page })  => {
        await page.goto('https://practice.sdetunicorns.com/about/');
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    }) 

    test('Click button Get started ', async ({ page })  => {
        await page.goto('https://practice.sdetunicorns.com');
        await page.locator('#get-started').click();
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');

    })

    test('Verify text', async ({ page })  => {
        await page.goto('https://practice.sdetunicorns.com');
        //await page.locator('text=Think different. Make different.').click();
        await expect(page.locator('text=Think different. Make different.')).toBeVisible();
    })

    test('Verify home link is enable using text and css selector', async ({ page })  => {
        await page.goto('https://practice.sdetunicorns.com/about/');
        //await page.locator('text=Think different. Make different.').click();
        //await page.locator('#zak-primary-menu >> text=Home').click();
        await expect(page.locator('#zak-primary-menu >> text=Home')).toBeVisible();
    })

    test('Verify icon is visible using Xpath', async ({ page })  => {
        await page.goto('https://practice.sdetunicorns.com/about/');
        const searchIcon = await page.locator('//*[@class="zak-header-action zak-header-search"]//*[@class="zak-header-search__toggle"]');
        await expect(searchIcon).toBeVisible();
    })


    //verify text of all nav header
    // using loop to print out
    test('Verify text of all nav header', async ({ page })  => {
        await page.goto('https://practice.sdetunicorns.com');
        const expectLinks = [
            "Homes" ,
            "About" ,
            "Shop" ,
            "Blog",     
            "Contact" ,
            "My account" ,
        ]
        const actualLinks =  page.locator('#zak-primary-menu li[id*=menu]');
         expect(await actualLinks.allTextContents()).toEqual(expectLinks);
    })
})
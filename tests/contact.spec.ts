import {test, expect} from '@playwright/test';
import { describe } from 'node:test';

/* Before watching video 
test ('contact page', async ({page}) => {
    // Go to contact page 
    await page.goto('https://practice.sdetunicorns.com/');
    await page.locator('#menu-item-493').click();
    //fill the form
    //await page.getByLabel('Name').fill('Luna');
    await page.locator('#evf-277-field_ys0GeZISRs-1').fill('Luna')
    await page.locator('.contact-email input').fill('phuclong@mailinator.com');
    await page.locator('#evf-277-field_66FR384cge-3').fill('01111111111')
    await page.locator('#evf-277-field_yhGx3FOwr2-4').fill('Have a nice day');
    //submit the form
    await page.getByRole('button',{name : "Submit"}).click();
    //Assert the success mess
    //const successMess =  await page.textContent("Thanks for contacting us! We will be in touch with you shortly");
    const sucessMess = await page.locator('data-id=ef894a0');
    await expect(sucessMess).toContainText("Thanks for contacting us! We will be in touch with you shortly");
})*/

test( 'Verify message contact page', async ({page}) => {
    // Go to contact page 
    await page.goto('https://practice.sdetunicorns.com/');
    await page.locator('#menu-item-493').click();
    //fill the form
    await page.locator('.contact-name input ').fill("luna");
    await page.locator('.contact-email input ').fill("phuclong@mailinator.com");
    await page.locator('.contact-phone input ').fill("01111111111");
    await page.locator('.contact-message textarea ').fill("Have a nice day");

    // Click button submit
    await page.locator('button[type=submit]').click();
    //Verify message
    await expect( page.locator('div[role=alert]')).toHaveText("Thanks for contacting us! We will be in touch with you shortly")
   
});

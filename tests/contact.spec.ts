import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker';
import { ContactPage } from '../page/contact.page';

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
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    const randomPhone = faker.phone.number();
    const randomMess = faker.lorem.paragraphs(3);



let contactPage :ContactPage
test( 'Verify message contact page', async ({page}) => {
     contactPage = new ContactPage(page);
   
    // Go to contact page 
    await contactPage.navigate();
    await contactPage.contactBtn.click();
    //fill the form
    await contactPage.nameInput.fill(randomName);
    await contactPage.emailInput.fill(randomEmail);
    await contactPage.phoneInput.fill(randomPhone);
    await contactPage.messInput.fill(randomMess);

    // Click button submit
    await contactPage.submitBtn.click();
    //Verify message
    await expect( contactPage.successTxt).toHaveText("Thanks for contacting us! We will be in touch with you shortly")
   
});

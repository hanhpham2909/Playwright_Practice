import {test, expect} from '@playwright/test';
import path from 'path';
import {CartPage} from '../page/cart.page';

const fileName = ['meomeo.jpg', 'REVISION - SENTENCE COMPLETION.pdf']
let cartPage : CartPage;
//test.describe('Access cart page and verify upload file successully', async() => {
    for (const name of fileName) {
    test(`Upload file ${name} jpg `, async ({page}) =>{
         cartPage = new CartPage(page);
        //Go to the cart page
        await cartPage.navigateContactPage() ;
        //Identify file palth 
        const filePath = path.join(__dirname,'../data/${name}')
        //Upload file 
        await page.setInputFiles('input#upfile_1', filePath);
        //Click the Upload file cta
        await page.locator('#upload_1').click();
        //Veriy successfull notice display
        expect(page.getByLabel('#wfu_messageblock_header_1_label_1')).toContainText("uploaded successfully");
    })
}
   // const fileName = ['meomeo.jpg', 'REVISION - SENTENCE COMPLETION.pdf'];
//     let cartPage: CartPage;
    
    // for (const name of fileName) {
    //   test(`Upload file ${name} jpg `, async ({ page }) => {
    //     cartPage = new CartPage(page);
    
    //     // Go to the cart page
    //     await cartPage.navigateContactPage();
    
    //     // Identify file path
    //     const filePath = path.join(__dirname, `../data/${name}`);
    
    //     // Upload file
    //     await page.setInputFiles('input#upfile_1', filePath);
    
    //     // Click the Upload file button
    //     await page.locator('#upload_1').click();
    //     await page.pause();
    
    //     // Verify successful notice display
    //     expect(page.getByLabel('#wfu_messageblock_header_1_label_1')).toContainText("uploaded successfully");
    //   });
    // }
    // test.skip('Upload file PDF ', async ({page}) =>{
    //     //Go to the cart page
    //     await page.goto('https://practice.sdetunicorns.com/cart/');
    
    //     //Identify file palth 
    //     const filePath = path.join(__dirname,'../data/REVISION - SENTENCE COMPLETION.pdf') ;
    //     //Upload file 
    //     await page.setInputFiles('input#upfile_1', filePath);
    //     //Click the Upload file cta
    //     await page.locator('#upload_1').click();

    //     await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state:'visible', timeout: 30000})
    //     //Veriy successfull notice display
    //     expect(page.getByLabel('#wfu_messageblock_header_1_label_1')).toContainText("uploaded successfully");
    // })

//})
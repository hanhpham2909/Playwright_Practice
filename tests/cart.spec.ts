import {test, expect} from '@playwright/test';
const path = require('path');
test.describe('Access cart page and verify upload file successully', async() => {
    test('Upload file jpg ', async ({page}) =>{
        //Go to the cart page
        await page.goto('https://practice.sdetunicorns.com/cart/');
        //Identify file palth 
        const filePath = path.join(__dirname,'../data/meomeo.jpg')
        //Upload file 
        await page.setInputFiles('input#upfile_1', filePath);
        //Click the Upload file cta
        await page.locator('#upload_1').click();
        //Veriy successfull notice display
        expect(page.getByLabel('#wfu_messageblock_header_1_label_1')).toContainText("uploaded successfully");
    })

    test('Upload file PDF ', async ({page}) =>{
        //Go to the cart page
        await page.goto('https://practice.sdetunicorns.com/cart/');
    
        //Identify file palth 
        const filePath = path.join(__dirname,'../data/REVISION - SENTENCE COMPLETION.pdf') ;
        //Upload file 
        await page.setInputFiles('input#upfile_1', filePath);
        //Click the Upload file cta
        await page.locator('#upload_1').click();

        await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state:'visible', timeout: 30000})
        //Veriy successfull notice display
        expect(page.getByLabel('#wfu_messageblock_header_1_label_1')).toContainText("uploaded successfully");
    })
})
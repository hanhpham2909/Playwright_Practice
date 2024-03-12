import {Locator, Page} from '@playwright/test';
export class CartPage {
    page : Page;
    upload : Locator;
    textLabel : Locator;

    constructor(page:Page){
        this.page = page;
        this.upload = page.locator('#upload_1');
        this.textLabel = page.getByLabel('#wfu_messageblock_header_1_label_1');
        }
    async navigateContactPage(){
        await this.page.goto('/cart');
    }
}
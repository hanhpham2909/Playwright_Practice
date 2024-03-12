import { Locator, Page } from "@playwright/test";
export class ContactPage{
    page : Page;
    contactBtn: Locator;
    nameInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    messInput: Locator;
    submitBtn: Locator;
    successTxt: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.contactBtn = page.locator('#menu-item-493');
        this.nameInput = page.locator('.contact-name input ');
        this.emailInput = page.locator('.contact-email input ');
        this.phoneInput = page.locator('.contact-phone input ');
        this.messInput = page.locator('.contact-message textarea ');
        this.submitBtn = page.locator('button[type=submit]');
        this.successTxt = page.locator('div[role=alert]');
        
    }
    async navigate() {
        await this.page.goto('https://practice.sdetunicorns.com/');

    }
}
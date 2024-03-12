import {chromium , FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig){
    const browser = await chromium.launch();
    const page = await browser.newPage();

// Not logged In 
await page.context().storageState({path: 'NotLoggedInState.json'})

// login 
await page.goto ('https://practice.sdetunicorns.com/my-account/');
await page.locator('#username').fill('hanh');
await page.locator('#password').fill('Hanh290901?');
await page.locator('[value="Log in"]').click();

//Sau khi đăng nhập thành công, trạng thái của trình duyệt (như cookies, local storage, v.v.) được lưu vào tệp 'loggedInState.json'. Điều này giúp các bài kiểm thử tiếp theo có thể bắt đầu với trạng thái đã đăng nhập sẵn có.
await page.context().storageState({path:'loggedInState.json'});
await browser.close();
}
export default globalSetup;
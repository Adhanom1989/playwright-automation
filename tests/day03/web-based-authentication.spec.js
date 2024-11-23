import { expect, test } from '@playwright/test';

test('Bypass authentication by embedding the credentials in the URL', async ({ page }) => {

    // https//userName:password@domainAddress
    // https//admin:admin@practice.cydeo.com/basic_auth

    await page.goto('https://admin:admin@practice.cydeo.com/basic_auth');

    let congratsMessage = page.locator("//*[@id='content']/div/p");

    await expect(congratsMessage).toBeVisible();

});



test('Bypass authentication by encoding credentials in base64 format', async ({ page }) => {

    // encoding credentials in base64 format
    let encodedCredentials = Buffer.from("admin:admin").toString("base64");

    // set up authentication header
    page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`});

    await page.goto("https://practice.cydeo.com/basic_auth");
    
    let congratsMessage = page.locator("//*[@id='content']/div/p");

    await expect(congratsMessage).toBeVisible();

  
});
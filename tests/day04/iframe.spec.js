import { expect, test } from '@playwright/test';

test.describe("Test Group", () => {
    // create beforeEach
    test.beforeEach(async ({ page }) => {
      await page.goto("https://practice.cydeo.com/iframe");
    });
  
    // create afterEach
    test.afterEach(async ({ page }) => {
      await page.waitForTimeout(3000);
    });
  
    test("Locating the iframe by id", async ({ page }) => {
      // Your test steps go here
      let myFrame = page.frameLocator("#mce_0_ifr");
  
      let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");
  
       await page.waitForTimeout(10000);
  
      await elementInsideTheFrame.clear();
  
      await page.waitForTimeout(3000);
  
      await elementInsideTheFrame.fill("CYDEO SCHOOL");
  
      let elementOutsideTheFrame = page.locator("//h3[contains(text(), 'TinyMCE WYSIWYG Editor')]");
  
      await expect(elementOutsideTheFrame).toBeVisible();

      await expect(elementOutsideTheFrame).toHaveText("CYDEO SCHOOL");

    });
  
  test('Locating the iframe by css', async ({ page }) => {
    
    let myFrame = page.frameLocator("iframe.tox-edit-area__iframe[title='Rich Text Area']");
    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

    await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Control+A");

    await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Backspace");

    await page.waitForTimeout(3000);
    await elementInsideTheFrame.fill("CYDEO SCHOOL");
  });

  test('Locating the iframe by xpath', async ({ page }) => {

    let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");
    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

    await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Control+A");

    await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Backspace");

    await page.waitForTimeout(3000);
    await elementInsideTheFrame.fill("CYDEO SCHOOL");
    
  });
});
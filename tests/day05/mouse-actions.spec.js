import { test } from '@playwright/test';

test.describe('Test Group', () => {

    // create beforeEach
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
    });

    // create afterEach
     test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

  test('Left click', async ({ page }) => {
    await page.click("text='A/B Testing'");

    // let abTesting = page.locator("text='A/B Testing'");
    // await abTesting.click({button: "left"});
  });

  test('Right Click', async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.click("text='A/B Testing'", {button: "right"});

  });

  
  test("Double Click", async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.dblclick("text='Checkboxes'");
    
  });

  test('Hover', async ({ page }) => {
    await page.click("text='Hovers'");
    //await page.waitForTimeout(3000);
    //await page.hover("//img[@alt='User Avatar']");

    let elements = await page.locator("//img[@alt='User Avatar']").all();
    for(let each of elements){
        await page.waitForTimeout(3000);
        await each.hover();
    }
  });

  test('Drag and Drop', async ({ page }) => {
    await page.click("text='Drag and Drop'");
    await page.waitForTimeout(3000);
    await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
  });

  test('Scroll', async ({ page }) => {
    await page.waitForTimeout(3000);

    //await page.mouse.wheel(0, 1000);

    let inputLink = page.locator("text='Inputs'");

    await inputLink.scrollIntoViewIfNeeded();

    await page.waitForTimeout(3000);

    await inputLink.click();

  });

  
});
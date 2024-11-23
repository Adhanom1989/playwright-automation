import { test } from "@playwright/test";

test("Youtube Search @youtube2", async ({ page }) => {
  // navigate to https://youtube.com
  await page.goto("https://www.youtube.com");

  // pause the execution for 3 seconds
   await page.waitForTimeout(3000);

   const searchBox = page.locator("//input[@id='search']");

   searchBox.click();

   // await searchBox.type("CYDEO School IT Training");
   await searchBox.fill("CYDEO");

   await page.waitForTimeout(3000);

   await searchBox.press("Enter");

    await page.waitForTimeout(3000);

    const firstVideo = page.locator("(//a[@id='video-title'])[1]");

    await firstVideo.click();



  
  
});
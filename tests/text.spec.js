// import { test } from '@playwright/test';

// test('Text Extraction', async ({ page}) => {
//     await page.goto('https://www.amazon.in');
//     await page .waitForSelector('#nav-link-accountList');
//     const option = await page.locator('#nav-link-accountList');
//     console.log(await option.count());
//     console.log(await option.allTextContents()); 
// })

import { test , chromium  } from '@playwright/test';

test('Text Extraction', async ({ page }) => {
    await page.goto('https://www.amazon.in');

    await page.waitForSelector('#nav-link-accountList');

    await  page.locator('#nav-link-accountList').hover();
const option = await page.locator('//div[@id="nav-al-your-account"]/ul/li')

    console.log('count:', await option.count());
    console.log('content:', await option.allTextContents());
});
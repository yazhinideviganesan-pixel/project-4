import { test } from '@playwright/test';

test('count products on boy-tshirts page', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(8000);

  const productCount = await page.locator('div.product-base').count();

  console.log(`Number of products on page: ${productCount}`);
});




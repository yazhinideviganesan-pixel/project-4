import { test, chromium } from '@playwright/test';

test('launch browser', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.locator('//ul[@class="results-base"]');
    await page.screenshot({path: './screenshots/homepage.png'})
  });

  
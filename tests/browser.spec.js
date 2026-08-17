import { test, chromium } from '@playwright/test';

test('launch browser', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: './video' },
  });

  const page = await context.newPage();
  await page.goto('https://www.amazon.in');
  await page.waitForTimeout(6000);
  await browser.close();
});
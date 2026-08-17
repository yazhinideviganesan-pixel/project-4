import { test } from '@playwright/test';

test('Instagram', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  const url = await page.url();
  const title = await page.title();
  console.log(url);
  console.log(title);
});

test('Flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.goBack();
  await page.reload();
  await page.goForward();

  const url = await page.url();
  const title = await page.title();
  console.log(url);
  console.log(title);
});
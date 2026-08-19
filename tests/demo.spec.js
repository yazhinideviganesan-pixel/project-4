import { test, } from '@playwright/test';

test('Launch Browser', async ({ page }) => {
  await page.goto('https://testautomationcentral.com/demo/dropdown.html');
  await page.getByRole('combobox', { name: "Simple Dropdown"}).selectOption('Option2');
  await page.waitForTimeout(3000);
  await page.waitForTimeout(3000);
});
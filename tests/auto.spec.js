import { test, expect } from '@playwright/test';

test('DemoQA alerts - all alert types', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.on('dialog', async (dialog) => {
    console.log('Dialog type:', dialog.type());
    console.log('Dialog message:', dialog.message());

    if (dialog.type() === 'alert') {
      await dialog.accept();
    } else if (dialog.type() === 'confirm') {
      await dialog.dismiss();
    } else if (dialog.type() === 'prompt') {
      await dialog.accept('GitHub Copilot');
    }
  });

  await page.locator('#alertButton').click();
  await page.locator('#confirmButton').click();
  await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');

  await page.locator('#promtButton').click();
  await expect(page.locator('#promptResult')).toHaveText('You entered GitHub Copilot');
});

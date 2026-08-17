import { test, chromium } from '@playwright/test';

test('JS Alerts', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    await page.waitForTimeout(3000);
    if(dialog.type() === 'alert'){
      dialog.accept();
    }
    else if(dialog.type() === 'confirm'){
      dialog.dismiss();
    }
    else{
      dialog.accept('Yazhini')
    }
  });

  await page.locator('#alertButton').click();
  await page.locator('#confirmButton').click();
  await page.locator('#promtButton').click();
  await page.waitForTimeout(3000);
});


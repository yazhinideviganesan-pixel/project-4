import { test, expect } from '@playwright/test';

test('Download File', async ({ page }) => {
     await page.goto('https://demoqa.com/upload-download');

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Download' }).click()
    ]);
    await download.saveAs('./Downloaded.jpeg');

    console.log('File downloaded successfully!');
});
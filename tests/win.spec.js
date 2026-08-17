// import { test } from '@playwright/test';

// test('DRAG AND DROP', async ({ page }) => {

//     await page.goto('https://jqueryui.com/droppable/');

//     const demoFrame = page.frameLocator('.demo-frame');

//     await demoFrame.locator('#draggable').dragTo(
//         demoFrame.locator('#droppable')
//     );

//     await page.waitForTimeout(3000);
// });


import { test } from '@playwright/test';

test('mouseAction', async ({ page }) => {

    await page.goto('https://www.myntra.com/');

    await page.getByText('Beauty', { exact: true }).hover();

    await page.waitForTimeout(3000);
});
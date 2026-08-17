import { test, expect } from '@playwright/test';

test('Simple dropdown and multi-select', async ({ page }) => {
  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');

  const simpleDropdown = page.locator('select').first();
  await simpleDropdown.selectOption('Option2');
  await expect(simpleDropdown).toHaveValue('Option2');

  const multiSelect = page.locator('select').nth(1);
  await multiSelect.selectOption(['Option1', 'Option3']);

  const selectedValues = await multiSelect.evaluate((element) => {
    return Array.from(element.selectedOptions).map((option) => option.value);
  });

  expect(selectedValues).toEqual(['Option1', 'Option3']);
  await page.waitForTimeout(3000);
});
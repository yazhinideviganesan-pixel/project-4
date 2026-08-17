import { test, chromium } from '@playwright/test';

test('DOM POP UP', async({page})=>{
    try{
        await page.goto('https://www.makemytrip.com/');
        await page.waitForSelector('[class="font14 fullWidth"]');
        await page.locator('[class="font14 fullWidth"]').fill('9688873797');
        }
        catch{

        }
})
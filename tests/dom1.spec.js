import { test, chromium } from '@playwright/test';

test('DOM POP UP', async({page})=>{
    try{
        await page.goto('https://www.makemytrip.com/');
        await page.waitForSelector('[class="commonModal__close"]',{timeout:5000});
        await page.locator('[class="commonModal__close"]').click();        
        }
        catch{

        }
})
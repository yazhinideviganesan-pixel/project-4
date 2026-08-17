// import { test, chromium } from '@playwright/test';

// test('iframe', async({page})=>{
// await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
// const frame2 = await page.frameLocator('#frm2');
// await frame2.locator('#firstName').fill('Yazhini');
// await frame2.locator('#lastName').fill('Ganesan');
// await frame2.locator('#femalerb').check();
// await frame2.locator('#englishchbx').check();
// await frame2.locator('#email').fill('yazhini.ganesan@example.com');
// await frame2.locator('#password').fill('Password123');


// })


import { test, chromium } from '@playwright/test';

test('Nested iframe', async({page})=>{
await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
console.log(page.url());

const frame3 =  page.frameLocator('//iFrame[@id="frm3"]');

const frame3_2 = frame3.frameLocator('//iFrame[@id="frm2"]');

await frame3_2.locator('#firstName').fill('Yazhini');
await frame3_2.locator('#lastName').fill('Ganesan');
await frame3_2.locator('#femalerb').check();
await frame3_2.locator('#englishchbx').check();
await frame3_2.locator('#email').fill('yazhini.ganesan@example.com');
await frame3_2.locator('#password').fill('Password123');

await page.screenshot({path:'./screenshots/iframe3.png'});


})




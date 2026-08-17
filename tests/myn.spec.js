import { test } from '@playwright/test';

// test('myntra', async ({ page }) => {

//   await page.goto('https://www.myntra.com/boy-tshirts');

//   let price = await page.locator(
//     '//li[contains(@class,"product-base")]//div[contains(@class,"product-price")]//span[span[contains(@class,"product-discountedPrice")] or (text() and not(@class))]'
//   ).allTextContents();

//   console.log(price);

//   let amount = price.map(product =>
//     Number(product.match(/\d+/g)[0])
//   );

//   console.log(amount);

//   let min = Math.min(...amount);

//   console.log('Minimum Price:', min);

//   let min_price = await page.locator(`
//     //li[contains(@class,"product-base")]
//     //div[contains(@class,"product-price")]
//     //span[
//       span[contains(@class,"product-discountedPrice") and contains(., "${min}")]
//       or
//       (contains(., "${min}") and not(@class))
//     ]
//     /ancestor::li
//     //h4[contains(@class,"product-product")]
//   `).first().textContent();

//   console.log('Product with minimum price:', min_price);
// });


// Print the Minimum price of the product and name
test('Print the minimum price and product name', async ({ page }) => {

    await page.goto("https://www.myntra.com/");

    await page.locator('//*[@data-reactid="333"]').hover();
    await page.locator('//a[@data-reactid="345"]').click();
    await page.waitForTimeout(5000);

    // Locating the product price
    const products = page.locator('//li[@class="product-base"]//child::a/child::div[2]/child::div[1]/descendant::span[1]/child::span[1]');
    // Locating the product name
    const product_name = page.locator('//li[@class="product-base"]//child::a/child::div[2]/child::h3');

    const count = await products.count();

    let minPrice = Infinity;
    let name = '';

    for (let i = 0; i < count; i++) {


        const p_price = await products.nth(i).textContent();
        const price = Number(p_price.replace(/[^\d]/g, ''));

        if (price < minPrice) {

            minPrice = price;

            const text1 = await product_name.nth(i).textContent();
            name = text1;

        }
    }
    // print the minimum price and name of the product
    console.log("Minimum Price:", minPrice);
    console.log("Name of the product is", name);



});

// Print the Minimum price of the product

test('print the minimum price of the product', async ({ page }) => {

    await page.goto("https://www.myntra.com/");

    await page.locator('//*[@data-reactid="333"]').hover();
    await page.locator('//a[@data-reactid="345"]').click();
    await page.waitForTimeout(5000);

    // Locating the product price
    const products = page.locator('//li[@class="product-base"]//child::a/child::div[2]/child::div[1]/descendant::span[1]/child::span[1]');
    const count = await products.count();

    let minPrice = Infinity;

    for (let i = 0; i < count; i++) {

        const p_price = await products.nth(i).textContent();

        const price = Number(p_price.replace(/[^\d]/g, ''));

        if (price < minPrice) {

            minPrice = price;

        }
    }
    // print the minimum price
    console.log("Minimum Price:", minPrice);


});
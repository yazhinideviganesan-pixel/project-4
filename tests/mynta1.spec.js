import { test } from '@playwright/test';

test('myntra', async ({ page }) => {

  await page.goto('https://www.myntra.com/boy-tshirts');

  let price = await page.locator(
    '//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not(@class)]'
  ).allTextContents();

  console.log(price);

  let amount = price.map(product => Number(product.match(/\d+/g)[0]));

  console.log(amount);

  let min = Math.min(...amount);

  console.log(min);

  let min_price = await page.locator(`
    //li[@class="product-base"]
    /descendant::div[@class="product-price"]
    /span[
      span[@class="product-discountedPrice" and contains(., "${min}")]
      or
      (contains(., "${min}") and not(@class))
    ]
    /ancestor::li
    /descendant::h4[@class="product-product"]
  `).textContent();

  console.log(min_price);
});
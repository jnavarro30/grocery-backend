import puppeteer from "puppeteer";
import stores from "./stores.js";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(stores.albertsons);
  await page.locator("#skip-main-content").fill("bananas");
  await page.keyboard.press("Enter");
  await page.waitForNavigation()

  const imagesGrid = "div[data-qa='srch-grd-pd']";
  
  await page.waitForSelector(imagesGrid);

  

  const data = await page.$$eval("div[data-qa='srch-grd-pd'] div[data-cross-sell-position='1']", products => products);
  console.log(data, 'let"s see');

  // await page.screenshot({ path: "./screenshots/store.jpg" });
  await browser.close();
})();

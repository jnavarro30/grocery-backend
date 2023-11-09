import puppeteer from "puppeteer";
import stores from "./stores.js";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(stores.albertsons);

  await page.screenshot({ path: "./screenshots/store.jpg" });

  await browser.close();
})();

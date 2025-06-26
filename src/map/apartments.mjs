// src/map/scrapeRedfinWithPuppeteer.ts
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

const regionUrl = 'https://www.redfin.com/city/29470/IL/Chicago/apartments-for-rent';

async function scrapeRedfinWithPuppeteer() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.goto(regionUrl, {
    waitUntil: 'networkidle2',
  });

  // Wait for data to populate in global JS (Redfin uses Redux)
  await page.waitForFunction(() => window.__REDUX_STATE__, { timeout: 10000 });

  const data = await page.evaluate(() => {
    // Redfin stores everything in Redux on window object
    return window.__REDUX_STATE__;
  });

  await browser.close();

  // Save to file
  const dir = path.resolve(process.cwd(), './src/map/data');
  await fs.mkdir(dir, { recursive: true });
  const filename = `redfin-puppeteer-${new Date().toISOString().split('T')[0]}.json`;
  await fs.writeFile(path.join(dir, filename), JSON.stringify(data, null, 2));

  // console.log(`✅ Data saved to ${path.join(dir, filename)}`);
}

scrapeRedfinWithPuppeteer().catch(console.error);

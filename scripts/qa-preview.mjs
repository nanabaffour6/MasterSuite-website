import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(
  'C:/Users/BAFFOUR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright',
);

const outputDir = path.resolve('previews');
fs.mkdirSync(outputDir, { recursive: true });

const viewports = [320, 375, 390, 430, 768, 1024, 1280, 1440];
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
});
const results = [];

async function loadLazyImages(page) {
  await page.evaluate(async () => {
    const height = document.documentElement.scrollHeight;
    for (let y = 0; y <= height; y += 700) {
      window.scrollTo(0, y);
      await new Promise((resolve) => window.setTimeout(resolve, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(150);
}

for (const width of viewports) {
  const page = await browser.newPage({
    viewport: { width, height: width < 600 ? 920 : 1000 },
    deviceScaleFactor: 1,
    isMobile: width < 768,
    hasTouch: width < 768,
  });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  const metrics = await page.evaluate(() => ({
    width: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    title: document.title,
    mailto: document.querySelector('a[href^="mailto:"]')?.getAttribute('href'),
    downloadCount: document.querySelectorAll('a[href="#download"]').length,
    demoCount: document.querySelectorAll('a[href="#screenshots"]').length,
  }));

  if (width === 1440) {
    await loadLazyImages(page);
    await page.screenshot({
      path: path.join(outputDir, 'mastersuite-desktop-1440.png'),
      fullPage: true,
    });
  }

  if (width === 390) {
    await loadLazyImages(page);
    await page.screenshot({
      path: path.join(outputDir, 'mastersuite-mobile-390.png'),
      fullPage: true,
    });
    await page.getByLabel('Open navigation menu').click();
    await page.getByRole('link', { name: 'Features' }).click();
    await page.waitForTimeout(250);
  }

  results.push({
    width,
    overflow:
      Math.max(metrics.scrollWidth, metrics.bodyScrollWidth) - metrics.width,
    title: metrics.title,
    mailto: metrics.mailto,
    downloadCount: metrics.downloadCount,
    demoCount: metrics.demoCount,
  });

  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));

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
const expectedDownloadUrl =
  'https://drive.google.com/file/d/1mhs4OXYs460C72EsgtobzKc3tE1cyAJH/view?usp=sharing';
const expectedDemoUrl = 'https://youtu.be/O2poPsuxCUA';
const expectedWhatsAppUrl =
  'https://wa.me/233209492966?text=Hello%2C%20I%20am%20interested%20in%20MasterSuite%20for%20my%20school.';
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
    downloadLinks: [...document.querySelectorAll('a')]
      .filter((link) => link.textContent?.includes('Download'))
      .map((link) => ({
        href: link.getAttribute('href'),
        target: link.getAttribute('target'),
        rel: link.getAttribute('rel'),
      })),
    demoLinks: [...document.querySelectorAll('a')]
      .filter((link) => link.textContent?.includes('Watch Demo'))
      .map((link) => ({
        href: link.getAttribute('href'),
        target: link.getAttribute('target'),
        rel: link.getAttribute('rel'),
      })),
    support: {
      mailto: document.querySelector('a[href^="mailto:"]')?.getAttribute('href'),
      tel: document.querySelector('a[href^="tel:"]')?.getAttribute('href'),
      whatsapp: document
        .querySelector('a[href^="https://wa.me/"]')
        ?.getAttribute('href'),
    },
    screenshotButtons: document.querySelectorAll(
      'button[aria-label^="Open "][aria-label$=" screenshot"]',
    ).length,
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

  if (width === 1024) {
    await page.getByLabel('Open Module Launcher screenshot').click();
    await page.getByLabel('Show next screenshot').click();
    const nextTitle =
      (await page.locator('[data-lightbox-title]').textContent()) ===
      'Student Management';
    await page.getByLabel('Show previous screenshot').click();
    const previousTitle =
      (await page.locator('[data-lightbox-title]').textContent()) ===
      'Module Launcher';
    await page.screenshot({
      path: path.join(outputDir, 'mastersuite-lightbox-1024.png'),
      fullPage: false,
    });
    await page.keyboard.press('Escape');
    await page.waitForTimeout(150);
    const closed = (await page.locator('[data-lightbox-title]').count()) === 0;
    results.push({ lightbox: { nextTitle, previousTitle, escapeClosed: closed } });
  }

  results.push({
    width,
    overflow:
      Math.max(metrics.scrollWidth, metrics.bodyScrollWidth) - metrics.width,
    title: metrics.title,
    downloadLinksValid:
      metrics.downloadLinks.length > 0 &&
      metrics.downloadLinks.every(
        (link) =>
          link.href === expectedDownloadUrl &&
          link.target === '_blank' &&
          link.rel?.includes('noopener') &&
          link.rel?.includes('noreferrer'),
      ),
    demoLinksValid:
      metrics.demoLinks.length > 0 &&
      metrics.demoLinks.every(
        (link) =>
          link.href === expectedDemoUrl &&
          link.target === '_blank' &&
          link.rel?.includes('noopener') &&
          link.rel?.includes('noreferrer'),
      ),
    supportValid:
      metrics.support.mailto === 'mailto:bafcreativegh@gmail.com' &&
      metrics.support.tel === 'tel:+233209492966' &&
      metrics.support.whatsapp === expectedWhatsAppUrl,
    screenshotButtons: metrics.screenshotButtons,
  });

  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));

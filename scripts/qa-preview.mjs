import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const {
  chromium,
} = require('C:/Users/BAFFOUR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const outputDir = path.resolve('previews');
fs.mkdirSync(outputDir, { recursive: true });

const viewports = [320, 375, 390, 430, 768, 1024, 1280, 1440];
const previewUrl =
  process.env.MASTER_SUITE_PREVIEW_URL ?? 'http://127.0.0.1:3000/';
const expectedDownloadUrl =
  'https://drive.google.com/file/d/1hh7C_SMjWFDhP_pzkBlTmxW2LFphkTti/view?usp=sharing';
const expectedDemoUrl = 'https://youtu.be/O2poPsuxCUA';
const expectedWhatsAppUrl =
  'https://wa.me/233209492966?text=Hello%2C%20I%20am%20interested%20in%20MasterSuite%20for%20my%20school.';
const officialLogoPath = '/assets/mastersuite-logo.png';
const expectedRelease = {
  version: '1.0.2',
  build: '2026.10.08.01',
  channel: 'Stable',
  releaseDate: '8 October 2026',
};
const expectedSiteUrl = 'https://www.mastersuiteapp.net/';
const expectedTitle =
  'MasterSuite | Free School Management Software for Schools';
const expectedHighlights = [
  'Automatic Ghana PAYE calculation with the latest statutory rates.',
  'Optional Manual PAYE mode for customised tax schedules.',
  'Improved Academic Year editing.',
  'Stronger desktop security and safer navigation.',
  'Improved Windows application branding and icons.',
  'Better stability and reliability.',
  'General bug fixes and performance improvements.',
];
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

  const runtimeErrors = [];
  page.on('pageerror', (error) => runtimeErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') runtimeErrors.push(message.text());
  });

  await page.goto(previewUrl, { waitUntil: 'networkidle' });

  const metrics = await page.evaluate(() => ({
    width: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    title: document.title,
    h1Count: document.querySelectorAll('h1').length,
    metadata: {
      titles: document.querySelectorAll('title').length,
      descriptions: document.querySelectorAll('meta[name="description"]')
        .length,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      canonicalCount: document.querySelectorAll('link[rel="canonical"]').length,
      ogUrl: document.querySelector('meta[property="og:url"]')?.content,
      ogTitle: document.querySelector('meta[property="og:title"]')?.content,
      twitterTitle: document.querySelector('meta[name="twitter:title"]')
        ?.content,
      schema: JSON.parse(
        document.querySelector('script[type="application/ld+json"]')
          ?.textContent ?? 'null',
      ),
    },
    brokenAnchors: [...document.querySelectorAll('a[href^="#"]')]
      .map((link) => link.getAttribute('href'))
      .filter((href) => !document.getElementById(href.slice(1))),
    highlights: [
      ...document.querySelectorAll('[data-release-highlight] p'),
    ].map((item) => item.textContent),
    bodyText: document.body.textContent,
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
      mailto: document
        .querySelector('a[href^="mailto:"]')
        ?.getAttribute('href'),
      tel: document.querySelector('a[href^="tel:"]')?.getAttribute('href'),
      whatsapp: document
        .querySelector('a[href^="https://wa.me/"]')
        ?.getAttribute('href'),
    },
    screenshotButtons: document.querySelectorAll(
      'button[aria-label^="Open "][aria-label$=" screenshot"]',
    ).length,
    logoImages: [
      ...document.querySelectorAll('img[src="/assets/mastersuite-logo.png"]'),
    ].map((image) => ({
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
    })),
    release: {
      hero: document.querySelector('#home')?.textContent ?? '',
      finalCta: document.querySelector('#download')?.textContent ?? '',
      whatsNew: document.querySelector('#whats-new-heading')?.textContent ?? '',
    },
  }));

  const softwareSchema = metrics.metadata.schema?.['@graph']?.find(
    (entry) => entry['@type'] === 'SoftwareApplication',
  );

  const visibleOfficialLogos = await page
    .locator(`img[src="${officialLogoPath}"]`)
    .evaluateAll(
      (images) =>
        images.filter((image) => {
          const rect = image.getBoundingClientRect();
          const style = window.getComputedStyle(image);
          return (
            rect.width > 0 &&
            rect.height > 0 &&
            style.visibility !== 'hidden' &&
            style.display !== 'none'
          );
        }).length,
    );

  if (width === 1440) {
    await loadLazyImages(page);
    await page.screenshot({
      path: path.join(outputDir, 'mastersuite-desktop-1440.png'),
      fullPage: true,
    });
    await page.locator('#home').screenshot({
      path: path.join(outputDir, 'mastersuite-desktop-hero-1440.png'),
    });
    await page.locator('#download').screenshot({
      path: path.join(outputDir, 'mastersuite-desktop-release-1440.png'),
    });
  }

  if (width === 390) {
    await loadLazyImages(page);
    await page.screenshot({
      path: path.join(outputDir, 'mastersuite-mobile-390.png'),
      fullPage: true,
    });
    await page.locator('#home').screenshot({
      path: path.join(outputDir, 'mastersuite-mobile-hero-390.png'),
    });
    await page.locator('#download').screenshot({
      path: path.join(outputDir, 'mastersuite-mobile-release-390.png'),
    });
    await page.getByLabel('Open navigation menu').click();
    const mobileMenuLogoVisible = await page
      .locator(`nav img[src="${officialLogoPath}"]`)
      .evaluateAll((images) =>
        images.some((image) => {
          const rect = image.getBoundingClientRect();
          const style = window.getComputedStyle(image);
          return (
            rect.width > 0 &&
            rect.height > 0 &&
            style.visibility !== 'hidden' &&
            style.display !== 'none'
          );
        }),
      );
    const mobileDownloadsValid = await page
      .getByRole('dialog')
      .getByRole('link', { name: 'Download MasterSuite' })
      .evaluate((link) => ({
        href: link.href,
        target: link.target,
        rel: link.rel,
      }));
    await page.getByRole('link', { name: 'Features' }).click();
    await page.waitForTimeout(250);
    results.push({
      mobileMenuLogoVisible,
      mobileDownloadsValid:
        mobileDownloadsValid.href === expectedDownloadUrl &&
        mobileDownloadsValid.target === '_blank' &&
        mobileDownloadsValid.rel.includes('noopener') &&
        mobileDownloadsValid.rel.includes('noreferrer'),
    });
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
    results.push({
      lightbox: { nextTitle, previousTitle, escapeClosed: closed },
    });
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
    releaseValid:
      [metrics.release.hero, metrics.release.finalCta].every(
        (text) =>
          text.includes(`MasterSuite ${expectedRelease.version}`) &&
          text.includes(`Build ${expectedRelease.build}`) &&
          text.includes(expectedRelease.channel),
      ) &&
      metrics.release.finalCta.includes(expectedRelease.releaseDate) &&
      metrics.release.whatsNew.includes(`Build ${expectedRelease.build}`),
    officialLogosValid:
      visibleOfficialLogos > 0 &&
      metrics.logoImages.length > 0 &&
      metrics.logoImages.every(
        (image) => image.naturalWidth === 512 && image.naturalHeight === 512,
      ),
    screenshotButtons: metrics.screenshotButtons,
    seoValid:
      metrics.title === expectedTitle &&
      metrics.h1Count === 1 &&
      metrics.metadata.titles === 1 &&
      metrics.metadata.descriptions === 1 &&
      metrics.metadata.canonicalCount === 1 &&
      metrics.metadata.canonical === expectedSiteUrl &&
      metrics.metadata.ogUrl === expectedSiteUrl &&
      metrics.metadata.ogTitle === expectedTitle &&
      metrics.metadata.twitterTitle === expectedTitle &&
      !metrics.metadata.description.includes('1.0.1') &&
      softwareSchema?.downloadUrl === expectedDownloadUrl &&
      softwareSchema?.softwareVersion ===
        `${expectedRelease.version} (Build ${expectedRelease.build})` &&
      softwareSchema?.dateModified === '2026-10-08' &&
      softwareSchema?.offers?.price === '0' &&
      softwareSchema?.operatingSystem === 'Windows',
    internalLinksValid: metrics.brokenAnchors.length === 0,
    whatsNewValid:
      metrics.highlights.length === expectedHighlights.length &&
      metrics.highlights.every(
        (highlight, index) => highlight === expectedHighlights[index],
      ),
    freePositioningValid: metrics.bodyText.includes('100% Free'),
    noCompanionClaim: !/companion|mobile push notifications/i.test(
      metrics.bodyText,
    ),
    runtimeErrors,
  });

  await page.close();
}

const crawlPage = await browser.newPage({ javaScriptEnabled: false });
await crawlPage.goto(previewUrl, { waitUntil: 'load' });
const crawlable = await crawlPage.evaluate(() => ({
  headline: document.querySelector('h1')?.textContent ?? '',
  release: document.querySelector('#download')?.textContent ?? '',
  highlights: document.querySelectorAll('[data-release-highlight]').length,
  links: [...document.querySelectorAll('a[href*="drive.google.com"]')].map(
    (link) => link.href,
  ),
}));
const robotsResponse = await crawlPage.request.get(
  new URL('robots.txt', previewUrl).href,
);
const robots = await robotsResponse.text();
const sitemapResponse = await crawlPage.request.get(
  new URL('sitemap.xml', previewUrl).href,
);
const sitemap = await sitemapResponse.text();
const sitemapLocations = await crawlPage.evaluate((xml) => {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  if (doc.querySelector('parsererror')) return [];
  return [...doc.querySelectorAll('loc')].map((loc) => loc.textContent);
}, sitemap);
const notFoundResponse = await crawlPage.request.get(
  new URL('this-page-does-not-exist', previewUrl).href,
);
const notFoundPage = await crawlPage.request.get(
  new URL('404.html', previewUrl).href,
);
const notFoundHtml = await notFoundPage.text();
results.push({
  crawlableWithoutJavaScript:
    crawlable.headline.includes('MasterSuite') &&
    crawlable.release.includes(expectedRelease.build) &&
    crawlable.highlights === 7 &&
    crawlable.links.length > 0 &&
    crawlable.links.every((link) => link === expectedDownloadUrl),
  robotsValid:
    robotsResponse.status() === 200 &&
    robots.includes('Allow: /') &&
    robots.includes(`Sitemap: ${expectedSiteUrl}sitemap.xml`),
  sitemapValid:
    sitemapResponse.status() === 200 &&
    sitemapLocations.length === 1 &&
    sitemapLocations[0] === expectedSiteUrl,
  notFoundValid:
    notFoundResponse.status() === 404 &&
    notFoundHtml.includes('noindex, follow') &&
    notFoundHtml.includes('href="/"'),
});
await crawlPage.close();

const nextYearPage = await browser.newPage();
const nextYearErrors = [];
nextYearPage.on('pageerror', (error) => nextYearErrors.push(error.message));
nextYearPage.on('console', (message) => {
  if (message.type() === 'error') nextYearErrors.push(message.text());
});
await nextYearPage.clock.install({ time: new Date('2027-01-02T12:00:00Z') });
await nextYearPage.goto(previewUrl, { waitUntil: 'networkidle' });
results.push({
  dynamicFooterYearValid:
    (await nextYearPage.locator('footer').textContent()).includes(
      '© 2027 MasterSuite',
    ) && nextYearErrors.length === 0,
});
await nextYearPage.close();

await browser.close();
console.log(JSON.stringify(results, null, 2));

const failed = results.some(
  (result) =>
    Object.values(result).some((value) => value === false) ||
    (result.overflow !== undefined && result.overflow > 0) ||
    (result.screenshotButtons !== undefined &&
      result.screenshotButtons !== 4) ||
    (result.runtimeErrors?.length ?? 0) > 0 ||
    (result.lightbox && Object.values(result.lightbox).some((value) => !value)),
);
if (failed) process.exitCode = 1;

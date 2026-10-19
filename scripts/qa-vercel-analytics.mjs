import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('C:/Users/BAFFOUR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const url = process.argv[2];
const mode = process.argv[3] ?? 'production';
assert.ok(url, 'Pass the site URL');
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
try {
  const page = await browser.newPage();
  const errors = [];
  const requests = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('request', (request) => {
    if (/insights|vercel-scripts/.test(request.url())) requests.push({ url: request.url(), method: request.method() });
  });
  // Local Vite has no Vercel-owned endpoint. Serve the unchanged captured script only in this test.
  if (['localhost', '127.0.0.1'].includes(new URL(url).hostname) && mode === 'production') {
    await page.route('**/_vercel/insights/script.js', (route) => route.fulfill({
      contentType: 'application/javascript', body: fs.readFileSync('outputs/analytics-fix/baseline-tracking-script.js', 'utf8'),
    }));
  }
  await page.goto(url, { waitUntil: 'networkidle' });
  const result = await page.evaluate(() => {
    const scripts = [...document.querySelectorAll('script[data-sdkn]')];
    const callback = window.vaq?.find(([name]) => name === 'beforeSend')?.[1];
    const sanitized = typeof callback === 'function' ? callback({ type: 'pageview', url: 'https://www.mastersuiteapp.net/?licence_key=SYNTHETIC_TEST_VALUE#synthetic-fragment' }) : null;
    return {
      scripts: scripts.map((script) => ({ src: script.getAttribute('src'), sdk: script.dataset.sdkn, version: script.dataset.sdkv })),
      mode: window.vam, sanitized,
    };
  });
  assert.equal(result.scripts.length, 1, 'Exactly one tracking script');
  assert.equal(result.scripts[0].sdk, '@vercel/analytics/react');
  assert.equal(result.scripts[0].version, '2.0.1');
  assert.equal(result.mode, mode);
  assert.equal(result.sanitized.url, 'https://www.mastersuiteapp.net/');
  assert.equal(result.scripts[0].src, mode === 'production' ? '/_vercel/insights/script.js' : 'https://va.vercel-scripts.com/v1/script.debug.js');
  if (mode === 'development') assert.ok(!requests.some((request) => request.method === 'POST'));
  assert.deepEqual(errors, []);
  fs.writeFileSync(`outputs/analytics-fix/${mode}-integration-test.json`, JSON.stringify({ url, passed: true, result, errors, requests, note: 'Headless browsers are intentionally ignored by Vercel; this test does not claim visitor ingestion.' }, null, 2));
  console.log(JSON.stringify({ mode, passed: true, scripts: result.scripts, queryAndFragmentRedacted: true, errors }, null, 2));
} finally { await browser.close(); }

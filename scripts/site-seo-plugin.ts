import react from '@vitejs/plugin-react';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createServer, type Plugin, type ResolvedConfig } from 'vite';

import { MASTER_SUITE_SITE_URL } from '../lib/site-config';
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  siteStructuredData,
} from '../lib/site-seo';

export function siteSeoPlugin(): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'mastersuite-seo',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    transformIndexHtml() {
      return [
        { tag: 'title', children: SITE_TITLE },
        {
          tag: 'meta',
          attrs: { name: 'description', content: SITE_DESCRIPTION },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow, max-image-preview:large',
          },
        },
        {
          tag: 'link',
          attrs: { rel: 'canonical', href: MASTER_SUITE_SITE_URL },
        },
        { tag: 'meta', attrs: { property: 'og:title', content: SITE_TITLE } },
        {
          tag: 'meta',
          attrs: { property: 'og:description', content: SITE_DESCRIPTION },
        },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        {
          tag: 'meta',
          attrs: { property: 'og:site_name', content: 'MasterSuite' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:url', content: MASTER_SUITE_SITE_URL },
        },
        { tag: 'meta', attrs: { property: 'og:locale', content: 'en_GH' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
        { tag: 'meta', attrs: { name: 'twitter:title', content: SITE_TITLE } },
        {
          tag: 'meta',
          attrs: { name: 'twitter:description', content: SITE_DESCRIPTION },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(siteStructuredData).replace(/</g, '\\u003c'),
        },
      ];
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${MASTER_SUITE_SITE_URL}sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${MASTER_SUITE_SITE_URL}</loc></url>\n</urlset>\n`,
      });
    },
    async writeBundle() {
      if (config.command !== 'build') return;

      // Render the same React page at build time so its content is crawlable without JavaScript.
      const renderer = await createServer({
        configFile: false,
        root: config.root,
        define: config.define,
        plugins: [react()],
        resolve: { alias: { '@': config.root } },
        server: { middlewareMode: true },
        optimizeDeps: { noDiscovery: true, include: [] },
        appType: 'custom',
      });

      try {
        const { render } = await renderer.ssrLoadModule('/src/prerender.tsx');
        const indexPath = path.resolve(
          config.root,
          config.build.outDir,
          'index.html',
        );
        const html = await readFile(indexPath, 'utf8');
        const root = '<div id="root"></div>';
        if (!html.includes(root))
          throw new Error('Missing homepage prerender target');
        await writeFile(
          indexPath,
          html.replace(root, () => `<div id="root">${render()}</div>`),
        );
        config.logger.info(
          'Homepage prerendered; canonical, schema, robots and sitemap generated.',
        );
      } finally {
        await renderer.close();
      }
    },
  };
}

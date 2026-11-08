// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mkechinov.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ru', locales: { ru: 'ru-RU', en: 'en-US' } },
    }),
  ],
});

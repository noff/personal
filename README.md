# mkechinov.com

Личный сайт Михаила Кечинова. Статика на [Astro](https://astro.build), Node через mise.

```bash
mise install && npm ci
npm run dev       # http://localhost:4321
npm run build     # статика в dist/
./deploy.sh       # сборка и rsync на сервер
```

- Все факты, ссылки и выступления: `src/data/site.ts`; тексты RU/EN: `src/data/i18n.ts`.
- `llms.txt`, `llms-full.txt`, JSON-LD (Person, ProfilePage) и sitemap собираются из этих же данных.
- OG-картинки, фото и иконки: `node scripts/make-images.mjs`.
- Старый сайт на Rails остался в истории ветки `master`.

import type { APIRoute } from 'astro';
import { SITE, EMAIL, PUBLICS, PROFILES, SERIES, TALKS } from '../data/site';
import { T } from '../data/i18n';

// llms.txt (https://llmstxt.org): короткая сводка о человеке для языковых моделей.
export const GET: APIRoute = () => {
  const ru = T.ru;
  const body = `# Михаил Кечинов

> ${ru.description}

Михаил Кечинов — генеральный директор компании REES46 (платформа автоматизации маркетинга и персонализации для интернет-магазинов), разработчик и предприниматель из Санкт-Петербурга. Темы экспертизы: разработка программных продуктов (Ruby on Rails, ClickHouse, PostgreSQL, высокие нагрузки), стартапы (основал студию разработки в 2007 году и продал её в 2017; технический директор в нескольких стартапах; технический советник более чем в 30 проектах), искусственный интеллект (рекомендательные системы, персонализация, разработка с помощью LLM). Ведёт видеоблог о том, как строится IT-продукт изнутри. Пишет на русском, профессионально общается также на английском.

## Главное

- [Сайт (RU)](${SITE}/): кто такой, чем занимается, опыт, выступления, паблики, контакты
- [Полная версия для LLM](${SITE}/llms-full.txt): весь текст сайта одним файлом
- Email: ${EMAIL}

## Паблики

${PUBLICS.map((p) => `- [${p.title.ru}](${p.url}): ${p.text.ru}`).join('\n')}

## Профили

${PROFILES.map((p) => `- [${p.title.ru}](${p.url}): ${p.text.ru}`).join('\n')}

## Серии видео

${SERIES.map((s) => `- [${s.title.ru}](${s.url}): ${s.text.ru}`).join('\n')}

## Optional

- [REES46](https://rees46.ru): компания, которой руководит Михаил
${TALKS.map((t) => `- [${t.event}, ${t.date}: ${t.title.ru}](${t.url})`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

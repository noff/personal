import type { APIRoute } from 'astro';
import { SITE, EMAIL, PUBLICS, PROFILES, SERIES, TALKS } from '../data/site';
import { T, type Dict } from '../data/i18n';

// Полный текст сайта в Markdown на двух языках, для LLM и ИИ-поиска.
function page(t: Dict) {
  const L = t.lang;
  return `# ${t.name}

URL: ${SITE}${t.path}
${t.jobTitle}. ${t.eyebrow}.

${t.lead}

${t.stats.map((s) => `- ${s.n} ${s.u}: ${s.t}`).join('\n')}

## ${t.aboutTitle}

${t.pillars.map((p) => `### ${p.h}\n\n${p.p}\n\nTags: ${p.tags.join(', ')}`).join('\n\n')}

> ${t.quote}
> — ${t.quoteNote}

## ${t.nowTitle}

### REES46 (CEO)

${t.nowRees} ${t.nowReesUrl}

### ${t.seriesTitle}

${t.seriesNote}

${SERIES.map((s) => `- [${s.title[L]}](${s.url}): ${s.text[L]}`).join('\n')}

## ${t.pathTitle}

${t.path.map((g) => `### ${g.role}\n\n${g.items.map(([n, d]) => `- ${n}: ${d}`).join('\n')}`).join('\n\n')}

### ${t.advisorTitle}

${t.advisorText}

## ${t.talksTitle}

${TALKS.map((k) => `- ${k.date}, ${k.event}: [${k.title[L]}](${k.url})`).join('\n')}

## ${t.publicsTitle}

${t.publicsLead}

${PUBLICS.map((p) => `- [${p.title[L]}](${p.url}) (${p.handle}): ${p.text[L]}`).join('\n')}

## ${t.profilesTitle}

${PROFILES.map((p) => `- [${p.title[L]}](${p.url}): ${p.text[L]}`).join('\n')}

## ${t.nav.contact}

${t.contactTitle} ${t.contactText} Email: ${EMAIL}
`;
}

export const GET: APIRoute = () =>
  new Response(`${page(T.ru)}\n---\n\n${page(T.en)}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

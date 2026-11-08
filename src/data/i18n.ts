import type { Lang } from './site';

export const T = {
  ru: {
    lang: 'ru',
    locale: 'ru_RU',
    path: '/',
    altPath: '/en/',
    altLabel: 'EN',
    name: 'Михаил Кечинов',
    title: 'Михаил Кечинов — разработка, стартапы, ИИ',
    description:
      'Михаил Кечинов, CEO REES46. 20 лет делаю IT-продукты: разработка, стартапы, искусственный интеллект. Создал продукты для 25 стартапов, основал студию разработки и продал её. Паблики, выступления и контакты.',
    jobTitle: 'CEO REES46, предприниматель и разработчик',
    nav: { about: 'Чем занимаюсь', now: 'Сейчас', path: 'Опыт', talks: 'Выступления', publics: 'Паблики', contact: 'Связаться' },
    eyebrow: 'Разработка · Стартапы · ИИ',
    heroFirst: 'Михаил',
    heroLast: 'Кечинов',
    lead:
      'Руковожу REES46 и 20 лет делаю IT-продукты. Строю продукты с помощью ИИ и показываю, как это устроено изнутри: код, решения, ошибки и цифры.',
    ctaWrite: 'Написать письмо',
    ctaWatch: 'Смотреть, как я строю продукт',
    stats: [
      { n: '20', u: 'лет', t: 'в разработке и управлении IT-продуктами' },
      { n: '25', u: 'стартапов', t: 'получили от меня работающий софт' },
      { n: '3', u: 'компании', t: 'запустил, одну построил и продал' },
    ],
    aboutTitle: 'Три вещи, в которых я разбираюсь',
    pillars: [
      {
        k: '01',
        h: 'Разработка',
        p: 'Пишу код сам и ставлю процессы, где команда не тратит время на ненужные функции. Ruby on Rails, PostgreSQL, ClickHouse, Redis, высокие нагрузки, архитектура SaaS.',
        tags: ['Ruby on Rails', 'ClickHouse', 'Highload', 'Архитектура'],
      },
      {
        k: '02',
        h: 'Стартапы',
        p: 'С 2007 года прошёл весь путь: от студии разработки до продажи компании. Был CTO и техническим советником в финтехе, e-commerce и ML, собирал техотделы до 30 человек с нуля.',
        tags: ['CTO', 'Продукт', 'Команды', 'Финтех'],
      },
      {
        k: '03',
        h: 'Искусственный интеллект',
        p: 'Рекомендательные системы и персонализация в REES46 начались задолго до хайпа. Сегодня разрабатываю с LLM каждый день и учу делать это так, чтобы код можно было поддерживать.',
        tags: ['LLM', 'ИИ-агенты', 'Рекомендации', 'Персонализация'],
      },
    ],
    quote:
      'Нейросеть должна быть помощником, а не автором, которого никто не проверяет. Сгенерировал код, разобрался, оценил риски, и только потом в прод.',
    quoteNote: 'Из статьи «Вайб-кодинг обесценивается. Кто займёт его место»',
    nowTitle: 'Чем занят сейчас',
    nowRees:
      'Платформа автоматизации маркетинга и персонализации для интернет-магазинов: рекомендации, поиск, рассылки, ИИ-агенты. Я CEO и до сих пор пишу код.',
    nowReesUrl: 'https://rees46.ru',
    nowReesCta: 'rees46.ru',
    seriesTitle: 'Серии в видеоблоге',
    seriesNote: 'Разработка вживую на Ruby on Rails с ИИ, от постановки задачи до работающей версии. Без монтажа красивой картинки.',
    pathTitle: 'Опыт',
    path: [
      { role: 'CEO', items: [
        ['REES46', 'облачная платформа автоматизации и персонализации маркетинга в e-commerce'],
        ['REC ONE', 'платформа рекламы на маркетплейсах'],
      ] },
      { role: 'Основатель', items: [
        ['Студия разработки Михаила Кечинова', 'разработка для стартапов, основана в 2007, продана в 2017'],
      ] },
      { role: 'CTO', items: [
        ['Educhanger', 'финтех на основе ISA (income share agreement) в ЕС'],
        ['LikeHack', 'персональная лента для Facebook и Twitter'],
        ['HackDay', 'серия хакатонов и платформа для их проведения'],
        ['Snek Fite', 'игра для инженеров'],
      ] },
    ],
    advisorTitle: 'Технический советник',
    advisorText:
      'Больше 30 проектов: финтех и платёжные сервисы, KYC, блокчейн-голосование и токенизация недвижимости, e-commerce и мобильная коммерция, CRM для такси, страхование, AR, умный дом, HR, путешествия.',
    talksTitle: 'Выступления',
    publicsTitle: 'Паблики',
    publicsLead: 'Где я рассказываю, как строится IT-продукт. По четвергам работа, по вторникам рубрика «Из жизни».',
    profilesTitle: 'Профили',
    contactTitle: 'Есть задача, вопрос или кейс для разбора?',
    contactText: 'Пишите на почту. Отвечаю сам.',
    footer: 'Санкт-Петербург',
    open: 'Открыть',
  },
  en: {
    lang: 'en',
    locale: 'en_US',
    path: '/en/',
    altPath: '/',
    altLabel: 'RU',
    name: 'Michael Kechinov',
    title: 'Michael Kechinov — software, startups, AI',
    description:
      'Michael Kechinov, CEO of REES46. 20 years building software products: development, startups and artificial intelligence. Built software for 25 startups, founded a development studio and sold it. Channels, talks and contacts.',
    jobTitle: 'CEO of REES46, entrepreneur and software engineer',
    nav: { about: 'What I do', now: 'Now', path: 'Experience', talks: 'Talks', publics: 'Channels', contact: 'Contact' },
    eyebrow: 'Software · Startups · AI',
    heroFirst: 'Michael',
    heroLast: 'Kechinov',
    lead:
      'I run REES46 and have been building software products for 20 years. I build products with AI and show how it really works from the inside: code, decisions, mistakes and numbers.',
    ctaWrite: 'Send an email',
    ctaWatch: 'Watch me build a product',
    stats: [
      { n: '20', u: 'years', t: 'building and leading software products' },
      { n: '25', u: 'startups', t: 'shipped with software I built' },
      { n: '3', u: 'companies', t: 'launched, one built and sold' },
    ],
    aboutTitle: 'Three things I know well',
    pillars: [
      {
        k: '01',
        h: 'Software development',
        p: 'I still write code and set up processes that keep teams from wasting time on useless features. Ruby on Rails, PostgreSQL, ClickHouse, Redis, high load, SaaS architecture.',
        tags: ['Ruby on Rails', 'ClickHouse', 'High load', 'Architecture'],
      },
      {
        k: '02',
        h: 'Startups',
        p: 'Since 2007 I have gone the whole way from a development studio to selling a company. CTO and technology advisor in fintech, e-commerce and ML; built tech departments of up to 30 people from scratch.',
        tags: ['CTO', 'Product', 'Teams', 'Fintech'],
      },
      {
        k: '03',
        h: 'Artificial intelligence',
        p: 'Recommender systems and personalization at REES46 started long before the hype. Today I develop with LLMs every day and teach how to do it so the code stays maintainable.',
        tags: ['LLM', 'AI agents', 'Recommendations', 'Personalization'],
      },
    ],
    quote:
      'A neural network should be an assistant, not an author nobody checks. Generate the code, understand it, weigh the risks, and only then ship it.',
    quoteNote: 'From my article on vibe coding (in Russian)',
    nowTitle: 'What I am doing now',
    nowRees:
      'A marketing automation and personalization platform for online stores: recommendations, search, email, AI agents. I am the CEO and I still write code.',
    nowReesUrl: 'https://rees46.com',
    nowReesCta: 'rees46.com',
    seriesTitle: 'Video series',
    seriesNote: 'Live development in Ruby on Rails with AI, from the task to a working version. In Russian, no polished editing.',
    pathTitle: 'Experience',
    path: [
      { role: 'CEO', items: [
        ['REES46', 'a cloud platform for marketing automation and personalization in e-commerce'],
        ['REC ONE', 'a platform for advertising on marketplaces'],
      ] },
      { role: 'Founder', items: [
        ["Michael Kechinov's Startup Development Studio", 'software development for startups, founded in 2007, sold in 2017'],
      ] },
      { role: 'CTO', items: [
        ['Educhanger', 'an ISA-based fintech company in the EU'],
        ['LikeHack', 'a personalized feed engine for Facebook and Twitter'],
        ['HackDay', 'a series of hackathons and a hackathon management platform'],
        ['Snek Fite', 'a game for engineers'],
      ] },
    ],
    advisorTitle: 'Technology advisor',
    advisorText:
      'More than 30 projects: fintech and payments, KYC, blockchain voting and real estate tokenization, e-commerce and m-commerce, taxi CRM, insurance, AR, smart home, HR, travel.',
    talksTitle: 'Talks',
    publicsTitle: 'Channels',
    publicsLead: 'Where I show how a software product is built. Mostly in Russian.',
    profilesTitle: 'Profiles',
    contactTitle: 'Have a project, a question or a case to discuss?',
    contactText: 'Email me. I answer personally.',
    footer: 'Saint Petersburg',
    open: 'Open',
  },
} as const;

export type Dict = (typeof T)[Lang];

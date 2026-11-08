// Единый источник фактов для страниц, JSON-LD и llms.txt.
// Меняете факт — меняйте здесь, остальное подтянется при сборке.

export const SITE = 'https://mkechinov.com';
export const EMAIL = 'kechinoff@gmail.com';

export type Lang = 'ru' | 'en';

export interface LinkItem {
  id: string;
  tag: string; // короткая метка вместо логотипа
  url: string;
  handle: string;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}

// Паблики: где выходит контент
export const PUBLICS: LinkItem[] = [
  {
    id: 'vk',
    tag: 'VK',
    url: 'https://vk.ru/michael_kechinov',
    handle: 'vk.ru/michael_kechinov',
    title: { ru: 'VK Видео', en: 'VK Video' },
    text: {
      ru: 'Разработка продукта вживую: код, решения, ошибки и цифры. Новые видео по четвергам.',
      en: 'Live product development: code, decisions, mistakes and numbers. New videos on Thursdays (in Russian).',
    },
  },
  {
    id: 'dzen',
    tag: 'Дз',
    url: 'https://dzen.ru/mkechinov',
    handle: 'dzen.ru/mkechinov',
    title: { ru: 'Дзен', en: 'Dzen' },
    text: {
      ru: 'Статьи о том, как строится IT-продукт: команда, приоритеты, нейросети в разработке.',
      en: 'Articles on how an IT product is built: team, priorities, neural networks in development (in Russian).',
    },
  },
  {
    id: 'telegram',
    tag: 'TG',
    url: 'https://t.me/michael_kechinov',
    handle: '@michael_kechinov',
    title: { ru: 'Telegram', en: 'Telegram' },
    text: {
      ru: 'Заметки к видео, короткие мысли и анонсы новых выпусков.',
      en: 'Notes to the videos, short thoughts and release announcements.',
    },
  },
  {
    id: 'tiktok',
    tag: 'TT',
    url: 'https://www.tiktok.com/@mkechinov',
    handle: '@mkechinov',
    title: { ru: 'TikTok', en: 'TikTok' },
    text: {
      ru: 'Короткие ролики про разработку, ИИ и предпринимательство.',
      en: 'Short videos about development, AI and entrepreneurship.',
    },
  },
  {
    id: 'max',
    tag: 'MAX',
    url: 'https://max.ru/join/KlwBPa85J8ifeVVqBO0qPrh1wVjfAwWC5ATZXEIq9FU',
    handle: 'Канал в MAX',
    title: { ru: 'MAX', en: 'MAX' },
    text: {
      ru: 'Тот же канал, что в Telegram, для тех, кто читает в MAX.',
      en: 'The same channel as Telegram, for MAX readers.',
    },
  },
];

// Профили: профессиональные и личные
export const PROFILES: LinkItem[] = [
  {
    id: 'linkedin',
    tag: 'in',
    url: 'https://www.linkedin.com/in/mkechinov/',
    handle: 'in/mkechinov',
    title: { ru: 'LinkedIn', en: 'LinkedIn' },
    text: { ru: 'Профессиональный профиль', en: 'Professional profile' },
  },
  {
    id: 'github',
    tag: 'GH',
    url: 'https://github.com/noff',
    handle: 'noff',
    title: { ru: 'GitHub', en: 'GitHub' },
    text: { ru: 'Код и открытые проекты', en: 'Code and open projects' },
  },
  {
    id: 'x',
    tag: 'X',
    url: 'https://x.com/noff',
    handle: '@noff',
    title: { ru: 'X (Твиттер)', en: 'X (Twitter)' },
    text: { ru: 'Пишу в основном по-английски', en: 'Mostly in English' },
  },
  {
    id: 'facebook',
    tag: 'f',
    url: 'https://www.facebook.com/mkechinov',
    handle: 'mkechinov',
    title: { ru: 'Facebook', en: 'Facebook' },
    text: { ru: 'Пишу в основном по-русски', en: 'Mostly in Russian' },
  },
  {
    id: 'instagram',
    tag: 'IG',
    url: 'https://www.instagram.com/noff/',
    handle: '@noff',
    title: { ru: 'Instagram', en: 'Instagram' },
    text: { ru: 'Уличное искусство со всего мира', en: 'Amateur street art from around the world' },
  },
];

export const SERIES = [
  {
    url: 'https://vkvideo.ru/video-235859294_456239061',
    title: { ru: 'Своя CRM', en: 'Our own CRM' },
    text: {
      ru: 'Пишем CRM внутри REES46 под продажи и биллинг, и объясняем, почему не берём готовую.',
      en: 'Building a CRM inside REES46 for sales and billing, and why we did not buy one.',
    },
  },
  {
    url: 'https://vkvideo.ru/video-235859294_456239042',
    title: { ru: 'Интернет-магазин на Rails и ИИ', en: 'An online store with Rails and AI' },
    text: {
      ru: 'От идеи до прототипа меньше чем за три часа. Код открыт.',
      en: 'From idea to prototype in under three hours. The code is open.',
    },
  },
  {
    url: 'https://vkvideo.ru/video-235859294_456239027',
    title: { ru: 'Daily Panel: продукт с нуля', en: 'Daily Panel: a product from scratch' },
    text: {
      ru: 'Мини-продукт для дейли-митингов, сделанный в прямом эфире.',
      en: 'A small product for daily stand-ups, built live on camera.',
    },
  },
];

export const TALKS = [
  {
    date: '2019-06-05',
    event: 'Ural Internet Week',
    title: { ru: 'Комплексная автоматизация маркетинга в интернет-торговле', en: 'Complex marketing automation in e-commerce' },
    url: 'https://www.youtube.com/watch?v=C1WO1mfFLJM',
  },
  {
    date: '2016-04-15',
    event: 'РИФ+КИБ',
    title: { ru: 'Секция кейсов клуба «100% Natural E-commerce»', en: 'Cases section of the 100% Natural E-commerce Club' },
    url: 'http://2016.russianinternetforum.ru/upload/files/rif16_program.pdf',
  },
  {
    date: '2015-09-17',
    event: 'Specia Conf 2',
    title: {
      ru: 'Персональные рекомендации товаров в триггерных и сегментных рассылках',
      en: 'Personalized product recommendations in trigger-based and segmented email campaigns',
    },
    url: 'https://www.youtube.com/watch?v=twH1IMMxQkU',
  },
  {
    date: '2015-08-27',
    event: 'Data Science Week',
    title: {
      ru: 'Рекомендации на основе профиля покупателя для отдельных ниш ритейла',
      en: 'Profile-based personalized product recommendations for specific retail niches',
    },
    url: 'https://www.youtube.com/watch?v=AbBB4fJm_TE',
  },
  {
    date: '2015-04-11',
    event: 'Стачка',
    title: { ru: 'Рекомендательные системы сейчас и год назад', en: 'Recommendation systems now and a year ago' },
    url: 'http://2015.nastachku.ru/schedule.html',
  },
  {
    date: '2014-11-06',
    event: 'Oborot',
    title: {
      ru: 'Мультиканальная персонализация онлайн и офлайн: ожидания, требования, результаты',
      en: 'Online and offline multi-channel personalization: expectations, requirements and results',
    },
    url: 'https://conf.oborot.ru/archive/2014/programme.html',
  },
  {
    date: '2014-10-05',
    event: 'ISDEF',
    title: { ru: 'Технологии персонализации в софте', en: 'Personalization technology in software' },
    url: 'http://www.isdef.org/ru/conference/isdef2014/sections_detail.php?ISDEF_ID=isdef_2014&act=list_section&LNG_MAIN=RU&ID=10453',
  },
];

export const KNOWS_ABOUT = [
  'Software development',
  'Ruby on Rails',
  'Product management',
  'Startups',
  'Artificial intelligence',
  'Large language models',
  'AI-assisted development',
  'Recommender systems',
  'Personalization',
  'Marketing automation',
  'E-commerce',
  'ClickHouse',
  'PostgreSQL',
  'High load systems',
  'Machine learning',
  'Technology leadership',
];

export const SAME_AS = [...PUBLICS, ...PROFILES].map((l) => l.url);

import type { Locale } from "./dictionaries";

export const siteSeo: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string;
  }
> = {
  en: {
    title: "Your Name — Author",
    description:
      "Official website: books, services, and contact. Switch language and theme anytime.",
    keywords:
      "author, books, services, writer, literature, English, official site",
  },
  ru: {
    title: "Ваше Имя — автор",
    description:
      "Официальный сайт: книги, услуги и контакты. Язык и тема переключаются в любой момент.",
    keywords:
      "автор, книги, услуги, писатель, литература, русский, официальный сайт",
  },
};

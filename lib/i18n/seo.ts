import type { Locale } from "./dictionaries";

export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  ro: "ro_RO",
};

export const siteSeo: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string;
  }
> = {
  en: {
    title: "Svetlana Mokan — Christian Author",
    description:
      "Official website of Svetlana Mokan: Christian books for children and teenagers, Christmas theatrical productions for church stages, and contact details.",
    keywords:
      "Svetlana Mokan, Christian author, children's books, teen fiction, Christmas plays, church theater, creative writing",
  },
  ru: {
    title: "Светлана Мокан — христианский автор",
    description:
      "Официальный сайт Светланы Мокан: христианские книги для детей и подростков, сценарии рождественских постановок для церковной сцены, контакты.",
    keywords:
      "Светлана Мокан, христианская литература, книги для детей, книги для подростков, рождественские постановки, сценарии для театра",
  },
  ro: {
    title: "Svetlana Mokan — autoare creștină",
    description:
      "Site-ul oficial al Svetlanei Mokan: cărți creștine pentru copii și adolescenți, scenarii pentru piese de Crăciun jucate în biserici, date de contact.",
    keywords:
      "Svetlana Mokan, autoare creștină, cărți pentru copii, cărți pentru adolescenți, piese de Crăciun, teatru bisericesc",
  },
};

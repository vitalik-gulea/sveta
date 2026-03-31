export type Locale = "en" | "ru";

export type MessageKey =
  | "nav.brand"
  | "nav.home"
  | "nav.about"
  | "nav.books"
  | "nav.services"
  | "nav.language"
  | "nav.languageShort"
  | "nav.openMenu"
  | "nav.closeMenu"
  | "home.sectionHome"
  | "home.sectionAbout"
  | "hero.roleLabel"
  | "hero.tagline"
  | "hero.cta"
  | "hero.scrollAria"
  | "theme.ariaLight"
  | "theme.ariaDark"
  | "theme.ariaToggle";

const en: Record<MessageKey, string> = {
  "nav.brand": "Your Name",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.books": "Books",
  "nav.services": "Services",
  "nav.language": "Language",
  "nav.languageShort": "En",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "home.sectionHome": "Home",
  "home.sectionAbout": "About",
  "hero.roleLabel": "Writer and playwright",
  "hero.tagline": "Creating stories that touch hearts and inspire minds",
  "hero.cta": "My works",
  "hero.scrollAria": "Scroll to the next section",
  "theme.ariaLight": "Switch to light theme",
  "theme.ariaDark": "Switch to dark theme",
  "theme.ariaToggle": "Toggle color theme",
};

const ru: Record<MessageKey, string> = {
  "nav.brand": "Ваше Имя",
  "nav.home": "Главная",
  "nav.about": "Обо мне",
  "nav.books": "Книги",
  "nav.services": "Услуги",
  "nav.language": "Язык",
  "nav.languageShort": "Ru",
  "nav.openMenu": "Открыть меню",
  "nav.closeMenu": "Закрыть меню",
  "home.sectionHome": "Главная",
  "home.sectionAbout": "Обо мне",
  "hero.roleLabel": "Писатель и драматург",
  "hero.tagline": "Создаю истории, которые трогают сердца и вдохновляют умы",
  "hero.cta": "Мои работы",
  "hero.scrollAria": "Прокрутить к следующему разделу",
  "theme.ariaLight": "Включить светлую тему",
  "theme.ariaDark": "Включить тёмную тему",
  "theme.ariaToggle": "Переключить тему",
};

export const dictionaries: Record<Locale, Record<MessageKey, string>> = {
  en,
  ru,
};

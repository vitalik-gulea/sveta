import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from "./config";
import type { Locale } from "./dictionaries";

export function setLocaleCookieClient(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
}

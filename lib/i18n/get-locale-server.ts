import { cookies, headers } from "next/headers";
import { LOCALE_COOKIE, LOCALE_HEADER } from "@/lib/i18n/config";
import type { Locale } from "./dictionaries";
import { parseLocale } from "./parse-locale";

export async function getLocaleServer(): Promise<Locale> {
  const headersList = await headers();
  const fromHeader = parseLocale(headersList.get(LOCALE_HEADER));
  if (fromHeader) return fromHeader;

  const cookieStore = await cookies();
  const fromCookie = parseLocale(cookieStore.get(LOCALE_COOKIE)?.value);
  if (fromCookie) return fromCookie;

  return "en";
}

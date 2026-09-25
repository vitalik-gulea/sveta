import type { Locale } from "./dictionaries";

export function parseLocale(
  value: string | undefined | null,
): Locale | null {
  if (value === "en" || value === "ru" || value === "ro") return value;
  return null;
}

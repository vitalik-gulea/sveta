import type { Locale } from "./dictionaries";

export function detectLocaleFromAcceptLanguage(
  header: string | null,
): Locale {
  if (!header) return "en";
  for (const part of header.split(",")) {
    const code = part.trim().split(";")[0]?.toLowerCase() ?? "";
    if (code.startsWith("ru")) return "ru";
    if (code.startsWith("ro")) return "ro";
    if (code.startsWith("en")) return "en";
  }
  return "en";
}

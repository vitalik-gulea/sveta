"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useMemo } from "react";
import { setLocaleCookieClient } from "@/lib/i18n/set-locale-cookie-client";
import type { Locale, MessageKey } from "./dictionaries";
import { dictionaries, locales } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: MessageKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const pathname = usePathname();
  const locale = initialLocale;

  // A full navigation (not router.push) is used deliberately: the locale
  // segment is owned by the root layout itself, so a client-side transition
  // would re-render <html>/<body> in React, which cannot safely re-render
  // the inline JSON-LD <Script> tag (React only executes it on first paint).
  const navigateToLocale = useCallback(
    (next: Locale) => {
      setLocaleCookieClient(next);
      const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
      window.location.href = `/${next}${rest}`;
    },
    [pathname],
  );

  const toggleLocale = useCallback(() => {
    const next = locales[(locales.indexOf(locale) + 1) % locales.length];
    navigateToLocale(next);
  }, [locale, navigateToLocale]);

  const t = useCallback(
    (key: MessageKey) => dictionaries[locale][key] ?? key,
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale: navigateToLocale, toggleLocale, t }),
    [locale, navigateToLocale, toggleLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

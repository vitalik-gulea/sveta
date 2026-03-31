"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  startTransition,
} from "react";
import { LOCALE_STORAGE_KEY } from "@/lib/i18n/config";
import { setLocaleCookieClient } from "@/lib/i18n/set-locale-cookie-client";
import type { Locale, MessageKey } from "./dictionaries";
import { dictionaries } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: MessageKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistClient(locale: Locale) {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  setLocaleCookieClient(locale);
  document.documentElement.lang = locale === "ru" ? "ru" : "en";
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const refresh = useCallback(() => {
    startTransition(() => router.refresh());
  }, [router]);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      persistClient(next);
      refresh();
    },
    [refresh],
  );

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "ru" ? "en" : "ru";
      persistClient(next);
      return next;
    });
    refresh();
  }, [refresh]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "ru") {
      if (stored !== initialLocale) {
        setLocaleState(stored);
        persistClient(stored);
        refresh();
      }
    } else {
      localStorage.setItem(LOCALE_STORAGE_KEY, initialLocale);
    }
  }, [initialLocale, refresh]);

  const t = useCallback(
    (key: MessageKey) => dictionaries[locale][key] ?? key,
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t],
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

"use client";

import { Hero } from "@/components/home/Hero";
import { useLocale } from "@/lib/i18n/locale-provider";

export function HomeSections() {
  const { t } = useLocale();

  return (
    <main>
      <section id="home" className="scroll-mt-14 sm:scroll-mt-16">
        <Hero />
      </section>
      <section
        id="about"
        className="min-h-screen scroll-mt-14 border-t border-border/60 px-4 py-16 sm:scroll-mt-16 sm:px-6 sm:py-20 md:px-12 md:py-24"
      >
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("home.sectionAbout")}
        </p>
      </section>
    </main>
  );
}

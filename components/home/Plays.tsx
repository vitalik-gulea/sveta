"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/lib/i18n/locale-provider";
import type { MessageKey } from "@/lib/i18n/dictionaries";
import { playFragments } from "@/lib/fragments/plays";
import { FragmentDialog } from "@/components/home/FragmentDialog";

const plays: {
  titleKey: MessageKey;
  descriptionKey: MessageKey;
  image: string;
}[] = [
  {
    titleKey: "plays.item1.title",
    descriptionKey: "plays.item1.description",
    image: "/images/play-1.jpg",
  },
  {
    titleKey: "plays.item2.title",
    descriptionKey: "plays.item2.description",
    image: "/images/play-2.jpg",
  },
  {
    titleKey: "plays.item3.title",
    descriptionKey: "plays.item3.description",
    image: "/images/play-3.jpg",
  },
  {
    titleKey: "plays.item4.title",
    descriptionKey: "plays.item4.description",
    image: "/images/play-4.jpg",
  },
  {
    titleKey: "plays.item5.title",
    descriptionKey: "plays.item5.description",
    image: "/images/play-5.jpg",
  },
  {
    titleKey: "plays.item6.title",
    descriptionKey: "plays.item6.description",
    image: "/images/play-6.jpg",
  },
];

export function Plays() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openPlay = openIndex !== null ? plays[openIndex] : null;

  return (
    <div className="px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
      >
        <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          {t("plays.heading")}
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
        <p className="text-base text-muted-foreground sm:text-lg">
          {t("plays.subtitle")}
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {plays.map((play, index) => (
          <motion.div
            key={play.titleKey}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.06,
            }}
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={play.image}
                alt={t(play.titleKey)}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col px-5 py-6 sm:px-6">
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground sm:text-xl">
                {t(play.titleKey)}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {t(play.descriptionKey)}
              </p>
              {playFragments[index] && (
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="mt-auto self-start rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {t("plays.readFragment")}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <FragmentDialog
        title={openPlay ? t(openPlay.titleKey) : null}
        text={openIndex !== null ? playFragments[openIndex] ?? null : null}
        onClose={() => setOpenIndex(null)}
      />
    </div>
  );
}

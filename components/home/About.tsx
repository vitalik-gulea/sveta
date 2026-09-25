"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-provider";

export function About() {
  const { t } = useLocale();

  return (
    <div className="grid grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-12 md:px-12 md:py-24 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg shadow-xl md:mx-0"
      >
        <Image
          src="/images/about.jpg"
          alt={t("about.imageAlt")}
          fill
          sizes="(min-width: 768px) 40vw, 90vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="mx-auto max-w-xl md:mx-0"
      >
        <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          {t("about.heading")}
        </h2>
        <div className="mb-6 h-1 w-20 rounded-full bg-primary" />
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("about.bio")}
        </p>
      </motion.div>
    </div>
  );
}

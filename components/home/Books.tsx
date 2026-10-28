"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-provider";
import type { MessageKey } from "@/lib/i18n/dictionaries";

const books: {
  titleKey: MessageKey;
  descriptionKey: MessageKey;
  image: string;
  imageClass?: string;
}[] = [
  {
    titleKey: "books.item5.title",
    descriptionKey: "books.item5.description",
    image: "/images/book-5.jpg",
    imageClass: "object-[center_58%]",
  },
  {
    titleKey: "books.item4.title",
    descriptionKey: "books.item4.description",
    image: "/images/book-4.png",
    imageClass: "object-[72%_center]",
  },
  {
    titleKey: "books.item1.title",
    descriptionKey: "books.item1.description",
    image: "/images/book-1.jpg",
  },
  {
    titleKey: "books.item2.title",
    descriptionKey: "books.item2.description",
    image: "/images/book-2.jpg",
  },
  {
    titleKey: "books.item3.title",
    descriptionKey: "books.item3.description",
    image: "/images/book-3.jpg",
  },
];

export function Books() {
  const { t } = useLocale();

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
          {t("books.heading")}
        </h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-8">
        {books.map((book, index) => (
          <motion.div
            key={book.titleKey}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.08,
            }}
            className="flex h-full flex-col"
          >
            <div className="relative mb-4 aspect-[2/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={book.image}
                alt={t(book.titleKey)}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className={`object-cover transition-transform duration-500 hover:scale-105 ${
                  book.imageClass ?? ""
                }`}
              />
            </div>
            <h3 className="mb-2 font-serif text-lg font-semibold text-foreground sm:text-xl">
              {t(book.titleKey)}
            </h3>
            <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {t(book.descriptionKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
